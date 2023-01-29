import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import AccountAvatar from './Avatar'

const Header = ({ toggleAccounts, accountsIsClosed, walletConnected }) => {
  const router = useRouter()

  return (
    <>
      <div className="mobile-header bg-blur fixed top-0 left-0 right-0 z-40 flex h-12 items-center bg-gradient-to-b from-slate-600 to-slate-600/80 px-3 text-slate-200 shadow-md shadow-slate-900/20 dark:from-slate-600 dark:to-slate-600/60 dark:shadow-lg dark:shadow-slate-900/30 md:hidden">
        <div className="flex w-16 gap-4">
          <AccountAvatar
            toggleAccounts={toggleAccounts}
            accountsIsClosed={accountsIsClosed}
          />
        </div>
        <h1
          onClick={() => router.reload()}
          className="relative flex grow flex-col items-center justify-center font-medium text-slate-300 ">
          <div className="font-defaultSans">Dashboard</div>
          {/* Tapping on thte title reloads the page so it's easy to get new changes in dev mode on mobile standalone version */}
        </h1>
        <div className="relative flex w-16 justify-end gap-4">
          {/* <Releases hasRelease={walletConnected} /> */}
          {/* <Notification /> */}
        </div>
      </div>
    </>
  )
}

Header.defaultProps = {
  children: 'Empty',
}

Header.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Header
