const ITEMS: [string, string | null, string | null][] = [
  ['ETH', '$3,421', '▲ +2.4%'],
  ['BTC', '$67,800', '▲ +1.1%'],
  ['BLOCK', '#19,847,221', null],
  ['AI REQUESTS', '2.4M / DAY', null],
  ['CONTRACTS DEPLOYED', '47', null],
  ['ZYNEX NODE', null, '● ONLINE'],
  ['LATENCY', '12ms', 'OPTIMAL'],
]
const ALL = [...ITEMS, ...ITEMS]

export function Ticker() {
  return (
    <div className="relative z-[5] bg-[rgba(255,106,0,0.04)] border-t border-b border-[rgba(255,106,0,0.22)] py-2 overflow-hidden">
      <div
        className="flex whitespace-nowrap"
        style={{ animation: 'ticker-scroll 30s linear infinite', willChange: 'transform' }}
      >
        {ALL.map(([label, val, status], i) => (
          <span key={i} className="inline-flex items-center gap-1.5 px-8 font-mono text-[10px] text-[rgba(255,106,0,0.5)] tracking-wide border-r border-[rgba(255,106,0,0.22)]">
            {label}
            {val && <span className="text-[#FF8C00]">{val}</span>}
            {status && <span className="text-[#22c55e]">{status}</span>}
          </span>
        ))}
      </div>
    </div>
  )
}
