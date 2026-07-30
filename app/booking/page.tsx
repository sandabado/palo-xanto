import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Mail, MapPin, Users } from "lucide-react"
import { InteriorHero, QuietPanel } from "@/components/palo-xanto/interior"
import { PALO_BOOKING_EMAIL } from "@/lib/palo-xanto"

export const metadata: Metadata = {
  title: "Booking",
  description:
    "Book Palo Xanto for festivals, listening rooms, art spaces, and private events.",
}

export default function BookingPage() {
  const subject = encodeURIComponent("Palo Xanto booking inquiry")

  return (
    <div>
      <InteriorHero eyebrow="ØDIN Management · Whole Body Records" title="Build a room for the signal.">
        For festivals, listening rooms, private gatherings, and intentional
        spaces, send the date, city, venue, capacity, and proposed format.
      </InteriorHero>
      <section className="section-shell bg-[var(--ink)]">
        <div className="section-inner grid gap-6 lg:grid-cols-[1.12fr_.88fr]">
          <QuietPanel className="flex min-h-[28rem] flex-col justify-between">
            <div>
              <p className="eyebrow">Direct booking</p>
              <h2 className="mt-5 max-w-3xl font-[family-name:var(--font-display)] text-5xl font-semibold leading-[.96] sm:text-6xl">
                Tell us what the room can hold.
              </h2>
              <p className="mt-6 max-w-xl text-sm leading-7 text-[var(--bone)]/58">
                Include date, location, venue capacity, set length, production
                context, compensation, and whether you&apos;re asking for a
                solo set or full band.
              </p>
            </div>
            <a
              href={`mailto:${PALO_BOOKING_EMAIL}?subject=${subject}`}
              className="palo-button palo-button--solid mt-10 w-fit"
            >
              <Mail size={14} />
              {PALO_BOOKING_EMAIL}
            </a>
          </QuietPanel>
          <div className="grid gap-6">
            <QuietPanel>
              <Users className="text-[var(--sand)]" size={22} />
              <h2 className="mt-5 font-[family-name:var(--font-display)] text-3xl">
                Solo or five-piece
              </h2>
              <p className="mt-4 text-sm leading-7 text-[var(--bone)]/56">
                Scale the performance to the room without losing the pulse.
              </p>
            </QuietPanel>
            <QuietPanel>
              <MapPin className="text-[var(--sand)]" size={22} />
              <h2 className="mt-5 font-[family-name:var(--font-display)] text-3xl">
                High Desert outward
              </h2>
              <p className="mt-4 text-sm leading-7 text-[var(--bone)]/56">
                Joshua Tree, Yucca Valley, Los Angeles, San Diego, and touring
                opportunities beyond Southern California.
              </p>
            </QuietPanel>
            <Link href="/press" className="palo-button w-fit">
              View the press kit
              <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
