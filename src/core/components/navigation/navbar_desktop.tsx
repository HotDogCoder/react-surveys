import React from 'react';
import { Popover } from '@headlessui/react';
import { NavLink } from 'react-router-dom';
import { NavBarDesktopProps } from './types';
import NavBarPopOver from './navbar_popover';
import { HiArchive, HiCalculator, HiCalendar, HiChartBar, HiChartPie, HiClock, HiCreditCard } from 'react-icons/hi';
import DarkModeSwitch from '../util/dark_mode_switch';

type Props = {

}

const NavBarDesktop: React.FC<Props> = () => {
    return (
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
            <div className="px-2 flex items-center">
                <DarkModeSwitch />
            </div>
            

            
            <NavLink to="/survey" className="text-sm font-semibold leading-6 text-gray-900 dark:bg-slate-700 dark:text-slate-50">
                ENCUESTAS
            </NavLink>


        </Popover.Group>
    );
};

export default NavBarDesktop;
