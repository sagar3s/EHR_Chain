import React from 'react';
import classNames from 'classnames';
import Link from 'next/link';
import Image from 'next/image';
import {defaultNavItems} from '../pages/medical-records/doctor';
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from '@heroicons/react/24/outline';

const Sidebar = ({
  collapsed,
  navItems = defaultNavItems,
  shown,
  setCollapsed,
}) => {
  const Icon = collapsed ? ChevronDoubleRightIcon : ChevronDoubleLeftIcon;
  return (
    <div
      className={classNames({
        'bg-indigo-700 text-zinc-50 fixed md:static md:translate-x-0 z-20': true,
        'transition-all duration-300 ease-in-out': true,
        'w-[300px]': !collapsed,
        'w-16': collapsed,
        '-translate-x-full': !shown,
        
      },'dash')}
    >
      <div
        className={classNames({
          'flex flex-col justify-between h-screen md:h-full sticky inset-0': true,
        })}
      >
        {/* logo and collapse button */}
        <div
          className={classNames({
            'flex items-center border-b border-b-indigo-800 transition-none': true,
            'p-4 justify-between': !collapsed,
            'py-4 justify-center': collapsed,
          })}
        >
          {!collapsed && <span className="whitespace-nowrap mylogotop">My Logo</span>}
          <button
            className="grid place-content-center hover:bg-indigo-800 w-10 h-10 rounded-full opacity-0 md:opacity-100"
            onClick={() => setCollapsed(!collapsed)}
          >
            <Icon className="w-5 h-5" />
          </button>
        </div>
        <nav className="flex-grow">
          <ul
            className={classNames({
              'my-2 flex flex-col gap-2 items-stretch': true,
            })}
          >
            {navItems.map((item, index) => {
              return (
                <li
                  key={index}
                  className={classNames({
                    'text-indigo-100 hover:bg-indigo-900 flex': true, //colors
                    'transition-colors duration-300': true, //animation
                    'rounded-md p-2 mx-3 gap-4 dash': !collapsed,
                    'rounded-full p-2 mx-3 w-10 h-10': collapsed,
                  })}
                >
                  
                    <div className="flex gap-2" onClick={item.onClick}>
                      {item.icon} <span className="dash">{!collapsed && item.label}</span>
                    </div>
                  
                </li>
              );
            })}
          </ul>
        </nav>
        <div
          className={classNames({
            'grid place-content-stretch p-4 ': true,
          })}
        >
          <div className="flex gap-4 items-center h-11 overflow-hidden">
            <Image
              src={
                'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
              }
              height={36}
              width={36}
              alt="profile image"
              className="rounded-full"
            />
            {!collapsed && (
              <div className="flex flex-col dash">
                <span className="text-indigo-50 my-0 dash">Tom Cook</span>
               
                  <div className="text-indigo-200 text-sm dash">
                  View Profile
                  </div>
                
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
