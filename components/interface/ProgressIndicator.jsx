import cx from 'classnames'
import TagLabel from './TagLabel'

const STEPS = ['Concept', 'Development', 'Pre-Alpha', 'Testing', 'Complete']
const COLORS = ['gray', 'blue', 'purple', 'orange', 'green']

function Step({ title, active, color, complete, activeColor }) {
  return (
    <span
      className={cx(
        'relative h-[2px] w-full rounded-full bg-slate-200 dark:bg-slate-200/20 dark:shadow-sm dark:shadow-slate-900/10 dark:ring-[0.25px] dark:ring-inset dark:ring-white/20',
        {
          '!bg-gray-300': activeColor === 'gray' && complete,
          '!bg-blue-500': activeColor === 'blue' && complete,
          '!bg-purple-500': activeColor === 'purple' && complete,
          '!bg-orange-500': activeColor === 'orange' && complete,
          '!bg-green-500': activeColor === 'green' && complete,
        },
      )}>
      {active && (
        <TagLabel
          className="absolute left-1/2 top-0 mt-2 -translate-x-1/2 whitespace-nowrap"
          color={color}
          label={title}
        />
      )}
    </span>
  )
}

export default function ProgressIndicator({ stage, className }) {
  const activeColor = COLORS[stage - 1]

  return (
    <div className={`grid grid-cols-5 gap-1.5 ${className}`}>
      {STEPS.map((title, idx) => (
        <Step
          activeColor={activeColor}
          complete={idx + 1 <= stage}
          color={COLORS[idx]}
          active={stage === idx + 1}
          key={idx}
          title={title}
        />
      ))}
    </div>
  )
}
