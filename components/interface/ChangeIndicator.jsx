import { BiDownArrowAlt, BiUpArrowAlt } from 'react-icons/bi'

export default function ChangeIndicator({ className, change, reverseColors }) {
  return (
    <span
      className={`
        inline-flex items-center self-end text-xs font-medium 
        ${
          change >= 1 && !reverseColors
            ? 'text-green-600 dark:text-emerald-500'
            : change >= 1 && reverseColors
            ? 'text-red-600 dark:text-red-500'
            : change <= -1 && !reverseColors
            ? 'text-red-600 dark:text-red-500'
            : change <= -1 && reverseColors
            ? 'text-green-600 dark:text-emerald-500'
            : 'text-slate-500 dark:text-slate-300/70'
        }
         ${className}`}>
      {change >= 0 ? (
        <BiUpArrowAlt className="text-sm" />
      ) : (
        <BiDownArrowAlt className="text-sm" />
      )}

      {Math.abs(change).toFixed(2).replace('.00', '') + '%'}
    </span>
  )
}
