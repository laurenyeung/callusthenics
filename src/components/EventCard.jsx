import { Clock, MapPin } from 'lucide-react'

const TYPE_COLORS = {
  'Open Session': 'bg-amber-500',
  'Beginner':     'bg-green-500',
  'Advanced':     'bg-red-500',
  'Competition':  'bg-purple-500',
  'Workshop':     'bg-blue-500',
}

const TYPE_BADGE = {
  'Open Session': 'bg-amber-500/20 text-amber-400',
  'Beginner':     'bg-green-500/20 text-green-400',
  'Advanced':     'bg-red-500/20 text-red-400',
  'Competition':  'bg-purple-500/20 text-purple-400',
  'Workshop':     'bg-blue-500/20 text-blue-400',
}

export default function EventCard({ event }) {
  const accentBar = TYPE_COLORS[event.type] ?? 'bg-gray-500'
  const badge = TYPE_BADGE[event.type] ?? 'bg-gray-500/20 text-gray-400'

  return (
    <div className="flex overflow-hidden rounded-lg border border-cal-border bg-cal-surface hover:border-[#f0883e] transition-colors">
      <div className={`w-1 shrink-0 ${accentBar}`} />
      <div className="flex-1 px-4 py-3 min-w-0">
        <div className="flex items-center justify-between gap-2 mb-1">
          <span className="font-semibold text-cal-text truncate">{event.org}</span>
          <span className={`shrink-0 text-xs font-medium px-2 py-0.5 rounded-full ${badge}`}>
            {event.type}
          </span>
        </div>
        <p className="text-sm text-cal-muted mb-2">{event.title}</p>
        <div className="flex items-center gap-1 text-xs text-cal-muted mb-1">
          <Clock size={12} className="shrink-0" />
          <span>{event.timeStart} – {event.timeEnd}</span>
        </div>
        <div className="flex items-start gap-1 text-xs text-cal-muted mb-2">
          <MapPin size={12} className="shrink-0 mt-0.5" />
          <span>{event.location.name} · {event.location.address}</span>
        </div>
        {event.tags.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {event.tags.map(tag => (
              <span
                key={tag}
                className="text-xs px-2 py-0.5 rounded-full bg-cal-bg border border-cal-border text-cal-muted"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
