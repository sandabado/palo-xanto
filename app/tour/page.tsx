import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, MapPin, Radio } from "lucide-react"
import { InteriorHero, QuietPanel } from "@/components/palo-xanto/interior"

export const metadata: Metadata = {
  title: "Live",
  description:
    "Palo Xanto live—solo transmissions and full-band desert performances.",
}

export default function TourPage() {
  return (
    <div>
      <InteriorHero eyebrow="Live current" title="Meet the work in the room.">
        Palo Xanto moves between stripped solo sets and a five-piece band,
        bringing raw blues, poetry, and groove into the same field.
      </InteriorHero>
      <section className="section-shell bg-[var(--ink)]">
        <div className="section-inner grid gap-6 lg:grid-cols-[1.2fr_.8fr]">
          <QuietPanel className="flex min-h-80 flex-col justify-between">
            <div>
              <p className="eyebrow">Confirmed public dates</p>
              <h2 className="mt-5 font-[family-name:var(--font-display)] text-5xl font-semibold">
                The next room is forming.
              </h2>
              <p className="mt-5 max-w-xl text-sm leading-7 text-[var(--bone)]/58">
                Dates appear here only after the artist and venue have both
                confirmed them through ØDIN.
              </p>
            </div>
            <Link href="/booking" className="palo-button mt-9 w-fit">
              Build a show
              <ArrowRight size={13} />
            </Link>
          </QuietPanel>
          <div className="grid gap-6">
            <QuietPanel>
              <MapPin className="text-[var(--sand)]" size={22} />
              <h2 className="mt-5 font-[family-name:var(--font-display)] text-3xl">
                High Desert / Southern California
              </h2>
              <p className="mt-4 text-sm leading-7 text-[var(--bone)]/56">
                Joshua Tree, Yucca Valley, Los Angeles, San Diego, and rooms
                that can hold the sound with intention.
              </p>
            </QuietPanel>
            <QuietPanel>
              <Radio className="text-[var(--sand)]" size={22} />
              <h2 className="mt-5 font-[family-name:var(--font-display)] text-3xl">
                Solo or five-piece
              </h2>
              <p className="mt-4 text-sm leading-7 text-[var(--bone)]/56">
                Listening rooms, festivals, art spaces, private gatherings,
                and community-led events.
              </p>
            </QuietPanel>
          </div>
        </div>
      </section>
    </div>
  )
}
