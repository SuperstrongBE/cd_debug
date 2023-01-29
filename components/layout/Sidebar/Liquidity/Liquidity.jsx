import tokens from '@/data/tokens.json'
import * as Separator from '@radix-ui/react-separator'
import { NumericFormat } from 'react-number-format'
import LiquidityHeader from './LiquidityHeader'
import LiquidityItem from './LiquidityItem'

const Liquidity = ({ walletConnected, walletAddress, settingsSlang }) => {
  const nativeCurrency = settingsSlang ? 'EDDIES' : 'USD'
  const nativeSymbol = settingsSlang ? 'E$' : '$'

  // Calculate total value of all liquidity
  const totalValue = tokens.reduce(
    (prevValue, currentValue) =>
      prevValue + currentValue.holding * currentValue.rate,
    0,
  )

  // This is not the best way to do number formatting, but it works for now
  const tokenData = tokens.map(token => (
    <LiquidityItem
      key={token.token}
      token={token.token}
      holding={<NumberFormatting value={token.holding} />}
      type={token.type}
      value={
        <NumberFormatting
          prefix={nativeSymbol}
          value={token.holding * token.rate}
        />
      }
      rate={
        <NumberFormatting prefix={nativeSymbol} scale={3} value={token.rate} />
      }
    />
  ))

  return (
    <div className="md:bg-blur SidebarLiquidity flex-none overflow-hidden rounded-md bg-slate-100/15 text-slate-50/50 shadow-lg shadow-slate-900/20 ring-1 ring-inset ring-slate-300/10 backdrop-blur-xl -backdrop-blur:bg-slate-700/90 dark:bg-slate-400/15 dark:shadow-slate-900/30 dark:ring-slate-300/5 dark:-backdrop-blur:bg-slate-700/90 ">
      <LiquidityHeader
        nativeCurrency={nativeCurrency}
        nativeSymbol={nativeSymbol}
        settingsSlang={settingsSlang}
        totalValue={<NumberFormatting value={totalValue} />}
      />
      <div className="relative z-0 flex flex-col ">
        <Separator.Root
          decorative
          className="h-[1px] bg-slate-50/5 last:hidden  dark:bg-slate-50/3"
        />
        {tokenData}
      </div>
    </div>
  )
}

const NumberFormatting = ({ value, scale, prefix }) => {
  if (!value) {
    return null
  }

  return (
    <NumericFormat
      displayType="text"
      value={value}
      valueIsNumericString={false}
      decimalScale={scale ? scale : 2}
      prefix={prefix ? prefix : ''}
      thousandSeparator={true}
    />
  )
}

export default Liquidity
