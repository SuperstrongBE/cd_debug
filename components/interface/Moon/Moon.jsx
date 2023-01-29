import PropTypes from 'prop-types'

const Moon = () => {
  return (
    <div
      aria-hidden="true"
      className="absolute top-0 left-0 right-0 flex h-0 flex-col gap-4 text-yellow-100 md:hidden">
      <span className="flex justify-center gap-2">
        <span className="opacity-40 dark:opacity-30">
          Don&lsquo;t bet against the moon
        </span>{' '}
        <span className="hidden dark:inline">🌖</span>
        <span className="dark:hidden">🌘</span>
      </span>
    </div>
  )
}

Moon.defaultProps = {
  content: 'Content',
}

Moon.propTypes = {
  content: PropTypes.any,
  className: PropTypes.string,
}

export default Moon
