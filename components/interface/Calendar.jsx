import cx from 'classnames'
import { format, getDay, parseISO } from 'date-fns'
import { useEffect, useMemo, useState } from 'react'

export default function Calendar({
  Events,
  scrollIntoView,
  selectedDay,
  setSelectedDay,
}) {
  const [highlightedDay, setHighlightedDay] = useState('')

  useEffect(() => {
    scrollIntoView({ alignment: 'start' })
  }, [selectedDay])

  if (!Events) {
    return null
  }

  // Row algorithm requires items to be in order
  // Prioritize where to insert next row / top vs bottom (change startAt to endAt)

  const parsedEvents = Events.map((evt, idx, arr) => ({
    ...evt,
    startAtIndex: convertDateToDayIndex(evt.startAt),
    endAtIndex: convertDateToDayIndex(evt.endAt),
  })).sort((a, b) => a.endAtIndex - b.startAtIndex)

  const DAYS = [
    '2022-07-25T00:00:00.000Z',
    '2022-07-26T00:00:00.000Z',
    '2022-07-27T00:00:00.000Z',
    '2022-07-28T00:00:00.000Z',
    '2022-07-29T00:00:00.000Z',
    '2022-07-30T00:00:00.000Z',
    '2022-07-31T00:00:00.000Z',
  ]

  // const NUM_ROWS = Math.max(...Events.map((e) => e.row));
  const NUM_ROWS = Events.length
  const ROWS = [
    ...Array(NUM_ROWS)
      .fill(0)
      .map((_, i) => i + 1),
  ]

  for (let i = 0; i < parsedEvents.length; i++) {
    const event = parsedEvents[i]
    const previousEvents = parsedEvents.slice(0, i)
    const previousOverlappingEvents = previousEvents.filter(previousEvent => {
      return previousEvent.endAtIndex >= event.startAtIndex
    })
    const rowsAlreadyUsed = previousOverlappingEvents.map(evt => evt.row)
    const minimumFreeRow = ROWS.find(row => !rowsAlreadyUsed.includes(row))

    // console.log({
    //   event,
    //   previousEvents,
    //   previousOverlappingEvents,
    //   rowsAlreadyUsed,
    //   minimumFreeRow,
    // })

    // @Wirehead try logging out values here to understand what's going on

    event.row = minimumFreeRow
  }

  function convertDateToDayIndex(date) {
    let dateObj = parseISO(date)
    let index = getDay(dateObj)
    let normalizedIndex = index === 0 ? 7 : index

    return normalizedIndex
  }

  const selectedEvents = [];/*useMemo(() => {
    // @Wirehead this memoization is not required but if the data gets heavier it's good to only do it once per data fetch instead of on every render

    let selectedDayObj = parseISO(selectedDay)
    let index = getDay(selectedDayObj)
    let normalizedIndex = ((index + 7 - 1) % 7) + 1

    // console.log(selectedDay, normalizedIndex)

    return parsedEvents.filter(
      event =>
        normalizedIndex >= event.startAtIndex &&
        normalizedIndex <= event.endAtIndex,
    )
  }, [selectedDay, parsedEvents])*/

  const highlightedEvents = []/*;useMemo(() => {
    // if (!highlightedDay) {
    //   return []
    // }

    let highlightedDayObj = parseISO(highlightedDay)
    let index = getDay(highlightedDayObj)
    let normalizedIndex = ((index + 7 - 1) % 7) + 1

    return parsedEvents.filter(
      event =>
        normalizedIndex >= event.startAtIndex &&
        normalizedIndex <= event.endAtIndex,
    )
  }, [highlightedDay, parsedEvents])*/

  //   console.log(parsedEvents)

  return (
    <div className="relative z-20 min-h-[90px] items-center overflow-hidden !border-b-0  border-t border-black/[0.1] bg-slate-100 shadow-[0px_1px_0px_rgb(0_0_0_/_0.09),0px_1.55px_1.75px_rgb(0_0_0_/_0.1)] dark:border-black/[0.5] dark:bg-primary-100/[0.0] dark:shadow-[0px_1px_0px_rgba(0,0,0,0.275),0px_1.85px_2px_rgba(20,26,41,0.25)]">
      <div className="absolute top-0 grid h-full w-full grid-cols-7 divide-x divide-slate-800/10 dark:divide-black/20">
        {DAYS.map(day => (
          <div
            className={cx(
              'group relative z-10 flex h-full cursor-pointer flex-col items-center justify-start gap-0.5 rounded-none bg-clip-padding px-2 pt-3.5 shadow-[inset_0px_1px_0px_rgba(255,255,255,0.035)]  hover:bg-white/[0.25] dark:bg-primary-100/[0.025] dark:hover:bg-black/[0.08] ',
              {
                'dark: z-30 !bg-slate-50 drop-shadow-[0.1px_0px_2px_rgb(0_0_0_/_0.1)]  dark:!border-black/50 dark:!bg-black/20 dark:shadow-[1px_0px_0px_rgba(0,0,0,0.4),inset_0px_1px_0px_rgba(255,255,255,0.0125),0.5px_0px_0px_1px_rgba(255,255,255,0.025)]':
                  selectedDay === day,
              },
              {
                '[&>h3]:text-slate-400 [&>h3]:dark:text-slate-200/[0.275]':
                  parsedEvents.filter(
                    event => event.startAtIndex === convertDateToDayIndex(day),
                  ).length === 0,
              },
            )}
            key={day}
            onClick={() => {
              setSelectedDay(day)
            }}
            onPointerEnter={() => setHighlightedDay(day)}
            onPointerLeave={() => setHighlightedDay(null)}
          // onPointerEnter={() => setSelectedDay(day)}
          // onPointerLeave={() => setSelectedDay(null)}
          // onClick={e => {
          //   alert(
          //     'selected events: ' +
          //       selectedEvents.map(event => event.name).join(', '),
          //   )
          // }}
          >
            <h2
              className={cx(
                'text-center text-xs font-medium uppercase text-slate-400 dark:text-slate-200/50 ',
                {
                  '!text-primary-500 dark:!text-primary-500':
                    selectedDay === day,
                },
              )}>
              {format(parseISO(day), 'EE')}
            </h2>
            <h3 className="mb-0.5 text-center text-lg font-normal text-slate-800 dark:text-slate-50/80">
              {format(parseISO(day), 'd')}
            </h3>
          </div>
        ))}
      </div>

      <div
        className="pointer-events-none mb-[1.25rem] mt-[3.55rem] py-[0.55rem] pl-0.5 pr-px"
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${7}, 1fr)`,
          //   gridTemplateRows: `repeat(${7}, 1fr)`,
          gridGap: 4,
        }}>
        {parsedEvents.map((event, idx) => (
          <div
            className={cx(
              'relative z-30 mx-1.5 box-border flex h-[4px] flex-col justify-center rounded-full bg-primary-300 dark:border-t dark:border-primary-50/[0.05] dark:opacity-[0.975] dark:shadow dark:shadow-black/20',
              {
                '!bg-primary-500 !brightness-100':
                  selectedEvents.includes(event),
                'bg-primary-400/90 brightness-105':
                  highlightedEvents.includes(event),
              },
            )}
            key={idx}
            style={{
              gridColumnStart: event.startAtIndex,
              gridColumnEnd: event.endAtIndex + 1,
              gridRow: `${event.row}`,
              //   filter: highlightedEvents.includes(event)
              //     ? 'grayscale(90%)'
              //     : undefined,
            }}>
            {/* {idx}: {event.name} */}
          </div>
        ))}
      </div>
    </div>
  )
}
