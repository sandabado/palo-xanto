import type { Metadata } from "next"
import { InteriorHero, QuietPanel } from "@/components/palo-xanto/interior"

export const metadata: Metadata = { title: "Privacy" }

export default function PrivacyPage() {
  return (
    <div>
      <InteriorHero eyebrow="Privacy" title="A narrow public boundary.">
        This artist site is intentionally simple and does not collect account,
        payment, or protected artist information.
      </InteriorHero>
      <section className="section-shell bg-[var(--ink)]">
        <QuietPanel className="mx-auto max-w-3xl space-y-6 text-sm leading-7 text-[var(--bone)]/62">
          <p>
            Public artist information is read from an approved, sanitized ØDIN
            publication mirror. Private operational records are not available
            to this site.
          </p>
          <p>
            Spotify, Bandcamp, Instagram, and other external services apply
            their own privacy policies when you choose to open them. Embedded
            Spotify playback may communicate with Spotify.
          </p>
          <p>
            Booking contact is handled through your email application. This
            site does not store inquiry form submissions.
          </p>
        </QuietPanel>
      </section>
    </div>
  )
}
