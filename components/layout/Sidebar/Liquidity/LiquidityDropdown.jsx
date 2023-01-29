import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { BiChevronDown } from 'react-icons/bi'

const LiquidityDropdown = ({ label, items, align, alignOffset }) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <div className="SidebarLiquidityDropdown flex cursor-pointer appearance-none gap-3 rounded bg-transparent py-1 pl-2 pr-3 outline-none hover:bg-slate-900/20 hover:text-slate-50 focus:bg-slate-800/50 focus:text-slate-50 focus:ring-2 focus:ring-primary-600 state-open:bg-slate-800/50 state-open:text-slate-50 motion-safe:transition">
          <div>{items[0]}</div>
          <div className="relative -top-[1px] flex items-center justify-center opacity-50">
            <BiChevronDown className="absolute" size="20" />
          </div>
        </div>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content
        alignOffset={!alignOffset && 0}
        align={align && align}
        className="relative min-w-[6rem] overflow-hidden rounded-lg bg-primary p-1 text-slate-50 shadow-lg shadow-slate-900/20 before:pointer-events-none dark:shadow-slate-900/50 dark:ring-1 dark:ring-primary-400">
        <DropdownMenu.DropdownMenuGroup className="relative z-10 px-2 py-1 text-xs uppercase text-primary-200">
          {label}
        </DropdownMenu.DropdownMenuGroup>
        <DropdownMenu.Group className="flex flex-col">
          {items.map((item, index) => (
            <DropdownMenu.Item
              key={index}
              className="relative z-0 cursor-pointer rounded-md px-2 py-1 text-sm outline-none focus:bg-primary-700 active:bg-primary-800">
              {item}
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Group>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  )
}

LiquidityDropdown.defaultProps = {
  items: ['Default', 'Need', 'Items'],
  align: 'center',
  alignOffset: 0,
}

LiquidityDropdown.propTypes = {}

export default LiquidityDropdown
