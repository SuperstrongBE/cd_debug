import React, { useEffect, useRef, useState } from 'react'
import { useTheme } from 'next-themes'
import * as Popover from '@radix-ui/react-popover'
import { Command } from 'cmdk'
import { Button } from '@/components/forms'
import {
  CloseIcon,
  RunnerBolt,
  RunnerRightArrow,
  RunnerArrowUp,
  RunnerArrowDown,
  RunnerActivate,
  RunnerActions,
  RunnerPages,
  RunnerSettings,
  RunnerSend,
  RunnerWallet,
  RunnerTheme,
} from '@/components/interface/Icons'
import classNames from 'classnames'
import Draggable from 'react-draggable'

export default function Runner({ open, setOpen }) {
  const [value, setValue] = useState('')
  const [searchString, setSearchString] = useState('')
  const inputRef = useRef(null)
  const listRef = useRef(null)
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  const [isDragging, setIsDragging] = useState(false)

  useEffect(() => {
    inputRef?.current?.focus()
  }, [])

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    function listener(e) {
      if (e.key === 'k' && e.metaKey) {
        e.preventDefault()
        setOpen(o => !o)
      }

      if (e.key === '/') {
        e.preventDefault()
        setOpen(o => !o)
      }

      if (e.key === 'Escape') {
        if (inputRef.current.value !== '') {
          e.preventDefault()
          // console.log('clearing', inputRef.current.value, searchString)
          inputRef.current.value = ''
          return
        } else {
          e.preventDefault()
          setOpen(false)
        }
      }
    }

    document.addEventListener('keydown', listener)

    return () => {
      document.removeEventListener('keydown', listener)
    }
  }, [])

  if (!mounted) {
    return null
  }

  if (!open) {
    return null
  }

  return (
    <div
      className="app-Runner"
      onClick={e => {
        if (e.target === e.currentTarget) {
          e.preventDefault()
          setOpen(false)
        }
      }}>
      <Draggable
        onDrag={() => setIsDragging(true)}
        onStop={() => setIsDragging(false)}
        // disabled={!isDraggable}
        handle=".mainWindow">
        <Command
          className="mainWindow !py-0"
          value={value}
          onValueChange={v => setValue(v)}
          onChange={e => setSearchString(e.target.value)}>
          <div cmdk-raycast-top-shine="" />
          <div className="flex h-full items-center justify-between gap-2 py-2 px-2">
            <div className="relative flex flex-1 items-center">
              <Command.Input
                ref={inputRef}
                autoFocus
                placeholder="What do you wanna do?"
                className={classNames(
                  'rounded-md !border-none bg-transparent !pl-10 text-slate-600 caret-primary-500 !ring-inset transition placeholder:!text-slate-400 hover:bg-slate-100 hover:ring-1 hover:!ring-slate-200 focus:!bg-primary-50/50 focus:shadow-[inset_0px_0px_7px_3px] focus:shadow-primary-800/[0.07] focus:ring-2 focus:!ring-primary-500 dark:text-slate-100/80 dark:hover:bg-slate-100/5 dark:hover:!ring-slate-200/10 dark:focus:!bg-primary-50/5 dark:focus:shadow-primary-800/[0.1] dark:focus:!ring-primary-500',
                  {
                    '!bg-slate-100 ring-1 !ring-slate-200 dark:!bg-slate-100/5 dark:!ring-slate-200/10':
                      searchString !== '',
                  },
                )}
              />
              <div className="absolute inset-y-0 left-2.5 flex h-full items-center gap-2 text-slate-600/70 dark:text-slate-200/40">
                <RunnerBolt />
              </div>
            </div>
            <Button
              onClick={() => setOpen(false)}
              className="flex !h-[40px] !w-[40px] shrink-0 items-center justify-center !rounded-md !bg-transparent !p-3.5 !text-slate-700 text-slate-600/70 opacity-80 !ring-0 hover:!bg-slate-200/80 hover:opacity-100 dark:!text-slate-200/50 dark:hover:!bg-slate-300/5 dark:hover:!text-slate-200/80"
              icon={<CloseIcon />}
            />
          </div>
          <hr
            cmdk-raycast-loader=""
            className="!my-0 !mb-4 h-px w-full !bg-slate-900/10 shadow shadow-slate-900/5 dark:!bg-slate-100/5"
          />
          <Command.List ref={listRef}>
            <Command.Empty>No results found.</Command.Empty>
            <Command.Group heading="Cyberdeck">
              <Item value="Actions" icon={<RunnerActions />}>
                Actions
              </Item>
              <Item value="Pages" icon={<RunnerPages />}>
                Pages
              </Item>
              <Item value="Settings" icon={<RunnerSettings />}>
                Settings
              </Item>
            </Command.Group>
            <Command.Group heading="Suggestions">
              <Item isCommand value="Send Assets" icon={<RunnerSend />}>
                Send Assets
              </Item>
              <Item isCommand value="Go to Wallet" icon={<RunnerWallet />}>
                Go to Wallet
              </Item>
              <Item
                onSelect={() => {
                  console.log('set theme', resolvedTheme)
                  setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
                }}
                isCommand
                value={
                  resolvedTheme === 'dark'
                    ? 'Set Theme to Light'
                    : 'Set Theme to Dark'
                }
                icon={<RunnerTheme className="-ml-[0.135rem]" />}>
                {resolvedTheme === 'dark'
                  ? 'Set Theme to Light'
                  : 'Set Theme to Dark'}
              </Item>
            </Command.Group>
          </Command.List>

          <div cmdk-raycast-footer="" className="flex w-full justify-between">
            <span className="flex flex-1 items-center justify-between">
              <span className="flex items-center justify-between gap-1.5 text-[9px] font-semibold uppercase !tracking-wide text-slate-500">
                <kbd>
                  <RunnerArrowUp />
                </kbd>
                <kbd>
                  <RunnerArrowDown />
                </kbd>
                Navigate
              </span>
            </span>

            <button
              cmdk-raycast-open-trigger=""
              className="!text-[9px] font-semibold uppercase !tracking-wide !text-slate-500 focus-visible:!outline-none focus-visible:!ring focus-visible:!ring-primary-500  ">
              Activate
              <kbd>
                <RunnerActivate />
              </kbd>
            </button>
            {/* <hr />
          <SubCommand
            listRef={listRef}
            selectedValue={value}
            inputRef={inputRef}
          /> */}
          </div>
        </Command>
      </Draggable>
    </div>
  )
}

