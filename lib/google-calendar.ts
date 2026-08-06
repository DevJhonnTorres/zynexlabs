// Google Calendar integration (server-only)
// Usa el OAuth de Jhonn (proyecto jhonn-cli) vía refresh token en env vars.

const TOKEN_URI = 'https://oauth2.googleapis.com/token'
const CAL_BASE = 'https://www.googleapis.com/calendar/v3'

export const CALENDAR_ID = process.env.GOOGLE_CALENDAR_ID || 'primary'
export const TIME_ZONE = 'America/Bogota' // sin DST: UTC-5 fijo

export const OFFICE = {
  startHour: 9,  // 09:00
  endHour: 17,   // 17:00
  slotMinutes: 30,
  workdays: [1, 2, 3, 4, 5], // Lun-Vie
}

async function getAccessToken(): Promise<string> {
  const clientId = process.env.GOOGLE_CLIENT_ID
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET
  const refreshToken = process.env.GOOGLE_REFRESH_TOKEN
  if (!clientId || !clientSecret || !refreshToken) {
    throw new Error('Google OAuth env vars missing')
  }
  const res = await fetch(TOKEN_URI, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      client_id: clientId,
      client_secret: clientSecret,
      refresh_token: refreshToken,
      grant_type: 'refresh_token',
    }),
  })
  if (!res.ok) {
    const txt = await res.text()
    throw new Error(`Token refresh failed: ${res.status} ${txt.slice(0, 200)}`)
  }
  const data = await res.json()
  return data.access_token
}

interface GcalResponse {
  id?: string
  htmlLink?: string
  calendars?: Record<string, { busy?: { start: string; end: string }[] }>
  [key: string]: unknown
}

async function gcal(path: string, init: RequestInit = {}): Promise<GcalResponse> {
  const token = await getAccessToken()
  const res = await fetch(`${CAL_BASE}${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      ...(init.headers || {}),
    },
  })
  if (!res.ok) {
    const txt = await res.text()
    throw new Error(`Calendar API ${res.status}: ${txt.slice(0, 300)}`)
  }
  return res.json()
}

// ── Slots helpers (America/Bogota = UTC-5, sin DST) ──

export function bogotaOffsetMs(): number {
  return -5 * 60 * 60 * 1000
}

// Slots libres para un día: horas de oficina menos busy intervals.
export async function getFreeSlots(dateStr: string): Promise<string[]> {
  const day = new Date(`${dateStr}T00:00:00Z`) // fecha normalizada
  const dow = day.getUTCDay()
  if (!OFFICE.workdays.includes(dow)) return []

  const startUtc = new Date(day.getTime() + OFFICE.startHour * 3600 * 1000 + bogotaOffsetMs())
  const endUtc = new Date(day.getTime() + OFFICE.endHour * 3600 * 1000 + bogotaOffsetMs())

  // freebusy del día
  const fb = await gcal('/freeBusy', {
    method: 'POST',
    body: JSON.stringify({
      timeMin: startUtc.toISOString(),
      timeMax: endUtc.toISOString(),
      timeZone: TIME_ZONE,
      items: [{ id: CALENDAR_ID }],
    }),
  })
  const busy: { start: number; end: number }[] = (fb.calendars?.[CALENDAR_ID]?.busy || []).map(
    (b) => ({ start: new Date(b.start).getTime(), end: new Date(b.end).getTime() })
  )

  // Generar slots de 30 min
  const slots: string[] = []
  const slotMs = OFFICE.slotMinutes * 60 * 1000
  for (let t = startUtc.getTime(); t + slotMs <= endUtc.getTime(); t += slotMs) {
    const slotStart = t
    const slotEnd = t + slotMs
    const conflict = busy.some(b => b.start < slotEnd && b.end > slotStart)
    if (!conflict) {
      slots.push(new Date(t).toISOString())
    }
  }
  return slots
}

// Crear el evento en el calendario con recordatorios por email.
export async function createBooking(opts: {
  slotIso: string
  name: string
  email: string
  message?: string
}): Promise<{ id: string; htmlLink?: string }> {
  const { slotIso, name, email, message } = opts
  const start = new Date(slotIso)
  const end = new Date(start.getTime() + OFFICE.slotMinutes * 60 * 1000)

  const event = {
    summary: `Discovery Call — ${name}${email ? ` (${email})` : ''}`,
    description: `Agendada desde zynexlabs-lemon.vercel.app\n\nCliente: ${name}\nEmail: ${email}\n${message ? `Mensaje: ${message}\n` : ''}`,
    start: { dateTime: start.toISOString(), timeZone: TIME_ZONE },
    end: { dateTime: end.toISOString(), timeZone: TIME_ZONE },
    reminders: {
      useDefault: false,
      overrides: [
        { method: 'email', minutes: 60 },
        { method: 'email', minutes: 15 },
      ],
    },
  }

  const ev = await gcal(`/calendars/${encodeURIComponent(CALENDAR_ID)}/events`, {
    method: 'POST',
    body: JSON.stringify(event),
  })
  return { id: ev.id || 'created', htmlLink: ev.htmlLink }
}
