import PropTypes from 'prop-types'
import { BiChevronDown } from 'react-icons/bi'

const CardHeaderDropdown = ({ label }) => {
  return (
    <div className="flex cursor-pointer appearance-none gap-3 rounded bg-transparent py-1 pl-2 pr-3 text-slate-500 outline-none hover:bg-slate-400/20 hover:text-slate-900 active:bg-slate-400/40 motion-safe:transition dark:text-slate-50/50 dark:hover:bg-slate-900/20 dark:hover:text-slate-50 dark:active:bg-slate-900/40">
      <div className="text-sm">{label}</div>
      <div className="relative flex items-center justify-center opacity-50">
        <BiChevronDown className="absolute" size="20" />
      </div>
    </div>
  )
}

CardHeaderDropdown.defaultProps = {
  title: 'Title',
  children: 'Content',
  isCollapsed: false,
}

CardHeaderDropdown.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any,
  className: PropTypes.string,
  isOpen: PropTypes.bool,
}

export default CardHeaderDropdown
