"use client"
import { Button } from '@/components/forms'
import { QuickActions, Search, Settings } from '@/components/interface/Icons'
import KeyboardShortcutIcon from '@/components/interface/KeyboardShortcutIcon'
import SidebarActions from '@/components/layout/Sidebar/SidebarActions'
import WalletConnect from '@/components/layout/Sidebar/WalletConnect'
import * as Separator from '@radix-ui/react-separator'
import { useEffect, useState } from 'react'
import { BiChevronDown } from 'react-icons/bi'
import useAbbreviated from '../../hooks/useAbbreviated'
import DataWarning from './DataWarning/DataWarning'
import PassiveIncome from './PassiveIncome/PassiveIncome'
import Wallet from './Wallet/Wallet'
import Wallets from './Wallets/Wallets'
import WallpaperInfo from './WallpaperInfo'

import { useStoreActionsCD, useStoreStateCD } from 'store/hooks'

const DesktopSidebar = ({
  walletConnected,
  walletAddress,
  settingsSlang,
  wallpaper,
  setWallpaper,
  runnerOpen,
  setRunnerOpen,
}) => {
  const [abbreviated] = useAbbreviated('2xl')
  const [actionsVisible, setActionsVisible] = useState(false)
  const wallets = useStoreStateCD(state => state.wallet.wallets)

  const [walletIsConnected, setWalletIsConnected] = useState(false)
  const connectWallet = useStoreActionsCD(state => state.wallet.connectWallet)

  useEffect(() => {
    if (wallets.length > 0) {
      setWalletIsConnected(true)
    } else {
      setWalletIsConnected(false)
    }
  }, [wallets])

  return (
    <div className="desktop-sidebar h-screen-safe sticky top-0 bottom-0 flex w-[315px] shrink-0 overflow-y-auto overscroll-none mobile:hidden">
      <div className="flex w-full flex-grow flex-col justify-between overflow-y-auto motion-safe:transition-padding md:gap-6 md:py-6 md:px-10 2xl:py-8 mobile:gap-4 mobile:p-4">
        {/* TODO: PY needs to be saved as a variable or padding extention */}
        {/* TODO: Button classes can be cleaned up once the component is refactored*/}
        <div className="flex w-full flex-col md:gap-6 mobile:gap-4">
          <div className="flex w-full gap-4">
            <Button
              onClick={e => {
                e.preventDefault()
                setRunnerOpen(true)
              }}
              title="Command"
              className="flex-1 gap-[0.5rem] !px-2.5 !pl-2.5 !text-[0.9rem] !text-slate-50/40 backdrop-blur-md [&>div]:font-normal"
              onDark
              outlined
              wide
              href="#"
              transparent
              shortcut={
                <KeyboardShortcutIcon
                  className="-mr-px opacity-70"
                  keys={['/']}
                />
              }
              icon={
                <QuickActions className="relative -ml-[0px] text-slate-50/50" />
              }
            />

            <Button
              className="!w-[40px]"
              onDark
              outlined
              transparent
              href="#"
              onClick={e => {
                e.preventDefault()
                setRunnerOpen(true)
                // showModal({
                //   icon: () => <GrGamepad className=" dark:invert" />,
                //   title: () => 'Debug Menu',
                //   content: ({}) => <DebugMenu />,
                //   isDraggable: true,
                // })
              }}
              icon={<Settings />}
            // attr={<BiChevronDown size="20" className="mr-5 opacity-50" />}
            // attr={<ChevronDown />}
            />
          </div>

          {/* <DataWarning /> */}

          {/* ACTIONS */}

          {walletIsConnected ? (
            <SidebarActions
              onClick={
                () => null
                // setActionsVisible(false)
              }
            />
          ) : (
            <WalletConnect
              onClick={
                () => connectWallet()
                // setActionsVisible(false)
              }
              walletConnected={walletIsConnected}
              walletAddress={walletAddress}
              settingsSlang={settingsSlang}
            />
          )}

          <Wallets walletIsConnected={walletIsConnected} />

          <Separator.Root
            decorative
            orientation="horizontal"
            className="border-b border-slate-300/[0.07]"
          />

          <Wallet
            walletConnected={walletIsConnected}
            settingsSlang={settingsSlang}
          />

          <PassiveIncome />
        </div>

        <WallpaperInfo wallpaper={wallpaper} setWallpaper={setWallpaper} />
      </div>
    </div>
  )
}

export default DesktopSidebar
