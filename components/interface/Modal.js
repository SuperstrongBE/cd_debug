import { Dialog, Transition } from '@headlessui/react'
import cx from 'classnames'
import { Fragment, useState } from 'react'
import Draggable from 'react-draggable'

export default function Modal({
  content,
  open,
  setOpen,
  className,
  title,
  icon,
  backdrop,
  isDraggable,
}) {
  const [isDragging, setIsDragging] = useState(false)

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className={(cx('relative z-[9999]'), className)}
        onClose={setOpen}>
        <Transition.Child
          as="div"
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0">
          {backdrop && (
            <div className="fixed inset-0 z-[999998] bg-gray-700/80 bg-opacity-0 transition-opacity" />
          )}
        </Transition.Child>

        <div className="fixed inset-0 z-[999999] overflow-y-auto">
          <Draggable
            onDrag={
              isDraggable
                ? () => setIsDragging(true)
                : () => setIsDragging(false)
            }
            onStop={() => setIsDragging(false)}
            disabled={!isDraggable}
            handle=".dragHandle">
            <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                <Dialog.Panel
                  className={cx(
                    'relative my-10 transform-gpu overflow-hidden rounded-lg border  border-white/10 bg-slate-50 font-defaultSans text-slate-900 shadow-xl  shadow-black/15 !backdrop-blur-md transition-all motion-safe:transition-all dark:bg-slate-500/30 dark:text-slate-200 dark:!backdrop-blur-xl dark:backface-hidden dark:-backdrop-blur:bg-slate-700 sm:min-w-[22rem] sm:max-w-[80vw] dark:tablet:backdrop-blur-lg',
                    { 'scale-[0.975]': isDragging },
                  )}>
                  <h1
                    className={cx(
                      'flex w-full items-center gap-2.5 border-b border-slate-600/10 p-5 py-4 text-xl font-semibold dark:border-slate-50/10 dark:text-slate-50',
                      {
                        'dragHandle cursor-move': isDraggable,
                      },
                    )}>
                    {icon} {title}
                  </h1>
                  <div className="p-5">{content}</div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Draggable>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
