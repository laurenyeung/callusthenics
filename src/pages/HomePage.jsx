import { useState } from 'react'
import { format } from 'date-fns'
import { events } from '../data/events.js'
import Header from '../components/Header.jsx'
import DateStrip from '../components/DateStrip.jsx'
import EventList from '../components/EventList.jsx'

export default function HomePage() {
  const [selectedDate, setSelectedDate] = useState(format(new Date(), 'yyyy-MM-dd'))
  const [selectedCity, setSelectedCity] = useState('All Cities')

  const filtered = events.filter(e =>
    e.date === selectedDate &&
    (selectedCity === 'All Cities' || e.location.city === selectedCity)
  )

  return (
    <div className="flex flex-col h-full">
      <Header selectedCity={selectedCity} onSelectCity={setSelectedCity} />
      <DateStrip selectedDate={selectedDate} onSelectDate={setSelectedDate} />
      <main className="flex-1 overflow-y-auto py-4">
        <div className="max-w-3xl mx-auto">
          <EventList events={filtered} />
        </div>
      </main>
    </div>
  )
}
