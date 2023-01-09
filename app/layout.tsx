'use client';

import Image from 'next/image'
import Link from "next/link";
import { useEffect, useState, useContext, createContext } from 'react';
//import { handleChange, handleClick, handleEnter } from 
//import useSearch from '../hooks/useSearch'
import { SearchContextProvider, useSearchContext } from '../context/search';

export function NavBar() {
  return (
    <nav className="navbar">
      <Link href="/">Home</Link>
      <Link href="/About">About</Link>
      <Link href="/Pros">More Info</Link>
      <Link href="/Cons">Contact</Link>
    </nav>
  );
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const searchContext = useSearchContext();
  console.log(`searchContext:`, searchContext)
  
  const [search, setSearch, text, setText] = searchContext;

  //const[search, setSearch] = useState('')
  //const[text, setText] = useState('')

  function handleChange(event:any) {
    console.log(`setSearch: `, setSearch)
    setSearch(event.target.value);
  }

  function handleClick() {
    setText(search)
  }

  function handleEnter(e:any) {
    if(e.keyCode == 13){
      setText(search)
    }
  }

  async function getFoodBanks(){
    const res = await fetch('https://www.givefood.org.uk/api/2/locations/search/?address=basildon')
    const data = await res.json()
    //console.log("helolo")
    //console.log(data)
    return data as any[];
  }

  useEffect(() => {
    getFoodBanks()
  }, [text])

  return (
    <html>
      <head />
      <body>
        <Image
          src='/../images/foodbanklogo2.svg'
          alt='logo-image' 
          width='300'
          height='200'
          />
        <NavBar />
        <div>
           <input type ="search" onChange={handleChange} onKeyDown={handleEnter}></input>
           <button onClick={handleClick}>Submit</button>
        </div>
        Example text
        <SearchContextProvider>
          {children}
        </SearchContextProvider>
      </body>
    </html>
  )
}
