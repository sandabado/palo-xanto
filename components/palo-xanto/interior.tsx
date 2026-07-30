import type { ReactNode } from "react"

export function InteriorHero({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string
  title: string
  children?: ReactNode
}) {
  return (
    <header className="interior-hero px-6 pb-16 pt-28 sm:pb-20">
      <div className="mx-auto w-full max-w-7xl">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="interior-title mt-5 max-w-5xl font-[family-name:var(--font-display)] font-semibold">
          {title}
        </h1>
        {children ? (
          <div className="mt-7 max-w-2xl text-base leading-8 text-[var(--bone)]/62">
            {children}
          </div>
        ) : null}
      </div>
    </header>
  )
}

export function QuietPanel({
  children,
  className = "",
}: {
  children: ReactNode
  className?: string
}) {
  return <div className={`quiet-panel p-6 sm:p-8 ${className}`}>{children}</div>
}
