import { useLocalStorage } from '@mantine/hooks'
import * as RadixTooltip from '@radix-ui/react-tooltip'
import PropTypes from 'prop-types'

const Tooltip = ({
  children,
  open,
  content,
  side,
  sideOffset,
  asChild,
  micro,
  info,
}) => {
  // TODO Need to have the ability to make it stop working on mobile completely if a tooltip isn't important, not just small widths

  const [userTheme, setUserTheme] = useLocalStorage({
    key: 'userTheme',
  })

  const invert = userTheme?.invertButtons ? true : false

  return (
    <RadixTooltip.Root open={open}>
      <RadixTooltip.Trigger tabIndex="-1">{children}</RadixTooltip.Trigger>
      <RadixTooltip.Portal>
        <RadixTooltip.Content
          side={side}
          sideOffset={sideOffset}
          className={`${
            micro ? 'rounded py-0.5 px-1.5 text-xs' : 'rounded-md py-1 text-sm'
          } ${
            info
              ? 'bg-slate-50 text-slate-600 dark:bg-primary-1000/[0.875] dark:text-slate-300/70'
              : 'bg-primary-500/95 text-primary-50'
          }
          ${invert ? 'text-primary-1000' : ''}
          z-[9999] flex px-2 font-defaultSans opacity-100 shadow-md shadow-black/5 motion-safe:animate-tooltip motion-safe:transition-transform dark:shadow-black/10`}>
          {content}
        </RadixTooltip.Content>
      </RadixTooltip.Portal>
    </RadixTooltip.Root>
  )
}

Tooltip.defaultProps = {
  content: 'Content',
}

Tooltip.propTypes = {
  content: PropTypes.any,
  className: PropTypes.string,
}

export default Tooltip
