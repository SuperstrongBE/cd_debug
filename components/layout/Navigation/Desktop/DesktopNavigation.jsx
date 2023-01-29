import useAbbreviated from '@/components/hooks/useAbbreviated'
import {
  Activity,
  Collectibles,
  Dashboard,
  DashboardGraph,
  DeckCards,
  Feed,
  Learn,
  Marketplace,
  MissionRocket,
  NavContacts,
  NavFeed,
  NavWallets,
  Notifications,
  Protocols,
  ProtonEcosystem,
  SettlersPlanet,
  WalletNav,
} from '@/components/interface/Icons'
import * as Separator from '@radix-ui/react-separator'
import * as RadixTooltip from '@radix-ui/react-tooltip'
import classNames from 'classnames'
import { useEffect, useState } from 'react'
import ThemeSwitch from '../ThemeSwitch/ThemeSwitch'
import Item from './DesktopNavigationItem'

const DesktopNavigation = () => {
  const [abbreviated] = useAbbreviated('2xl')

  const [showLabel, setShowLabel] = useState(true)

  useEffect(() => {
    setShowLabel(!abbreviated)
  }, [abbreviated])

  function GroupHeading({ title }) {
    return (
      <h3 className="relative left-px mt-3 mb-1.5 hidden pl-2 text-[10px] font-semibold uppercase tracking-wide text-primary-50/40 2xl:flex">
        {title}
      </h3>
    )
  }

  return (
    <>
      {/* Navigation Container */}
      <RadixTooltip.Provider delayDuration={800} skipDelayDuration={500}>
        <nav className="mainNavigation h-screen-safe sticky top-0 bottom-0 flex flex-col items-center justify-between gap-4 mobile:hidden">
          {/* Main Pages */}
          <div className="flex h-full flex-col gap-7 overflow-y-auto overscroll-none p-6 px-8 pr-10 motion-safe:transition-padding 2xl:py-8">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2 2xl:gap-0">
                <div className="flex flex-col">
                  <Item
                    logo
                    href="/"
                    icon={
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="text-primary-50"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          className="!stroke-none"
                          d="M15.1376 22.7H9.34437C6.25987 22.7 4 20.5669 4 17.6502V6.0558C4 3.13385 6.25987 1.00078 9.34437 1.00078H15.2107C15.9091 0.988657 16.6028 1.1172 17.25 1.37869C17.8972 1.64018 18.4844 2.02923 18.9764 2.52236C19.4684 3.01549 19.855 3.60252 20.1129 4.24812C20.3707 4.89372 20.4945 5.58453 20.4768 6.27896V7.58684H16.6251V5.94164C16.6231 5.58795 16.4863 5.24816 16.2421 4.99095C15.998 4.73373 15.6648 4.57824 15.3098 4.55589H9.14082C8.78493 4.57698 8.45043 4.73192 8.20521 4.98927C7.95998 5.24661 7.82242 5.58711 7.8204 5.94164V17.8007C7.82242 18.1552 7.95998 18.4957 8.20521 18.753C8.45043 19.0104 8.78493 19.1653 9.14082 19.1864H15.3098C15.6648 19.164 15.998 19.0086 16.2421 18.7513C16.4863 18.4941 16.6231 18.1544 16.6251 17.8007V16.1191H20.4611V17.6761C20.4767 20.5669 18.2221 22.7 15.1376 22.7Z"
                          fill={showLabel ? 'currentColor' : 'currentColor'}
                        />
                      </svg>
                    }
                    content="Cyberdeck"
                  />

                  <Separator.Root className="h-4 w-full opacity-0 2xl:mb-0.5 2xl:mt-px 2xl:h-5" />
                </div>

                <Item
                  href="/dashboard"
                  icon={<DashboardGraph />}
                  content="Dashboard"
                  showLabel={showLabel}
                />
                <Item
                  href="/deck"
                  icon={<DeckCards />}
                  content="Deck"
                  showLabel={showLabel}
                />

                <Separator.Root
                  decorative
                  className={classNames(
                    'mx-3 h-[1px] bg-slate-50/20 dark:bg-slate-50/10',
                    {
                      'my-1 opacity-0': showLabel,
                    },
                  )}
                />

                <GroupHeading title="Cyberdeck" />

                <Item
                  href="/settlers"
                  icon={<SettlersPlanet />}
                  content="Settlers"
                  showLabel={showLabel}
                />

                <Item
                  href="/mission"
                  icon={<MissionRocket />}
                  content="Mission"
                  showLabel={showLabel}
                />

                <Separator.Root
                  decorative
                  className={classNames(
                    'mx-3 h-[1px] bg-slate-50/20 dark:bg-slate-50/10',
                    {
                      'my-1 opacity-0': showLabel,
                    },
                  )}
                />

                <GroupHeading title="Proton" />

                <Item
                  href="/ecosysten"
                  icon={<ProtonEcosystem />}
                  content="Ecosystem"
                  showLabel={showLabel}
                />

                <Item
                  href="/learn"
                  icon={<Learn />}
                  content="Learn"
                  showLabel={showLabel}
                />

                <Separator.Root
                  decorative
                  className={classNames(
                    'mx-3 h-[1px] bg-slate-50/20 dark:bg-slate-50/10',
                    {
                      'opacity-0': showLabel,
                    },
                  )}
                />

                <GroupHeading title="Coming Soon" />

                <span className="disabled flex flex-col gap-2 2xl:gap-0">
                  <Item
                    disabled
                    href="/feed"
                    icon={<NavFeed />}
                    content="Feed"
                    showLabel={showLabel}
                  />

                  <Item
                    disabled
                    href="/wallets"
                    icon={<NavWallets />}
                    content="Wallets"
                    showLabel={showLabel}
                  />

                  <Item
                    disabled
                    href="/contacts"
                    icon={<NavContacts />}
                    content="Contacts"
                    showLabel={showLabel}
                  />
                </span>
              </div>
            </div>

            {/* Settings */}
            {/* <div
              className={classNames('flex flex-col', {
                'relative left-1 hidden items-start': showLabel,
              })}>
              <ThemeSwitch />
            </div> */}
          </div>
        </nav>
      </RadixTooltip.Provider>
    </>
  )
}

export default DesktopNavigation
