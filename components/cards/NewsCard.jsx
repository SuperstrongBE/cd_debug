import { Button } from '@/components/forms'
import { Card } from '@/components/layout'
import classnames from 'classnames'
import { useState } from 'react'
import { BiLinkExternal } from 'react-icons/bi'
import { Alpha, Console, Whitelist } from '../interface/Icons'
import ScrollArea from '../interface/ScrollArea'
import { CardDoubleHeader } from '../layout/Card/Card'

function NewsBlock({ date, title, type, text, user, link }) {
  return (
    <>
      <Card.Item
        link={link}
        icon={
          type === 'Development' ? (
            <Console className="stroke-slate-400 dark:opacity-80" />
          ) : type === 'News' ? (
            <Whitelist className="stroke-slate-400 dark:opacity-80" />
          ) : (
            <Alpha className="fill-slate-400 dark:opacity-80" />
          )
        }
        title={title}
        text={text}
        tag={type}
        user={user}
      />
    </>
  )
}

export default function NewsCard({ className, items }) {
  return (
    <Card
      overflowHidden
      hideHeader
      className="col-span-12 overflow-hidden 2xl:col-span-4 desktop:max-h-[50rem]">
      <div className="flex flex-row items-center justify-between p-8 pb-0 pt-7">
        <CardDoubleHeader
          subtitle="Read Our Latest"
          title="News &amp; Releases"
        />

        <div className="flex">
          <Button
            href="https://cyberdeckmoney.notion.site/Journal-Updates-News-8b794e32833148719e92c85f5cd00e23"
            title="Read All"
            type="secondary"
            className="font-normal"
            external
            outlined
            micro
            attr={<BiLinkExternal className="opacity-75" size="14" />}
          />
        </div>
      </div>

      <div className="flex w-full flex-1 flex-col overflow-hidden py-6 pb-0">
        <Card.FadedLine />

        <ScrollArea>
          <div
            className={classnames(
              'flex flex-1 flex-col gap-6 px-8 pt-6 pb-6 transition-all',
            )}>
            {items.map((item, idx) => (
              <NewsBlock key={idx} {...item} />
            ))}
          </div>
        </ScrollArea>
      </div>
    </Card>
  )
}
