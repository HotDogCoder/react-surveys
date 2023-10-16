import { useState } from 'react'
import { NavLink } from 'react-router-dom';
import DarkModeSwitch from '../util/dark_mode_switch'

interface Props {
  logOut: () => void
}

export default function NoAuthNavBar(props: Props) {

  return (
    <header className="dark:bg-slate-700 bg-stone-50 fixed w-full z-50 text-slate-700 dark:text-stone-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between lg:px-8 py-2" aria-label="Global">
        <div className="flex lg:flex-1 items-center">
          <NavLink to="/" className="">
            <span className="sr-only">Legal App</span>
          </NavLink>
        </div>
        <div className="px-2 flex items-center">
          <DarkModeSwitch />
        </div>
        
      </nav>
    </header>
  )
}
