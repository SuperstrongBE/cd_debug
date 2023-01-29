"use client"
import { Button } from '@/components/forms'
import { WalletIcon } from '@/components/interface/Icons'
import { useProtonAuth } from '@/components/providers/AuthProvider'
import * as Separator from '@radix-ui/react-separator'
import Image from 'next/legacy/image'
import { BiPencil, BiPlus } from 'react-icons/bi'
import { useStoreActionsCD, useStoreStateCD } from 'store/hooks'
import SidebarCard from '../SidebarCard/SidebarCard'
import SidebarCardItem from '../SidebarCard/SidebarCardItem'

function WalletHeader({ icon, chain, balance }) {
  return (
    <div className="relative z-10 box-border flex h-10 flex-col items-center justify-between divide-y divide-slate-50/5 border-b-[1px] border-t-[1px] border-t-slate-100/[0.25] border-b-slate-100/[0.15] bg-slate-50/5 bg-gradient-to-b from-slate-50/15 via-slate-100/10 to-slate-100/5 bg-clip-padding text-sm text-slate-100 shadow-sm shadow-slate-900/20 dark:text-slate-300	">
      <div className="flex h-full w-full items-center justify-between px-3">
        <div className="flex items-center gap-2.5">
          {icon && (
            <span className="flex h-[22px] w-[22px] dark:opacity-80">
              {icon}
            </span>
          )}
          <h3>{chain}</h3>
        </div>
        <span>{balance}</span>
      </div>
    </div>
  )
}

function TerraIcon({ className }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 56 53">
      <defs>
        <path id="a" d="M0 0h39v25H0z"></path>
        <path id="c" d="M0 0h17v35H0z"></path>
        <path id="e" d="M0 0h16v12H0z"></path>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path
          fill="#c8cccf"
          opacity="0.5"
          d="M24.25 43.273c1.54 5.614 7.063 9.899 9.853 9.722.098-.007 10.58-1.933 16.318-11.384 4.466-7.355 2.946-14.456-3.128-14.611-2.185.157-25.977 5.576-23.043 16.273"></path>
        <g transform="translate(12)">
          <mask id="b" fill="#F8FAFC">
            <use xlinkHref="#a"></use>
          </mask>
          <path
            fill="#c8cccf"
            opacity="0.5"
            d="M35.164 6.45l-.006-.006.009-.005A26.5 26.5 0 0017.816 0c-3.87 0-7.542.838-10.864 2.33a15.81 15.81 0 00-1.697.838c-.375.202-.751.403-1.116.622l.089.028a12.24 12.24 0 00-2.825 2.7c-7.684 10.25 18.07 17.699 31.838 17.723 6.334 4.592 8.112-12.926 1.923-17.79"
            mask="url(#b)"></path>
        </g>
        <path
          fill="#F8FAFC"
          d="M20.26 6.39c-3.534 5.36-15.31 9.138-17.247 8.55L3 14.915a28.448 28.448 0 015.354-7.523 28.393 28.393 0 015.535-4.346C15.54 2.083 17.227 2.02 17.783 2c5.244.101 2.506 4.348 2.477 4.39"></path>
        <g transform="translate(0 18)">
          <mask id="d" fill="#F8FAFC">
            <use xlinkHref="#c"></use>
          </mask>
          <path
            fill="#F8FAFC"
            d="M16.9 26.226c.249 1.66-.006 8.215-.34 8.768-.288.018-.888.055-2.625-.935a27.56 27.56 0 01-2.635-1.736 27.896 27.896 0 01-5.975-6.069 28.076 28.076 0 01-3.918-7.694 28.253 28.253 0 01-1.046-4.313 28.71 28.71 0 010-9.094A28.228 28.228 0 011.697.001L1.699 0c1.99 2.688 4.291 5.119 6.249 7.834 1.863 2.584 4.427 6.798 4.949 7.697 3.24 5.59 3.755 9.038 4.003 10.695"
            mask="url(#d)"></path>
        </g>
        <path
          fill="#F8FAFC"
          d="M56 27.76c0 3.667-.693 7.17-1.954 10.385-3.306 3.579-25.602-5.23-25.821-5.327-3.05-1.346-12.332-5.44-13.17-11.872C13.852 11.693 32.495 5.245 40.686 5c.983.011 3.973.047 5.715 1.473A28.289 28.289 0 0156 27.76"></path>
        <g transform="translate(37 41)">
          <mask id="f" fill="#F8FAFC">
            <use xlinkHref="#e"></use>
          </mask>
          <path
            fill="#F8FAFC"
            d="M4.511 11.498c-2.424 1.132-5.093.308-4.4-2.055C1.443 4.906 13.067.255 15.634.003c.316-.031.45.185.31.431C13.27 5.126 9.306 8.991 4.512 11.498"
            mask="url(#f)"></path>
        </g>
      </g>
    </svg>
  )
}

