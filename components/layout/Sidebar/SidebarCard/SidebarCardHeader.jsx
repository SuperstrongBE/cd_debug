export default function SidebarCardHeader({ icon, title, balance }) {
  return (
    <div className="relative z-10 box-border flex h-10 w-full flex-col items-center justify-between divide-y divide-slate-50/5 border-b-[1px] border-t-[1px] border-t-primary-100/[0.185] border-b-primary-100/[0.15] bg-slate-50/5 bg-gradient-to-b from-primary-50/10 to-primary-100/5 bg-clip-padding text-sm text-slate-100 shadow-sm shadow-slate-900/20 hover:bg-primary-100/[0.075]	dark:text-slate-300">
      <div className="flex h-full w-full items-center justify-between px-3">
        <div className="flex items-center justify-center gap-2">
          {icon && (
            <span className="flex h-[22px] w-[22px] items-center justify-center dark:opacity-80">
              {icon}
            </span>
          )}
          <h3>{title}</h3>
        </div>
        <span>{balance}</span>
      </div>
    </div>
  )
}
