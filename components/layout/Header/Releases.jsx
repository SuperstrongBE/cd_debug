import classnames from 'classnames'
import PropTypes from 'prop-types'
import { HiOutlineNewspaper } from 'react-icons/hi'

const Releases = ({ hasRelease }) => {
  return (
    <a
      className={classnames(
        'relative flex h-6 w-6 flex-none items-center justify-center rounded-full text-slate-300 dark:text-slate-400',
        hasRelease && '!text-green-400',
      )}>
      <HiOutlineNewspaper size="22" />
      <span
        className={classnames(
          'absolute -bottom-[0.4rem] h-1 w-1 rounded-full ',
          hasRelease && 'bg-green-400 motion-safe:animate-notification',
        )}
      />
    </a>
  )
}

Releases.defaultProps = {
  hasReleases: false,
}

Releases.propTypes = {
  hasReleases: PropTypes.bool,
}

export default Releases