function StatusPill({ status }) {
  return (
    <div className="flex gap-1">
      <span className="flex h-[1.125rem] items-center justify-center rounded bg-primary-50/[0.2] px-1.5 text-[0.625rem] font-medium uppercase tracking-[0.01rem]">
        {status}
      </span>
    </div>
  )
}

const Wallets = ({ walletIsConnected }) => {
  const connectWallet = useStoreActionsCD(state => state.wallet.connectWallet)
  const wallets = useStoreStateCD(state => state.wallet.wallets)
  const computedWealth = useStoreStateCD(state => state.wallet.computedWealth)
  const currencyWealth = useStoreStateCD(state => state.wallet.currencyWealth)
  const protonCtx = useProtonAuth();

  return (
    <SidebarCard
      icon={<WalletIcon />}
      title="Wallets"
      balance={
        <>
          <div className="relative -right-1.5 hidden h-[20px] items-center gap-1.5 group-hover:flex">
            <Button
              className="h-[25px] !w-[25px] !rounded !bg-transparent !p-0 text-primary-50 !ring-0 hover:!bg-primary-50/[0.07]"
              onClick={() => {
                protonCtx.signIn()
              }}
              icon={<BiPlus size="22" />}
            />

            <Button
              className="h-[25px] !w-[25px] !rounded !bg-transparent !p-0 text-primary-50 !ring-0 hover:!bg-primary-50/[0.07]"
              icon={<BiPencil size="16" />}
            />
          </div>
          <span className="flex group-hover:hidden">
            {walletIsConnected ? (
              '$' + computedWealth('USD').toFixed(2)
            ) : (
              <StatusPill status="Example" />
            )}
          </span>
        </>
      }>
      {wallets.map((wallet, index) => {
        return (
          <div key={wallet.actorName}>
            <SidebarCardItem
              icon={
                wallet.avatar ? (
                  <div className="overflow-hidden rounded-full">
                    <img
                      src={`data:image/png;base64,${wallet.avatar}`}
                      width={80}
                      height={80}
                    />
                  </div>
                ) : (
                  <div className="h-5 w-5 rounded-full bg-indigo-500"></div>
                )
              }
              title={wallet.name}
              balance={`$${currencyWealth(wallet.actorName, 'USD').toFixed(2)}`}
              actorName={wallet.actorName}
            />
            {index < wallets.length - 1 && (
              <Separator.Root
                decorative
                className="h-[1px] bg-slate-50/5 last:hidden dark:bg-slate-50/3"
              />
            )}
          </div>
        )
      })}

      {/* <Button
        className="rounded-none !rounded-b-lg "
        icon={<BiPlus size="22" />}
        title="Add wallet"
        type="primary"
        wide={true}
        onClick={() => { connectWallet() }}
      /> */}

      {/* <WalletHeader
        icon={<TerraIcon className="-mt-[0.05rem] p-[0.075rem]" />}
        chain="Terra"
        balance="$34,456.05"
      /> */}

      {!walletIsConnected && (
        <>
          <SidebarCardItem
            icon={
              <Image
                className="object-contain object-center"
                src={'/images/wallets/cyberdeck.png'}
                width={80}
                height={80}
              />
            }
            title="Cyberdeck"
            balance="$37,382"
          />

          <Separator.Root
            decorative
            className="h-[1px] bg-slate-50/5 last:hidden dark:bg-slate-50/3"
          />

          <SidebarCardItem
            icon={
              <Image
                className="object-contain object-center"
                src={'/images/wallets/metal.png'}
                width={80}
                height={80}
              />
            }
            title="Metallicus Inc"
            balance="$23,850"
          />
        </>
      )}
    </SidebarCard>
  )
}

export default Wallets
