import { Button } from '@/components/forms'
import {
  MenuSend,
  MenuSwap,
  ToggleOff,
  ToggleOn,
} from '@/components/interface/Icons'
import * as Toggle from '@radix-ui/react-toggle'
import { useEffect, useRef, useState } from 'react'
import { useStoreActionsCD, useStoreStateCD } from 'store/hooks'

export default function SidebarCardItem({ icon, title, balance, actorName }) {
  const [hideBalance, setHideBalance] = useState(false)
  const titleRef = useRef()
  const toggleActorActive = useStoreActionsCD(
    state => state.wallet.toggleActorActive,
  )

  useEffect(() => {
    if (titleRef.current.offsetWidth > 80) {
      titleRef.current.classList.add('fadeRightSm')
    }
  })

  return (
    <div
      // href="#"
      className={`${
        hideBalance ? 'bg-slate-900/0' : ''
      } group relative z-0 flex h-10 gap-2 text-sm text-slate-100 outline-none ring-slate-50 first:rounded-t-none last:border-0 hover:border-slate-50/10 focus:rounded-md focus:ring-2 focus:ring-inset focus:ring-slate-900 focus:ring-offset-2 focus:ring-offset-primary active:bg-slate-900/50 hocus:bg-slate-900/20 dark:text-slate-300 `}>
      <div className="flex h-full w-full items-center justify-between px-3">
        <div className="flex items-center gap-2.5 rounded-full">
          {icon && (
            <span
              className={`${
                hideBalance ? '!opacity-40' : ''
              } flex h-[20px] w-[20px]`}>
              {icon}
            </span>
          )}

          <h3
            ref={titleRef}
            className={`${
              hideBalance ? '!opacity-40' : ''
            } max-w-[100px] overflow-hidden whitespace-nowrap opacity-80`}>
            {title}
          </h3>
        </div>
        <span className={`${hideBalance ? 'hidden' : ''}  group-hover:hidden`}>
          {balance}
        </span>
        <span
          className={`${
            !hideBalance ? 'hidden' : ''
          } cursor-pointer items-center gap-1.5 group-hover:flex`}>
          <div className="relative hidden h-[20px] items-center justify-between gap-0 group-hover:flex">
            <Button
              className="flex !h-[18px] !w-[18px] items-center justify-center !rounded !bg-transparent !p-3.5 text-primary-50 opacity-50 !ring-0 hover:!bg-primary-50/[0.07] hover:opacity-100"
              icon={<MenuSend />}
            />

            <Button
              className="flex !h-[18px] !w-[18px] items-center justify-center !rounded !bg-transparent !p-3.5 text-primary-50 opacity-50 !ring-0 hover:!bg-primary-50/[0.07] hover:opacity-100"
              icon={<MenuSwap />}
            />
          </div>

          <Toggle.Root
            className="-m-1 h-[40px] p-1"
            onPressedChange={() => {
              setHideBalance(!hideBalance)
              toggleActorActive(actorName)
              console.log('looser')
            }}>
            {(hideBalance && (
              <span className="flex h-full items-center gap-1 text-2xs font-semibold uppercase tracking-wide text-slate-200/70 hover:brightness-110">
                <ToggleOff />
              </span>
            )) ||
              (!hideBalance && (
                <span className="flex h-full items-center gap-1 text-2xs font-semibold uppercase tracking-wide text-slate-200/70 hover:brightness-110">
                  <ToggleOn />
                </span>
              ))}
          </Toggle.Root>
        </span>
      </div>
    </div>
  )
}
