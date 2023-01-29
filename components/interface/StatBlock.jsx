import cx from 'classnames'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Sparklines, SparklinesLine } from 'react-sparklines'
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../tailwind.config.js'
import ChangeIndicator from '../interface/ChangeIndicator'

const twConfig = resolveConfig(tailwindConfig)
const themeColors = twConfig.theme.colors

export default function StatBlock({
  className,
  title,
  icon,
  value,
  sparklineData,
  change,
  unseen,
  badge,
}) {
  const { resolvedTheme } = useTheme()

  const [lineColor, setLineColor] = useState()
  const [fillColor, setFillColor] = useState()

  useEffect(() => {
    if (resolvedTheme === 'light') {
      if (change >= 1) {
        setLineColor(themeColors.green[500])
        setFillColor(themeColors.green[300])
      } else if (change <= -1) {
        setLineColor(themeColors.red[500])
        setFillColor(themeColors.red[300])
      } else {
        setLineColor(themeColors.slate[500])
        setFillColor(themeColors.slate[300])
      }
    } else if (resolvedTheme === 'dark') {
      if (change >= 1) {
        setLineColor(themeColors.emerald[500])
        setFillColor(themeColors.emerald[500])
      } else if (change <= -1) {
        setLineColor(themeColors.red[500])
        setFillColor(themeColors.red[500])
      } else {
        setLineColor(themeColors.slate[400])
        setFillColor(themeColors.slate[400])
      }
    }
  })

  return (
    <Link legacyBehavior href="/">
      <a
        className={cx(
          'align-center -mx-4 -my-2.5 flex min-w-[100px] flex-col justify-center gap-1 rounded-md px-4 py-2.5 text-center outline-none hover:bg-slate-400/10 focus:bg-primary-500/10 focus:ring-2 focus:ring-primary-500 active:bg-slate-400/30 active:ring-0 motion-safe:transition-all dark:hover:bg-slate-900/10 dark:focus:bg-primary-500/10 dark:focus:ring-primary-500 dark:active:bg-slate-900/30',
          className,
        )}
        onClick={e => e.preventDefault()}>
        <span className="dark:soft-filter-shadow relative block h-6 w-6 self-center">
          {badge && (
            <span
              className={cx(
                'absolute -left-2.5 top-0.5 z-20 flex h-4 w-4 items-center justify-center rounded-2xl bg-slate-400 text-center text-[10px] font-semibold text-slate-50 shadow-sm shadow-slate-900/10  ring-1 ring-inset ring-slate-300/10 ',

                {
                  '!bg-primary-500 !ring-primary-300/10': unseen,
                },
              )}>
              {badge}
            </span>
          )}
          {icon}
        </span>

        <h4 className="text-medium mt-1 text-[14px] text-slate-500 dark:text-slate-50/40">
          {title}
        </h4>
        <p className="text-medium text-lg text-slate-900 dark:text-slate-50/60 ">
          {value}
        </p>
        {sparklineData && (
          <span className="mx-auto mt-2 flex h-[15px] w-12 items-center justify-center overflow-hidden rounded [&>svg]:h-full">
            <Sparklines
              data={sparklineData}
              limit={15}
              width={80}
              height={22}
              margin={2}
              max={30}>
              {/* <SparklinesCurve style={{ strokeWidth: 3 }} color="blue" /> */}
              <SparklinesLine
                style={{ strokeWidth: 2.15, fill: fillColor, fillOpacity: 0.3 }}
                color={lineColor}
              />
            </Sparklines>
          </span>
        )}
        {change && (
          <span className="mt-2 -mb-2">
            <ChangeIndicator className="mt-1" change={change} />
          </span>
        )}
      </a>
    </Link>
  )
}
