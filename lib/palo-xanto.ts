export const PALO_SLUG = "palo-xanto"
export const PALO_SPOTIFY_ID = "2wPQ39ZGqrsgjtBdYj5A82"
export const PALO_SPOTIFY_URL =
  `https://open.spotify.com/artist/${PALO_SPOTIFY_ID}`
export const PALO_BANDCAMP_URL = "https://paloxanto.bandcamp.com"
export const PALO_INSTAGRAM_URL = "https://instagram.com/paloxanto"
export const HOMESTEAD_URL = "https://lnk.bio/homesteadsessions"
export const PALO_BOOKING_EMAIL = "peace@paloxanto.com"
export const PALO_PUBLIC_IMAGE =
  "https://umoapqrkcabmdvkmdnqv.supabase.co/storage/v1/object/public/records-public/artists/palo-xanto/press/palo-xanto-live-portrait-mandy-sanchez.jpg"

export type PaloProfile = {
  bookingEmail: string
  description: string
  genres: string[]
  imageAlt: string
  imageUrl: string
  instagramUrl: string
  location: string
  longBio: string
  name: string
  source: "odin" | "curated-fallback"
}

export const paloBio = `Emerging from the sun-scorched stillness of Joshua Tree, California, the work of lyric poet and sound conjurer Palo Xanto is a transmission of raw desert magic. His music moves with the rhythm of bone and breath — stripped down, unadorned, and pulsing with primal groove. Each phrase, crooned or cut with razor-edge clarity, unfolds like a stream of consciousness, inviting listeners into a realm where poetry and rhythm fuse into something both ancient and urgently present.

Palo Xanto's sound lives at the crossroads of blues-soaked guitar riffs, dust-blown beats, and the liminal textures of desert rock and alternative hip hop. His compositions echo with a stark simplicity, evoking both the vastness of the high desert and the interior landscapes of solitude, searching, and soul reclamation. This is music for the dreamers, the wanderers, the truth-seekers and the misfits — those who hear the call of something deeper and dare to follow.

As an active artist and community builder, Palo also curates HOMESTEAD SESSIONS in the High Desert, bringing together some of the area's leading artists and poets for intimate desert experiences.`

export const paloFallback: PaloProfile = {
  bookingEmail: PALO_BOOKING_EMAIL,
  description:
    "Raw desert magic — blues-soaked guitar, dust-blown beats, and lyric poetry from Joshua Tree.",
  genres: [
    "Desert rock",
    "Raw blues",
    "Alternative hip hop",
    "Lyric poetry",
    "Psychedelic",
  ],
  imageAlt:
    "Palo Xanto performing live on guitar, photographed by Mandy Sanchez",
  imageUrl: PALO_PUBLIC_IMAGE,
  instagramUrl: PALO_INSTAGRAM_URL,
  location: "Joshua Tree, California",
  longBio: paloBio,
  name: "Palo Xanto",
  source: "curated-fallback",
}

export type PaloRelease = {
  date: string
  format: string
  href: string
  title: string
}

export const paloReleases: PaloRelease[] = [
  { title: "J WALKIN", format: "Single", date: "May 2026", href: PALO_SPOTIFY_URL },
  { title: "A PATH TO WHY", format: "Four-song EP", date: "April 11, 2025", href: "https://paloxanto.bandcamp.com/album/a-path-to-why" },
  { title: "GHOSTS", format: "Live at Furstwurld", date: "November 2024", href: PALO_BANDCAMP_URL },
  { title: "STAY HYDRATED", format: "Single", date: "August 2024", href: PALO_BANDCAMP_URL },
  { title: "BLACK RAIN", format: "Single", date: "April 2024", href: PALO_BANDCAMP_URL },
  { title: "CULTIVATE REALITY", format: "Raw Majik remixed", date: "October 2023", href: PALO_BANDCAMP_URL },
  { title: "RAW MAJIK", format: "Album", date: "March 30, 2023", href: "https://paloxanto.bandcamp.com/album/raw-majik" },
  { title: "BRIGHTEST LIGHT", format: "Single", date: "October 2022", href: PALO_BANDCAMP_URL },
  { title: "THAT HERB", format: "Single", date: "June 2022", href: PALO_BANDCAMP_URL },
  { title: "$TIMULU$", format: "Single", date: "May 2022", href: PALO_BANDCAMP_URL },
  { title: "PLANT SEEDS", format: "Raw Flower Mix", date: "April 2022", href: PALO_BANDCAMP_URL },
  { title: "PLANT SEEDS", format: "Single", date: "March 2022", href: PALO_BANDCAMP_URL },
]
