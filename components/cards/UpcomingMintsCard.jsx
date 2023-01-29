import { Button } from '@/components/forms'
import { Card } from '@/components/layout'
import { useScrollIntoView } from '@mantine/hooks'
import cx from 'classnames'
import { compareAsc, format, parseISO } from 'date-fns'
import Image from 'next/legacy/image'
import React, { useState } from 'react'
import { BiRightArrowAlt } from 'react-icons/bi'
import Calendar from '../interface/Calendar'
import ScrollArea from '../interface/ScrollArea'

function PromotedEvent({ targetRef }) {
  return (
    <div
      ref={targetRef}
      className="relative -mt-px w-full dark:border-slate-900/[0.25]">
      <Image
        className="dark:fadeBottomXL absolute top-0 left-0 z-10 h-full w-full bg-slate-500 object-cover dark:opacity-[0.125]"
        alt="Second Settlers"
        src={'/images/promoted/second-settlers-bg.png'}
        layout="fill"
      />

      <div className="dark:fadeBottomXL absolute z-20 h-full w-full bg-gradient-to-b from-slate-50/[0.875] to-slate-50 shadow-[inset_0_1px_2px_rgba(15,23,42,0.11)] dark:bg-slate-900/10 dark:from-slate-900/[0.5] dark:to-primary-500/[0.20] dark:opacity-[0.285] dark:shadow-[inset_0_1px_2px_rgba(0,0,0,0.9)]"></div>

      <div className="relative z-30 flex flex-col items-start justify-center px-6 py-6 pb-1.5">
        <div className="flex w-full justify-between">
          <div>
            <h2 className="text-left text-xs font-medium uppercase text-slate-400 dark:text-slate-100/50">
              Promoted
            </h2>

            <h3 className="text-left text-xl font-medium text-slate-800 dark:text-slate-50">
              Second Settlers
            </h3>

            <div className="mt-4 flex items-center gap-3">
              <div className="justify-starts relative flex h-8 items-center rounded bg-slate-800/[0.07] px-2 py-3 dark:bg-slate-200/[0.2]">
                <p className="text-sm font-semibold text-slate-600 dark:text-slate-50/90">
                  $50
                </p>
              </div>

              <Button
                title="Mint Now"
                className="h-8 gap-1 whitespace-nowrap rounded !px-3 !text-[0.9rem]"
                type="primary"
                gradient
                shortcut={
                  <BiRightArrowAlt size="20" className="text-slate-50/50" />
                }
                href="#"
              />
            </div>
          </div>

          <div className="-mr-[0.75rem] -mt-[0.375rem] -mb-4 flex w-[11.25rem] items-center">
            {/* TODO: Update this placeholder image with a dynamic component */}
            <Image
              className="object-cover"
              alt="Second Settlers"
              src={'/images/promoted/placeholder.png'}
              width={356}
              height={245}
              layout={'intrinsic'}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

function UpcomingEvents({ Events, scrollableRef, targetRef, selectedDay }) {
  if (!Events) {
    return
  }

  const Days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ]

  const groupedEvents = () => {
    const groupedEvents = {}

    ;[...Events]
      .sort((a, b) => compareAsc(parseISO(a.startAt), parseISO(b.startAt)))
      .forEach(event => {
        const date = format(parseISO(event.startAt), 'EEEE do')
        if (!groupedEvents[date]) {
          groupedEvents[date] = []
        }
        groupedEvents[date].push(event)
      })
    return groupedEvents
  }

  const sortedGroupedEvents = groupedEvents()

  const dayOfWeek = format(parseISO(selectedDay), 'EEEE')

  const dayIsEmpty = !Object.keys(sortedGroupedEvents).filter(
    group => dayOfWeek === group.split(' ')[0],
  ).length

  return (
    <ScrollArea scrollableRef={scrollableRef}>
      <div className={cx('w-full flex-1 pb-2', {})}>
        <PromotedEvent targetRef={dayIsEmpty ? targetRef : undefined} />

        {Object.keys(sortedGroupedEvents).map((group, index) => (
          <table
            key={index}
            className="w-full border-separate border-spacing-y-1.5">
            <thead
              ref={dayOfWeek === group.split(' ')[0] ? targetRef : undefined}
              className="h-8 w-full"
              // onClick={() => console.log(targetRef)}
            >
              <tr className="text-xs font-medium uppercase text-slate-400 dark:text-slate-50/40">
                <th className="w-[57.5%] border-b border-b-slate-200 pl-6 dark:border-b-slate-50/5">
                  <h4 className="flex items-center gap-2 font-medium ">
                    {group.split(' ')[0]}
                    {/* {format(parseISO(event.startAt), 'EEEE')} */}
                    <span>{group.split(' ')[1]}</span>
                  </h4>
                </th>
                <th className="border-b border-b-slate-200 dark:border-b-slate-50/5">
                  <h4 className="text-right font-medium ">Time</h4>
                </th>
                <th className="border-b border-b-slate-200 pr-6 dark:border-b-slate-50/5">
                  <h4 className="text-right font-medium ">Price</h4>
                </th>
              </tr>
            </thead>

            {Object.values(sortedGroupedEvents).map((events, index) => (
              <tbody key={index}>
                {events.map((event, index) => (
                  <React.Fragment key={index}>
                    {format(parseISO(event.startAt), 'EEEE do') === group && (
                      <tr
                        key={index}
                        className="w-full cursor-pointer overflow-hidden rounded-lg px-6 text-base hocus:bg-slate-200 dark:text-slate-200 dark:hocus:bg-slate-900/20">
                        <td className="py-[0.15rem] pl-7">
                          <div className="-m-1 flex items-center gap-3.5 py-2">
                            <div className="h-[48px] w-[48px] shrink-0">
                              <Image
                                className="rounded-md object-cover"
                                alt=""
                                src={
                                  event.thumbnail || '/images/placeholder.png'
                                }
                                width={48}
                                height={48}
                              />
                            </div>

                            <h3>{event.title}</h3>
                          </div>
                        </td>
                        <td>
                          <p className="text-right">
                            {format(parseISO(event.startAt), 'haaa')}
                          </p>
                        </td>
                        <td className="pr-6">
                          <p className="text-right">{event.price}</p>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                ))}
              </tbody>
            ))}
          </table>
        ))}
      </div>
    </ScrollArea>
  )
}

const UpcomingMintsCard = ({
  id,
  className,
  tabs,
  dropdownTabs,
  shortTabs,
  hideHeader,
  title,
  href,
  Events,
}) => {
  const { scrollIntoView, targetRef, scrollableRef } = useScrollIntoView({
    duration: 700,
    // easing: x =>
    //   x < 0.5 ? 8 * x * x * x * x : 1 - Math.pow(-2 * x + 2, 4) / 2,
  })

  const [selectedDay, setSelectedDay] = useState('2022-07-25T00:00:00.000Z')

  return (
    <Card
      id={id}
      className={className}
      title={title}
      hideHeader={hideHeader}
      href={href}
      tabs={tabs}
      dropdownTabs={dropdownTabs}
      shortTabs={shortTabs}
      overflowHidden={true}>
      <Calendar
        Events={Events}
        scrollIntoView={scrollIntoView}
        selectedDay={selectedDay}
        setSelectedDay={setSelectedDay}
      />
      <UpcomingEvents
        Events={Events}
        scrollableRef={scrollableRef}
        targetRef={targetRef}
        selectedDay={selectedDay}
      />
    </Card>
  )
}

export default UpcomingMintsCard
