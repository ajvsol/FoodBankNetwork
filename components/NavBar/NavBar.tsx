"use client";

import Link from "next/link";
import Image from "next/image";
import { Navbar } from "flowbite-react";

{
  /*<nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
  <div className="container flex flex-wrap items-center justify-between mx-auto">
    <a href="https://flowbite.com/" className="flex items-center">
        <img src="https://flowbite.com/docs/images/logo.svg" className="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
    </a>
    
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <a href="#" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</a>
        </li>
      </ul>
    </div>
  </div>
</nav>*/
}

export function NavBar() {
  return (
    <Navbar fluid={true} rounded={true} className="p-3 border-gray-200 rounded bg-gray-100  dark:bg-gray-800 dark:border-gray-700">
      <Link href="#" className="flex items-center ">
         <img
            src="/logo2.png"
            className="h-6 sm:h-10 sm:w-36 lg:w-36"
            alt="logo-image"
          ></img>
     </Link>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Link
          href="/"
          className="block py-2 pl-3 pr-4 text-gray-900 rounded 
      hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 
      dark:text-gray-200 md:dark:hover:text-white dark:hover:bg-gray-100 dark:hover:text-white md:dark:hover:bg-transparent"
        >
          Home
        </Link>
        <Link
          href="/find"
          className="block py-2 pl-3 pr-4 text-gray-900 rounded 
      hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 
      dark:text-gray-200 md:dark:hover:text-white dark:hover:bg-gray-100 dark:hover:text-white md:dark:hover:bg-transparent"
        >
          Find a Food Bank
        </Link>
        <Link
          href="/about"
          className="block py-2 pl-3 pr-4 text-gray-900 rounded 
      hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 
      dark:text-gray-200 md:dark:hover:text-white dark:hover:bg-gray-100 dark:hover:text-white md:dark:hover:bg-transparent"
        >
          About
        </Link>
        <Link
          href="/contact"
          className="block py-2 pl-3 pr-4 text-gray-900 rounded 
      hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 
      dark:text-gray-200 md:dark:hover:text-white dark:hover:bg-gray-100 dark:hover:text-white md:dark:hover:bg-transparent"
        >
          Contact
        </Link>
      </Navbar.Collapse>
    </Navbar>
  );

  //return (
  //  <nav className="p-3 border-gray-200 rounded bg-gray-100  dark:bg-gray-800 dark:border-gray-700">
  //    <div classNameName="container flex flex-wrap items-center justify-between mx-auto">
  //      <Link href="#" classNameName="flex items-center ">
  //          <img
  //            src="/logo2.png"
  //            classNameName="h-6 sm:h-10 sm:w-36 lg:w-36"
  //            alt="logo-image"
  //          ></img>
  //          {/*<Image
  //            src="/logo2.png"
  //            classNameName="h-6 sm:h-10 sm:w-36 lg:w-36"
  //            alt="logo-image"

  //            fill={true}
  //          />*/}
  //      </Link>
  //      <button data-collapse-toggle="navbar-solid-bg" type="button" classNameName="inline-flex flex-row-reverse items-center  ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-solid-bg" aria-expanded="false">
  //        <span classNameName="sr-only">Open main menu</span>
  //        <svg classNameName="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
  //      </button>
  //      Template below
  //      {/*<button data-collapse-toggle="navbar-solid-bg" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-solid-bg" aria-expanded="false">
  //        {/*<span classNameName="sr-only">Open main menu</span>
  //        <svg classNameName="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>*/}
  //      {/*</button>*/}

  //      <div classNameName="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
  //        <ul classNameName="flex flex-col mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
  //
  //        </ul>
  //      </div>
  //    </div>
  //  </nav>
  //);
}
