interface PageHeaderProps {
  section: string
  title: string
  subtitle?: string
}

export function PageHeader({ section, title, subtitle }: PageHeaderProps) {
  return (
    <section className="border-b border-[var(--border)] px-12 py-20">
      <div className="max-w-[1200px] mx-auto">
        <div className="font-mono text-[10px] tracking-[4px] text-[var(--label)] mb-4">
          {section}
        </div>
        <h1 className="text-[clamp(48px,7vw,90px)] font-black tracking-[-4px] leading-[0.93] mb-6">
          {title}
        </h1>
        {subtitle && (
          <p className="text-[17px] text-[var(--muted)] max-w-[580px] leading-[1.8] opacity-60">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
