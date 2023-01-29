import { Card } from '@/components/layout'
import { Farming, MoneyVault, MyNFTs } from '../interface/Icons'
import StatBlock from '../interface/StatBlock'

const ProfitAndLossCard = ({
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
          title="Assets"
          icon={
            <MoneyVault className="stroke-slate-500 dark:stroke-slate-200/50" />
          }
          value="1,192.92"
          sparklineData={[
            5, 10, 5, 12, 8, 15, 12, 17, 14, 17, 18, 19, 22, 19, 23, 25,
          ]}
          change={69.5}
        />
        <StatBlock
          title="NFTs"
          icon={
            <MyNFTs className="stroke-slate-500 dark:stroke-slate-200/50" />
          }
          value="$1,885.05"
          sparklineData={[
            5, 10, 5, 12, 8, 15, 12, 17, 14, 17, 18, 19, 22, 19, 23, 25,
          ]}
          change={12.2}
        />
        <StatBlock
          title="Farming"
          icon={
            <Farming className="stroke-slate-500 dark:stroke-slate-200/50" />
          }
          value="$122.21"
          sparklineData={[
            5, 10, 5, 12, 8, 15, 12, 17, 14, 17, 18, 19, 22, 19, 23, 25,
          ]}
          change={69.5}
        />
      </div>
    </Card>
  )
}

export default ProfitAndLossCard
