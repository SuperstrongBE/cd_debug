import classnames from 'classnames'
import PropTypes from 'prop-types'
import DataWarning from './DataWarning/DataWarning'
import Liquidity from './Liquidity/Liquidity'
import WalletConnect from './WalletConnect'

const MobileSidebar = ({
  isClosed,
  toggleIsClosed,
  walletConnected,
  walletAddress,
  settingsSlang,
}) => {
  return (
    <>
      <div
        className={classnames(
          'mobile-sidebar h-screen-safe fixed top-0 left-0 z-30 flex w-[70vw] min-w-[20rem] flex-col bg-slate-700/60 text-slate-300 backdrop-blur-md -backdrop-blur:bg-slate-700 motion-safe:transition-[transform,_shadow] dark:bg-slate-600/20 dark:-backdrop-blur:bg-slate-700 md:hidden',
          isClosed ? '-translate-x-full shadow-none' : 'translate-x-0 ',
        )}>
        <div className="flex flex-col gap-4 p-4">
          <WalletConnect
            walletConnected={walletConnected}
            walletAddress={walletAddress}
          />
          <DataWarning className="!px-4 !py-3" />
        </div>

        <div className="flex grow flex-col overflow-y-auto px-4">
          <Liquidity
            walletConnected={walletConnected}
            settingsSlang={settingsSlang}
          />
        </div>

        {/* <div className="flex flex-col gap-2 p-4">
          <h3 className="text-sm font-medium uppercase text-slate-500">
            Settings
          </h3>
          <div className="divide-y divide-slate-50/5 border-y border-slate-50/5 ">
            <a className="flex items-center">
              <div className="relative -top-[1px] grow py-3">Mode</div>
              <div className="text-slate-400">
                <ThemeSwitch />
              </div>
            </a>
          </div>
        </div> */}
        <div
          className={classnames(
            'absolute top-0 bottom-0 -right-3  flex w-1 flex-col justify-center motion-safe:transition-transform',
            isClosed ? '-translate-x-4' : 'translate-x-0',
          )}>
          <div
            onClick={toggleIsClosed}
            className="h-10 w-1 rounded bg-slate-50/20 backdrop-blur-md"
          />
        </div>
      </div>
      <div
        onClick={toggleIsClosed}
        className={classnames(
          'h-screen-safe fixed left-0 top-0 right-0 z-20 bg-slate-800/70 motion-safe:transition-opacity dark:bg-slate-800/80 md:hidden',
          isClosed ? 'pointer-events-none  opacity-0' : 'opacity-100',
        )}
      />
    </>
  )
}

MobileSidebar.defaultProps = {
  isClosed: true,
  isConnected: false,
}

MobileSidebar.propTypes = {
  isClosed: PropTypes.bool,
  isConnected: PropTypes.bool,
}
export default MobileSidebar
