import { useState } from 'react'
import NavBarDesktop from './navbar_desktop'
import { NavLink } from 'react-router-dom';
import DarkModeSwitch from '../util/dark_mode_switch'
import NavBarMobile from './navbar_mobile'
import { HiMenuAlt2 } from 'react-icons/hi'

interface Props {
  logOut: () => void
}

export default function NavBar(props: Props) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-stone-50 dark:bg-slate-700 text-slate-700 dark:text-stone-50 fixed w-full z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <NavLink to="/" className="p-1.5">
            <span className="sr-only">Legal Jelly</span>
          </NavLink>
        </div>

        <NavBarDesktop/>
        
        <div className="flex lg:hidden">
            <div className="px-2 flex items-center">
              <DarkModeSwitch />
            </div>
            <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
            <span className="sr-only">Open main menu</span>
            <HiMenuAlt2 className="h-6 w-6 dark:text-stone-50" aria-hidden="true" />
            </button>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <div
            onClick={props.logOut}
            className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-7 text-gray-900 dark:bg-slate-700 hover:!bg-slate-400 dark:text-slate-50"
            >
            Log out <span aria-hidden="true">&rarr;</span>
          </div>
        </div>
      </nav>
      <NavBarMobile logOut={props.logOut} mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={() => setMobileMenuOpen(!mobileMenuOpen)}/>
    </header>
  )
}
