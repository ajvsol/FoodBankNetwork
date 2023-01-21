"use client";

import { useSearchContext } from "../../context/search";
import { v4 as uuidv4 } from "uuid";
//import { Text, Card, Grid, Button, Row } from "@nextui-org/react";
import { Card, Button } from 'flowbite-react';
import SearchBar from "../../components/SearchBar";
import Link from "next/link";
// import FindMain from "../../components/Find/FindMain";
import Map from "../../components/map";
import { NavBar } from "../../components/NavBar/NavBar";
import { useRouter } from "next/navigation";
import supabase from "../../components/supabaseClient";
//import { Navbar } from "@nextui-org/react"; for later checking

export default function About() {
  const [
    search,
    setSearch,
    text,
    setText,
    searchResults,
    setSearchResults,
    location,
    setLocation,
    bank,
    setBank,
    comments,
    setComments,
    toggle,
    setToggle
  ]: any = useSearchContext();
  const router = useRouter();

  async function fetchComments(index: number) {
    let slugData = searchResults[index].foodbank.slug;
    const { data, error } = await supabase
      .from("comments")
      .select()
      .like("slug", slugData);
	  console.log("supabase url", supabase)
    setComments(data);
  }

  function moreInfo(index: number) {
    setBank(searchResults[index]);
    setLocation(searchResults[index].lat_lng);
    router.push("/moreInfoBank");
    fetchComments(index);
  }

  function handleCard(index: number) {
    setLocation(searchResults[index].lat_lng);
    console.log(`handleCard: `, location);
  }

  function handleToggle() {
    if (toggle == "hidden") {
      setToggle("")
     } else {
      setToggle("hidden")
    }
    console.log ("toggle:", toggle)
  }

  return (
    <div id="everything" className='dark:bg-gray-900'>
      <div className="p-3">
        <NavBar />
        <SearchBar />
      </div>
      {/* <FindMain/> */}
      <div id="mobile-content" className="md:hidden lg:hidden md:flex-col">
        <label className="relative inline-flex items-center sm:hidden cursor-pointer">
          <input
            type="checkbox"
            value=""
            className="sr-only peer"
            onClick={() => {
              handleToggle();
            }}
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
            Toggle me
          </span>
        </label>

        <p className={`${toggle}`}>OOOOOOOOOOOOOOOOOOO</p>
        <Map coord={location} />
        <div
          id="List"
          className="
          overflow-auto
          ">
          {searchResults.map((element: any, index: number) => {
            return (
              <div key={uuidv4()}></div>
            );
          })}
        </div>
      </div>
      <div
        id="desktop-content"
        className="hidden md:flex lg:flex flex-row justify-items-start min-h-[80vh] max-h-[72vh]  lg:visible  ">
        <Map coord={location} />
        <div className="
        min-w-[33%] max-w-[33%] overflow-auto my-3 pr-3">
          <div
          id="List"
          className="space-y-0
        ">
          {searchResults.map((element: any, index: number) => {
            return (
              <Card
                key={uuidv4()}
                onClick={() => {handleCard(index)}}
                className='hover:cursor-pointer'
                >
                <h5 className="text-l font-bold tracking-tight text-gray-900 dark:text-white">
                  {element.name}
                </h5>
                <p className="font-light text-gray-900 dark:text-gray-300">
                  {element.address}</p>
                <Button
                  onClick={() => {moreInfo(index)}}
                  >
                  More Info
                  <svg
                    className="ml-2 -mr-1 h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Button>
              </Card>
              //<Card
              //  variant="bordered"
              //  isPressable
              //  color='black'
              //  className='bg-black'
              //  key={uuidv4()}
              //  onPress={() => {
              //    handleCard(index);
              //  }}
              //  >
              //  <Card.Header>
              //    <Text b>{element.name}</Text>
              //  </Card.Header>
              //  {/*<Card.Divider />*/}
              //  <Text className='ml-3 mr-3'>{element.address}</Text>
              //  {/*<Card.Body>
              //    <Text>{element.address}</Text>
              //  </Card.Body>*/}
              //  <Card.Divider />
              //  <Card.Footer>
              //    <Button size="sm" color='warning' onClick={() => {moreInfo(index)}}>More Info</Button>
              //  </Card.Footer>
              //</Card>
            );
          })}
         </div>
        </div>
      </div>
    </div>
  );
}
