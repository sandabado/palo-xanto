import type { Metadata } from "next"
import { ArrowUpRight, ShieldCheck } from "lucide-react"
import { InteriorHero, QuietPanel } from "@/components/palo-xanto/interior"

export const metadata: Metadata = {
  title: "Artist Portal",
  description: "Secure Palo Xanto artist operations through ØDIN Management.",
}

export default function LoginPage() {
  const loginUrl =
    process.env.NEXT_PUBLIC_ODIN_LOGIN_URL ??
    "https://www.odin.management/login"

  return (
    <div>
      <InteriorHero eyebrow="Private workspace" title="The public song. The protected work.">
        Palo&apos;s catalog, bookings, schedules, press materials, and financial
        operations are managed through the shared ØDIN control plane.
      </InteriorHero>
      <section className="section-shell bg-[var(--ink)]">
        <QuietPanel className="mx-auto max-w-2xl text-center">
          <ShieldCheck className="mx-auto text-[var(--sand)]" size={30} />
          <p className="eyebrow mt-7">ØDIN Management</p>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-4xl font-semibold">
            Authorized artists and operators only.
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-[var(--bone)]/56">
            Access is profile-linked and role-scoped. This public artist site
            never receives private operational tables or service credentials.
          </p>
          <a href={loginUrl} className="palo-button palo-button--solid mt-8">
            Open ØDIN
            <ArrowUpRight size={13} />
          </a>
        </QuietPanel>
      </section>
    </div>
  )
}
