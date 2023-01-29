import * as Separator from '@radix-ui/react-separator'
import classnames from 'classnames'
import Link from 'next/link'
import PropTypes from 'prop-types'
import { BiMinus, BiPlus } from 'react-icons/bi'
import useAbbreviated from '../../hooks/useAbbreviated'
import CardHeaderDropdown from './CardHeaderDropdown'
import CardHeaderTabs from './CardHeaderTabs'

const CardHeader = ({
  title,
  shortTitle,
  toggle,
  isCollapsed,
  collapsable,
  seperator,
  href,
  dropdowns,
  tabs,
  dropdownTabs,
  shortTabs,
  defaultTab,
}) => {
  const optionStyles =
    'h-8 w-8 rounded-full bg-transparent flex justify-center text-slate-400/50 items-center motion-safe:transition active:translate-y-[0.1rem] active:bg-slate-300 dark:text-slate-500'

  const [abbreviated] = useAbbreviated('tablet')

  return (
    <>
      <div className=" pl-4 pr-6">
        <div
          className={classnames(
            'flex h-[64px] items-center justify-between motion-safe:transition-all dark:motion-safe:transition-none',
          )}
          onClick={isCollapsed ? toggle : null}>
          <div className="flex items-center justify-between desktop:w-full">
            <CardHeaderTitle
              title={abbreviated ? shortTitle : title}
              href={href}
              collapsable={collapsable}
              isCollapsed={isCollapsed}
            />
            {!isCollapsed && dropdowns && (
              <div className="-mr-1.5 flex gap-1">
                {dropdowns.map((dropdown, index) => (
                  <CardHeaderDropdown key={index} label={dropdown} />
                ))}
              </div>
            )}
            {!isCollapsed && (tabs || dropdownTabs) && (
              <div className="ml-1.5 flex gap-1">
                <CardHeaderTabs
                  tabs={abbreviated ? shortTabs : tabs}
                  dropdownTabs={dropdownTabs}
                  defaultTab={defaultTab}
                />
              </div>
            )}
          </div>
          <div className="relative -right-[0.65rem] flex items-center justify-center gap-2">
            <a
              onClick={isCollapsed ? null : toggle}
              className={classnames(
                !collapsable && 'hidden',
                optionStyles,
                'will-change-transform lg:hidden',
                isCollapsed
                  ? 'pointer-events-none tablet:text-slate-300 tablet:dark:text-slate-200/50'
                  : 'hover:bg-slate-400/30 hover:text-slate-700 dark:hover:bg-slate-500/30 dark:hover:text-slate-300 dark:active:bg-slate-500/50 tablet:text-slate-500/50 tablet:dark:text-slate-300/50 ',
              )}>
              {isCollapsed ? <BiPlus size="20" /> : <BiMinus size="20" />}
            </a>
          </div>
        </div>
      </div>
      {seperator && (
        <Separator.Root
          decorative
          className={classnames(
            'relative top-[1px] -mt-[1px] h-[1px] flex-none bg-slate-300/50 motion-safe:transition-colors dark:bg-slate-50/[0.08]',
            isCollapsed && 'tablet:!bg-transparent',
          )}
        />
      )}
    </>
  )
}

const CardHeaderTitle = ({ title, href, collapsable, isCollapsed }) => {
  const defaultStyles = classnames(
    'text-lg leading-5 font-medium decoration-slate-400 motion-safe:transition-all py-1 px-2',
    !isCollapsed
      ? 'color-slate-900 dark:color-slate-50'
      : 'tablet:pointer-events-none tablet:!text-slate-50 dark:tablet:opacity-50',
  )
  const linkStyles = classnames(
    defaultStyles,
    'rounded outline-none hover:bg-slate-400/20 focus:bg-primary-500/20 focus:ring-2 focus:ring-primary-500 active:bg-slate-400/40 active:ring-0 dark:hover:bg-slate-900/20 dark:focus:ring-primary-500 dark:active:bg-slate-900/40',
  )

  return (
    <div className="relative flex h-15 items-center">
      {href ? (
        <Link legacyBehavior href={href}>
          <a className={linkStyles}>{title}</a>
        </Link>
      ) : (
        <h1 className={defaultStyles}>{title}</h1>
      )}
    </div>
  )
}

CardHeader.defaultProps = {
  title: 'Title',
  children: 'Content',
  isCollapsed: false,
  seperator: true,
}

CardHeader.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any,
  className: PropTypes.string,
  isOpen: PropTypes.bool,
  dropdowns: PropTypes.array,
}

export default CardHeader
