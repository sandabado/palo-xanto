import type { Metadata } from "next"
import { InteriorHero, QuietPanel } from "@/components/palo-xanto/interior"

export const metadata: Metadata = { title: "Terms" }

export default function TermsPage() {
  return (
    <div>
      <InteriorHero eyebrow="Terms" title="Respect the work and its source.">
        Music, writing, photography, and artist materials remain the property
        of their respective creators and rights holders.
      </InteriorHero>
      <section className="section-shell bg-[var(--ink)]">
        <QuietPanel className="mx-auto max-w-3xl space-y-6 text-sm leading-7 text-[var(--bone)]/62">
          <p>
            Public press materials may be used only for accurate editorial or
            event promotion concerning Palo Xanto, with photographer credit
            preserved where provided.
          </p>
          <p>
            Music licensing, commercial image use, and redistribution require
            prior written permission. Contact peace@paloxanto.com.
          </p>
          <p>
            Purchases made on Bandcamp or another external service are governed
            by that service&apos;s checkout, fulfillment, and refund terms.
          </p>
        </QuietPanel>
      </section>
    </div>
  )
}
