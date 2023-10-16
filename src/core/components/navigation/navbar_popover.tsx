import { Popover, Transition } from '@headlessui/react'
import { NavLink } from 'react-router-dom';
import React, { Fragment } from 'react'
import { HiChevronDown } from 'react-icons/hi';

type PopOverLink = {
  name: string;
  href: string;
  icon: any;
  description: string;
}

type Props = {
  name: string;
  links: PopOverLink[]
}

const NavBarPopOver = ({name, links}: Props) => {
  return (
    <Popover className="relative">
      <Popover.Button
        className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-slate-700 dark:text-stone-50"
      >
        {name}
        <HiChevronDown className="h-5 w-5 flex-none" aria-hidden="true" />
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-sm overflow-hidden rounded-3xl text-slate-700 dark:text-stone-50 bg-stone-50 dark:bg-slate-700 shadow-lg ring-1 ring-gray-900/5">
          <div className="p-0">
              {links.map((item) => (
                <NavLink key={item.name} to={item.href} className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-400">
                  <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg">
                    <item.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div className="flex-auto">
                    <span className="block font-semibold">{item.name}</span>
                    <p className="mt-1">{item.description}</p>
                  </div>
                </NavLink>
              ))}
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}

export default NavBarPopOver