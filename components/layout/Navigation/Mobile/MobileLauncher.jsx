import { BiRocket } from 'react-icons/bi'

const MobileLauncher = () => {
  const something = ''

  return (
    <div className="absolute -top-18 right-6 z-30 h-12 w-12">
      <a className="flex h-12 w-12 flex-none items-center justify-center rounded-full bg-primary text-primary-50 shadow-lg shadow-black/20 ring-inset ring-primary-300/20 dark:ring-1 ">
        <div className="relative -top-[1px]">
          <BiRocket size="20" />
        </div>
      </a>
    </div>
  )
}

export default MobileLauncher
