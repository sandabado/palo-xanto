import type { Metadata } from "next"
import { ArrowUpRight } from "lucide-react"
import { InteriorHero } from "@/components/palo-xanto/interior"
import {
  paloReleases,
  PALO_BANDCAMP_URL,
  PALO_SPOTIFY_ID,
  PALO_SPOTIFY_URL,
} from "@/lib/palo-xanto"

export const metadata: Metadata = {
  title: "Music",
  description:
    "Palo Xanto releases—raw blues, alternative hip hop, desert rock, and lyric poetry.",
}

export default function MusicPage() {
  return (
    <div>
      <InteriorHero eyebrow="The catalog" title="Twelve doors into the desert.">
        Raw Majik, A Path To Why, live transmissions, remixes, and the songs
        that keep the signal moving.
      </InteriorHero>
      <section className="section-shell bg-[var(--ink)]">
        <div className="section-inner grid gap-12 lg:grid-cols-[.82fr_1.18fr] lg:gap-16">
          <div>
            <div className="release-square relative flex w-full items-center justify-center overflow-hidden border border-[var(--sand)]/32">
              <div className="relative z-10 text-center">
                <p className="eyebrow">Artist radio</p>
                <p className="mt-6 font-[family-name:var(--font-display)] text-5xl font-semibold leading-[.88] text-[var(--sand-light)]">
                  PALO
                  <br />
                  XANTO
                </p>
              </div>
            </div>
            <iframe
              className="mt-5 block w-full"
              src={`https://open.spotify.com/embed/artist/${PALO_SPOTIFY_ID}?utm_source=generator&theme=0`}
              width="100%"
              height="152"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title="Palo Xanto on Spotify"
            />
            <div className="mt-4 flex flex-wrap gap-3">
              <a href={PALO_SPOTIFY_URL} target="_blank" rel="noreferrer" className="palo-button palo-button--solid">Spotify<ArrowUpRight size={13}/></a>
              <a href={PALO_BANDCAMP_URL} target="_blank" rel="noreferrer" className="palo-button">Bandcamp<ArrowUpRight size={13}/></a>
            </div>
          </div>
          <div>
            <div className="flex items-end justify-between border-b border-white/12 pb-4">
              <h2 className="font-[family-name:var(--font-display)] text-4xl">Discography</h2>
              <p className="text-[9px] uppercase tracking-[.16em] text-[var(--bone)]/38">12 releases</p>
            </div>
            <div className="grid gap-px bg-white/10 sm:grid-cols-2">
              {paloReleases.map((release, index) => (
                <a
                  key={`${release.title}-${release.date}-${release.format}`}
                  href={release.href}
                  target="_blank"
                  rel="noreferrer"
                  className="release-card group bg-[var(--ink)] p-5 sm:min-h-48"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="release-index text-[10px] text-[var(--sand)]/65">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <ArrowUpRight size={14} className="text-[var(--bone)]/32 transition group-hover:text-[var(--sand)]" />
                  </div>
                  <h3 className="mt-8 font-[family-name:var(--font-display)] text-2xl font-semibold leading-tight">
                    {release.title}
                  </h3>
                  <p className="mt-2 text-[9px] uppercase tracking-[.16em] text-[var(--bone)]/44">
                    {release.format} · {release.date}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
