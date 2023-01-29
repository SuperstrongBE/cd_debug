import classnames from 'classnames'
import Link from 'next/link'
import {
  MenuMore,
  MenuOTC,
  MenuProfile,
  MenuReceive,
  MenuSend,
  MenuSwap,
  MoneyReceive,
  OTC,
  Send,
  Swap,
} from '../../interface/Icons'

function ActionGroup({ children }) {
  return (
    <div className="flex h-[40px] w-[200px]  grow-0 items-center overflow-hidden rounded-md bg-primary-50/15  text-primary-50 shadow-md shadow-slate-900/20 ring-1 ring-inset ring-primary-300/10 backdrop-blur-xl -backdrop-blur:bg-slate-700/90 motion-safe:transition-all dark:bg-primary-50/15 dark:text-primary-50 dark:shadow-slate-900/30 dark:ring-1 dark:ring-inset dark:ring-primary-300/10 dark:backdrop-blur-xl dark:-backdrop-blur:bg-slate-700 dark:-backdrop-blur:bg-slate-700/90 dark:tablet:backdrop-blur-lg [&>button]:mx-[-0.5px] [&>button]:flex-1 [&>button]:items-center [&>button:last-child>*]:border-0 [&>button:last-child]:mr-[0px] [&>button:first-child]:ml-[0px]">
      {children}
    </div>
  )
}

function Action({ title, href }) {
  return (
    <Link legacyBehavior href={href} title={title}>
      <a className="-mr-[1px] flex h-[40px] w-[40px] flex-1 grow-0 items-center justify-center border-r-[1px] border-primary-50/[0.075] outline-0 last:mr-0 last:border-r-0 hover:bg-primary-100/[0.075] focus:rounded-md  focus:border-transparent focus:ring-2 focus:ring-inset focus:ring-slate-900 focus:ring-offset-2 focus:ring-offset-primary active:bg-primary-1000/[0.055]">
        <span className="flex w-[40px] items-center justify-center">
          {title === 'Send' ? (
            <div className="flex flex-col items-center justify-center font-normal ">
              <span className="flex h-[18px] w-[18px] items-center justify-center opacity-70">
                <MenuSend />
              </span>
            </div>
          ) : title === 'Receive' ? (
            <div className="flex flex-col items-center justify-center font-normal ">
              <span className="flex h-[18px] w-[18px] items-center justify-center opacity-70">
                <MenuReceive />
              </span>
            </div>
          ) : title === 'Swap' ? (
            <div className="flex flex-col items-center justify-center font-normal ">
              <span className="flex h-[18px] w-[18px] items-center justify-center opacity-70">
                <MenuSwap />
              </span>
            </div>
          ) : title === 'OTC' ? (
            <div className="flex flex-col items-center justify-center font-normal ">
              <span className="flex h-[18px] w-[18px] items-center justify-center opacity-70">
                <MenuOTC />
              </span>
            </div>
          ) : title === 'Profile' ? (
            <div className="flex flex-col items-center justify-center font-normal ">
              <span className="flex h-[18px] w-[18px] items-center justify-center opacity-70">
                <MenuProfile />
              </span>
            </div>
          ) : title === 'More' ? (
            <div className="flex flex-col items-center justify-center font-normal ">
              <span className="flex h-[18px] w-[18px] items-center justify-center opacity-70">
                <MenuMore />
              </span>
            </div>
          ) : (
            ''
          )}
        </span>
      </a>
    </Link>
  )
}

const SidebarActions = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className={classnames(
        'flex flex-row md:gap-6 mobile:gap-4 [&>div:first-child]:flex-1',
      )}>
      <ActionGroup>
        <Action title="Send" href="/dashboard" />
        <Action title="Receive" href="/dashboard" />
        <Action title="Swap" href="/dashboard" />
        <Action title="OTC" href="/dashboard" />
        <Action title="Profile" href="/dashboard" />
        <Action title="More" href="/dashboard" />
      </ActionGroup>
    </div>
  )
}

export default SidebarActions
