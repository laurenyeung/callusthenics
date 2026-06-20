import { CalendarX } from 'lucide-react'

export default function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-cal-muted">
      <CalendarX size={40} className="mb-3 opacity-50" />
      <p className="text-sm font-medium">No sessions on this day</p>
      <p className="text-xs mt-1 opacity-70">Try another date or city</p>
    </div>
  )
}
