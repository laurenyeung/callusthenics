import { addDays, format } from 'date-fns'

export default function DateStrip({ selectedDate, onSelectDate }) {
  const today = new Date()
  const todayStr = format(today, 'yyyy-MM-dd')
  const days = Array.from({ length: 14 }, (_, i) => addDays(today, i))

  return (
    <div className="border-b border-cal-border bg-cal-bg">
      <div className="flex gap-2 overflow-x-auto scrollbar-none px-4 py-3">
        {days.map(d => {
          const dateStr = format(d, 'yyyy-MM-dd')
          const isToday = dateStr === todayStr
          const isSelected = dateStr === selectedDate

          let cls = 'shrink-0 flex flex-col items-center rounded-lg px-3 py-2 cursor-pointer select-none transition-colors text-xs font-medium '
          if (isToday && isSelected) {
            cls += 'bg-[#f0883e] text-gray-900 font-bold'
          } else if (isSelected) {
            cls += 'bg-cal-surface border border-[#f0883e] text-cal-text'
          } else {
            cls += 'bg-cal-surface text-cal-muted hover:text-cal-text'
          }

          return (
            <button key={dateStr} className={cls} onClick={() => onSelectDate(dateStr)}>
              <span className="uppercase tracking-wide" style={{ fontSize: '10px' }}>
                {format(d, 'EEE')}
              </span>
              <span className="text-sm leading-none mt-0.5">{format(d, 'd')}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
