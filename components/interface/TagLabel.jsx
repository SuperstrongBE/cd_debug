import cx from 'classnames'

export default function TagLabel({ label, color, className }) {
  return (
    <span
      className={cx(
        'inline-flex h-[1.1rem] grow-0 whitespace-nowrap rounded px-1.5 py-0 text-[10px] font-semibold uppercase leading-[1.1rem] ',

        {
          'bg-slate-200/70 text-slate-500 dark:bg-slate-200/15 dark:text-slate-100/60':
            !color || color === 'gray',
        },

        {
          'bg-blue-100 text-blue-500 dark:bg-blue-500/60 dark:text-blue-100/80':
            color === 'blue',
        },

        {
          'bg-purple-200 text-purple-500 dark:bg-purple-500/60 dark:text-purple-100/80':
            color === 'purple',
        },
        {
          'bg-green-100 text-green-500 dark:bg-green-500/60 dark:text-green-100/80':
            color === 'green',
        },
        {
          'bg-red-100 text-red-500 dark:bg-red-500/60 dark:text-red-100/80':
            color === 'red',
        },
        {
          'bg-orange-100 text-orange-500 dark:bg-orange-500/60 dark:text-orange-100/80':
            color === 'orange',
        },
        className,
      )}>
      {label}
    </span>
  )
}
