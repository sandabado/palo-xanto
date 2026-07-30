import type { Metadata } from "next"
import { ArrowUpRight } from "lucide-react"
import { InteriorHero, QuietPanel } from "@/components/palo-xanto/interior"
import { HOMESTEAD_URL } from "@/lib/palo-xanto"

export const metadata: Metadata = {
  title: "Homestead Sessions",
  description:
    "Homestead Sessions—Palo Xanto's intimate High Desert event series for artists, poets, and listeners.",
}

export default function EventsPage() {
  return (
    <div>
      <InteriorHero eyebrow="Since 2023" title="Community as instrument.">
        Homestead Sessions creates intimate desert spaces for music, poetry,
        listening, and the kind of exchange that cannot be scaled.
      </InteriorHero>
      <section className="homestead-field section-shell">
        <div className="section-inner grid items-center gap-12 lg:grid-cols-[.75fr_1.25fr] lg:gap-20">
          <div className="homestead-orbit mx-auto w-full max-w-md" aria-hidden="true"><i /></div>
          <div className="space-y-6">
            <QuietPanel>
              <p className="eyebrow">The original room</p>
              <h2 className="mt-4 font-[family-name:var(--font-display)] text-4xl">A homestead in the backyard.</h2>
              <p className="mt-4 text-sm leading-7 text-[var(--bone)]/58">
                The series began because the desert needed more rooms for
                its artists. Palo built one—close, unguarded, and rooted in
                the culture of the High Desert.
              </p>
            </QuietPanel>
            <QuietPanel>
              <p className="eyebrow">The expanding field</p>
              <h2 className="mt-4 font-[family-name:var(--font-display)] text-4xl">Homestead Sessions Presents</h2>
              <p className="mt-4 text-sm leading-7 text-[var(--bone)]/58">
                The current now moves through additional local rooms and
                experiences while the same purpose stays intact: spotlight
                singular desert artists in singular spaces.
              </p>
            </QuietPanel>
            <a href={HOMESTEAD_URL} target="_blank" rel="noreferrer" className="palo-button palo-button--solid">
              Follow the live calendar
              <ArrowUpRight size={13}/>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
