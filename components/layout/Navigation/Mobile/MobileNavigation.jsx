import {
  BiBarChartSquare,
  BiBorderAll,
  BiPhotoAlbum,
  BiWallet,
} from 'react-icons/bi'

import Item from './MobileNavigationItem'

const MobileNavigation = () => {
  const iconSize = '22'

  return (
    <>
      <div className="bg-blur mobile-navigation fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-t from-slate-600 to-slate-600/80 text-slate-200 dark:from-slate-600/80 dark:to-slate-600/70 md:hidden">
        <div className="flex grow snap-x snap-mandatory overflow-x-auto pb-1 scrollbar-hide">
          <div className="flex w-screen shrink-0 snap-center px-3">
            <Item
              href="/"
              icon={
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M15.1376 22.7H9.34437C6.25987 22.7 4 20.5669 4 17.6502V6.0558C4 3.13385 6.25987 1.00078 9.34437 1.00078H15.2107C15.9091 0.988657 16.6028 1.1172 17.25 1.37869C17.8972 1.64018 18.4844 2.02923 18.9764 2.52236C19.4684 3.01549 19.855 3.60252 20.1129 4.24812C20.3707 4.89372 20.4945 5.58453 20.4768 6.27896V7.58684H16.6251V5.94164C16.6231 5.58795 16.4863 5.24816 16.2421 4.99095C15.998 4.73373 15.6648 4.57824 15.3098 4.55589H9.14082C8.78493 4.57698 8.45043 4.73192 8.20521 4.98927C7.95998 5.24661 7.82242 5.58711 7.8204 5.94164V17.8007C7.82242 18.1552 7.95998 18.4957 8.20521 18.753C8.45043 19.0104 8.78493 19.1653 9.14082 19.1864H15.3098C15.6648 19.164 15.998 19.0086 16.2421 18.7513C16.4863 18.4941 16.6231 18.1544 16.6251 17.8007V16.1191H20.4611V17.6761C20.4767 20.5669 18.2221 22.7 15.1376 22.7Z"
                    fill="currentColor"
                  />
                </svg>
              }
              content="Cyberdeck"
            />
            <Item
              // disabled
              href="/dashboard"
              icon={<BiBorderAll size={iconSize} />}
              content="Dashboard"
            />

            <Item
              href="/portfolio"
              icon={<BiBarChartSquare size={iconSize} />}
              content="Portfolio"
              disabled
            />
            <Item
              href="/wallet"
              icon={<BiWallet size={iconSize} />}
              content="Wallet"
              disabled
            />
            <Item
              disabled
              href="/nfts"
              icon={<BiPhotoAlbum size="20" />}
              content="NFTs"
            />

            {/* <Item href="/goals" icon={<FiTarget size="20" />} content="Goals" /> */}
          </div>
          {/* <div className="flex w-screen px-3 shrink-0 snap-center">
            <Item
              href="/nftcollections"
              icon={<BiImages size={iconSize} />}
              content="Collections"
            />
            <Item
              href="/protocols"
              icon={<ImStack size="20" />}
              content="Protocols"
            />
            <Item
              href="/tutorials"
              icon={<MdOutlineSchool size={iconSize} />}
              content="Tutorials"
            />
          </div> */}
        </div>
      </div>
    </>
  )
}

export default MobileNavigation
