import { useLocalStorage } from '@mantine/hooks'
import classnames from 'classnames'
import Link from 'next/link'
import PropTypes from 'prop-types'

export default function Button({
  href,
  className,
  type,
  icon,
  rounded,
  title,
  wide,
  attr,
  shortcut,
  external,
  onDark,
  outlined,
  disabled,
  onClick,
  micro,
  transparent,
}) {
  const [userTheme, setUserTheme] = useLocalStorage({
    key: 'userTheme',
  })

  const invert = userTheme?.invertButtons ? true : false

  return (
    <div
      title={disabled && 'Not yet implement, patience!'}
      className={classnames(
        'flex',
        wide && 'w-full',
        disabled && 'cursor-not-allowed',
      )}>
      <Link legacyBehavior href={href}>
        <a
          role="button"
          onClick={onClick}
          target={external && '_blank'}
          className={classnames(
            'group hover:scale-[1.02] active:translate-y-0 active:scale-[0.98]',
            wide && 'grow',
            rounded && 'rounded-full',

            attr ? 'pr-0' : 'gap-1.5 px-4',
            icon ? 'pl-2' : 'pl-4',
            shortcut ? 'pr-2.5' : '',
            micro ? 'h-8 gap-2 !rounded !px-2.5' : '',
            transparent ? '!bg-transparent' : '',

            'button ease-[cubic-bezier(.17,.59,.4,.77) flex items-center rounded-md outline-none ring-1 ring-inset ring-transparent will-change-transform motion-safe:transition',
            type == 'secondary' &&
              (outlined
                ? 'bg-transparent text-slate-700 shadow-[0px_1px_8.5px_rgba(16,24,40,0.015),0px_0.5px_2.1px_rgba(16,24,40,0.075),0px_0.2px_0.5px_rgba(16,24,40,0.08)] !ring-slate-300 dark:bg-slate-100/[0.05] dark:text-slate-200 dark:!ring-slate-50/10 md:hover:bg-slate-100 dark:md:hover:!bg-slate-200/10'
                : 'bg-slate-300/60 dark:bg-slate-50/10 dark:hover:bg-slate-50/20 dark:hover:ring-1 dark:hover:ring-slate-50/20 md:hover:bg-slate-300'),
            outlined &&
              onDark &&
              '!text-slate-200  !ring-slate-50/10 md:hover:!bg-slate-200/10',
            type == 'primary' &&
              'light:ring-red-500 bg-primary-600 bg-gradient-to-b from-primary-400/[0.425] via-primary-400/40 to-primary-600/50  font-medium text-primary-50 shadow shadow-slate-900/10 hover:shadow-xl hover:shadow-slate-900/10 active:bg-primary-700 dark:shadow-md dark:shadow-slate-900/30 dark:hover:shadow-xl dark:hover:shadow-slate-900/30',
            { '!text-primary-1000': type === 'primary' && invert },
            type == 'primary' &&
              onDark &&
              '!shadow-lg  dark:ring-white/10  dark:hover:ring-white/[0.15]',
            disabled && 'pointer-events-none opacity-30',

            !title && '!w-10',
            // icon && !title && '!bg-dev',
            className,
          )}>
          {icon && (
            <div className="flex h-10 items-center justify-center">
              <div
                className={classnames(
                  'flex h-6 w-6 items-center justify-center',
                  micro ? 'w-auto' : '',
                  type === 'primary' &&
                    invert &&
                    '[&>*]:text-primary-1000 [&>*>*]:stroke-primary-1000',
                )}>
                {icon}
              </div>
            </div>
          )}
          {title && (
            <div className="flex grow items-center py-2 text-center text-sm">
              {title}
            </div>
          )}
          {attr && (
            <div className="flex h-10 items-center justify-center">
              <div
                className={classnames(
                  'flex h-6 w-10 items-center justify-center opacity-60',
                  micro ? 'w-auto' : '',
                  type === 'primary' &&
                    invert &&
                    '[&>*]:text-primary-1000 [&>*>*]:stroke-primary-1000',
                )}>
                {attr}
              </div>
            </div>
          )}
          {shortcut && (
            <div className="flex h-10 items-center justify-center">
              <div
                className={classnames(
                  'flex h-6 items-center justify-center',
                  type === 'primary' &&
                    invert &&
                    '[&>*]:text-primary-1000 [&>*>*]:stroke-primary-1000',
                )}>
                {shortcut}
              </div>
            </div>
          )}
        </a>
      </Link>
    </div>
  )
}

Button.defaultProps = {
  // title: 'Button',
  href: '#',
  icon: null,
  type: 'secondary',
}

Button.propTypes = {
  // title: PropTypes.string,
  className: PropTypes.string,
  icon: PropTypes.node,
  type: PropTypes.oneOf(['primary', 'secondary']),
}
