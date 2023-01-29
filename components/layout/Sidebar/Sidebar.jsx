import DesktopSidebar from './DesktopSidebar'
import MobileSidebar from './MobileSidebar'

const Sidebar = ({
  isClosed,
  toggleIsClosed,
  walletConnected,
  settingsSlang,
  toggleSettingsSlang,
  wallpaper,
  setWallpaper,
  runnerOpen,
  setRunnerOpen,
}) => {
  const walletAddress = 'terra69…420'

  return (
    <>
      <DesktopSidebar
        walletConnected={walletConnected}
        walletAddress={walletAddress}
        settingsSlang={settingsSlang}
        toggleSettingsSlang={toggleSettingsSlang}
        wallpaper={wallpaper}
        setWallpaper={setWallpaper}
        runnerOpen={runnerOpen}
        setRunnerOpen={setRunnerOpen}
      />
      <MobileSidebar
        walletConnected={walletConnected}
        isClosed={isClosed}
        toggleIsClosed={toggleIsClosed}
        walletAddress={walletAddress}
        settingsSlang={settingsSlang}
        toggleSettingsSlang={toggleSettingsSlang}
      />
    </>
  )
}

export default Sidebar