function Item({ children, value, isCommand = false, onSelect, icon }) {
  return (
    <Command.Item value={value} onSelect={onSelect}>
      <span className="flex items-center gap-3">
        <span className="flex w-[18px] items-center justify-center">
          {icon}
        </span>
        {children}
      </span>
      <span cmdk-raycast-meta="" className="!flex !shrink-0 !text-xl">
        {isCommand ? <RunnerRightArrow /> : <RunnerRightArrow />}
      </span>
    </Command.Item>
  )
}

function SubCommand({ inputRef, listRef, selectedValue }) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    function listener(e) {
      if (e.key === 'k' && e.metaKey) {
        e.preventDefault()
        setOpen(o => !o)
      }
    }

    document.addEventListener('keydown', listener)

    return () => {
      document.removeEventListener('keydown', listener)
    }
  }, [])

  useEffect(() => {
    const el = listRef.current

    if (!el) return

    if (open) {
      el.style.overflow = 'hidden'
    } else {
      el.style.overflow = ''
    }
  }, [open, listRef])

  return (
    <Popover.Root open={open} onOpenChange={setOpen} modal>
      <Popover.Trigger
        cmdk-raycast-subcommand-trigger=""
        onClick={() => setOpen(true)}
        aria-expanded={open}>
        Actions
        <kbd>⌘</kbd>
        <kbd>K</kbd>
      </Popover.Trigger>
      <Popover.Content
        side="top"
        align="end"
        className="raycast-submenu"
        sideOffset={16}
        alignOffset={0}
        onCloseAutoFocus={e => {
          e.preventDefault()
          inputRef?.current?.focus()
        }}>
        <Command>
          <Command.List>
            <Command.Group heading={selectedValue}>
              <SubItem shortcut="↵">
                {/* <WindowIcon /> */}
                Open Application
              </SubItem>
              <SubItem shortcut="⌘ ↵">
                {/* <FinderIcon /> */}
                Show in Finder
              </SubItem>
              <SubItem shortcut="⌘ I">
                {/* <FinderIcon /> */}
                Show Info in Finder
              </SubItem>
              <SubItem shortcut="⌘ ⇧ F">
                {/* <StarIcon /> */}
                Add to Favorites
              </SubItem>
            </Command.Group>
          </Command.List>
          <Command.Input placeholder="Search for actions..." />
        </Command>
      </Popover.Content>
    </Popover.Root>
  )
}

function SubItem({ children, shortcut }) {
  return (
    <Command.Item>
      {children}
      <div cmdk-raycast-submenu-shortcuts="">
        {shortcut.split(' ').map(key => {
          return <kbd key={key}>{key}</kbd>
        })}
      </div>
    </Command.Item>
  )
}
