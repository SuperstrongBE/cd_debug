import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { BiCheck, BiChevronDown } from 'react-icons/bi'
// import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function SelectBox({ value, onChange, options, className }) {
  return (
    <Listbox value={value} onChange={e => onChange(e)}>
      {({ open }) => (
        <>
          <div className="relative w-full">
            <Listbox.Button
              key={value}
              className={classNames(
                'relative w-full cursor-pointer rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left font-medium capitalize shadow-sm focus:outline-none focus:ring-0 dark:border-primary-50/10 dark:bg-primary-50/10 dark:text-white',
              )}>
              <span className="block truncate">{value}</span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <BiChevronDown
                  size="22"
                  className="text-slate-400/80 dark:text-slate-200/50"
                />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0">
              <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white/95 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-gray-200/90 dark:backdrop-blur-xl sm:text-sm">
                {options.map(option => (
                  <Listbox.Option
                    key={option}
                    className={({ active }) =>
                      classNames(
                        active
                          ? 'bg-primary-600 text-white'
                          : 'text-gray-900 dark:text-primary-1000/90',
                        'relative cursor-default select-none py-2 pl-3 pr-9 text-left capitalize',
                      )
                    }
                    value={option}>
                    {({ value, active }) => (
                      <>
                        <span
                          className={classNames(
                            value ? 'font-semibold' : 'font-normal',
                            'block truncate',
                          )}>
                          {option}
                        </span>
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  )
}
