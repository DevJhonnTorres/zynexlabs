const SERVICE_LINKS = ['AI & Automation', 'Software Dev', 'Blockchain & Web3', 'Cloud & DevOps', 'UI/UX & Product']

export function Footer() {
  return (
    <footer className="border-t border-[rgba(255,255,255,0.07)] px-12 py-16">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-[2fr_1fr_1fr] gap-16 mb-14">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-2 h-2 bg-[#FF6A00] rounded-full shadow-[0_0_8px_#FF6A00]" />
              <span className="text-[14px] font-black tracking-[3px] uppercase">ZYNEX LABS</span>
            </div>
            <p className="text-[13px] text-[#444] leading-[1.8] max-w-[280px] mb-6">
              Advanced technology infrastructure company. AI · Automation · Web3 · Software for next-generation companies.
            </p>
            <div className="font-mono text-[10px] text-[#333] tracking-[2px] space-y-1">
              <div>contact@zynexlabs.com</div>
              <div>Colombia · Remote-first</div>
            </div>
          </div>

          {/* Services */}
          <div>
            <div className="font-mono text-[9px] text-[rgba(255,106,0,0.5)] tracking-[3px] mb-5">SERVICES</div>
            {SERVICE_LINKS.map(s => (
              <div key={s} className="text-[12px] text-[#444] py-1.5 hover:text-[#888] transition-colors cursor-default">
                {s}
              </div>
            ))}
          </div>

          {/* Contact */}
          <div>
            <div className="font-mono text-[9px] text-[rgba(255,106,0,0.5)] tracking-[3px] mb-5">CONNECT</div>
            {['LinkedIn', 'GitHub', 'Twitter / X', 'Instagram'].map(s => (
              <a key={s} href="#" className="block text-[12px] text-[#444] py-1.5 no-underline hover:text-[#FF6A00] transition-colors">
                {s}
              </a>
            ))}
          </div>
        </div>

        <div className="h-px bg-[rgba(255,255,255,0.06)] mb-6" />
        <div className="flex items-center justify-between font-mono text-[10px] text-[#2a2a2a] tracking-[2px]">
          <span>© 2026 ZYNEX LABS S.A.S. · ALL RIGHTS RESERVED</span>
          <span>COLOMBIA → WORLD</span>
        </div>
      </div>
    </footer>
  )
}
