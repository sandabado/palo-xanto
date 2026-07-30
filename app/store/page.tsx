import type { Metadata } from "next"
import { ArrowUpRight } from "lucide-react"
import { InteriorHero, QuietPanel } from "@/components/palo-xanto/interior"
import { PALO_BANDCAMP_URL } from "@/lib/palo-xanto"

export const metadata: Metadata = {
  title: "Store",
  description: "Official Palo Xanto music and artist editions.",
}

export default function StorePage() {
  return (
    <div>
      <InteriorHero eyebrow="Artist editions" title="Carry the raw majik.">
        Direct artist editions are being gathered into one clear catalog.
        Digital music remains available now through Palo&apos;s official Bandcamp.
      </InteriorHero>
      <section className="section-shell bg-[var(--ink)]">
        <QuietPanel className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Available now</p>
          <h2 className="mt-5 font-[family-name:var(--font-display)] text-5xl font-semibold">
            The complete digital discography.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[var(--bone)]/56">
            Twelve releases, high-quality downloads, and direct support for
            the artist. Physical editions will enter this room only when they
            are ready to ship.
          </p>
          <a
            href={PALO_BANDCAMP_URL}
            target="_blank"
            rel="noreferrer"
            className="palo-button palo-button--solid mt-8"
          >
            Shop on Bandcamp
            <ArrowUpRight size={13} />
          </a>
        </QuietPanel>
      </section>
    </div>
  )
}
