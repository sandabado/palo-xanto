import Image from "next/image"
import Link from "next/link"
import { ArrowDown, ArrowRight, ExternalLink, Play } from "lucide-react"
import { MagneticField } from "@/components/palo-xanto/magnetic-field"
import { getPaloProfile } from "@/lib/public-mirror"
import {
  HOMESTEAD_URL,
  PALO_BANDCAMP_URL,
  PALO_SPOTIFY_URL,
} from "@/lib/palo-xanto"

export default async function HomePage() {
  const profile = await getPaloProfile()
  const bioParagraphs = profile.longBio.split(/\n\n+/)

  return (
    <div className="overflow-hidden">
      <section className="palo-hero relative isolate flex min-h-[100svh] items-center justify-center overflow-hidden px-6 pb-28 pt-32 lg:px-10">
        <div className="palo-stage" aria-hidden="true">
          <div className="palo-stage__portrait">
            <Image
              src={profile.imageUrl}
              alt=""
              fill
              priority
              sizes="(max-width: 767px) 148vw, (max-width: 1216px) 100vw, 1216px"
              className="object-cover object-[50%_28%]"
            />
          </div>
          <div className="palo-stage__chromatic-flow" />
          <MagneticField />
          <i className="palo-stage__beam palo-stage__beam--amber" />
          <i className="palo-stage__beam palo-stage__beam--violet" />
          <i className="palo-stage__beam palo-stage__beam--coral" />
          <i className="palo-stage__beam palo-stage__beam--blue" />
          <i className="palo-stage__flare palo-stage__flare--one" />
          <i className="palo-stage__flare palo-stage__flare--two" />
          <i className="palo-stage__flare palo-stage__flare--three" />
          <div className="palo-stage__horizon" />
        </div>

        <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center text-center">
          <p className="eyebrow flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[var(--sand)]/55" />
            Whole Body Records presents
            <span className="h-px w-10 bg-[var(--sand)]/55" />
          </p>
          <h1 className="hero-name hero-name--center mt-7 font-[family-name:var(--font-display)] font-semibold text-[var(--bone)]">
            PALO
            <br />
            <span>XANTO</span>
          </h1>
          <p className="hero-description mt-9 max-w-2xl text-base leading-8 text-[var(--bone)]/76 sm:text-lg">
            {profile.description}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={PALO_SPOTIFY_URL}
              target="_blank"
              rel="noreferrer"
              className="palo-button palo-button--solid"
            >
              <Play size={14} fill="currentColor" />
              Enter the music
            </a>
            <Link href="/booking" className="palo-button palo-button--glass">
              Book Palo Xanto
              <ArrowRight size={14} />
            </Link>
          </div>
          <div className="hero-live-current mt-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
            <span className="hero-live-current__pulse" />
            <span>Live current</span>
            <span aria-hidden="true">·</span>
            <span>{profile.location}</span>
            <span aria-hidden="true">·</span>
            <span>Solo transmission + full band</span>
          </div>
        </div>
        <p className="absolute bottom-7 right-6 z-20 hidden text-[8px] uppercase tracking-[.18em] text-white/38 sm:block lg:right-10">
          Photo · Mandy Sanchez
        </p>
        <a
          href="#current"
          aria-label="Continue to the current release"
          className="absolute bottom-6 left-1/2 z-20 -translate-x-1/2 text-[var(--sand)]"
        >
          <ArrowDown size={20} />
        </a>
      </section>

      <section className="border-y border-white/10 bg-[#0f0d0a] px-6 py-6">
        <dl className="mx-auto grid max-w-7xl gap-5 text-center sm:grid-cols-3">
          <div>
            <dt className="eyebrow">Origin</dt>
            <dd className="mt-1 font-[family-name:var(--font-display)] text-xl">
              {profile.location}
            </dd>
          </div>
          <div className="sm:border-x sm:border-white/10">
            <dt className="eyebrow">Live form</dt>
            <dd className="mt-1 font-[family-name:var(--font-display)] text-xl">
              Solo transmission · Five-piece band
            </dd>
          </div>
          <div>
            <dt className="eyebrow">Community current</dt>
            <dd className="mt-1 font-[family-name:var(--font-display)] text-xl">
              Homestead Sessions
            </dd>
          </div>
        </dl>
      </section>

      <section id="current" className="section-shell bg-[var(--ink)]">
        <div className="section-inner grid items-center gap-12 lg:grid-cols-[.86fr_1.14fr] lg:gap-20">
          <a
            href="https://paloxanto.bandcamp.com/album/a-path-to-why"
            target="_blank"
            rel="noreferrer"
            className="release-square group relative mx-auto flex w-full max-w-[31rem] items-center justify-center overflow-hidden border border-[var(--sand)]/32"
          >
            <div className="relative z-10 px-8 text-center">
              <p className="eyebrow">Palo Xanto · 2025</p>
              <p className="mt-7 font-[family-name:var(--font-display)] text-5xl font-semibold leading-[.88] text-[var(--sand-light)] sm:text-6xl">
                A PATH
                <br />
                TO WHY
              </p>
              <p className="mt-7 text-[9px] uppercase tracking-[.2em] text-[var(--bone)]/42">
                Four-song EP
              </p>
            </div>
          </a>
          <div>
            <p className="eyebrow">Current body of work</p>
            <h2 className="mt-5 font-[family-name:var(--font-display)] text-5xl font-semibold leading-[.92] sm:text-7xl">
              A question carved into rhythm.
            </h2>
            <div className="desert-rule mt-7 w-40" />
            <p className="mt-7 max-w-2xl text-base leading-8 text-[var(--bone)]/64">
              MOJO, BLACK RAIN, A PATH TO WHY, and END OF THE DAY move from
              invocation to reckoning—four songs that hold the outer world
              against the inner one.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://paloxanto.bandcamp.com/album/a-path-to-why"
                target="_blank"
                rel="noreferrer"
                className="palo-button palo-button--solid"
              >
                Listen on Bandcamp
                <ExternalLink size={13} />
              </a>
              <Link href="/music" className="palo-button">
                Enter the catalog
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="story" className="paper-section section-shell">
        <div className="section-inner grid gap-12 lg:grid-cols-[.68fr_1.32fr] lg:gap-24">
          <div>
            <p className="eyebrow">The journey</p>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-5xl font-semibold leading-[.96] sm:text-7xl">
              Bone.
              <br />
              Breath.
              <br />
              Desert.
            </h2>
            <div className="mt-9 flex flex-wrap gap-2">
              {profile.genres.map((genre) => (
                <span
                  key={genre}
                  className="border border-[var(--ink)]/18 px-3 py-1.5 text-[9px] uppercase tracking-[.14em] text-[var(--ink)]/65"
                >
                  {genre}
                </span>
              ))}
            </div>
          </div>
          <div className="story-copy max-w-3xl text-base leading-8 text-[var(--ink)]/72 sm:text-lg sm:leading-9">
            {bioParagraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 28)}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="homestead-field section-shell">
        <div className="section-inner grid items-center gap-12 lg:grid-cols-[.72fr_1.28fr] lg:gap-24">
          <div
            className="homestead-orbit mx-auto w-full max-w-sm"
            aria-hidden="true"
          >
            <i />
          </div>
          <div>
            <p className="eyebrow">Community as instrument</p>
            <h2 className="mt-5 font-[family-name:var(--font-display)] text-5xl font-semibold leading-[.94] sm:text-7xl">
              Homestead Sessions
            </h2>
            <p className="mt-7 max-w-2xl text-base leading-8 text-[var(--bone)]/64">
              Since 2023, Palo has built intimate High Desert rooms where
              musicians, poets, and listeners meet without distance. The
              series keeps the local signal moving through spaces that feel
              lived-in, strange, and real.
            </p>
            <a
              href={HOMESTEAD_URL}
              target="_blank"
              rel="noreferrer"
              className="palo-button mt-8"
            >
              Follow the sessions
              <ExternalLink size={13} />
            </a>
          </div>
        </div>
      </section>

      <section className="paper-section section-shell border-t border-[var(--ink)]/10">
        <div className="section-inner flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="eyebrow">Follow the current</p>
            <h2 className="mt-4 max-w-4xl font-[family-name:var(--font-display)] text-5xl font-semibold leading-[.95] sm:text-7xl">
              For the wanderers, observers, and truth-seekers.
            </h2>
          </div>
          <div className="flex shrink-0 flex-wrap gap-3">
            <a
              href={PALO_BANDCAMP_URL}
              target="_blank"
              rel="noreferrer"
              className="palo-button border-[var(--ink)]/30 text-[var(--ink)]"
            >
              Bandcamp
              <ExternalLink size={13} />
            </a>
            <a
              href={PALO_SPOTIFY_URL}
              target="_blank"
              rel="noreferrer"
              className="palo-button palo-button--solid"
            >
              Spotify
              <ExternalLink size={13} />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
