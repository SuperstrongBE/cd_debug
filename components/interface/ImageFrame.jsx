import cx from 'classnames'
import Image from "next/legacy/image";
import { Play, Search } from './Icons'

export default function ImageFrame({ src, title, cover, media }) {
  return (
    <div className="button ease-[cubic-bezier(.17,.59,.4,.77) group group relative flex h-full w-full cursor-pointer items-center rounded-lg bg-transparent p-[0.3rem] text-slate-700 shadow-[0px_1px_8.5px_rgba(16,24,40,0.015),0px_0.5px_2.1px_rgba(16,24,40,0.075),0px_0.2px_0.5px_rgba(16,24,40,0.08)] outline-none ring-1 ring-inset !ring-slate-300 ring-transparent will-change-transform hover:scale-[1.02] active:translate-y-0 active:scale-[0.98] motion-safe:transition dark:bg-slate-100/10 dark:text-slate-200 dark:!ring-slate-50/10 md:hover:bg-slate-100 dark:md:hover:!bg-slate-200/10">
      <span className="relative flex h-full w-full items-center justify-center overflow-hidden rounded bg-slate-200 dark:bg-slate-300/10">
        <Image
          src={src}
          alt={title}
          width="100%"
          height="100%"
          className={cx(
            'ease-[cubic-bezier(.17,.59,.4,.77) object-contain object-center',
            {
              '!object-cover': cover,
            },
          )}
        />
        <span className="group absolute flex h-full w-full items-center justify-center bg-slate-100/10 dark:bg-slate-50/[0.01]">
          <span className="ease-[cubic-bezier(.17,.59,.4,.77) group relative mx-auto flex h-[32px] w-[32px] scale-50 cursor-pointer items-center justify-center rounded-full bg-white p-[0.3rem] text-center text-slate-700 opacity-0 shadow-[0px_1px_8.5px_rgba(16,24,40,0.015),0px_0.5px_2.1px_rgba(16,24,40,0.075),0px_0.2px_0.5px_rgba(16,24,40,0.08)] outline-none ring-1 !ring-slate-900/10 will-change-transform hover:scale-[1.02] active:translate-y-0  active:scale-[0.98] group-hover:scale-100 group-hover:opacity-100 motion-safe:transition dark:bg-black/60 dark:text-slate-900 dark:shadow-xl dark:ring-inset dark:!ring-primary-1000/20 md:hover:bg-slate-100 dark:md:hover:!bg-black/70">
            {media ? (
              <Play className="relative left-px stroke-slate-500 dark:stroke-white" />
            ) : (
              <Search className="relative -left-px stroke-slate-700 dark:stroke-white" />
            )}
          </span>
        </span>
      </span>
    </div>
  )
}
