import { Card } from '@/components/layout'
import Image from "next/legacy/image";
import StatBlock from '../interface/StatBlock'

const PricesCard = ({
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
          title="Proton"
          icon={
            <Image
              src={'/images/coins/XPR.png'}
              width={64}
              height={64}
              alt={'Proton'}
            />
          }
          value="$0.0031"
          sparklineData={[
            5, 10, 5, 12, 8, 15, 12, 17, 14, 17, 18, 19, 22, 14, 20, 25,
          ]}
          change={69.5}
        />
        <StatBlock
          title="Metal"
          icon={
            <Image
              src={'/images/coins/MTL.png'}
              width={64}
              height={64}
              alt={'Metal'}
            />
          }
          value="$1.21"
          sparklineData={[
            10, 12, 6, 10, 8, 15, 12, 17, 14, 13, 16, 12, 11, 14, 11,
          ]}
          change={0.25}
        />
        <StatBlock
          title="Snipcoin"
          icon={
            <Image
              src={'/images/coins/SNIPS.png'}
              width={64}
              height={64}
              alt={'Snipcoin'}
            />
          }
          value="$0.01"
          sparklineData={[2, 2, 3, 4, 8, 15, 12, 11, 15, 12, 28, 28, 20, 20, 7]}
          change={-12.11}
        />
        {/* <StatBlock
          title="Bitcoin"
          icon={
            <Image
              src={'/images/coins/BTC.png'}
              width={64}
              height={64}
              alt={'Bitcoin'}
            />
          }
          value="$20,545.21"
          sparklineData={[2, 2, 3, 4, 8, 15, 12, 11, 15, 12, 28, 28, 20, 20, 7]}
          // sparklineData={[10, 14, 5, 19, 24, 15, 12, 17, 14, 17, 14, 19, 16, 8, 5]}
          change={-32.02}
        /> */}
      </div>
    </Card>
  )
}

export default PricesCard
