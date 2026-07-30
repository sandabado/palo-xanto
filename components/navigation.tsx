"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ArrowUpRight, Menu, X } from "lucide-react"
import { useEffect, useState } from "react"

const links = [
  { href: "/", label: "Home" },
  { href: "/music", label: "Music" },
  { href: "/tour", label: "Live" },
  { href: "/events", label: "Homestead" },
  { href: "/press", label: "Press" },
  { href: "/booking", label: "Booking" },
]

export function Navigation() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const updateScrollState = () => setScrolled(window.scrollY > 12)
    updateScrollState()
    window.addEventListener("scroll", updateScrollState, { passive: true })
    return () => window.removeEventListener("scroll", updateScrollState)
  }, [])

  return (
    <header
      className={`desert-signal-nav fixed inset-x-0 top-0 z-50 border-b transition-all duration-500 ${
        scrolled || open
          ? "desert-signal-nav--active border-[var(--sand)]/20 bg-[var(--ink)]/82 shadow-lg shadow-black/10 backdrop-blur-xl"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link
          href="/"
          className="group flex items-center gap-3 text-white transition hover:text-[var(--sand)]"
        >
          <span className="brand-orbit" aria-hidden="true">
            <i />
          </span>
          <span className="font-[family-name:var(--font-display)] text-lg font-semibold tracking-[.04em] sm:text-xl">
            PALO XANTO
          </span>
        </Link>
        <nav
          className="hidden items-center gap-7 lg:flex"
          aria-label="Primary navigation"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`desert-signal-link text-[10px] uppercase tracking-[.2em] transition ${
                pathname === link.href
                  ? "is-active text-[var(--sand)]"
                  : "text-white/72 hover:text-[var(--sand)]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <a
          href={process.env.NEXT_PUBLIC_ODIN_LOGIN_URL ?? "https://www.odin.management/login"}
          className="hidden items-center gap-2 border border-white/25 px-3 py-2 text-[10px] font-semibold uppercase tracking-[.15em] text-white transition hover:border-[var(--sand)] hover:text-[var(--sand)] md:flex"
        >
          Artist portal
          <ArrowUpRight size={13} />
        </a>
        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center text-white md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open ? (
        <nav
          className="border-t border-white/10 bg-[var(--ink)]/96 px-5 py-4 backdrop-blur-xl md:hidden"
          aria-label="Mobile navigation"
        >
          {[...links, { href: "/login", label: "Artist portal" }].map(
            (link) => (
              <Link
                key={link.href}
                onClick={() => setOpen(false)}
                href={link.href}
                className={`desert-signal-link block min-h-11 py-3 text-xs uppercase tracking-[.17em] transition ${
                  pathname === link.href
                    ? "is-active text-[var(--sand)]"
                    : "text-white/80 hover:text-[var(--sand)]"
                }`}
              >
                {link.label}
              </Link>
            ),
          )}
        </nav>
      ) : null}
    </header>
  )
}
