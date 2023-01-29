import { Card } from '@/components/layout'
import cx from 'classnames'
import { useState } from 'react'
import { MoneyReceive, MoneySend, Selling } from '../interface/Icons'
import ScrollArea from '../interface/ScrollArea'
import StatBlock from '../interface/StatBlock'
import { Divider, Item, Label } from './ListCard/ListCard'

function Stats() {
  return (
    <div className="mx-auto grid w-full grid-cols-3 items-center gap-9 p-6 px-8 pb-0">
      <StatBlock
        title="Received"
        icon={
          <MoneyReceive className="stroke-slate-500 dark:stroke-slate-200/50" />
        }
        value="$500"
        badge={3}
        unseen
      />
      <StatBlock
        title="My Bids"
        icon={
          <MoneySend className="stroke-slate-500 dark:stroke-slate-200/50" />
        }
        value="$325"
        badge={2}
      />
      {/* 
      <Separator.Root
        decorative
        orientation="vertical"
        className="fadeSep h-[5.25rem] w-px dark:opacity-[0.15]"
      /> */}

      <StatBlock
        title="Auctions"
        icon={<Selling className="stroke-slate-500 dark:stroke-slate-200/50" />}
        value="$250"
      />
    </div>
  )
}

const TradingCard = ({
  id,
  className,
  tabs,
  shortTabs,
  hideHeader,
  title,
  href,
  children,
  items,
}) => {
  return (
    <Card
      id={id}
      className={className}
      title={title}
      hideHeader={hideHeader}
      href={href}
      tabs={tabs}
      shortTabs={shortTabs}
      overflowHidden>
      {children}

      <Stats />

      <Label className="mt-1" title="Activity" attr="Price" />
      <Divider />

      <ScrollArea>
        <div
          className={cx(
            'flex flex-1 grow flex-col gap-2 pt-2 pb-2 transition-all',
          )}>
          <div className="flex flex-col">
            {items.map((item, index) => {
              return <Item item={item} key={index} />
            })}{' '}
          </div>
        </div>
      </ScrollArea>
    </Card>
  )
}

TradingCard.defaultProps = {
  id: 'Trading',
  title: 'Trading',
  href: '/trading',
}

TradingCard.propTypes = {}

export default TradingCard
