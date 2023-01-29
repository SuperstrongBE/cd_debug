import { Moon, Wallpaper } from '@/components/interface'
import {
  Header,
  DesktopNavigation,
  MobileNavigation,
  Sidebar,
} from '@/components/layout'

import { useHotkeys, useLocalStorage, useScrollLock } from '@mantine/hooks'
import * as RadixTooltip from '@radix-ui/react-tooltip'
import classNames from 'classnames'
import * as Fathom from 'fathom-client'
import { ThemeProvider } from 'next-themes'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { BiUpArrowCircle } from 'react-icons/bi'
import disableResizeAnimations from '../components/utils/disableResizeAnimations'

import { Inter } from '@next/font/google'
import { Analytics } from '@vercel/analytics/react'
import Runner from '../components/interface/Runner'

import ProtonAuthProvider from '@/components/providers/AuthProvider'
import { StoreProvider } from 'easy-peasy'
import { globalStore } from '@/store'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export default function RootLayout({
  children,
}) {

  const router = useRouter()
  useEffect(() => {
    Fathom.load('WENDVYPB', {
      includedDomains: ['cyberdeck.money', 'www.cyberdeck.money'],
    })

    function onRouteChangeComplete() {
      Fathom.trackPageview()
    }
    // Record a pageview when route changes
    router.events.on('routeChangeComplete', onRouteChangeComplete)

    // Unassign event listener
    return () => {
      router.events.off('routeChangeComplete', onRouteChangeComplete)
    }
  }, [])

  // Disable resize animations (performance)
  disableResizeAnimations()

  // Keyboard Shortcuts
  useHotkeys([['alt+C', () => setWalletConnected(!walletConnected)]])
  useHotkeys([['alt+S', () => setSettingsSlang(!settingsSlang)]])
  useHotkeys([
    ['alt+O', () => setSettingsWallpaperOpacity(!settingsWallpaperOpacity)],
  ])
  useHotkeys([
    ['alt+G', () => setSettingsWallpaperGrayscale(!settingsWallpaperGrayscale)],
  ])
  useHotkeys([
    ['alt+B', () => setSettingsWallpaperBlur(!settingsWallpaperBlur)],
  ])
  useHotkeys([
    ['alt+H', () => setSettingsWallpaperShow(!settingsWallpaperShow)],
    ['alt+H', () => setSettingsWallpaperOpacity(!settingsWallpaperOpacity)],
    ['alt+H', () => setScrollLocked(!scrollLocked)],
    // [
    //   'alt+H',
    //   () =>
    //     setSettingsWallpaperBlur(settingsWallpaperBlur === true ? false : true),
    // ],
  ])

  // Settings
  const [settingsSlang, setSettingsSlang] = useState(false) // TODO This needs a better name
  const [settingsWallpaperOpacity, setSettingsWallpaperOpacity] = useState(true)
  const [settingsWallpaperGrayscale, setSettingsWallpaperGrayscale] =
    useState(false)
  const [settingsWallpaperBlur, setSettingsWallpaperBlur] = useState(false)
  const [settingsWallpaperShow, setSettingsWallpaperShow] = useState(false)
  const [isAccountsClosed, setIsAccountsClosed] = useState(true) // TODO This needs a better name
  const [walletConnected, setWalletConnected] = useState(true)
  const [scrollLocked, setScrollLocked] = useScrollLock() // TODO when sidebar is open on mobile, and I go to landscape, it still blocks the scroll. Solve this with mantine `use-media-query`

  const [runnerOpen, setRunnerOpen] = useState(false)

  // Toggles
  const toggleIsAccountsClosed = e => {
    e.preventDefault()
    setScrollLocked(!scrollLocked)
    setIsAccountsClosed(!isAccountsClosed)
  }
  const toggleSettingsSlang = e => {
    e.preventDefault()
    setSettingsSlang(!settingsSlang)
  }

  const [wallpaper, setWallpaper] = useState('/wallpapers/new.jpg')

  useEffect(() => {
    const wallpaper = localStorage.getItem('wallpaper')
    if (wallpaper) {
      setWallpaper(wallpaper)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('wallpaper', wallpaper)
  }, [wallpaper])

  const [userTheme, setUserTheme] = useLocalStorage({
    key: 'userTheme',
  })

  const disableBackgroundBlur = userTheme?.disableBackgroundBlur
  const themeColors = userTheme?.themeColors

  useEffect(() => {
    if (themeColors && typeof themeColors === 'object') {
      for (const [key, value] of Object.entries(themeColors)) {
        document.body.style.setProperty(`--color-primary-${key}`, value)
      }
    }
  })

  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <StoreProvider store={globalStore}>
          <ProtonAuthProvider>
            <RadixTooltip.Provider
              disableHoverableContent
              delayDuration={300}
              skipDelayDuration={500}>
              <ThemeProvider
                attribute="class"
                themes={['light', 'dark']}
                disableTransitionOnChange
                enableSystem={true}
                defaultTheme="system">
                <Head>
                  <title>Cyberdeck Money — Alpha</title>
                  <link rel="manifest" href="/manifest.json" />

                  {/* Favicons */}
                  <link rel="icon" href="/favicon.ico" />
                  <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/apple-touch-icon.png"
                  />
                  <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon-32x32.png"
                  />
                  <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon-16x16.png"
                  />
                  <link
                    rel="mask-icon"
                    href="/safari-pinned-tab.svg"
                    color="#0f172a"
                  />

                  {/* Themes & Mobile rules */}
                  <meta name="mobile-web-app-capable" content="yes" />
                  <meta name="apple-mobile-web-app-capable" content="yes" />
                  <meta
                    name="apple-mobile-web-app-status-bar"
                    content="black-translucent "
                  />
                  <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0, viewport-fit=cover"
                  />
                </Head>

                <Header
                  accountsIsClosed={isAccountsClosed}
                  toggleAccounts={toggleIsAccountsClosed}
                  walletConnected={walletConnected}
                />

                <MobileNavigation />

                <div
                  className={classNames(
                    `page-padding min-h-screen-safe relative z-10 mx-auto flex max-w-[1880px] transform-gpu transition duration-[3s] ease-[cubic-bezier(0.5,0,0,1.05)] will-change-transform motion-reduce:duration-[2s] mobile:flex-col ${inter.variable} font-sans`,

                    settingsWallpaperShow
                      ? 'translate-y-full scale-95 opacity-0'
                      : // ? ' -translate-x-[80vw] '
                      '-translate-x-0 scale-100',
                    // : '-translate-x-0 scale-100',
                  )}>
                  <Moon />

                  <DesktopNavigation />
                  {children}
                  <Link legacyBehavior href={router.pathname}>
                    <a className="group hidden items-center justify-center p-8 pt-4 opacity-50 mobile:flex">
                      <div className="scale-120 animate-bounce">
                        <BiUpArrowCircle className="text-slate-50/80" size="24" />
                      </div>
                    </a>
                  </Link>
                  <Sidebar
                    isClosed={isAccountsClosed}
                    walletConnected={walletConnected}
                    settingsSlang={settingsSlang}
                    toggleIsClosed={toggleIsAccountsClosed}
                    toggleSettingsSlang={toggleSettingsSlang}
                    wallpaper={wallpaper}
                    setWallpaper={setWallpaper}
                    runnerOpen={runnerOpen}
                    setRunnerOpen={setRunnerOpen}
                  />
                </div>
                <Wallpaper
                  opacity={settingsWallpaperOpacity}
                  grayscale={settingsWallpaperGrayscale}
                  show={settingsWallpaperShow}
                  blur={settingsWallpaperBlur}
                  image={wallpaper}
                />

                <Runner open={runnerOpen} setOpen={setRunnerOpen} />
              </ThemeProvider>

              <Analytics />

              {disableBackgroundBlur && (
                <style jsx global>{`
            .backdrop-blur-md,
            .backdrop-blur-lg,
            .backdrop-blur-xl,
            .dark\:backdrop-blur-md,
            .dark\:backdrop-blur-lg,
            .dark\:backdrop-blur-xl {
              backdrop-filter: blur(0px) !important;
            }
          `}</style>
              )}
            </RadixTooltip.Provider>
          </ProtonAuthProvider>
        </StoreProvider>
      </body>
    </html>
  )
}
