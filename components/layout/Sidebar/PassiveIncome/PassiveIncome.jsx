import * as Separator from '@radix-ui/react-separator'
import { PassiveIncomeIcon } from '../../../interface/Icons'
import SidebarCard from '../SidebarCard/SidebarCard'
import SidebarCardItem from '../SidebarCard/SidebarCardItem'

const PassiveIncome = ({}) => {
  return (
    <SidebarCard
      collapsable={true}
      icon={<PassiveIncomeIcon />}
      title="Passive"
      balance="$49,629.67">
      <SidebarCardItem title="Staked" balance="$37,583.28" />
      <Separator.Root
        decorative
        className="h-[1px] bg-slate-50/5 last:hidden  dark:bg-slate-50/3"
      />
      <SidebarCardItem title="Farming" balance="$60,051.08" />
    </SidebarCard>
  )
}

export default PassiveIncome
