"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { SearchContextProvider, useSearchContext } from "../context/search";

export function NavBar() {
  return (
    <nav className="navbar">
      <Link href="/">Home</Link>
      <Link href="/About">About</Link>
      <Link href="/Info">More Info</Link>
      <Link href="/Contact">Contact</Link>
    </nav>
  );
}

export function SearchBar() {
  const [search, setSearch, text, setText] = useSearchContext();

  function handleChange(event: any) {
    setSearch(event.target.value);
    console.log(`handleChange`);
  }

  function handleClick() {
    setText(search);
    console.log(`handleClick`);
  }

  function handleEnter(event: any) {
    if (event.keyCode == 13) {
      setText(search);
      console.log(`search: `, search);
      console.log(`text: `, text);
    }
  }

  useEffect(() => {
    async function getFoodBanks() {
      const res = await fetch(
        `https://www.givefood.org.uk/api/2/locations/search/?address=${text}`
      );
      const data = await res.json();
      console.log(data);
      return data as any[];
    }
    getFoodBanks();
  }, [text]);


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
        <NavBar />
        <SearchContextProvider>
          <SearchBar />
          {children}
        </SearchContextProvider>
        Example text
      </body>
    </html>
  );
}
