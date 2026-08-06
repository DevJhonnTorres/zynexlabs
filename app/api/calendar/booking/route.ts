import { NextRequest, NextResponse } from 'next/server'
import { createBooking, getFreeSlots } from '@/lib/google-calendar'

export const dynamic = 'force-dynamic'

// POST /api/calendar/booking { date, slotIso, name, email, message? }
export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { date, slotIso, name, email, message } = body || {}

    if (!date || !/^\d{4}-\d{2}-\d{2}$/.test(date)) {
      return NextResponse.json({ error: 'date required (YYYY-MM-DD)' }, { status: 400 })
    }
    if (!slotIso || Number.isNaN(new Date(slotIso).getTime())) {
      return NextResponse.json({ error: 'slotIso required' }, { status: 400 })
    }
    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return NextResponse.json({ error: 'name required' }, { status: 400 })
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'valid email required' }, { status: 400 })
    }

    const slot = new Date(slotIso)
    // No permitir fechas pasadas
    if (slot.getTime() < Date.now() - 5 * 60 * 1000) {
      return NextResponse.json({ error: 'slot is in the past' }, { status: 400 })
    }

    // Re-verificar que el slot sigue libre (anti doble reserva)
    const free = await getFreeSlots(date)
    if (!free.some(f => Math.abs(new Date(f).getTime() - slot.getTime()) < 60 * 1000)) {
      return NextResponse.json({ error: 'slot no longer available' }, { status: 409 })
    }

    const event = await createBooking({ slotIso, name, email, message })
    return NextResponse.json({
      ok: true,
      eventId: event.id,
      htmlLink: event.htmlLink || null,
    })
  } catch (err) {
    console.error('booking error', err)
    const msg = err instanceof Error ? err.message : 'failed'
    return NextResponse.json({ error: msg }, { status: 500 })
  }
}
