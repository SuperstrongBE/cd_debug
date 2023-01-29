import * as Collapsible from '@radix-ui/react-collapsible'
import { useState } from 'react'
import { BiChevronRight } from 'react-icons/bi'
import SidebarCardHeader from './SidebarCardHeader'

export default function SidebarCard({
  children,
  icon,
  title,
  balance,
  collapsable,
}) {
  const [open, setOpen] = useState(true)

  return (
    <div className="md:bg-blur flex-none overflow-hidden rounded-md bg-slate-100/15 text-slate-50/50 shadow-lg shadow-slate-900/20 ring-1 ring-inset ring-slate-300/10 backdrop-blur-xl -backdrop-blur:bg-slate-700/90 dark:bg-slate-400/15 dark:shadow-slate-900/30 dark:ring-slate-300/5 dark:-backdrop-blur:bg-slate-700/90 ">
      <Collapsible.Root
        disabled={!collapsable}
        defaultOpen={true}
        onOpenChange={() => setOpen(!open)}>
        <Collapsible.Trigger className="group w-full hover:brightness-110">
          <SidebarCardHeader
            icon={
              open ? (
                icon
              ) : (
                <BiChevronRight
                  className="text-white group-hover:rotate-90 motion-safe:transition"
                  size="28"
                />
              )
            }
            title={title}
            balance={balance}
          />
        </Collapsible.Trigger>

        <Collapsible.Content>{children}</Collapsible.Content>
      </Collapsible.Root>
    </div>
  )
}
