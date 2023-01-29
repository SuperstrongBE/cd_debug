import { Card } from '@/components/layout'
import { CardDoubleHeader } from '../layout/Card/Card'

import { Discord, Globe, Telegram, Twitter } from '../interface/Icons'

function Item({ icon, title, subtitle }) {
  return (
    <div className="-mx-2 -my-2.5 flex cursor-pointer flex-col items-center gap-1.5 rounded-md px-2 py-2.5  outline-none hover:bg-slate-400/10 focus:bg-primary-500/10 focus:ring-2 focus:ring-primary-500 active:bg-slate-400/30 active:ring-0 motion-safe:transition-all dark:hover:bg-slate-900/10 dark:focus:bg-primary-500/10 dark:focus:ring-primary-500 dark:active:bg-slate-900/30">
      {icon}

      <h3 className="text-base font-semibold leading-tight text-slate-800 dark:text-slate-100/80">
        {title}
      </h3>
      <h4 className="max-w-[95%] truncate text-[16px] leading-tight text-slate-600 dark:text-slate-300/50">
        {subtitle}
      </h4>
    </div>
  )
}

export default function BookmarksCard({ className }) {
  return (
    <Card overflowHidden hideHeader className={className}>
      <div className="flex flex-row items-center justify-between p-8 pb-0 pt-7">
        <CardDoubleHeader subtitle="Useful Links" title="Bookmarks" />
      </div>

      <div className="flex w-full flex-1 flex-col gap-6 overflow-hidden py-6">
        <Card.FadedLine />

        <div className="grid grid-cols-2 gap-4 gap-y-8 px-8">
          <Item
            icon={
              <Twitter className="stroke-slate-400 dark:stroke-slate-300/70" />
            }
            title="Twitter"
            subtitle="@CyberdeckMoney"
          />

          <Item
            icon={
              <Telegram className="stroke-slate-400 dark:stroke-slate-300/70" />
            }
            title="Telegram"
            subtitle="@CyberdeckMoney"
          />

          <Item
            icon={
              <Twitter className="stroke-slate-400 dark:stroke-slate-300/70" />
            }
            title="Email"
            subtitle="support@cyberdeck.money"
          />

          <Item
            icon={<Discord className="fill-slate-400 dark:fill-slate-300/70" />}
            title="Discord"
            subtitle="discord.gg/cyberdeck"
          />
        </div>

        <Card.FadedLine />

        <div className="grid grid-cols-2 gap-4 gap-y-8 px-8">
          <Item
            icon={
              <Globe className="stroke-slate-400 dark:stroke-slate-300/70" />
            }
            title="Our Website"
            subtitle="cyberdeck.money"
          />

          <Item
            icon={
              <Globe className="stroke-slate-400 dark:stroke-slate-300/70" />
            }
            title="Knowhere"
            subtitle="knowhere.art"
          />

          <Item
            icon={
              <Globe className="stroke-slate-400 dark:stroke-slate-300/70" />
            }
            title="Cosmos"
            subtitle="cosmos.network"
          />

          <Item
            icon={
              <Globe className="stroke-slate-400 dark:stroke-slate-300/70" />
            }
            title="Proton"
            subtitle="proton.org"
          />
        </div>
      </div>
    </Card>
  )
}
