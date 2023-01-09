'use client';
import Image from 'next/image'
import Link from "next/link";
import { useEffect } from 'react';
import { useState } from 'react';

const NavBar = () => {
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

  const[search, setSearch] = useState('')
  const[text, setText] = useState('')
console.log(search)
console.log(text)
  function handleChange(event:any) {
    setSearch(event.target.value);
  }

  function handleEnter(e:any) {
    if(e.keyCode == 13){
      setText(search)
    }
  }

  async function getFoodBanks(){
       
    const res = await fetch('https://www.givefood.org.uk/api/2/locations/search/?address=basildon')
    const data = await res.json()
    console.log("helolo")
    console.log(data)
    return data as any[];

}
  useEffect(() => {
   getFoodBanks()
  }, [text])
// [x] logo
// navbar
// search bar
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
           <input type ="search" onChange={handleChange} onKeyDown={handleEnter}></input>
        Example text
        {children}
      </body>
    </html>
  )
}
