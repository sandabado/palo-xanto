import type { Metadata } from "next"
import Image from "next/image"
import { InteriorHero } from "@/components/palo-xanto/interior"
import { getPaloProfile } from "@/lib/public-mirror"

export const metadata: Metadata = {
  title: "About",
  description:
    "The journey of Palo Xanto—lyric poet, sound conjurer, and High Desert community builder.",
}

export default async function AboutPage() {
  const profile = await getPaloProfile()

  return (
    <div>
      <InteriorHero eyebrow="The journey" title="A transmission of raw desert magic.">
        Palo Xanto makes music for the dreamers, wanderers, truth-seekers,
        and misfits who still hear the call of something deeper.
      </InteriorHero>
      <section className="paper-section section-shell">
        <div className="section-inner grid gap-12 lg:grid-cols-[.78fr_1.22fr] lg:gap-20">
          <div>
            <div className="relative aspect-[699/800] overflow-hidden bg-[var(--ink)]">
              <Image
                src={profile.imageUrl}
                alt={profile.imageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 38vw"
                className="object-cover"
              />
            </div>
            <p className="mt-3 text-[8px] uppercase tracking-[.16em] text-[var(--ink)]/44">
              Photo · Mandy Sanchez
            </p>
          </div>
          <div>
            <p className="eyebrow">Joshua Tree, California</p>
            <div className="story-copy mt-6 text-base leading-8 text-[var(--ink)]/72 sm:text-lg sm:leading-9">
              {profile.longBio.split(/\n\n+/).map((paragraph) => (
                <p key={paragraph.slice(0, 30)}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap gap-2">
              {profile.genres.map((genre) => (
                <span
                  key={genre}
                  className="border border-[var(--ink)]/18 px-3 py-1.5 text-[9px] uppercase tracking-[.14em] text-[var(--ink)]/62"
                >
                  {genre}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
