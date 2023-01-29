import { Tooltip } from '@/components/interface'
import { Card } from '@/components/layout'
import * as Separator from '@radix-ui/react-separator'
import cx from 'classnames'
import Image from 'next/legacy/image'
import Link from 'next/link'
import PropTypes from 'prop-types'
import { useState } from 'react'

import {
  Airdrop,
  ArrowDown,
  ArrowRefresh,
  ArrowSwap,
  ArrowUp,
  Gavel,
  Memo,
  Verified,
} from '../../interface/Icons'
import ScrollArea from '../../interface/ScrollArea'

const ConditionalWrapper = ({ condition, wrapper, children }) =>
  condition ? wrapper(children) : children

function GroupContainer({ children }) {
  return (
    <div className="group">
      <Label title="Today" attr="April 1st" />
      <Divider />
      {children}
    </div>
  )
}

function DefaultAvatar({ name }) {
  return (
    <span className="relative top-[0.0625rem] mb-[0.2125rem] flex h-4 w-4 justify-center rounded-full bg-slate-200 text-center text-2xs font-medium uppercase text-slate-400 dark:bg-slate-200/10 dark:text-slate-50/40">
      {name.slice(0, 1)}
    </span>
  )
}

const ListCard = ({
  id,
  className,
  title,
  hideHeader,
  href,
  items,
  groups,
}) => {
  return (
    <Card
      id={id}
      className={className}
      title={title}
      href={href}
      hideHeader={hideHeader}
      tabs={['All', 'Sent', 'Received']}
      overflowHidden>
      <ScrollArea>
        <div
          className={cx(
            'flex max-h-full grow flex-col gap-2 overscroll-contain pt-2 pb-2 transition-all',
          )}>
          <ConditionalWrapper
            condition={groups}
            wrapper={children => <GroupContainer children={children} />}>
            <div className="flex flex-col">
              {items.map((item, index) => {
                return <Item item={item} key={index} />
              })}
            </div>
          </ConditionalWrapper>

          {/* <div className="group">
          <Label title="Yesterday" attr="April 2nd" />
          <Divider />
          <div className="flex flex-col">
            {items.map((item, index) => {
              return (
                item.date.includes('1st') && <Item item={item} key={index} />
              )
            })}
          </div>
        </div> */}
        </div>
      </ScrollArea>
    </Card>
  )
}

export const Item = ({ item, index }) => {
  if (!item) {
    return null
  }

  return (
    <>
      <Link legacyBehavior href="/">
        <a className="group relative flex py-2 pr-6 hocus:bg-slate-200 dark:hocus:bg-slate-900/20 ">
          <div className="flex w-6 items-center justify-center">
            {item.status === 'Unseen' && (
              <span className="relative left-0.5 block h-1.5 w-1.5 rounded bg-primary-500" />
            )}
          </div>
          <div className="flex w-6 flex-col items-center gap-1 ">
            <div className="relative -left-1 flex grow flex-col items-center justify-center gap-[5px]">
              {item.icon ? (
                <span className="dark:soft-filter-shadow relative top-[0.0625rem] mb-[0.2125rem] flex h-4 w-4 items-center justify-center">
                  <Image
                    src={'/activity/' + item.icon + '.png'}
                    width={48}
                    height={48}
                    alt={''}
                  />
                </span>
              ) : (
                <DefaultAvatar name={item.name} />
              )}

              {item.type && (
                <div className="flex items-end stroke-slate-500 text-slate-500 dark:stroke-slate-50 dark:text-slate-50/30 dark:opacity-30">
                  {item.type === 'received' ? (
                    <ArrowDown />
                  ) : item.type === 'sent' ? (
                    <ArrowUp />
                  ) : item.type === 'staked' || item.type === 'provided' ? (
                    <ArrowRefresh />
                  ) : item.type === 'airdrop' ? (
                    <Airdrop />
                  ) : item.type === 'bid' ? (
                    <Gavel className="stroke-slate-500 dark:stroke-slate-50" />
                  ) : (
                    <ArrowSwap />
                  )}
                </div>
              )}
            </div>
          </div>
          <div className="grow">
            <div className="flex justify-between text-slate-900 dark:text-slate-200">
              <div className="flex items-center gap-[0.275rem]">
                {item.name ? item.name : item.wallet}
                {item.verified && (
                  <Tooltip
                    content="Verified"
                    side="right"
                    sideOffset={5}
                    asChild
                    micro>
                    <Verified className="fill-primary-500 dark:fill-primary-500/90" />
                  </Tooltip>
                )}
                {item.memo && (
                  <Tooltip
                    content={item.memo}
                    side="right"
                    sideOffset={5}
                    asChild
                    micro
                    info>
                    <span className="flex items-center hover:brightness-75 dark:hover:brightness-110">
                      <Memo className="stroke-slate-500 dark:stroke-slate-400/70" />
                    </span>
                  </Tooltip>
                )}
              </div>
              <div className="text-slate-700 dark:text-slate-50/60">
                {item.value &&
                  (item.value > 0 ? (
                    <span>
                      ${parseFloat(item.value).toLocaleString('en-US')}
                    </span>
                  ) : (
                    <span className="text-red-600 dark:text-red-500">
                      -$
                      {Math.abs(parseFloat(item.value).toLocaleString('en-US'))}
                    </span>
                  ))}
              </div>
            </div>
            <div className="flex justify-between text-sm text-slate-500 dark:text-slate-50/30">
              <div className="text-[0.825rem]">
                <span className="capitalize">
                  {item.type + ' '} {item.description && item.description}
                </span>
              </div>
              <div className="text-right">
                {item.amount && parseFloat(item.amount).toLocaleString('en-US')}{' '}
                {item.currency}
              </div>
            </div>
          </div>
          {item.nft && (
            <span className="mt-0.5 ml-3 flex h-10 w-10 items-center justify-center overflow-hidden rounded">
              <Image
                // src={'/activity/nfts/' + item.nft + '.png'}
                src={
                  item.nft.includes('https://')
                    ? item.nft
                    : '/activity/nfts/' + item.nft + '.png'
                }
                width={100}
                height={100}
                alt={'thumbnail'}
              />
            </span>
          )}
        </a>
      </Link>
      {/* <Separator.Root
        decorative
        className="ml-12 mr-6 h-[1px] bg-slate-200 last:ml-6 group-last:last:hidden dark:bg-slate-50/5"
      /> */}
    </>
  )
}

export const Label = ({ className, title, attr }) => {
  return (
    <div
      className={`flex justify-between px-6 pt-4 pb-2 text-xs font-medium uppercase text-slate-400 dark:text-slate-50/40 ${className}`}>
      <span>{title}</span>
      {attr && <span> {attr}</span>}
    </div>
  )
}

export const Divider = ({ className, title, attr }) => {
  return (
    <Separator.Root
      decorative
      className="mx-6 h-[1px] bg-slate-200 last:hidden dark:bg-slate-50/5"
    />
  )
}

ListCard.Label = Label
ListCard.Item = Item
ListCard.Divider = Divider

ListCard.defaultProps = {
  id: 'List',
  title: 'ListCard',
  href: '/',
}

Label.defaultProps = {
  title: 'Label',
}

ListCard.propTypes = {}
Label.propTypes = {
  title: PropTypes.string,
  attr: PropTypes.string,
}

export default ListCard
