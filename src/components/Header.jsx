import { CITIES } from '../data/events.js'

export default function Header({ selectedCity, onSelectCity }) {
  return (
    <header className="sticky top-0 z-10 bg-cal-bg border-b border-cal-border px-4 py-3 flex items-center justify-between">
      <span className="font-bold text-lg text-cal-text tracking-tight">
        Callusthenics
      </span>
      <select
        value={selectedCity}
        onChange={e => onSelectCity(e.target.value)}
        className="text-sm bg-cal-surface text-cal-text border border-cal-border rounded-lg px-3 py-1.5 focus:outline-none focus:border-[#f0883e] cursor-pointer"
      >
        {CITIES.map(city => (
          <option key={city} value={city}>{city}</option>
        ))}
      </select>
    </header>
  )
}
