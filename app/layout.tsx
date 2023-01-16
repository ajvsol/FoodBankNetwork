"use client";

import '../styles/globals.css'
import { useRouter } from 'next/navigation'
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { SearchContextProvider, useSearchContext } from "../context/search";
import Router from 'next/router';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const router = useRouter()

  function homeClick(){
    router.push('/')
  }

  // [grid-template-rows: 200px 1fr]

  //  grid 
    //grid-cols-[2fr 1fr] 
    //grid-rows-[200px 1fr]
    //[grid-template-rows: 200px 1fr]
    //[grid-template-columns: 2fr 1fr]
  return (
    <html lang='en'
    className="bg-[#F3EFE8]
    dark:bg-gray-900
    ">
      <head />
      <body>
        <SearchContextProvider>
          {children}
        </SearchContextProvider>
      </body>
    </html>
  );
}