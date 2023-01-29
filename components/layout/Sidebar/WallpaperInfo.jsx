import { Button } from '@/components/forms'
import { useHotkeys } from '@mantine/hooks'
import Image from 'next/legacy/image'
import { useState } from 'react'
import { BiLinkExternal } from 'react-icons/bi'
import WallpaperList from '/data/WallpaperList'

export default function WallpaperInfo({ wallpaper, setWallpaper }) {
  useHotkeys([['alt+W', handleWallpaperPrompt]])
  const [count, setCount] = useState(0)

  function handleSetWallpaper(e) {
    e.preventDefault()

    setWallpaper(WallpaperList[count % WallpaperList.length])
    setCount(count + 1)

    // console.log(WallpaperList[count % WallpaperList.length])
  }

  function handleWallpaperPrompt() {
    const url = prompt('Enter image URL')
    if (url) {
      setWallpaper(url)
    }
  }

  return (
    <Button
      onClick={e => handleSetWallpaper(e)}
      title={
        <span className="ml-4 flex flex-col items-start truncate text-sm text-white">
          <span>Rotterdam by Night</span>
          <span className="text-sm font-normal text-slate-100/50">
            Stijn Hanegraaf
          </span>
        </span>
      }
      className="!h-[58px] flex-1 gap-2 !rounded-full !bg-black/30 !py-0 !px-3 !text-sm !text-slate-100 !ring-0 backdrop-blur-lg dark:!text-slate-100/70 [&>div]:font-medium"
      wide
      transparent
      shortcut={
        <span className="flex items-center text-[clamp(12px,0.9vw,13px)] text-slate-100/50">
          <BiLinkExternal size="15" className="text-slate-50 opacity-30" />
        </span>
      }
      icon={
        <span
          className="ml-2.5 flex shrink-0 items-center justify-center overflow-hidden rounded-full dark:opacity-90"
          style={{
            width: '40px',
            height: '40px',
          }}>
          <Image
            src={
              'https://images.unsplash.com/profile-1526292872802-3ffeed46b916'
            }
            width={48}
            height={48}
            className="h-full w-full scale-[1.25] object-cover object-center"
            alt={''}
          />
        </span>
      }
    />
  )
}
