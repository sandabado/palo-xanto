import Link from "next/link"
import {
  HOMESTEAD_URL,
  PALO_BANDCAMP_URL,
  PALO_INSTAGRAM_URL,
  PALO_SPOTIFY_URL,
} from "@/lib/palo-xanto"

export function Footer() {
  return (
    <footer className="border-t border-[var(--sand)]/18 bg-[#0b0a08] px-6 pb-28 pt-14 text-[var(--bone)]">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.25fr_.75fr] lg:items-end">
        <div>
          <Link
            href="/"
            className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-[.04em] text-[var(--sand)]"
          >
            PALO XANTO
          </Link>
          <p className="mt-3 max-w-lg text-sm leading-7 text-[var(--bone)]/58">
            Raw majik from the High Desert. Lyric poetry, blues-soaked guitar,
            and communal rooms built beneath the open sky.
          </p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-3 text-[10px] uppercase tracking-[.18em] text-[var(--bone)]/64 lg:justify-end">
          <a href={PALO_SPOTIFY_URL} target="_blank" rel="noreferrer" className="desert-link">Spotify</a>
          <a href={PALO_BANDCAMP_URL} target="_blank" rel="noreferrer" className="desert-link">Bandcamp</a>
          <a href={PALO_INSTAGRAM_URL} target="_blank" rel="noreferrer" className="desert-link">Instagram</a>
          <a href={HOMESTEAD_URL} target="_blank" rel="noreferrer" className="desert-link">Homestead</a>
          <Link href="/booking" className="desert-link">Booking</Link>
        </div>
      </div>
      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-2 border-t border-white/10 pt-5 text-[9px] uppercase tracking-[.15em] text-[var(--bone)]/32 sm:flex-row sm:justify-between">
        <p>© 2026 Palo Xanto · Whole Body Records</p>
        <p>Managed through ØDIN</p>
      </div>
    </footer>
  )
}
