import { Card } from '@/components/layout'
import * as Separator from '@radix-ui/react-separator'
import ChangeIndicator from '../interface/ChangeIndicator'
import { Farming, MoneyReward, MoneyVault } from '../interface/Icons'
import StatBlock from '../interface/StatBlock'

const PassiveIncomeCard = ({
  id,
  className,
  tabs,
  dropdownTabs,
  shortTabs,
  hideHeader,
  title,
  href,
}) => {
  return (
    <Card
      id={id}
      className={className}
      title={title}
      hideHeader={hideHeader}
      href={href}
      tabs={tabs}
      dropdownTabs={dropdownTabs}
      shortTabs={shortTabs}>
      <div className="mx-auto grid w-full grid-cols-3 items-center gap-10 p-6 px-8">
        <StatBlock
          title="Staked"
          icon={
            <MoneyVault className="stroke-slate-500 dark:stroke-slate-200/50" />
          }
          value="$4,287.18"
        />
        <StatBlock
          title="Farming"
          icon={
            <Farming className="stroke-slate-500 dark:stroke-slate-200/50" />
          }
          value="$6,987.25"
        />

        {/* <Separator.Root
          decorative
          orientation="vertical"
          className="fadeSep h-[5.25rem] w-px dark:opacity-[0.15]"
        /> */}

        <StatBlock
          //   className="desktop:flex-1"
          title="Claimable"
          icon={
            <MoneyReward className="rounded-full drop-shadow-[0px_4px_5px_rgba(20,83,45,0.1)]" />
          }
          value="$131.00"
        />
      </div>

      <Separator.Separator
        decorative
        orientation="horizontal"
        className="h-[1px] w-full bg-slate-400/20"
      />

      <div className="mx-auto mt-0.5 flex items-center justify-between gap-4 p-6 py-4">
        <div className="flex flex-wrap items-center justify-center gap-1.5">
          <h4 className="flex items-center text-xs text-slate-500 dark:text-slate-300/70">
            Yield
          </h4>
          <ChangeIndicator change="69.5" />
        </div>
        <div className="flex flex-wrap items-center justify-center gap-1.5">
          <h4 className="flex items-center text-xs text-slate-500 dark:text-slate-300/70">
            Inflation
          </h4>
          <ChangeIndicator change="69.5" reverseColors />
        </div>
        <div className="flex flex-wrap items-center justify-center gap-1.5">
          <h4 className="flex items-center text-xs text-slate-500 dark:text-slate-300/70">
            Diff
          </h4>
          <ChangeIndicator change="69.5" />
        </div>
      </div>
    </Card>
  )
}

export default PassiveIncomeCard
