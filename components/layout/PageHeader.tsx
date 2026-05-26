interface PageHeaderProps {
  section: string
  title: string
  subtitle?: string
}

export function PageHeader({ section, title, subtitle }: PageHeaderProps) {
  return (
    <section className="border-b border-[rgba(255,255,255,0.07)] px-12 py-20">
      <div className="max-w-[1200px] mx-auto">
        <div className="font-mono text-[10px] tracking-[3px] text-[rgba(255,106,0,0.6)] mb-4">{section}</div>
        <h1 className="text-[clamp(48px,7vw,90px)] font-black tracking-[-4px] leading-[0.93] mb-6">
          {title}
        </h1>
        {subtitle && (
          <p className="text-[17px] text-[#555] max-w-[580px] leading-[1.8]">{subtitle}</p>
        )}
      </div>
    </section>
  )
}
