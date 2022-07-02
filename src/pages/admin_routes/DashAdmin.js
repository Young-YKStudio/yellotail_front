import { Fragment, useState } from "react";
import { Dialog, Transition } from '@headlessui/react';
import {
  CalendarIcon,
  ChartBarIcon,
  ClipboardListIcon,
  BookOpenIcon,
  CogIcon,
  HomeIcon,
  InboxIcon,
  MenuIcon,
  UsersIcon,
  XIcon,
  PencilAltIcon,
  PencilIcon
} from '@heroicons/react/outline';

// Pages
import DashboardLanding from "./admin_pages/DashboardLanding";
import MenuEdit from './admin_pages/MenuEdit';
import MenuEntry from './admin_pages/MenuEntry';
import OrderHistory from './admin_pages/OrderHistory';
import ResHistory from './admin_pages/ResHistory';
import StoreSettings from './admin_pages/StoreSettings';
import Spinner from "../../components/spinner";

const DashAdmin = (props) => {

  const [ sidebarOpen, setSidebarOpen ] = useState(false);
  const [ currentPage, setCurrentPage ] = useState('dashboard');

  const navClickHandler = (e, Menu) => {
    e.preventDefault();
    if(Menu === 'dashboard') {
      setCurrentPage('dashboard');
      setSidebarOpen(false);
    } else if(Menu === 'menuEntry') {
      setCurrentPage('menuEntry');
      setSidebarOpen(false);
    } else if(Menu === 'menuEdit') {
      setCurrentPage('menuEdit');
      setSidebarOpen(false);
    } else if(Menu === 'resHistory') {
      setCurrentPage('resHistory');
      setSidebarOpen(false);
    } else if(Menu === 'orderHistory') {
      setCurrentPage('orderHistory');
      setSidebarOpen(false);
    } else if(Menu === 'storeSettings') {
      setCurrentPage('storeSettings');
      setSidebarOpen(false);
    }
  }

  const dropDownlMenuStyle = (current) => {
    if(current === currentPage) {
      return 'group flex items-center px-2 py-2 text-base font-medium rounded-md text-white bg-indigo-500'
    } else {
      return 'group flex items-center px-2 py-2 text-base font-medium rounded-md text-gray-600 hover:bg-indigo-400 hover:text-white'
    }
  }

  const dropDownMenuIconStyle = (current) => {
    if(current === currentPage) {
      return 'mr-4 flex-shrink-0 h-6 w-6 text-white'
    } else {
      return 'mr-4 flex-shrink-0 h-6 w-6 text-gray-500 group-hover:text-white'
    }
  }

  const pageDistributor = (current) => {
    if(current === 'dashboard') {
      return <DashboardLanding />
    } else if(current === 'menuEntry') {
      return <MenuEntry />
    } else if(current === 'menuEdit') {
      return <MenuEdit />
    } else if(current === 'resHistory') {
      return <ResHistory />
    } else if(current === 'orderHistory') {
      return <OrderHistory />
    } else if(current === 'storeSettings') {
      return <StoreSettings />
    } else {
      return <Spinner />
    }
  }

  return (
  <> 
    <div>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog as="div" className="relative z-40 md:hidden" onClose={setSidebarOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>

          <div className="fixed inset-0 flex z-40">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex-1 flex flex-col max-w-xs w-full bg-white">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-0 right-0 -mr-12 pt-2">
                    <button
                      type="button"
                      className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                    </button>
                  </div>
                </Transition.Child>
                <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                  <div className="flex-shrink-0 flex items-center px-4">
                    <img
                      className="h-8 w-auto"
                      src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg"
                      alt="Workflow"
                    />
                  </div>
                  <nav className="mt-5 px-2 space-y-1">
                    <p 
                      className={dropDownlMenuStyle('dashboard')}
                      value='dashboard'
                      onClick={(e) => {navClickHandler(e, 'dashboard')}}
                    >
                      <HomeIcon className={dropDownMenuIconStyle('dashboard')}/>
                      Dashboard
                    </p>
                    <p 
                      className={dropDownlMenuStyle('menuEntry')}
                      value='menuEntry'
                      onClick={(e) => {navClickHandler(e, 'menuEntry')}}
                    >
                      <PencilAltIcon className={dropDownMenuIconStyle('menuEntry')}/>
                      Menu Entry
                    </p>
                    <p 
                      className={dropDownlMenuStyle('menuEdit')}
                      value='menuEdit'
                      onClick={(e) => {navClickHandler(e, 'menuEdit')}}
                    >
                      <PencilIcon className={dropDownMenuIconStyle('menuEdit')}/>
                      Menu Edit
                    </p>
                    <p 
                      className={dropDownlMenuStyle('orderHistory')}
                      value='orderHistory'
                      onClick={(e) => {navClickHandler(e, 'orderHistory')}}
                    >
                      <BookOpenIcon className={dropDownMenuIconStyle('orderHistory')}/>
                      Order History
                    </p>
                    <p 
                      className={dropDownlMenuStyle('resHistory')}
                      value='resHistory'
                      onClick={(e) => {navClickHandler(e, 'resHistory')}}
                    >
                      <ClipboardListIcon className={dropDownMenuIconStyle('resHistory')}/>
                      Reservation History
                    </p>
                    <p 
                      className={dropDownlMenuStyle('storeSettings')}
                      value='storeSettings'
                      onClick={(e) => {navClickHandler(e, 'storeSettings')}}
                    >
                      <CogIcon className={dropDownMenuIconStyle('storeSettings')}/>
                      Store Settings
                    </p>
                  </nav>
                </div>
                <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
                  <a href="#" className="flex-shrink-0 group block">
                    <div className="flex items-center">
                      <div>
                        <img
                          className="inline-block h-10 w-10 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                      </div>
                      <div className="ml-3">
                        <p className="text-base font-medium text-gray-700 group-hover:text-gray-900">Tom Cook</p>
                        <p className="text-sm font-medium text-gray-500 group-hover:text-gray-700">View profile</p>
                      </div>
                    </div>
                  </a>
                </div>
              </Dialog.Panel>
            </Transition.Child>
            <div className="flex-shrink-0 w-14">{/* Force sidebar to shrink to fit close icon */}</div>
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className="flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white">
          <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
            <div className="flex items-center flex-shrink-0 px-4">
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg"
                alt="Workflow"
              />
            </div>
            <nav className="mt-5 flex-1 px-2 bg-white space-y-1">
              <p 
                className={dropDownlMenuStyle('dashboard')}
                value='dashboard'
                onClick={(e) => {navClickHandler(e, 'dashboard')}}
              >
                <HomeIcon className={dropDownMenuIconStyle('dashboard')}/>
                Dashboard
              </p>
              <p 
                className={dropDownlMenuStyle('menuEntry')}
                value='menuEntry'
                onClick={(e) => {navClickHandler(e, 'menuEntry')}}
              >
                <PencilAltIcon className={dropDownMenuIconStyle('menuEntry')}/>
                Menu Entry
              </p>
              <p 
                className={dropDownlMenuStyle('menuEdit')}
                value='menuEdit'
                onClick={(e) => {navClickHandler(e, 'menuEdit')}}
              >
                <PencilIcon className={dropDownMenuIconStyle('menuEdit')}/>
                Menu Edit
              </p>
              <p 
                className={dropDownlMenuStyle('orderHistory')}
                value='orderHistory'
                onClick={(e) => {navClickHandler(e, 'orderHistory')}}
              >
                <BookOpenIcon className={dropDownMenuIconStyle('orderHistory')}/>
                Order History
              </p>
              <p 
                className={dropDownlMenuStyle('resHistory')}
                value='resHistory'
                onClick={(e) => {navClickHandler(e, 'resHistory')}}
              >
                <ClipboardListIcon className={dropDownMenuIconStyle('resHistory')}/>
                Reservation History
              </p>
              <p 
                className={dropDownlMenuStyle('storeSettings')}
                value='storeSettings'
                onClick={(e) => {navClickHandler(e, 'storeSettings')}}
              >
                <CogIcon className={dropDownMenuIconStyle('storeSettings')}/>
                Store Settings
              </p>
            </nav>
          </div>
          <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
            <a href="#" className="flex-shrink-0 w-full group block">
              <div className="flex items-center">
                <div>
                  <img
                    className="inline-block h-9 w-9 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">Tom Cook</p>
                  <p className="text-xs font-medium text-gray-500 group-hover:text-gray-700">View profile</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="md:pl-64 flex flex-col flex-1">
        <div className="sticky top-0 z-10 md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3 bg-white">
          <button
            type="button"
            className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <MenuIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <main className="flex-1">
          <div className="py-6">
            {pageDistributor(currentPage)}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              {/* Replace with your content */}
              <div className="py-4">
                <div className="border-4 border-dashed border-gray-200 rounded-lg h-96" />
              </div>
              {/* /End replace */}
            </div>
          </div>
        </main>
      </div>
    </div>
  </>
  );
}
export default DashAdmin;