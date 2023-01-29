import { ChevronDown } from '@/components/interface/Icons'
import { Tab } from '@headlessui/react'

const CardHeaderTabs = ({ tabs, dropdownTabs, defaultTab }) => {
  return (
    <Tab.Group className="-mr-2 flex gap-1" defaultIndex={defaultTab - 1}>
      <Tab.List>
        {dropdownTabs?.map((tab, index) => (
          <Tab
            key={index}
            className={({ selected }) =>
              `group flex cursor-pointer appearance-none gap-3 rounded bg-transparent px-1.5 py-0.5 text-[13px] text-slate-500 outline-none hover:bg-slate-400/20 hover:text-slate-900 active:bg-slate-400/40 motion-safe:transition dark:text-slate-50/50 dark:hover:bg-slate-900/20 dark:hover:text-slate-50 dark:active:bg-slate-900/40 ${
                selected ? 'bg-slate-200/90 dark:bg-slate-900/20' : ''
              } `
            }>
            <span className="flex h-full items-center gap-0.5">
              <p className="flex items-center">{tab}</p>
              <span className="relative top-[1px] -mr-0.5 flex w-[14px] items-center">
                <ChevronDown className="stroke-slate-500 group-hover:stroke-slate-900 dark:stroke-slate-50/50 dark:group-hover:stroke-slate-50" />
              </span>
            </span>
          </Tab>
        ))}

        {tabs?.map((tab, index) => (
          <Tab
            key={index}
            className={({ selected }) =>
              `group flex cursor-pointer appearance-none gap-3 rounded bg-transparent px-1.5 py-0.5 text-[13px] text-slate-500 outline-none hover:bg-slate-400/20 hover:text-slate-900 active:bg-slate-400/40 motion-safe:transition dark:text-slate-50/50 dark:hover:bg-slate-900/20 dark:hover:text-slate-50 dark:active:bg-slate-900/40 ${
                selected ? 'bg-slate-200/90 dark:bg-slate-900/20' : ''
              } `
            }>
            <span className="flex items-center gap-0.5">{tab}</span>
          </Tab>
        ))}
      </Tab.List>
    </Tab.Group>
  )
}

export default CardHeaderTabs
