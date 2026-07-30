import {
  paloFallback,
  PALO_PUBLIC_IMAGE,
  type PaloProfile,
} from "@/lib/palo-xanto"

type PublicMirrorRow = {
  payload?: Record<string, unknown>
}

const stringValue = (value: unknown) =>
  typeof value === "string" && value.trim() ? value.trim() : undefined

const stringArray = (value: unknown) =>
  Array.isArray(value)
    ? value.filter((item): item is string => typeof item === "string")
    : []

const safeHttpsUrl = (value: unknown) => {
  const candidate = stringValue(value)
  if (!candidate) return undefined
  try {
    const url = new URL(candidate)
    return url.protocol === "https:" ? url.toString() : undefined
  } catch {
    return undefined
  }
}

export async function getPaloProfile(): Promise<PaloProfile> {
  const baseUrl =
    process.env.NEXT_PUBLIC_SUPABASE_URL ??
    "https://umoapqrkcabmdvkmdnqv.supabase.co"
  const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY

  if (!key) return paloFallback

  try {
    const query = new URL("/rest/v1/published_entities", baseUrl)
    query.searchParams.set("select", "payload")
    query.searchParams.set("entity_type", "eq.artist_profile")
    query.searchParams.set("slug", "eq.palo-xanto")
    query.searchParams.set("visibility", "eq.published")
    query.searchParams.set("limit", "1")

    const response = await fetch(query, {
      headers: {
        apikey: key,
        Authorization: `Bearer ${key}`,
      },
      next: { revalidate: 300 },
    })

    if (!response.ok) return paloFallback
    const rows = (await response.json()) as PublicMirrorRow[]
    const payload = rows[0]?.payload
    if (!payload) return paloFallback

    const genres = stringArray(payload.genres)
    return {
      bookingEmail:
        stringValue(payload.booking_email) ?? paloFallback.bookingEmail,
      description:
        stringValue(payload.description) ?? paloFallback.description,
      genres: genres.length ? genres : paloFallback.genres,
      imageAlt: paloFallback.imageAlt,
      imageUrl:
        safeHttpsUrl(payload.hero_image_url) ?? PALO_PUBLIC_IMAGE,
      instagramUrl:
        safeHttpsUrl(payload.instagram) ?? paloFallback.instagramUrl,
      location: stringValue(payload.location) ?? paloFallback.location,
      longBio: stringValue(payload.bio_long) ?? paloFallback.longBio,
      name: stringValue(payload.name) ?? paloFallback.name,
      source: "odin",
    }
  } catch {
    return paloFallback
  }
}
