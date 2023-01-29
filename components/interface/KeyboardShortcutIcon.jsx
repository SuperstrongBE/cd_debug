import { BiCommand } from 'react-icons/bi'

function ForwardSlash() {
  return (
    <svg
      width="4"
      height="10"
      viewBox="0 0 4 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3.48366 0.886363L1.13991 9.59375H0.191761L2.53551 0.886363H3.48366Z"
        fill="#f8fafc"
        opacity="0.75"
      />
    </svg>
  )
}

export default function KeyboardShortcutIcon({ keys, className }) {
  return (
    <div className={'flex gap-1 ' + className}>
      {keys.map((key, idx) => (
        <span
          key={idx}
          className="flex h-[1.125rem] items-center justify-center rounded-[0.2185rem] px-[0.325rem] text-[10px] leading-[1.125rem] text-slate-50/70 ring-1 ring-inset ring-slate-50/10 ">
          {key === '/' ? <ForwardSlash /> : key === 'CMD' ? <BiCommand /> : key}
        </span>
      ))}
    </div>
  )
}
