import { SidebarLiquid, WalletIcon } from '@/components/interface/Icons'
import tokens from '@/data/tokens.json'
import { NumericFormat } from 'react-number-format'
import SidebarCard from '../SidebarCard/SidebarCard'
import WalletItem from '../Wallet/WalletItem'

const Wallet = ({ walletConnected, settingsSlang }) => {
  const nativeCurrency = settingsSlang ? 'EDDIES' : 'USD'
  const nativeSymbol = settingsSlang ? 'E$' : '$'

  // This is not the best way to do number formatting, but it works for now
  const tokenData = tokens.map(token => (
    <WalletItem
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
    <SidebarCard
      collapsable={true}
      icon={<SidebarLiquid />}
      title="Liquid"
      balance="$97,513.37">
      {tokenData}
    </SidebarCard>
  )
}

const NumberFormatting = ({ value, scale, prefix }) => {
  if (!value) {
    return null
  }

  return (
    <NumericFormat
      displayType="text"
      valueIsNumericString={false}
      value={value}
      decimalScale={scale ? scale : 2}
      prefix={prefix ? prefix : ''}
      thousandSeparator={true}
    />
  )
}

export default Wallet
