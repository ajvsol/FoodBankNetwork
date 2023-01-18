"use client";

import { useSearchContext } from "../../context/search";
import { v4 as uuidv4 } from "uuid";
import { Card } from "@nextui-org/react";
import SearchBar from "../../components/SearchBar";
import Link from "next/link";
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

  return (
    <div id='everything'>
      <NavBar />
      <SearchBar />
      <div id='mobile-content' className=" lg:hidden md:flex-col">
      <input></input>
        <p>toggle bar</p> 
        <Map coord={location}  />
        <div id="List" className="
          min-w-[33%] max-w-[33%] overflow-auto
          ">
            {searchResults.map((element: any, index: number) => {
              return (
                <Card 
                  isPressable
                  key={uuidv4()}
                  onPress={() => {
                    handleCard(index);
                  }}>
                  <p>{element.name}</p>
                  <p>{element.address}</p>
                  <div>
                    <button
                      onClick={() => {
                        moreInfo(index);
                      }}>
                      More Info
                    </button>
                  </div>
                </Card>
              );
            })}
        </div>
      </div>
      <div id="desktop-content" className="md:hidden flex flex-row justify-items-start bg-red-500 min-h-[60vh] max-h-[72vh] ">
        <Map coord={location}  />
        <div id="List" className="
        min-w-[33%] max-w-[33%] overflow-auto
        ">
          {searchResults.map((element: any, index: number) => {
            return (
              <Card 
                isPressable
                key={uuidv4()}
                onPress={() => {
                  handleCard(index);
                }}>
                <p>{element.name}</p>
                <p>{element.address}</p>
                <div>
                  <button
                    onClick={() => {
                      moreInfo(index);
                    }}>
                    More Info
                  </button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
