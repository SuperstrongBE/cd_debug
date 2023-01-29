import classnames from 'classnames'
import { BiUserCircle } from 'react-icons/bi'

const AccountAvatar = ({ toggleAccounts, accountsIsClosed }) => {
  return (
    <a
      href="#"
      onClick={toggleAccounts}
      className={classnames(
        'relative flex h-6 w-6 items-center justify-center overflow-hidden rounded-full motion-safe:transition-all ',
        accountsIsClosed
          ? 'text-slate-50/50'
          : 'bg-slate-800 ring-2 ring-primary ring-offset-2 ring-offset-slate-800',
      )}>
      <BiUserCircle size="22" />
    </a>
  )
}

export default AccountAvatar
