"use client";

import '../styles/globals.css'
import { useRouter } from 'next/navigation'
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { SearchContextProvider, useSearchContext } from "../context/search";
import Router from 'next/router';
import type { AppProps } from 'next/app';


export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  function homeClick(){
    router.push('/')
  }

  //return (
  //  <html  lang='en'
  //  className="bg-[#F3EFE8]
  //  dark:bg-gray-900 min-w-full
  //  ">
  //    <head />
  //    <body className='min-w-full'>
  //      <SearchContextProvider>
  //        <Component {...pageProps} />
  //      </SearchContextProvider>
  //    </body>
  //  </html>
  //);


  return (
    <SearchContextProvider>
      <Component {...pageProps} />
    </SearchContextProvider>
  )
}