import { Disclosure, Popover, Transition } from '@headlessui/react'
import classNames from 'classnames';
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

const NavBarDisclosure = ({name, links}: Props) => {
  return (
    <Disclosure as="div" className="-mx-3">
        {({ open }) => (
            <>
                <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 dark:bg-slate-700 hover:!bg-slate-400 dark:text-slate-50">
                    {name}
                    <HiChevronDown
                    className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                    aria-hidden="true"
                    />
                </Disclosure.Button>
                <Disclosure.Panel className="mt-2 space-y-2">
                    {[...links].map((item) => (
                        <NavLink
                            key={item.name}
                            to={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 dark:bg-slate-700 hover:!bg-slate-400 dark:text-slate-50"
                        >
                            {item.name}
                        </NavLink>
                    ))}
                </Disclosure.Panel>
            </>
        )}
    </Disclosure>
  )
}

export default NavBarDisclosure