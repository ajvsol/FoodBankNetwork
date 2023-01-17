"use client";

import { useSearchContext } from "../../context/search";
import { v4 as uuidv4 } from "uuid";
import { Card } from "@nextui-org/react";
import Link from "next/link";
import Map from "../../components/map";
import { NavBar } from "../../components/NavBar";
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
  }

  return (
    <>
      <NavBar />
      <div>
        {searchResults.map((element: any, index: number) => {
          return (
            <Card
              isPressable
              key={uuidv4()}
              onPress={() => {
                handleCard(index);
              }}
            >
              <p>{element.name}</p>
              <p>{element.address}</p>
              <div>
                <button
                  onClick={() => {
                    moreInfo(index);
                  }}
                >
                  More Info
                </button>
              </div>
            </Card>
          );
        })}
      </div>
      <Map coord={location} />
    </>
  );
}
