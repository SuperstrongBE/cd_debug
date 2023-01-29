import * as Separator from '@radix-ui/react-separator'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import { useState } from 'react'
import { BiChevronRight } from 'react-icons/bi'
import StaffAvatar from '../../interface/StaffAvatar'
import TagLabel from '../../interface/TagLabel'
import CardContent from './CardContent'
import CardHeader from './CardHeader'

const Card = ({
  className,
  id,
  title,
  shortTitle,
  children,
  collapsable,
  emptyText,
  dropdowns,
  dropdownTabs,
  tabs,
  shortTabs,
  defaultTab,
  seperator,
  hideHeader,
  hero,
  href,
  scrollable,
  overflowHidden,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(false)

  const toggleIsCollapsed = e => {
    e.preventDefault()
    setIsCollapsed(!isCollapsed)
  }

  return (
    <div
      id={id}
      className={classnames(
        'flex flex-none grow transform-gpu flex-col rounded-lg bg-slate-50 text-slate-900 shadow-lg shadow-black/20 motion-safe:transition-all dark:bg-slate-400/30 dark:text-slate-200 dark:ring-1 dark:ring-inset dark:ring-slate-300/10 dark:backdrop-blur-xl dark:backface-hidden dark:-backdrop-blur:bg-slate-700 dark:tablet:backdrop-blur-lg',
        isCollapsed &&
          'cursor-pointer shadow shadow-slate-900/10 ring-inset  tablet:bg-slate-100/10 tablet:ring-1 tablet:ring-slate-300/5 tablet:dark:bg-slate-400/10 tablet:dark:ring-slate-300/5 dark:tablet:backdrop-blur-none',
        hero && 'bg-dev',
        overflowHidden && 'overflow-hidden',
        className,
      )}>
      {!hideHeader && (
        <CardHeader
          href={href}
          title={title}
          shortTitle={shortTitle ? shortTitle : title}
          toggle={toggleIsCollapsed}
          isCollapsed={isCollapsed}
          collapsable={collapsable}
          dropdowns={dropdowns}
          tabs={tabs}
          dropdownTabs={dropdownTabs}
          shortTabs={shortTabs ? shortTabs : tabs}
          defaultTab={defaultTab}
          seperator={seperator}
        />
      )}

      <CardContent
        isCollapsed={isCollapsed}
        emptyText={emptyText}
        scrollable={scrollable}
        overflowHidden={overflowHidden}>
        {children}
      </CardContent>
    </div>
  )
}

const CardItem = ({
  icon,
  title,
  text,
  className,
  togglable,
  open,
  children,
  tag,
  user,
  attr,
  link,
  status,
}) => {
  return !togglable ? (
    <div
      onClick={e => {
        e.preventDefault()
        e.stopPropagation()

        if (link) {
          window.open(link, '_blank')
        }
      }}
      className={classnames(
        'flex gap-5',
        {
          '-mx-3 -my-2.5 cursor-pointer rounded-md px-3 py-2.5 outline-none hover:bg-slate-400/10 focus:bg-primary-500/10 focus:ring-2 focus:ring-primary-500 active:bg-slate-400/30 active:ring-0 motion-safe:transition-all dark:hover:bg-slate-900/10 dark:focus:bg-primary-500/10 dark:focus:ring-primary-500 dark:active:bg-slate-900/30':
            link,
        },
        className,
      )}>
      <div className={classnames('flex w-full flex-col')}>
        <h3 className="mb-1 flex w-full items-center justify-between text-base font-medium leading-6 text-slate-800 dark:text-slate-50/80">
          <span className="flex h-full items-center">
            {icon && (
              <span className="relative top-1 flex h-full w-8 shrink-0 grow-0 items-start justify-start self-start">
                {icon}
              </span>
            )}
            <span className="flex h-full w-full items-center leading-6">
              {title}
            </span>
          </span>
          {tag && (
            <span className="relative top-1 flex items-center justify-start gap-2 self-start">
              <TagLabel color="gray" label={tag} />

              {user && <StaffAvatar user={user} size="16" />}
            </span>
          )}
          {status && (
            <span className="relative top-1 flex items-center justify-start gap-2 self-start">
              {status}
            </span>
          )}
        </h3>
        {text ? (
          <p
            className={classnames('opacity-60 2xl:w-full', {
              'pl-8': icon,
            })}>
            {text}
          </p>
        ) : (
          children
        )}
      </div>

      {attr && attr}
    </div>
  ) : (
    <details
      open={open}
      className={classnames('group relative flex flex-col gap-1 ', className)}>
      <summary className="list-none marker:text-slate-500 dark:marker:text-slate-50/20">
        <span className="-ml-1 cursor-pointer select-none rounded px-1 text-lg font-medium leading-6 hover:bg-slate-200 motion-safe:transition-[font] dark:opacity-70 dark:hover:bg-slate-50/10 dark:group-open:opacity-100">
          {title}
          <span className="absolute top-1 -left-6 opacity-50 group-open:rotate-90 motion-safe:transition-transform ">
            <BiChevronRight />
          </span>
        </span>
      </summary>
      {text ? <p className="pt-1 opacity-60 ">{text}</p> : children}
    </details>
  )
}

const CardSeperator = ({ className }) => {
  return (
    <Separator.Root
      className={classnames(
        'relative h-[1px] w-full flex-none bg-slate-300/60 motion-safe:transition-colors dark:bg-slate-50/[0.08]',
        className,
      )}
    />
  )
}

const CardFadedSeperator = ({ className, wide, rtl }) => {
  return (
    <Separator.Root
      decorative
      className={classnames(
        wide ? `!m-0 w-full` : `w-[calc(100%-32px)]`,
        rtl
          ? `mr-8 bg-gradient-to-l`
          : `ml-8 bg-gradient-to-r via-[#E2E8F0]/80`,
        `h-[1px] from-[#E2E8F0] to-[#E2E8F0]/0 dark:from-slate-50/10`,
        className,
      )}
    />
  )
}

export function CardDoubleHeader({ title, subtitle, className }) {
  return (
    <div className={`flex flex-col ${className}`}>
      <h3 className="text-sm font-semibold uppercase text-slate-500 dark:text-slate-300">
        {subtitle}
      </h3>
      <span className="text-xl font-medium ">{title}</span>
    </div>
  )
}

Card.Header = CardHeader
Card.Content = CardContent
Card.Line = CardSeperator
Card.FadedLine = CardFadedSeperator
Card.Item = CardItem

Card.defaultProps = {
  shadow: true,
  collapsable: true,
  hideHeader: false,
}

CardFadedSeperator.defaultProps = {
  rtl: false,
  wide: false,
}

Card.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any,
  className: PropTypes.string,
  collapsable: PropTypes.bool,
  emptyText: PropTypes.string,
  hideHeader: PropTypes.bool,
}

export default Card
