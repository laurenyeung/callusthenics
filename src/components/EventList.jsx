import EventCard from './EventCard.jsx'
import EmptyState from './EmptyState.jsx'

const GROUPS = [
  { label: 'Morning',   test: t => t < '10:00' },
  { label: 'Afternoon', test: t => t >= '10:00' && t < '17:00' },
  { label: 'Evening',   test: t => t >= '17:00' },
]

export default function EventList({ events }) {
  if (events.length === 0) return <EmptyState />

  return (
    <div className="flex flex-col gap-6">
      {GROUPS.map(({ label, test }) => {
        const group = events.filter(e => test(e.timeStart))
        if (group.length === 0) return null
        return (
          <section key={label}>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-cal-muted mb-3 px-4">
              {label}
            </h2>
            <div className="flex flex-col gap-2 px-4">
              {group.map(event => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </section>
        )
      })}
    </div>
  )
}
