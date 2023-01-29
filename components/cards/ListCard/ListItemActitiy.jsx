import Link from "next/link"
import { BiArrowToBottom, BiPackage } from "react-icons/bi"

const ListItemActivity = ({ item }) => {
  return (
    <Link legacyBehavior href="/">
      <a className="group relative flex py-2 pr-6 hocus:bg-slate-200 dark:hocus:bg-slate-900/20 ">
        <div className="flex w-6 items-center justify-center">
          {item.status == 'Unseen' && (
            <span className="block h-1.5 w-1.5 rounded bg-blue-500" />
          )}
        </div>
        <div className="flex w-6 flex-col items-center gap-1 ">
          <div className="relative -left-1.5 flex grow flex-col items-center justify-center gap-[5px]">
            <div className="text-emerald-500">
              <BiArrowToBottom size="18" />
            </div>
            {item.type && (
              <div className="text-slate-400 dark:text-slate-50/30">
                {item.type == 'airdrop' && <BiPackage size="14" />}
              </div>
            )}
          </div>
        </div>
        <div className="grow">
          <div className="flex justify-between text-slate-900 dark:text-slate-200">
            <div className="">{item.name ? item.name : item.wallet}</div>
            <div className="text-slate-700 dark:text-slate-50/60">
              {item.amount} {item.currency}
            </div>
          </div>
          <div className="flex justify-between text-sm text-slate-400 dark:text-slate-50/30">
            <div className="">
              <span>{item.time}</span>
            </div>
            <div className="">{item.amount_ust} UST</div>
          </div>
        </div>
      </a>
    </Link>
  )
}

ListItemActivity.defaultProps = {}

ListItemActivity.propTypes = {}

export default ListItemActivity
