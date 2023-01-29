import { ActiveLink, Tooltip } from '@/components/interface'
import classNames from 'classnames'
import classnames from 'classnames'

const DesktopNavigationItem = ({
  className,
  content,
  href,
  icon,
  disabled,
  showLabel,
  logo,
}) => {
  return !showLabel ? (
    <Tooltip content={content} side="right" sideOffset={12} asChild>
      <ActiveLink
        activeClassName="desktop-navigation-item-active"
        href={href}
        passHref>
        <a
          className={classnames(
            'desktop-navigation-item m-1 flex h-8 w-8 items-center justify-center rounded-full align-middle',
            className && className,
            {
              '!pointer-events-none cursor-zoom-in !opacity-50': disabled,
            },
          )}>
          <div className="relative flex h-8 w-8 items-center justify-center ">
            <div
              className={classNames(
                'absolute opacity-100 group-hover:opacity-100 dark:opacity-80',
                {
                  'opacity-100 dark:opacity-90': logo,
                },
              )}>
              {icon}
            </div>{' '}
          </div>
        </a>
      </ActiveLink>
    </Tooltip>
  ) : showLabel ? (
    <ActiveLink
      activeClassName="desktop-navigation-item-active"
      href={href}
      passHref>
      <a
        className={classnames(
          'desktop-navigation-item group m-1 flex h-8 w-[8.75rem] items-center justify-start rounded align-middle',
          className && className,
          {
            '!pointer-events-none cursor-zoom-in !opacity-50': disabled,
          },
        )}>
        <div className="relative flex h-8 w-8 items-center justify-start px-1.5 text-[15px] text-primary-50">
          <div className="relative opacity-100 group-hover:opacity-100 dark:opacity-80">
            {icon}
          </div>

          <div className="ml-2.5">{content}</div>
        </div>
      </a>
    </ActiveLink>
  ) : null
}

export default DesktopNavigationItem
