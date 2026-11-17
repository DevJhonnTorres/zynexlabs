'use client'

import { useCallback, useState } from 'react'
import { COMPANY } from '@/lib/constants'

// Shown instead of raw API errors (e.g. missing/expired Google OAuth credentials)
function BookingFallback({ text }: { text: string }) {
  return (
    <div className="border border-[var(--line)] bg-[var(--surface)] p-4 text-[14px] leading-[1.6] text-[var(--muted)]">
      {text}{' '}
      <a href={`mailto:${COMPANY.email}?subject=Discovery%20call`} className="font-medium text-[var(--ink)] underline underline-offset-4">
        Email us at {COMPANY.email}
      </a>{' '}
      and we&apos;ll reply within one business day.
    </div>
  )
}

const TZ = 'America/Bogota'
const fmtTime = (iso: string) =>
  new Intl.DateTimeFormat('en-US', { hour: 'numeric', minute: '2-digit', timeZone: TZ }).format(new Date(iso))
// La fecha del día es la misma en cualquier zona — sin conversión de timezone.
// (La conversión Bogotá→UTC la hace el servidor.)
const fmtDay = (d: Date) =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`

type Step = 'date' | 'slot' | 'confirm' | 'done'

export function CalendarBooking() {
  const today = new Date()
  const [month, setMonth] = useState(() => new Date(today.getFullYear(), today.getMonth(), 1))
  const [selectedDay, setSelectedDay] = useState<Date | null>(null)
  const [slots, setSlots] = useState<string[] | null>(null)
  const [slotsLoading, setSlotsLoading] = useState(false)
  const [slotsError, setSlotsError] = useState('')
  const [slot, setSlot] = useState<string | null>(null)
  const [step, setStep] = useState<Step>('date')
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  const todayStr = fmtDay(today)

  const loadSlots = useCallback(async (day: Date) => {
    setSlotsLoading(true)
    setSlotsError('')
    setSlots(null)
    setStep('slot')
    try {
      const res = await fetch(`/api/calendar/availability?date=${fmtDay(day)}`)
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'failed')
      setSlots(data.slots || [])
    } catch (e) {
      console.error('availability error', e)
      setSlotsError('unavailable')
    } finally {
      setSlotsLoading(false)
    }
  }, [])

  function pickDay(d: Date) {
    setSelectedDay(d)
    setSlot(null)
    setError('')
    loadSlots(d)
  }

  // ── Construir grid del mes ──
  const year = month.getFullYear()
  const m = month.getMonth()
  const firstDow = new Date(year, m, 1).getDay() // 0=Dom
  const daysInMonth = new Date(year, m + 1, 0).getDate()
  const cells: (Date | null)[] = []
  for (let i = 0; i < firstDow; i++) cells.push(null) // rellenar inicio (Dom-first)
  for (let d = 1; d <= daysInMonth; d++) cells.push(new Date(year, m, d))

  function isPast(d: Date) {
    return fmtDay(d) < todayStr
  }
  function isWeekend(d: Date) {
    const dow = d.getDay()
    return dow === 0 || dow === 6
  }

  async function submitBooking(e: React.FormEvent) {
    e.preventDefault()
    if (!slot || !selectedDay) return
    setSubmitting(true)
    setError('')
    try {
      const res = await fetch('/api/calendar/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          date: fmtDay(selectedDay),
          slotIso: slot,
          name: form.name.trim(),
          email: form.email.trim(),
          message: form.message.trim(),
        }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Error reservando')
      setStep('done')
    } catch (e) {
      console.error('booking error', e)
      setError('failed')
    } finally {
      setSubmitting(false)
    }
  }

  const monthLabel = new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' }).format(month)

  return (
    <div className="border border-[var(--line)] bg-white overflow-hidden">
      {/* ── Paso 1: calendario ── */}
      {step !== 'done' && (
        <>
          <div className="p-6 border-b border-[var(--border)]">
            <div className="flex items-center justify-between mb-5">
              <button
                onClick={() => setMonth(new Date(year, m - 1, 1))}
                className="text-[14px] text-[var(--muted)] hover:text-white hover:bg-[var(--ink)] hover:border-[var(--ink)] transition-colors cursor-pointer px-3 py-1 border border-[var(--line)]"
                aria-label="Mes anterior"
              >
                ←
              </button>
              <div className="font-mono text-[13px] tracking-[0.15em] uppercase text-[var(--ink)]">{monthLabel}</div>
              <button
                onClick={() => setMonth(new Date(year, m + 1, 1))}
                className="text-[14px] text-[var(--muted)] hover:text-white hover:bg-[var(--ink)] hover:border-[var(--ink)] transition-colors cursor-pointer px-3 py-1 border border-[var(--line)]"
                aria-label="Mes siguiente"
              >
                →
              </button>
            </div>

            <div className="grid grid-cols-7 gap-1 mb-2">
              {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => (
                <div key={i} className="text-center font-mono text-[12px] text-[var(--dim)] tracking-[1px]">
                  {d}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-1">
              {cells.map((d, i) => {
                if (!d) return <div key={i} />
                const disabled = isPast(d) || isWeekend(d)
                const selected = selectedDay && fmtDay(selectedDay) === fmtDay(d)
                return (
                  <button
                    key={i}
                    disabled={disabled}
                    onClick={() => pickDay(d)}
                    className={`aspect-square text-[14px] border border-transparent flex items-center justify-center transition-colors cursor-pointer ${
                      selected
                        ? 'bg-[var(--ink)] text-white font-medium'
                        : disabled
                          ? 'text-[#c8c8c8] cursor-not-allowed'
                          : 'text-[var(--ink)] border-[var(--line)] hover:border-[var(--ink)]'
                    }`}
                  >
                    {d.getDate()}
                  </button>
                )
              })}
            </div>
            <div className="mt-4 font-mono text-[12px] text-[var(--dim)] tracking-[0.5px]">
              Mon–Fri · 9:00–17:00 (GMT-5) · Colombia time zone
            </div>
          </div>

          {/* ── Paso 2: slots ── */}
          {step === 'slot' && selectedDay && (
            <div className="p-6 border-b border-[var(--border)]">
              <div className="font-mono text-[12px] tracking-[0.15em] text-[var(--label)] mb-4">
                {slot ? 'SELECTED TIME' : 'AVAILABLE TIMES'} —{' '}
                {new Intl.DateTimeFormat('en-US', { weekday: 'long', day: 'numeric', month: 'long', timeZone: TZ }).format(selectedDay)}
              </div>

              {slotsLoading && (
                <div className="text-[14px] text-[var(--muted)] py-4">Checking availability…</div>
              )}
              {slotsError && (
                <BookingFallback text="Online booking is temporarily unavailable." />
              )}
              {!slotsLoading && !slotsError && slots && slots.length === 0 && (
                <div className="text-[14px] text-[var(--muted)] py-4">
                  No availability this day — try another date.
                </div>
              )}
              {!slotsLoading && slots && slots.length > 0 && (
                <div className="grid grid-cols-3 gap-2">
                  {slots.map(s => (
                    <button
                      key={s}
                      onClick={() => {
                        setSlot(s)
                        setStep('confirm')
                      }}
                      className={`border py-2.5 text-[14px] transition-colors cursor-pointer ${
                        slot === s
                          ? 'border-[var(--ink)] bg-[var(--ink)] text-white font-medium'
                          : 'border-[var(--line)] text-[var(--ink)] hover:border-[var(--ink)]'
                      }`}
                    >
                      {fmtTime(s)}
                    </button>
                  ))}
                </div>
              )}
              <button
                onClick={() => {
                  setStep('date')
                  setSlot(null)
                }}
                className="mt-4 font-mono text-[12px] text-[var(--muted)] hover:text-[var(--ink)] tracking-[0.1em] transition-colors cursor-pointer"
              >
                ← BACK TO CALENDAR
              </button>
            </div>
          )}

          {/* ── Paso 3: confirmación ── */}
          {step === 'confirm' && slot && selectedDay && (
            <div className="p-6 border-b border-[var(--border)]">
              <div className="font-mono text-[12px] tracking-[0.15em] text-[var(--label)] mb-4">CONFIRM BOOKING</div>
              <div className="font-display text-[20px] font-medium text-[var(--ink)] mb-1">
                {new Intl.DateTimeFormat('en-US', { weekday: 'long', day: 'numeric', month: 'long', timeZone: TZ }).format(selectedDay)}
              </div>
              <div className="text-[14px] text-[var(--muted)] mb-6">{fmtTime(slot)} — 30 minutes (GMT-5)</div>

              <form onSubmit={submitBooking} className="space-y-3">
                <input
                  required
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                  className="w-full bg-white border border-[var(--line)] px-4 py-3 text-[15px] text-[var(--ink)] placeholder:text-[var(--dim)] outline-none focus:border-[var(--ink)] transition-colors"
                />
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  placeholder="Your email"
                  className="w-full bg-white border border-[var(--line)] px-4 py-3 text-[15px] text-[var(--ink)] placeholder:text-[var(--dim)] outline-none focus:border-[var(--ink)] transition-colors"
                />
                <textarea
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  placeholder="Project details (optional)"
                  rows={3}
                  className="w-full bg-white border border-[var(--line)] px-4 py-3 text-[15px] text-[var(--ink)] placeholder:text-[var(--dim)] outline-none focus:border-[var(--ink)] transition-colors resize-none"
                />
                {error && <BookingFallback text="We couldn't confirm this booking." />}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-[var(--ink)] text-white font-medium text-[15px] py-3.5 hover:bg-[#262626] transition-colors cursor-pointer disabled:opacity-50"
                >
                  {submitting ? 'BOOKING…' : 'CONFIRM BOOKING'}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setStep('slot')
                    setSlot(null)
                  }}
                  className="w-full font-mono text-[12px] text-[var(--muted)] hover:text-[var(--ink)] tracking-[0.1em] transition-colors cursor-pointer"
                >
                  ← BACK TO TIMES
                </button>
              </form>
            </div>
          )}
        </>
      )}

      {/* ── Éxito ── */}
      {step === 'done' && slot && selectedDay && (
        <div className="p-10 text-center">
          <div className="font-mono text-[12px] tracking-[0.15em] text-[var(--label)] mb-5">BOOKING CONFIRMED</div>
          <div className="font-display text-[32px] font-medium tracking-[-0.03em] text-[var(--ink)] mb-2">See you soon.</div>
          <div className="text-[15px] text-[var(--muted)] leading-[1.8]">
            {new Intl.DateTimeFormat('en-US', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', timeZone: TZ }).format(selectedDay)}
            <br />
            {fmtTime(slot)} — 30 minutes (GMT-5)
          </div>
          <div className="text-[14px] text-[var(--muted)] mt-4">
            A calendar invite and reminders were sent to <span className="text-[var(--ink)]">{form.email}</span>.
          </div>
          <button
            onClick={() => {
              setStep('date')
              setSlot(null)
              setSelectedDay(null)
              setForm({ name: '', email: '', message: '' })
            }}
            className="mt-6 font-mono text-[12px] text-[var(--muted)] hover:text-[var(--ink)] tracking-[0.1em] transition-colors cursor-pointer"
          >
            BOOK ANOTHER →
          </button>
        </div>
      )}
    </div>
  )
}
