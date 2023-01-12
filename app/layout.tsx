"use client";

import { useRouter } from 'next/navigation'
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { SearchContextProvider, useSearchContext } from "../context/search";
import Router from 'next/router';


function SearchBar() {
  const [search, setSearch, text, setText, searchResults, setSearchResults, location, setLocation] = useSearchContext();
  const router = useRouter()

  function handleChange(event: any) {
    setSearch(event.target.value);
  }

  function handleClick() {
    getFoodBanks();
    router.push('/find');
  }


  function handleEnter(event: any) {
    if (event.keyCode == 13) {
      getFoodBanks();
      router.push('/find');
    }
  }
    
  async function getFoodBanks() {
    try {
      if (search.length !== 0) {
        const res = await fetch(
          `https://www.givefood.org.uk/api/2/locations/search/?address=${search}`, {
            method: 'GET', 
            headers: {
              accept: 'Access-Control-Allow-Origin'
            }
          }
        );
        const data = await res.json();
        setSearchResults(data);
        return data as any[];
      }
    } catch (e) {
      //alert("Please Try A Different Location")
    }
  }

  return (
    <div>
      <input
        type="search"
        onChange={handleChange}
        onKeyDown={handleEnter}
      ></input>
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html>
      <head />
      <body>
        <Image
          src="/../images/foodbanklogo2.svg"
          alt="logo-image"
          width="300"
          height="200"
        />
        <SearchContextProvider>
          <SearchBar />
          {children}
        </SearchContextProvider>
      </body>
    </html>
  );
}