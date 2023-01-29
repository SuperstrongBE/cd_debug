import * as Separator from '@radix-ui/react-separator'
import { BiDollarCircle } from 'react-icons/bi'

const LiquidityItem = ({ token, holding, rate, value }) => {
  return (
    <>
      <a
        href="#"
        className="relative z-0 flex gap-2 px-3 text-sm text-slate-50 outline-none ring-slate-50 first:rounded-t-none last:border-0 hover:border-slate-50/10 focus:rounded-md focus:ring-2 focus:ring-inset focus:ring-slate-900 focus:ring-offset-2 focus:ring-offset-primary active:bg-slate-900/50 hocus:bg-slate-900/20 dark:text-slate-300">
        {/* <div className="relative flex items-center justify-center">
          <div className="relative -top-[3px] flex h-full w-[28px] justify-end pt-3 ">
            <div className="absolute text-slate-50/30">
              <BiDollarCircle size="18" />
            </div>
          </div>
        </div> */}

        <div className="grow pt-2 pb-3">
          <div className="flex justify-between gap-2 text-slate-50/50 dark:text-slate-50/40">
            <div className="">{token}</div>
            <div className="">{rate}</div>
          </div>
          <div className="flex justify-between gap-2">
            <div className="">{holding}</div>
            <div className="">{value}</div>
          </div>

          {/* <div className="flex items-center justify-between grow text-slate-50/50 dark:text-slate-50/40">
            <div className="">{token}</div>
            <div className="relative top-[1px] flex items-center">{rate}</div>
          </div>
          <div className="flex items-center justify-between grow">
            <div>{holding}</div>
            <div className="relative top-[1px] flex items-center">{value}</div>
          </div> */}
        </div>
      </a>
      <Separator.Root
        decorative
        className="h-[1px] bg-slate-50/5 last:hidden  dark:bg-slate-50/3"
      />
    </>
  )
}

LiquidityItem.defaultProps = {
  icon: <BiDollarCircle />,
}

// LiquidityItem.propTypes = {
//   token: PropTypes.string.isRequired,
//   holding: PropTypes.number.isRequired,
//   rate: PropTypes.number.isRequired,
//   icon: PropTypes.node.isRequired,
//   type: PropTypes.string,
//   native: PropTypes.string,
// }

export default LiquidityItem
