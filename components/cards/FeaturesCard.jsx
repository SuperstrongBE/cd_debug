import { Button } from '@/components/forms'
import { Card } from '@/components/layout'
import classnames from 'classnames'
import { useTheme } from 'next-themes'
import { useState } from 'react'
import { Alpha, ArrowRight, Console, PaintRoller } from '../interface/Icons'
import ImageFrame from '../interface/ImageFrame'
import ProgressIndicator from '../interface/ProgressIndicator'
import ScrollArea from '../interface/ScrollArea'
import { CardDoubleHeader } from '../layout/Card/Card'

function FeatureBlock({ type, title, text, image, darkImage, link, stage }) {
  const { resolvedTheme } = useTheme()

  return (
    <>
      <Card.Item
        icon={
          type === 'Design' ? (
            <PaintRoller className="stroke-slate-400 dark:opacity-80" />
          ) : type === 'Code' ? (
            <Console className="stroke-slate-400 dark:opacity-80" />
          ) : (
            <Alpha className="fill-slate-400 dark:opacity-80" />
          )
        }
        title={title}
        text={text}
        attr={
          (image && (
            <div className="flex shrink-0 flex-col items-center gap-3">
              <div className="flex h-[72px] w-[96px]">
                <ImageFrame
                  src={resolvedTheme === 'light' ? image : darkImage}
                  title="Demo Dashboard"
                />
              </div>
              {link && (
                <Button
                  title="View"
                  type="secondary"
                  className="!h-6 gap-1 !rounded-md !px-2 font-semibold uppercase !text-slate-500 dark:!text-slate-50/80 [&>div]:!text-[10px]"
                  external
                  outlined
                  micro
                  attr={
                    <ArrowRight className="stroke-slate-900 dark:stroke-slate-50" />
                  }
                />
              )}
            </div>
          )) ||
          undefined
        }
      />

      <ProgressIndicator stage={stage} className="mb-7 -mt-2.5 shrink-0 pl-8" />
    </>
  )
}

export default function FeaturesCard({ className, items }) {
  return (
    <Card hideHeader overflowHidden className={className}>
      <div className="flex flex-row items-center justify-between p-8 pb-0 pt-7">
        <CardDoubleHeader subtitle="We're Building" title="Features" />
      </div>

      <div className="flex w-full flex-1 flex-col overflow-hidden py-6 pb-0">
        <Card.FadedLine />

        <ScrollArea>
          <div
            className={classnames(
              'flex flex-1 flex-col gap-6 px-8 pt-6 pb-6 transition-all',
            )}>
            {items.map((item, idx) => (
              <FeatureBlock key={idx} {...item} />
            ))}
          </div>
        </ScrollArea>
      </div>
    </Card>
  )
}
