import { Dialog, Disclosure } from '@headlessui/react'
import { HiArchive, HiCalculator, HiCalendar, HiChartBar, HiChartPie, HiChevronDown, HiClock, HiCreditCard, HiX } from 'react-icons/hi'
import { NavLink } from 'react-router-dom';
import classNames from 'classnames'
import { NavBarMobileProps } from './types'
import DarkModeSwitch from '../util/dark_mode_switch'
import NavBarDisclosure from './navbar_disclosure'

const NavBarMobile = ({ mobileMenuOpen, setMobileMenuOpen, logOut }: NavBarMobileProps) => {

    return (
        <Dialog as="div" className="lg:hidden " open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <div className="fixed inset-0 z-10 bg-stone-50 dark:bg-slate-700 dark:text-stone-50" />
            <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div className="flex items-center justify-between">
                    <div className="flex flex-1">
                        <NavLink to="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                        </NavLink>
                    </div>
                    <div className='flex'>
                        <div className="px-2 flex items-center">
                            <DarkModeSwitch />
                        </div>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 dark:text-stone-50"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <HiX className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                </div>
                <div className="mt-6 flow-root">
                    <div className="-my-6 divide-y divide-gray-500/10">
                        <div className="space-y-2 py-6">
                            <NavLink to="/survey" className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 dark:bg-slate-700 hover:!bg-slate-400 dark:text-slate-50">
                                ENCUESTAS
                            </NavLink>
                            
                        </div>
                        <div className="py-6">
                            <div
                            onClick={logOut}
                            className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-7 text-gray-900 dark:bg-slate-700 hover:!bg-slate-400 dark:text-slate-50"
                            >
                            Log out
                            </div>
                        </div>
                    </div>
                </div>
            </Dialog.Panel>
        </Dialog>
    )
}

export default NavBarMobile