import { NextRequest, NextResponse } from 'next/server'
import { getFreeSlots } from '@/lib/google-calendar'

export const dynamic = 'force-dynamic'

// GET /api/calendar/availability?date=2026-08-10 → slots libres de ese día
export async function GET(req: NextRequest) {
  const date = req.nextUrl.searchParams.get('date')
  if (!date || !/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    return NextResponse.json({ error: 'date required (YYYY-MM-DD)' }, { status: 400 })
  }
  try {
    const slots = await getFreeSlots(date)
    return NextResponse.json({ date, slots })
  } catch (err: any) {
    console.error('availability error', err)
    return NextResponse.json({ error: err.message || 'failed' }, { status: 500 })
  }
}
