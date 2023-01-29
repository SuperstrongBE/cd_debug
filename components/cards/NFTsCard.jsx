import { Card } from '@/components/layout'
import classnames from 'classnames'
import Image from 'next/legacy/image'
import Link from 'next/link'
import { BiDownArrowAlt, BiUpArrowAlt } from 'react-icons/bi'
import { ArrowUpAlt, MoneyReceipt, MoneyReceive } from '../interface/Icons'
import StatBlock from '../interface/StatBlock'

function Stats() {
  return (
    <div className="mx-auto grid w-full grid-cols-3 items-center gap-9 p-6 px-8 pb-0">
      <StatBlock
        title="Bought"
        icon={
          <MoneyReceipt className="stroke-slate-500 dark:stroke-slate-200/50" />
        }
        value="$4,986.18"
      />
      <StatBlock
        title="Sold"
        icon={
          <MoneyReceive className="stroke-slate-500 dark:stroke-slate-200/50" />
        }
        value="$6,871.23"
      />
      {/* 
      <Separator.Root
        decorative
        orientation="vertical"
        className="fadeSep h-[5.25rem] w-px dark:opacity-[0.15]"
      /> */}

      <StatBlock
        title="Profit / Loss"
        icon={
          <ArrowUpAlt className="stroke-slate-500 dark:stroke-slate-200/50" />
        }
        value="$1,885.05"
      />
    </div>
  )
}

const NFTsCard = ({
  id,
  className,
  dropdowns,
  tabs,
  shortTabs,
  hideHeader,
  title,
  href,
  children,
  NFTs,
}) => {
  function checkChange(numA, numB) {
    return ((numA - numB) / numB) * 100
  }

  return (
    <Card
      id={id}
      className={className}
      title={title}
      hideHeader={hideHeader}
      href={href}
      tabs={tabs}
      shortTabs={shortTabs}
      scrollable>
      {children}

      <Stats />

      {/* <Separator.Separator
        decorative
        orientation="horizontal"
        className="h-[1px] w-full bg-slate-400/20"
      /> */}

      <div className="grid grid-cols-3 gap-4 p-6">
        {NFTs.slice(8, 17).map((nft, index) => (
          <NFT
            key={index}
            nft={nft}
            change={checkChange(nft.value, nft.cost)}
          />
        ))}
      </div>
    </Card>
  )
}

const NFT = ({ nft, className, change }) => {
  // TODO Abstract this into its own component

  return (
    <Link legacyBehavior href="/nfts">
      <a
        className={classnames(
          'flex flex-col gap-1.5 text-xs outline-none active:scale-95 motion-safe:transition-all',
          className,
        )}
        key={nft.id}>
        <div className="relative">
          <div className="flex overflow-hidden rounded-md shadow-xl shadow-slate-900/15 dark:shadow-slate-900/20 ">
            <div className="Image">
              <Image
                src={nft.image_url}
                width={400}
                height={400}
                alt={`NFT: #${nft.id}`}
              />
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 flex justify-center p-2 pt-0">
            <div
              className={classnames(
                'inline-flex gap-0.5 rounded-full pl-0.5 pr-1.5 text-xs font-medium leading-4 backdrop-blur-md',
                change < 0
                  ? 'bg-red-600/[0.85] text-red-50'
                  : 'bg-green-600/[0.85] text-green-50 ',
              )}>
              <div className="relative flex h-4 w-4 items-center justify-center">
                <div className="absolute">
                  {change < 0 ? (
                    <BiDownArrowAlt size="14" />
                  ) : (
                    <BiUpArrowAlt size="14" />
                  )}
                </div>
              </div>
              <div className="">
                {change.toFixed(2).replace('.00', '') + '%'}
              </div>
            </div>
          </div>
        </div>
      </a>
    </Link>
  )
}

NFTsCard.Item = NFT

NFTsCard.defaultProps = {
  id: 'NFTs',
  title: 'Collected',
  href: '/nfts',
}

NFTsCard.propTypes = {}

export default NFTsCard
