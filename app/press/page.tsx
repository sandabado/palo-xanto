import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Mail, MapPin, Music2 } from "lucide-react"
import { InteriorHero, QuietPanel } from "@/components/palo-xanto/interior"
import { getPaloProfile } from "@/lib/public-mirror"
import {
  PALO_BANDCAMP_URL,
  PALO_BOOKING_EMAIL,
  PALO_SPOTIFY_URL,
} from "@/lib/palo-xanto"

export const metadata: Metadata = {
  title: "Press",
  description:
    "Palo Xanto electronic press kit—approved biography, public portrait, music, and booking contact.",
}

export default async function PressPage() {
  const profile = await getPaloProfile()
  const shortBio =
    "Palo Xanto is a Joshua Tree lyric poet and sound conjurer whose work joins blues-soaked guitar, dust-blown beats, desert rock, alternative hip hop, and stream-of-consciousness poetry."

  return (
    <div>
      <InteriorHero eyebrow="Electronic press kit" title="Palo Xanto, in full.">
        Artist-approved biography, public imagery, music, and contact for
        editorial and booking use.
      </InteriorHero>
      <section className="section-shell bg-[var(--ink)]">
        <div className="section-inner grid gap-12 lg:grid-cols-[.72fr_1.28fr] lg:gap-20">
          <div>
            <div className="relative aspect-[699/800] overflow-hidden border border-[var(--sand)]/24">
              <Image
                src={profile.imageUrl}
                alt={profile.imageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 35vw"
                className="object-cover"
              />
            </div>
            <p className="mt-3 text-[8px] uppercase tracking-[.16em] text-[var(--bone)]/38">
              Approved press portrait · Mandy Sanchez
            </p>
          </div>
          <div className="space-y-6">
            <QuietPanel>
              <p className="eyebrow">Short biography</p>
              <p className="mt-5 text-base leading-8 text-[var(--bone)]/68">
                {shortBio}
              </p>
            </QuietPanel>
            <QuietPanel>
              <p className="eyebrow">Full biography</p>
              <div className="story-copy mt-5 text-sm leading-7 text-[var(--bone)]/62">
                {profile.longBio.split(/\n\n+/).map((paragraph) => (
                  <p key={paragraph.slice(0, 28)}>{paragraph}</p>
                ))}
              </div>
            </QuietPanel>
            <div className="grid gap-4 sm:grid-cols-2">
              <QuietPanel>
                <MapPin size={20} className="text-[var(--sand)]" />
                <p className="eyebrow mt-5">Location</p>
                <p className="mt-2 font-[family-name:var(--font-display)] text-2xl">
                  {profile.location}
                </p>
              </QuietPanel>
              <QuietPanel>
                <Music2 size={20} className="text-[var(--sand)]" />
                <p className="eyebrow mt-5">Live formats</p>
                <p className="mt-2 font-[family-name:var(--font-display)] text-2xl">
                  Solo · Five-piece
                </p>
              </QuietPanel>
            </div>
          </div>
        </div>
      </section>

      <section className="paper-section section-shell">
        <div className="section-inner grid gap-8 lg:grid-cols-[1.2fr_.8fr]">
          <div>
            <p className="eyebrow">Selected story</p>
            <h2 className="mt-4 max-w-4xl font-[family-name:var(--font-display)] text-5xl font-semibold leading-[.96] sm:text-6xl">
              “The desert doesn&apos;t just shape sound, it shapes spirit.”
            </h2>
            <a
              href="https://coachellavalleyweekly.com/local-music-spotlight-with-palo-xanto/"
              target="_blank"
              rel="noreferrer"
              className="palo-button mt-8 border-[var(--ink)]/30 text-[var(--ink)]"
            >
              Read the Coachella Valley Weekly feature
              <ArrowUpRight size={13} />
            </a>
          </div>
          <div className="border-l border-[var(--ink)]/14 pl-0 lg:pl-8">
            <p className="eyebrow">Press / booking</p>
            <a
              href={`mailto:${PALO_BOOKING_EMAIL}`}
              className="mt-5 flex items-center gap-3 font-[family-name:var(--font-display)] text-2xl hover:text-[var(--clay)]"
            >
              <Mail size={18} />
              {PALO_BOOKING_EMAIL}
            </a>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href={PALO_SPOTIFY_URL} target="_blank" rel="noreferrer" className="palo-button palo-button--solid">Spotify<ArrowUpRight size={13}/></a>
              <a href={PALO_BANDCAMP_URL} target="_blank" rel="noreferrer" className="palo-button border-[var(--ink)]/30 text-[var(--ink)]">Bandcamp<ArrowUpRight size={13}/></a>
              <Link href="/booking" className="palo-button border-[var(--ink)]/30 text-[var(--ink)]">Booking</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
