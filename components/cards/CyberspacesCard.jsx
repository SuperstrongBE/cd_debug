import { Button } from '@/components/forms'
import { Card } from '@/components/layout'
import classnames from 'classnames'
import Image from 'next/legacy/image'
import { useState } from 'react'
import { BiLinkExternal } from 'react-icons/bi'
import ImageFrame from '../interface/ImageFrame'
import ScrollArea from '../interface/ScrollArea'
import { CardDoubleHeader } from '../layout/Card/Card'

function CyberspaceBlock({ platform, title, text, image, link }) {
  return (
    <Card.Item
      icon={
        platform === 'Terra' ? (
          <Image
            src={'/images/cyberspaces/icons/terra.png'}
            className="dark:soft-filter-shadow object-contain object-center"
            width={16}
            height={17}
          />
        ) : platform === 'Proton' ? (
          <Image
            src={'/images/cyberspaces/icons/proton.png'}
            className="dark:soft-filter-shadow object-contain object-center dark:brightness-150"
            width={17}
            height={17}
          />
        ) : undefined
      }
      title={title}
      text={text}
      attr={
        (image && (
          <div className="flex shrink-0 flex-col items-center gap-3">
            <div className="flex h-[96px] w-[96px]">
              <ImageFrame src={image} title="" media />
            </div>
            {link && (
              <Button
                title="Listen"
                type="secondary"
                className="!h-6 gap-1 !rounded-md !px-2 font-semibold uppercase !text-slate-500 dark:!text-slate-50/80 [&>div]:!text-[10px]"
                external
                outlined
                micro
                attr={
                  <BiLinkExternal className="text-slate-900 dark:text-slate-50" />
                }
              />
            )}
          </div>
        )) ||
        undefined
      }
    />
  )
}

export default function CyberspacesCard({ className, items }) {
  return (
    <Card overflowHidden hideHeader className={className}>
      <div className="flex flex-row items-center justify-between p-8 pb-0 pt-7">
        <CardDoubleHeader subtitle="Listen To" title="Cyberspaces" />
      </div>

      <div className="flex w-full flex-1 flex-col overflow-hidden py-6 pb-0">
        <Card.FadedLine />

        <ScrollArea>
          <div
            className={classnames(
              'flex flex-1 flex-col gap-6 px-8 pt-6 pb-6 transition-all',
            )}>
            {items.map((item, idx) => (
              <CyberspaceBlock key={idx} {...item} />
            ))}
          </div>
        </ScrollArea>
      </div>
    </Card>
  )
}
