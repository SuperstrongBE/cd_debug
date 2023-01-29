import classnames from 'classnames'
import PropTypes from 'prop-types'
import { MdOutlineNotificationsActive } from 'react-icons/md'

const Notification = ({ hasNotification }) => {
  return (
    <a
      className={classnames(
        'relative flex h-6 w-6 flex-none items-center justify-center rounded-full text-slate-300 dark:text-slate-400',
        hasNotification && '!text-red-400',
      )}>
      <MdOutlineNotificationsActive size="22" />
      <span
        className={classnames(
          'absolute -bottom-[0.4rem] h-1 w-1 rounded-full',
          hasNotification &&
            'bg-red-400 motion-safe:animate-notificationdelayed',
        )}
      />
    </a>
  )
}

Notification.defaultProps = {
  hasNotification: false,
}

Notification.propTypes = {
  hasNotification: PropTypes.bool,
}

export default Notification
