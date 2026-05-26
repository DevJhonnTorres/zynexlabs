const SOCIAL_LINKS = [
  { label: 'LinkedIn',    href: '#' },
  { label: 'GitHub',      href: '#' },
  { label: 'Twitter / X', href: '#' },
  { label: 'Instagram',   href: '#' },
]
const SERVICE_LINKS = ['AI & Automation', 'Software Dev', 'Blockchain & Web3', 'Cloud & DevOps', 'UI/UX & Product']
const COMPANY_LINKS = ['About Us', 'Projects', 'Methodology', 'Contact']

export function Footer() {
  return (
    <footer className="relative z-[5] bg-black/60 px-12 pt-14 pb-6 border-t border-[rgba(255,106,0,0.15)]">
      <div className="grid grid-cols-[2fr_1fr_1fr_1fr] gap-12 mb-10">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <div
              className="w-8 h-8 flex items-center justify-center font-black text-base text-white"
              style={{
                background: 'linear-gradient(135deg, #FF6A00, #CC4400)',
                clipPath: 'polygon(18% 0%, 100% 0%, 82% 100%, 0% 100%)',
                boxShadow: '0 0 16px rgba(255,106,0,0.5)',
              }}
            >Z</div>
            <div className="font-mono font-black text-[15px] tracking-[3px]">
              <span className="text-[#FF6A00]">Z</span>YNEX <span className="text-[#FF6A00]">LABS</span>
            </div>
          </div>
          <p className="text-[13px] text-[#444] leading-relaxed mb-4">
            Advanced technology infrastructure company specialized in AI, enterprise automation, Web3, and high-performance software.
          </p>
          <div className="font-mono text-[10px] text-[#444] leading-loose">
            📍 Colombia · 🌐 Global<br />
            ✉ contact@zynexlabs.com<br />
            Zynex Labs S.A.S.
          </div>
        </div>
        <div>
          <div className="font-mono text-[9px] text-[#FF6A00] tracking-[3px] mb-4">SERVICES</div>
          {SERVICE_LINKS.map(l => <a key={l} href="#" className="block text-[12px] text-[#444] py-1 no-underline transition-colors hover:text-[#FF6A00]">{l}</a>)}
        </div>
        <div>
          <div className="font-mono text-[9px] text-[#FF6A00] tracking-[3px] mb-4">COMPANY</div>
          {COMPANY_LINKS.map(l => <a key={l} href="#" className="block text-[12px] text-[#444] py-1 no-underline transition-colors hover:text-[#FF6A00]">{l}</a>)}
        </div>
        <div>
          <div className="font-mono text-[9px] text-[#FF6A00] tracking-[3px] mb-4">CONNECT</div>
          {SOCIAL_LINKS.map(l => <a key={l.label} href={l.href} className="block text-[12px] text-[#444] py-1 no-underline transition-colors hover:text-[#FF6A00]">{l.label}</a>)}
        </div>
      </div>
      <div className="border-t border-[rgba(255,255,255,0.04)] pt-5 flex justify-between items-center font-mono text-[10px] text-[#333] tracking-wide">
        <span>© 2024 ZYNEX LABS S.A.S. · ALL RIGHTS RESERVED</span>
        <span>COLOMBIA → WORLD</span>
      </div>
    </footer>
  )
}
