import { ActiveLink } from '@/components/interface'

const MobileNavigationItem = ({ content, href, icon, disabled }) => {
  return !disabled ? (
    <ActiveLink
      activeClassName="mobile-item-active !text-primary-400"
      href={href}
      passHref>
      <a className="relative flex flex-1 shrink-0 flex-col items-center justify-center gap-1 pt-3 pb-2 font-defaultSans text-slate-300 dark:text-slate-200">
        <div className="relative flex h-6 w-6 items-center justify-center">
          <div className="absolute z-10 motion-safe:transition-colors">
            {icon}
          </div>
        </div>
        <div className="relative z-10 text-[0.7rem] motion-safe:transition-all">
          {content}
        </div>
        <div className="mobile-item-active-bg absolute top-3 z-0 h-10 w-12 scale-0 rounded-full bg-transparent blur motion-safe:transition-colors motion-safe:duration-200" />
      </a>
    </ActiveLink>
  ) : (
    <div className="relative flex flex-1 shrink-0 flex-col items-center justify-center gap-1 pt-3 pb-2 font-defaultSans text-slate-300 opacity-50 dark:text-slate-400">
      <div className="relative flex h-6 w-6 items-center justify-center">
        <div className="absolute z-10 motion-safe:transition-colors">
          {icon}
        </div>
      </div>
      <div className="relative z-10 text-[0.7rem] motion-safe:transition-all">
        {content}
      </div>
      <div className="mobile-item-active-bg absolute top-3 z-0 h-10 w-12 scale-0 rounded-full bg-transparent blur motion-safe:transition-colors motion-safe:duration-200" />
    </div>
  )
}

export default MobileNavigationItem
