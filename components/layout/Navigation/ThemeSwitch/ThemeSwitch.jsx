import { RadioGroup as ThemeList } from '@headlessui/react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { BiMoon, BiSun } from 'react-icons/bi'
// import { AiOutlineDesktop } from 'react-icons/ai'
import { Tooltip } from '@/components/interface'
import { SystemTheme } from '@/components/interface/Icons'
import classnames from 'classnames'

const ThemeItem = props => {
  const defaultStyles =
    'flex items-center justify-center align-middle motion-safe:transition-all rounded-full h-6 w-6 cursor-pointer text-primary-50/40 stroke-primary-50/40 outline-none hover:text-primary-50 hover:stroke-primary-50 hover:ring-2 hover:ring-primary-500/50 hover:ring-offset-2 hover:ring-offset-primary-1000 focus:text-primary-50 focus:stroke-primary-50 focus:ring-2 focus:ring-primary-500/50 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-primary-1000 active:mobile:bg-slate-400/20 active:md:bg-primary-400/20'
  const checkedStyles =
    'mobile:!text-slate-50 md:!text-primary-50 dark:text-primary-50/100 mobile:!bg-slate-400/20 md:!bg-primary-400/20 stroke-primary-50/100 dark:bg-primary-400/20'

  function titleCase(string) {
    return string[0].toUpperCase() + string.slice(1).toLowerCase()
  }

  return (
    <ThemeList.Option
      value={props.value}
      className="flex w-8 justify-center !outline-none outline"
      title={props.title}>
      {({ checked }) => (
        <div className={classnames(defaultStyles, checked && checkedStyles)}>
          <Tooltip
            content={titleCase(props.value)}
            side="right"
            sideOffset={12}
            asChild>
            {props.icon}
          </Tooltip>
        </div>
      )}
    </ThemeList.Option>
  )
}

const ThemeSwitch = props => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), [])

  // useHotkeys([['ctrl+T', () => setTheme('light')]])

  // If not mounted, return nothing
  if (!mounted) return null

  return (
    <>
      <ThemeList
        value={theme}
        onChange={setTheme}
        className={classnames(
          'relative flex flex-col items-center justify-center gap-3 mobile:-right-1 mobile:flex-row ',
          props.className,
        )}
        as="li">
        <ThemeItem value="light" icon={<BiSun />} />
        <ThemeItem value="dark" icon={<BiMoon />} />
        <ThemeItem value="system" icon={<SystemTheme />} />
      </ThemeList>
    </>
  )
}

export default ThemeSwitch
