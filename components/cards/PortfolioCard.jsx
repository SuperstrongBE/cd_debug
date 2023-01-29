import { Card } from '@/components/layout'
import { useLocalStorage } from '@mantine/hooks'
import { linearGradientDef } from '@nivo/core'
import * as Separator from '@radix-ui/react-separator'
import { useTheme } from 'next-themes'
import dynamic from 'next/dynamic'
import { useEffect } from 'react'
import { useState } from 'react'
import resolveConfig from 'tailwindcss/resolveConfig'
import ChartData from '../../data/ChartData'
import tailwindConfig from '../../tailwind.config.js'
import useHueRotate from '../hooks/useHueRotate'
import ChangeIndicator from '../interface/ChangeIndicator'
import tinycolor from 'tinycolor2'

const twConfig = resolveConfig(tailwindConfig)
const themeColors = twConfig.theme.colors

const Color = require('color')

const ResponsiveLine = dynamic(
  () => import('@nivo/line').then(mod => mod.ResponsiveLine),
  {
    ssr: false,
  },
)

const ResponsivePie = dynamic(
  () => import('@nivo/pie').then(mod => mod.ResponsivePie),
  {
    ssr: false,
  },
)

const PortfolioCard = ({ }) => {
  const { resolvedTheme } = useTheme()

  const [userTheme, setUserTheme] = useLocalStorage({
    key: 'userTheme',
  })

  const [defaultColor, setDefaultColor] = useState('#2196f3') // Blue-500
  const [themeColor, setThemeColor] = useState('#2196f3')

  useEffect(() => {
    if (userTheme) {
      setThemeColor(tinycolor(userTheme.primary).toHexString())
    } else {
      setThemeColor(defaultColor)
    }
  }, [userTheme])

  function StatOverview({
    keyColor,
    title,
    value,
    change,
    separator,
    alignRight,
    reverseChangeColors,
  }) {
    return (
      <div className="flex flex-1 flex-nowrap rounded bg-slate-50/80 p-2.5 px-3 text-[0.8125rem] dark:bg-slate-400/10 mobile:leading-tight mobile-to-desktop:text-[1.5vw] desktop:grow-0 desktop:bg-transparent desktop:p-0 desktop:text-sm desktop:dark:bg-transparent desktop-to-wide:text-[1.2vw]">
        <div>
          <h3
            className={`${alignRight ? 'whitespace-nowrap desktop:float-right' : ''
              } flex items-center gap-1.5 text-slate-500 dark:text-slate-50/40 mobile:text-[13px] mobile-to-desktop:text-[13px] wide:text-base `}>
            {keyColor ? (
              <span
                className="inline-flex h-1.5 w-1.5 rounded-full dark:shadow dark:shadow-black/10 wide:text-base"
                style={{
                  backgroundColor: keyColor,
                  border:
                    resolvedTheme === 'dark'
                      ? '0.5px solid rgba(255,255,255,0.05)'
                      : 'none',
                  filter:
                    resolvedTheme === 'dark' ? 'brightness(120%)' : 'none',
                }}
              />
            ) : (
              ''
            )}
            {title}
          </h3>
          <p
            className={`${alignRight ? 'desktop:float-right desktop:clear-both' : ''
              }
          text-slate-700 dark:text-slate-50/60 2xl:text-lg wide:text-[1.0675rem]`}>
            {value}
          </p>

          <span
            className={`${alignRight ? 'desktop:float-right desktop:clear-both' : ''
              }`}>
            <ChangeIndicator
              className="mt-1"
              change={change}
              reverseColors={reverseChangeColors}
            />
          </span>
        </div>

        {separator ? (
          <Separator.Separator
            decorative
            orientation="vertical"
            className="fadeSep ml-6 hidden h-[5.25rem] w-px dark:opacity-[0.15] desktop:flex"
          />
        ) : (
          ''
        )}
      </div>
    )
  }

  function PieLegend({ keyColor, title, value }) {
    return (
      <div className="my-1">
        <h4 className="flex items-center gap-1.5 text-sm font-medium text-slate-700 dark:text-slate-50/60">
          <span
            className="dark:ring-0.5 mr-px inline-flex h-[0.5rem] w-[0.5rem] rounded-full dark:shadow dark:shadow-black/10 "
            style={{
              backgroundColor: keyColor,

              border:
                resolvedTheme === 'dark'
                  ? '0.5px solid rgba(255,255,255,0.05)'
                  : 'none',
              filter: resolvedTheme === 'dark' ? 'brightness(120%)' : 'none',
            }}
          />
          {title}
        </h4>
        <p className="ml-3 text-sm text-slate-400 dark:text-slate-50/30">
          {value}
        </p>
      </div>
    )
  }

  function PieTooltip({ datum }) {
    return (
      <div className="flex items-center gap-1.5 rounded border-slate-900/40 bg-white/[0.97] px-2.5 py-1.5 text-base shadow-xl shadow-slate-900/[0.09] dark:bg-primary-1000/[0.875] dark:shadow-slate-900/20">
        <span
          className="mr-0.5 block h-2 w-2 rounded-full dark:brightness-105"
          style={{ backgroundColor: datum.color }}
        />
        <h5 className="font-medium text-slate-500 dark:text-primary-50/70 ">
          {datum.label}
        </h5>
        <h6 className="font-medium">{datum.formattedValue}%</h6>
      </div>
    )
  }

  function AreaSliceTooltip({ points }) {
    return (
      <div className="flex flex-col justify-center gap-1.5 rounded border-slate-900/40 bg-white/[0.97] px-3.5 py-3 text-base shadow-xl shadow-slate-900/[0.09] dark:bg-primary-1000/[0.875] dark:shadow-slate-900/20">
        {Object.values(points).map((point, idx) => (
          <div key={idx} className="flex items-center justify-start gap-1.5">
            <span
              className="mr-1 block h-2 w-2 rounded-full dark:brightness-105"
              style={{ backgroundColor: point.color }}
            />
            <h5 className="flex min-w-[6.25rem] font-medium text-slate-500 dark:text-primary-50/70 ">
              {point.serieId}
            </h5>
            <h6 className="font-medium">
              $
              {parseFloat(
                point.data.yFormatted * 13.37 * (idx + 1), // Simulating better dollar values since the charts are using arbitrary numbers at the moment
              ).toLocaleString('en-US', { minimumFractionDigits: 2 })}
            </h6>
          </div>
        ))}
      </div>
    )
  }

  return (
    <Card
      id="portfolio"
      className="col-span-12 2xl:col-span-8"
      title="Portfolio &amp; Assets"
      shortTitle="Portfolio"
      tabs={['January', '2023', 'All Time']}
      shortTabs={['Month', 'Year', 'All Time']}
      defaultTab={3}
    // dropdownTabs={['Today', 'Week 28', 'July', '2022']}
    // tabs={['All Time']}
    // shortTabs={['All']}
    // defaultTab={2}
    >
      <div className="p-6 py-4 pb-0">
        <div className="flex  w-full justify-between gap-4 pb-4 mobile:flex-col mobile-to-desktop:flex-col desktop:gap-6 desktop:pb-0 wide:pb-2">
          <div className="grid grid-cols-3 gap-4 desktop:flex desktop:gap-6">
            <StatOverview
              title="Net Worth"
              value="$26,398.06"
              change="4.20"
              separator
            />
            <StatOverview title="Assets" value="$36,398.06" change="4.20" />
            <StatOverview
              title="Debts"
              value="$10,000"
              change="0.1"
              reverseChangeColors
            />
          </div>

          <div className="grid grid-cols-3 gap-4 desktop:flex desktop:gap-6">
            <StatOverview
              title="NFTs Floor"
              value="$21,182.21"
              change="5.20"
              alignRight
            />
            <StatOverview
              title="Claimable"
              value="$131.00"
              change="12.20"
              alignRight
            />
          </div>
        </div>
      </div>

      <Card.Line />

      <div className="flex w-full flex-grow flex-col items-center desktop:flex-row">
        <div className="flex w-full flex-col justify-between border-b border-slate-300/60 p-4 py-6 pt-4 dark:border-slate-50/[0.08] desktop:w-1/2 desktop:border-b-0">
          <h3 className="mb-1 px-2 font-medium text-slate-700 dark:text-slate-50/60">
            Exposure
          </h3>

          <div className="h-[275px] w-full">
            <ResponsiveLine
              theme={{
                axis: {
                  ticks: {
                    text: {
                      fontSize: 12,
                      fill:
                        resolvedTheme === 'light'
                          ? themeColors.slate['400']
                          : resolvedTheme === 'dark'
                            ? themeColors.slate['50'] + '70'
                            : '',
                    },
                  },
                },
                // grid: {
                //   line: {
                //     stroke:
                //       resolvedTheme === 'light'
                //         ? themeColors.slate['500'] + '30'
                //         : resolvedTheme === 'dark'
                //         ? themeColors.slate['200'] + '20'
                //         : '',
                //   },
                // },
                crosshair: {
                  line: {
                    stroke:
                      resolvedTheme === 'dark'
                        ? themeColors.slate['50']
                        : resolvedTheme === 'light'
                          ? themeColors.slate['800']
                          : '',
                    strokeDasharray: 'none',
                    strokeWidth: 2,
                    strokeOpacity: 0.0725,
                  },
                },

                tooltip: {
                  container: {
                    background:
                      resolvedTheme === 'light'
                        ? themeColors.white
                        : resolvedTheme === 'dark'
                          ? themeColors.slate['800'] + 'ea'
                          : '',
                    color:
                      resolvedTheme === 'light'
                        ? themeColors.slate['700']
                        : resolvedTheme === 'dark'
                          ? themeColors.slate['50']
                          : '',
                  },
                },
              }}
              data={ChartData.exposureLineData}
              margin={{ top: 14, right: 11, bottom: 30, left: 11 }}
              crosshairType={'x'}
              xScale={{ type: 'point' }}
              yScale={{
                type: 'linear',
                min: '0',
                max: '12000',
                stacked: true,
                reverse: false,
              }}
              yFormat=" >-.2f"
              axisTop={null}
              axisRight={null}
              axisLeft={null}
              axisBottom={{
                orient: 'bottom',
                tickSize: 0,
                tickPadding: 12,
                tickRotation: 0,
              }}
              enablePoints={false}
              gridYValues={4}
              colors={d => Color(d.color).lighten(0.125).toString()}
              enableArea={true}
              areaOpacity={1}
              useMesh={true}
              // useMesh={false}
              animate={false}
              layers={[
                'areas',
                // 'grid',
                'markers',
                'axes',
                'lines',
                'points',
                'mesh',
                'crosshair',
                'legends',
                'slices',
              ]}
              defs={[
                linearGradientDef('USDC', [
                  { offset: 0, color: '#e2e2fa', opacity: 1 },
                  { offset: 100, color: '#FFFFFF', opacity: 0 },
                ]),

                linearGradientDef('USDC-Dark', [
                  { offset: 0, color: '#6366F1', opacity: 0.3 },
                  { offset: 100, color: '#262935', opacity: 0 },
                ]),
                linearGradientDef('XPR', [
                  { offset: 0, color: '#fadae0', opacity: 1 },
                  { offset: 100, color: '#FFFFFF', opacity: 0 },
                ]),

                linearGradientDef('XPR-Dark', [
                  { offset: 0, color: '#F64D6E', opacity: 0.3 },
                  { offset: 100, color: '#262935', opacity: 0 },
                ]),
                linearGradientDef('MTL', [
                  { offset: 0, color: '#dcecff', opacity: 1 },
                  { offset: 100, color: '#FFFFFF', opacity: 0 },
                ]),

                linearGradientDef('MTL-Dark', [
                  { offset: 0, color: '#70b3ff', opacity: 0.3 },
                  { offset: 100, color: '#262935', opacity: 0 },
                ]),
                linearGradientDef('BTC', [
                  { offset: 0, color: '#f7d8b2', opacity: 1 },
                  { offset: 100, color: '#FFFFFF', opacity: 0 },
                ]),

                linearGradientDef('BTC-Dark', [
                  { offset: 0, color: '#F7931A', opacity: 0.3 },
                  { offset: 100, color: '#262935', opacity: 0 },
                ]),

                linearGradientDef('Other', [
                  { offset: 0, color: '#d5dbfb', opacity: 1 },
                  { offset: 100, color: '#ffffff', opacity: 0 },
                ]),

                linearGradientDef('Other-Dark', [
                  { offset: 0, color: '#8ea1ff', opacity: 0.3 },
                  { offset: 100, color: '#8ea1ff', opacity: 0 },
                ]),
              ]}
              fill={[
                {
                  match: d => d.id === 'USDC',
                  id:
                    resolvedTheme === 'light'
                      ? 'USDC'
                      : resolvedTheme === 'dark'
                        ? 'USDC-Dark'
                        : '',
                },
                {
                  match: d => d.id === 'XPR',
                  id:
                    resolvedTheme === 'light'
                      ? 'XPR'
                      : resolvedTheme === 'dark'
                        ? 'XPR-Dark'
                        : '',
                },
                {
                  match: d => d.id === 'MTL',
                  id:
                    resolvedTheme === 'light'
                      ? 'MTL'
                      : resolvedTheme === 'dark'
                        ? 'MTL-Dark'
                        : '',
                },
                {
                  match: d => d.id === 'BTC',
                  id:
                    resolvedTheme === 'light'
                      ? 'BTC'
                      : resolvedTheme === 'dark'
                        ? 'BTC-Dark'
                        : '',
                },
                {
                  match: d => d.id === 'Other',
                  id:
                    resolvedTheme === 'light'
                      ? 'Other'
                      : resolvedTheme === 'dark'
                        ? 'Other-Dark'
                        : '',
                },
              ]}
              enableSlices="x"
              sliceTooltip={d => {
                return <AreaSliceTooltip points={d.slice.points} />
              }}
            // debugSlices={true}
            // onMouseEnter={(_data, event) => {
            //   event.target.style.fill = '#FF00FF'
            // }}
            // onMouseLeave={(_data, event) => {
            //   event.target.style.fill = originalColor
            // }}
            />
          </div>

          <div className="mt-2.5 flex w-full px-2">
            <div className="flex flex-col">
              <PieLegend
                keyColor="#7543E3"
                title="USD Coin"
                value="$8,246.99"
              />
              <PieLegend keyColor="#F64D6E" title="Proton" value="$5,233.06" />
              <PieLegend keyColor="#3B82F6" title="Metal" value="$650.00" />
              <PieLegend keyColor="#F7931A" title="Bitcoin" value="$1,881.74" />
              <PieLegend keyColor="#C7D2FE" title="Other" value="$8,948.29" />
            </div>
            <div className="pieContainer [&>div>div>svg]:dark:soft-filter-shadow relative top-1.5 left-1.5 ml-1 flex w-4 flex-grow font-sans font-medium wide:ml-7">
              <ResponsivePie
                data={ChartData.exposurePieData}
                theme={{
                  fontSize: 14.5,
                }}
                colors={{ datum: 'data.fillColor' }}
                arcLabel={d => {
                  return d.value + '%'
                }}
                arcLabelsTextColor={{ from: 'data.textColor' }}
                innerRadius={0.5}
                animate={false}
                margin={{ top: 5, right: 5, bottom: 5, left: 5 }}
                cornerRadius={0}
                enableArcLinkLabels={false}
                padAngle={
                  resolvedTheme === 'light'
                    ? 1.1
                    : resolvedTheme === 'dark'
                      ? 1.65
                      : 0
                }
                borderWidth={
                  resolvedTheme === 'light'
                    ? 0
                    : resolvedTheme === 'dark'
                      ? 1.25
                      : 0
                }
                borderColor={{
                  from: 'color',
                  modifiers: [['brighter', 0.075]],
                }}
                tooltip={d => {
                  return <PieTooltip datum={d.datum} />
                }}
              />
            </div>
          </div>
        </div>

        <Separator.Separator
          decorative
          orientation="vertical"
          className=" hidden h-full w-px bg-gradient-to-b from-slate-300/60 via-slate-300/10 to-slate-300/[0.025] dark:from-slate-50/[0.08] dark:via-slate-50/[0.04] dark:to-slate-50/[0.01] desktop:flex"
        />

        <div className="flex w-full flex-col justify-between border-slate-300/60 p-4 py-6  pt-4 desktop:w-1/2">
          <div>
            <h3 className="mb-1 px-2 font-medium text-slate-700 dark:text-slate-50/60">
              Assets
            </h3>

            <div className="h-[275px] w-full">
              <ResponsiveLine
                theme={{
                  axis: {
                    ticks: {
                      text: {
                        fontSize: 12,
                        fill:
                          resolvedTheme === 'light'
                            ? themeColors.slate['400']
                            : resolvedTheme === 'dark'
                              ? themeColors.slate['50'] + '70'
                              : '',
                      },
                    },
                  },
                  // grid: {
                  //   line: {
                  //     stroke:
                  //       resolvedTheme === 'light'
                  //         ? themeColors.slate['500'] + '30'
                  //         : resolvedTheme === 'dark'
                  //         ? themeColors.slate['200'] + '20'
                  //         : '',
                  //   },
                  // },
                  crosshair: {
                    line: {
                      stroke:
                        resolvedTheme === 'dark'
                          ? themeColors.slate['50']
                          : resolvedTheme === 'light'
                            ? themeColors.slate['800']
                            : '',
                      strokeDasharray: 'none',
                      strokeWidth: 2,
                      strokeOpacity: 0.0725,
                    },
                  },

                  tooltip: {
                    container: {
                      background:
                        resolvedTheme === 'light'
                          ? themeColors.white
                          : resolvedTheme === 'dark'
                            ? themeColors.slate['800'] + 'ea'
                            : '',
                      color:
                        resolvedTheme === 'light'
                          ? themeColors.slate['700']
                          : resolvedTheme === 'dark'
                            ? themeColors.slate['50']
                            : '',
                    },
                  },
                }}
                data={ChartData.assetsLineData}
                margin={{ top: 14, right: 11, bottom: 30, left: 11 }}
                crosshairType={'x'}
                xScale={{ type: 'point' }}
                yScale={{
                  type: 'linear',
                  min: '0',
                  max: '12000',
                  stacked: true,
                  reverse: false,
                }}
                yFormat=" >-.2f"
                axisTop={null}
                axisRight={null}
                axisLeft={null}
                axisBottom={{
                  orient: 'bottom',
                  tickSize: 0,
                  tickPadding: 12,
                  tickRotation: 0,
                }}
                enablePoints={false}
                gridYValues={4}
                // colors={d => Color(d.color).lighten(0.125).toString()}
                colors={"#aaee55"}
                enableArea={true}
                areaOpacity={1}
                useMesh={true}
                // useMesh={false}
                animate={false}
                layers={[
                  'areas',
                  // 'grid',
                  'markers',
                  'axes',
                  'lines',
                  'points',
                  'mesh',
                  'crosshair',
                  'legends',
                  'slices',
                ]}
                defs={[
                  linearGradientDef('NFTTrading', [
                    {
                      offset: 0,
                      color: useHueRotate('#D8E1F7', defaultColor, themeColor),
                      opacity: 1,
                    },
                    { offset: 100, color: '#FFFFFF', opacity: 0 },
                  ]),
                  linearGradientDef('NFTTrading-Dark', [
                    {
                      offset: 0,
                      color: useHueRotate('#295ce6', defaultColor, themeColor),
                      opacity: 0.325,
                    },
                    { offset: 100, color: '#262935', opacity: 0 },
                  ]),
                  linearGradientDef('Farming', [
                    {
                      offset: 0,
                      color: useHueRotate('#CAD8F7', defaultColor, themeColor),
                      opacity: 1,
                    },
                    { offset: 100, color: '#FFFFFF', opacity: 0 },
                  ]),
                  linearGradientDef('Farming-Dark', [
                    {
                      offset: 0,
                      color: useHueRotate('#346ce7', defaultColor, themeColor),
                      opacity: 0.325,
                    },
                    { offset: 100, color: '#262935', opacity: 0 },
                  ]),
                  linearGradientDef('Staked', [
                    {
                      offset: 0,
                      color: useHueRotate('#CEDEFA', defaultColor, themeColor),
                      opacity: 1,
                    },
                    { offset: 100, color: '#FFFFFF', opacity: 0 },
                  ]),
                  linearGradientDef('Staked-Dark', [
                    {
                      offset: 0,
                      color: useHueRotate('#4b8bf0', defaultColor, themeColor),
                      opacity: 0.325,
                    },
                    { offset: 100, color: '#262935', opacity: 0 },
                  ]),
                  linearGradientDef('Borrowed', [
                    {
                      offset: 0,
                      color: useHueRotate('#D1E2FB', defaultColor, themeColor),
                      opacity: 1,
                    },
                    { offset: 100, color: '#FFFFFF', opacity: 0 },
                  ]),
                  linearGradientDef('Borrowed-Dark', [
                    {
                      offset: 0,
                      color: useHueRotate('#3b7adf', defaultColor, themeColor),
                      opacity: 0.3,
                    },
                    { offset: 100, color: '#262935', opacity: 0 },
                  ]),
                  linearGradientDef('Liquid', [
                    {
                      offset: 0,
                      color: useHueRotate('#DFECFC', defaultColor, themeColor),
                      opacity: 1,
                    },
                    { offset: 100, color: '#FFFFFF', opacity: 0 },
                  ]),
                  linearGradientDef('Liquid-Dark', [
                    {
                      offset: 0,
                      color: useHueRotate('#479ded', defaultColor, themeColor),
                      opacity: 0.3,
                    },
                    { offset: 100, color: '#262935', opacity: 0 },
                  ]),
                ]}
                fill={[
                  {
                    match: d => d.id === 'Liquid',
                    id:
                      resolvedTheme === 'light'
                        ? 'Liquid'
                        : resolvedTheme === 'dark'
                          ? 'Liquid-Dark'
                          : '',
                  },
                  {
                    match: d => d.id === 'Borrowed',
                    id:
                      resolvedTheme === 'light'
                        ? 'Borrowed'
                        : resolvedTheme === 'dark'
                          ? 'Borrowed-Dark'
                          : '',
                  },
                  {
                    match: d => d.id === 'Staked',
                    id:
                      resolvedTheme === 'light'
                        ? 'Staked'
                        : resolvedTheme === 'dark'
                          ? 'Staked-Dark'
                          : '',
                  },
                  {
                    match: d => d.id === 'Farming',
                    id:
                      resolvedTheme === 'light'
                        ? 'Farming'
                        : resolvedTheme === 'dark'
                          ? 'Farming-Dark'
                          : '',
                  },
                  {
                    match: d => d.id === 'NFT Trading',
                    id:
                      resolvedTheme === 'light'
                        ? 'NFTTrading'
                        : resolvedTheme === 'dark'
                          ? 'NFTTrading-Dark'
                          : '',
                  },
                ]}
                enableSlices="x"
                sliceTooltip={d => {
                  return <AreaSliceTooltip points={d.slice.points} />
                }}
              // debugSlices={true}
              // onMouseEnter={(_data, event) => {
              //   event.target.style.fill = '#FF00FF'
              // }}
              // onMouseLeave={(_data, event) => {
              //   event.target.style.fill = originalColor
              // }}
              />
            </div>

            <div className="mt-2.5 flex w-full px-2">
              <div className="flex flex-col">
                <PieLegend
                  keyColor={useHueRotate('#BFDBFE', defaultColor, themeColor)}
                  title="Liquid"
                  value="$33,923.63"
                />
                <PieLegend
                  keyColor={useHueRotate('#93C5FD', defaultColor, themeColor)}
                  title="Borrowed"
                  value="$10,000.00"
                />
                <PieLegend
                  keyColor={useHueRotate('#60A5FA', defaultColor, themeColor)}
                  title="Staked"
                  value="$4,287.18"
                />
                <PieLegend
                  keyColor={useHueRotate('#2563EB', defaultColor, themeColor)}
                  title="Farming"
                  value="$6,987.25"
                />
                <PieLegend
                  keyColor={useHueRotate('#1D4ED8', defaultColor, themeColor)}
                  title="NFT Trading"
                  value="$1,200.00"
                />
              </div>
              <div
                className="pieContainer [&>div>div>svg]:dark:soft-filter-shadow relative top-1.5 left-1.5 ml-1 flex w-4 flex-grow wide:ml-7
              
              ">
                <ResponsivePie
                  data={ChartData.assetsPieData}
                  theme={{
                    fontSize: 14.5,
                  }}
                  colors={"#aaee55"}
                  arcLabel={d => {
                    return d.value + '%'
                  }}
                  arcLabelsTextColor={d => {
                    colors = "#aaee55"
                  }}
                  innerRadius={0.5}
                  animate={false}
                  margin={{ top: 5, right: 5, bottom: 5, left: 5 }}
                  cornerRadius={0}
                  enableArcLinkLabels={false}
                  padAngle={
                    resolvedTheme === 'light'
                      ? 1.1
                      : resolvedTheme === 'dark'
                        ? 1.65
                        : 0
                  }
                  borderWidth={
                    resolvedTheme === 'light'
                      ? 0
                      : resolvedTheme === 'dark'
                        ? 1.25
                        : 0
                  }
                  borderColor={{
                    from: 'color',
                    modifiers: [['brighter', 0.075]],
                  }}
                  tooltip={d => {
                    return <PieTooltip datum={d.datum} />
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default PortfolioCard
