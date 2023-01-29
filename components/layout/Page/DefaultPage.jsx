import { Button } from '@/components/forms'
import { useHotkeys } from '@mantine/hooks'
import classNames from 'classnames'
import { useTheme } from 'next-themes'
import PropTypes from 'prop-types'
import { useState } from 'react'
import { Feedback, Refresh } from '../../interface/Icons'

const DefaultPage = ({ title, children }) => {
  // Hotkeys
  const { theme, setTheme } = useTheme()
  useHotkeys([['ctrl+T', () => setTheme(theme == 'light' ? 'dark' : 'light')]])
  const [isRefreshing, setIsRefreshing] = useState(false)

  const Underscore = ({ className }) => {
    return (
      <span className={className}>
        <span className="-m-[8px] border-[8px]  border-transparent">
          <svg
            className={classNames(
              'origin-top-left opacity-30 transition-none group-hover:motion-safe:animate-blink ',
              'relative bottom-[1px] ml-[2px] bg-slate-100 text-slate-100',
            )}
            width="12"
            height="2.5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              opacity="1"
              d="M144.665 16.954v-2.406H157v2.406h-12.335Z"
              fill="#FCFAFF"
            />
          </svg>
        </span>
      </span>
    )
  }

  return (
    <div className="w-full min-w-0">
      <div className="flex flex-col gap-6 md:py-6 2xl:py-8 mobile:gap-4 mobile:p-4">
        {title && (
          <div className="col-span-12 flex items-center justify-between">
            <h1 className="group relative flex items-center font-carbon text-xl text-[28px] font-medium uppercase leading-10 tracking-[0.02rem] text-primary-50 dark:text-primary-50/90">
              {title}
              <Underscore className={'relative top-2 inline-flex'} />
            </h1>

            <div className="flex items-center justify-center gap-4">
              <Button
                className="flex-1 !gap-3 !bg-transparent !px-4 !text-sm !text-slate-50/40 backdrop-blur-md [&>div]:font-normal"
                title="Feedback"
                type="secondary"
                onDark
                outlined
                wide
                shortcut={
                  <Feedback className="relative -top-[0.025rem] shrink-0 text-primary-50 opacity-60" />
                }
              />

              <Button
                className="w-[38px] flex-1 justify-center !gap-0 !bg-transparent !px-0 !text-slate-50/40 backdrop-blur-md [&>div]:font-normal"
                title=""
                icon={
                  <Refresh
                    className={classNames('text-primary-50 opacity-60', {
                      'animate-spin': isRefreshing,
                    })}
                  />
                }
                type="secondary"
                onClick={() => {
                  // TODO: Hook this up to refresh
                  setIsRefreshing(true)
                  setTimeout(() => setIsRefreshing(false), 1000)
                }}
                onDark
                outlined
                wide
              />
            </div>
          </div>
        )}
        <main className="gutter flex flex-col  xl:grid xl:grid-cols-12 xl:motion-safe:transition-[padding,gap] ">
          {children}
        </main>
      </div>
    </div>
  )
}

DefaultPage.defaultProps = {
  children: 'Empty',
}

DefaultPage.propTypes = {
  children: PropTypes.node.isRequired,
}

export default DefaultPage
