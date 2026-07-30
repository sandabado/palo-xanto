"use client"

import { ExternalLink, Play } from "lucide-react"
import { PALO_BANDCAMP_URL, PALO_SPOTIFY_URL } from "@/lib/palo-xanto"

export function SignalBar() {
  return (
    <aside
      className="signal-bar fixed inset-x-0 bottom-0 z-50 border-t border-[var(--sand)]/30 bg-[#0b0a08]/94 px-4 py-2.5 backdrop-blur-2xl"
      aria-label="Listen to Palo Xanto"
    >
      <div className="mx-auto flex max-w-7xl items-center gap-3">
        <a
          href={PALO_SPOTIFY_URL}
          target="_blank"
          rel="noreferrer"
          className="signal-play flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--sand)] text-[var(--ink)]"
          aria-label="Listen to Palo Xanto on Spotify"
        >
          <Play size={16} fill="currentColor" />
        </a>
        <div className="min-w-0 flex-1">
          <p className="truncate font-[family-name:var(--font-display)] text-sm font-semibold text-[var(--bone)] sm:text-base">
            Palo Xanto
          </p>
          <p className="truncate text-[9px] uppercase tracking-[.18em] text-[var(--bone)]/42">
            Raw majik from the High Desert
          </p>
        </div>
        <div
          className="hidden h-px flex-1 bg-gradient-to-r from-[var(--sand)]/35 to-transparent md:block"
          aria-hidden="true"
        />
        <a
          href={PALO_BANDCAMP_URL}
          target="_blank"
          rel="noreferrer"
          className="flex min-h-10 items-center gap-2 px-2 text-[9px] uppercase tracking-[.18em] text-[var(--bone)]/62 transition hover:text-[var(--sand)] sm:px-4"
        >
          Bandcamp
          <ExternalLink size={12} />
        </a>
        <a
          href={PALO_SPOTIFY_URL}
          target="_blank"
          rel="noreferrer"
          className="hidden min-h-10 items-center gap-2 border border-[var(--sand)]/38 px-4 text-[9px] uppercase tracking-[.18em] text-[var(--sand)] transition hover:bg-[var(--sand)] hover:text-[var(--ink)] sm:flex"
        >
          Open Spotify
          <ExternalLink size={12} />
        </a>
      </div>
    </aside>
  )
}
