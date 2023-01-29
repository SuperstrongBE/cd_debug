import { Button } from '@/components/forms'
import { Journal } from '@/components/interface/Icons'
import classnames from 'classnames'
import Image from 'next/legacy/image'
import { useState } from 'react'
import { BiX } from 'react-icons/bi'
import { MdDesktopAccessDisabled } from 'react-icons/md'

const DataWarning = ({ className, children }) => {
  const [isHidden, setIsHidden] = useState(false)

  return (
    !isHidden && (
      <div
        className={classnames(
          'bg-blur flex items-center justify-between gap-2 rounded-md bg-[#F64D6E]/60 text-[#FFE8EC] shadow-lg shadow-slate-900/20 ring-1 ring-inset ring-white/7 -backdrop-blur:bg-emerald-900 dark:bg-[#F64D6E]/[0.55] dark:shadow-slate-900/30',
          className,
        )}>
        <div className="relative flex grow text-sm font-medium ">
          {children ? (
            children
          ) : (
            <>
              <div className="flex justify-center md:pl-3 md:pt-3">
                <div className="group flex h-6 w-6 shrink-0 items-center justify-center">
                  <MdDesktopAccessDisabled
                    className="shrink-0 group-hover:hidden"
                    size="18"
                  />

                  <a
                    onClick={setIsHidden}
                    href="#"
                    className="hidden h-5 w-5 items-center justify-center rounded-full bg-transparent text-white/70 opacity-0 active:translate-y-[0.1rem] active:text-white group-hover:flex group-hover:opacity-100 motion-safe:transition md:hover:bg-white/10 md:active:bg-white/20 mobile:active:bg-white/20">
                    <BiX size="22" />
                  </a>
                </div>
              </div>
              <div className="px-2 pr-4 md:py-3">
                <h2 className="mb-1 font-bold leading-5 2xl:leading-6">
                  This is an alpha preview
                </h2>
                <p className="mb-1 font-light opacity-70">
                  We're currently showing fake data, and you can't interact with
                  anything.
                </p>

                <div className="mt-3 flex hidden flex-wrap items-center gap-4 pb-1.5">
                  <Button
                    micro
                    title="Roadmap"
                    href="/#roadmap"
                    type="primary"
                    className="bg-white from-[#FFE8EC] via-[#FFE8EC] to-[#FFDDE3] !text-[#A24B63] !shadow-lg shadow-[#692337] ring-inset ring-white/10"
                    icon={
                      <Image
                        src={`/roadmap/stage1.webp`}
                        alt=""
                        width="16"
                        height="16"
                      />
                    }
                  />

                  <Button
                    micro
                    title="Journal"
                    href="#journal"
                    type="primary"
                    className="bg-white from-[#FFE8EC] via-[#FFE8EC] to-[#FFDDE3] !text-[#A24B63] !shadow-lg shadow-[#692337] ring-inset ring-white/10"
                    icon={<Journal className={'!stroke-[#A24B63]'} />}
                  />
                </div>
              </div>
            </>
          )}
        </div>
        {/* <a
          onClick={setIsHidden}
          href="#"
          className="absolute top-1.5 right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-transparent text-slate-200/50 active:translate-y-[0.1rem] active:text-white motion-safe:transition md:hover:bg-slate-200/10 md:active:bg-slate-100/20 mobile:active:bg-slate-100/20">
          <BiX size="22" />
        </a> */}
      </div>
    )
  )
}

export default DataWarning
