import { Button } from '@/components/forms'
import {
  Lightning,
  WalletPower,
  WalletScan,
} from '@/components/interface/Icons'
import classnames from 'classnames'
import useAbbreviated from '../../hooks/useAbbreviated'

function StatusPill({ status }) {
  return (
    <div className="flex gap-1">
      <span className="flex h-[1.125rem] items-center justify-center rounded bg-primary-50/[0.25] px-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.01rem]">
        {status}
      </span>
    </div>
  )
}

const DesktopConnect = ({
  walletConnected,
  walletAddress,
  settingsSlang,
  onClick,
}) => {
  const [abbreviated] = useAbbreviated('2xl')

  const defaultTitle = settingsSlang ? 'Jack into mainnet' : 'Connect WebAuth'
  // const connectedTitle = walletConnected ? walletAddress : defaultTitle

  return (
    <div className={classnames('flex flex-col md:gap-6 mobile:gap-4')}>
      <Button
        onClick={onClick}
        className="grow gap-[5px] !px-3 !text-[0.9rem] ring-white/10"
        type="primary"
        onDark
        gradient
        // disabled
        wide
        title={defaultTitle}
        icon={<WalletPower className="-ml-[4px]" />}
        // icon={<BiWallet size="20" />}
        shortcut={
          <WalletScan className="relative left-px text-primary-50 opacity-50" />
        }
      />
    </div>
  )
}

export default DesktopConnect
