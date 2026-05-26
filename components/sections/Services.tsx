import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionEyebrow } from '@/components/ui/SectionEyebrow'
import { SERVICES } from '@/lib/constants'

export function Services() {
  return (
    <section id="services" className="relative z-[5] px-12 py-24 border-b border-[rgba(255,255,255,0.04)]">
      <SectionEyebrow>{'// 02 · SERVICES'}</SectionEyebrow>
      <h2 className="text-[clamp(28px,3.5vw,44px)] font-extrabold tracking-[-1px] leading-[1.1] mb-14">
        Our Tech <span className="text-[#FF6A00]">Verticals</span>
      </h2>
      <div className="grid grid-cols-5 gap-px bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.06)] rounded-[6px] overflow-hidden">
        {SERVICES.map((svc, i) => (
          <AnimatedSection key={svc.num} delay={i * 0.08}>
            <div className="h-full bg-[#020205] px-5 py-7 cursor-default transition-colors hover:bg-[rgba(255,106,0,0.08)] group relative">
              <span className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#FF6A00] to-[#FF4500] scale-x-0 group-hover:scale-x-100 transition-transform duration-[350ms] origin-left" />
              <div className="font-mono text-[10px] text-[rgba(255,106,0,0.25)] tracking-[2px] mb-3.5">{svc.num}</div>
              <span className="text-[28px] mb-3 block">{svc.icon}</span>
              <div className="font-mono text-[11px] font-bold text-[#bbb] tracking-[2px] uppercase mb-3.5">{svc.title}</div>
              <ul className="list-none space-y-0 p-0 m-0">
                {svc.items.map(item => (
                  <li key={item} className="text-[11px] text-[#444] py-1 border-b border-[rgba(255,255,255,0.03)] group-hover:text-[#666] transition-colors">
                    <span className="text-[#FF6A00]">→ </span>{item}
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  )
}
