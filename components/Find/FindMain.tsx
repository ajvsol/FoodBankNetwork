

import React, { useState } from "react";
import Map from "../map";
import { useSearchContext } from "../../context/search";
import { Card } from "@nextui-org/react";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/router";
import supabase from "../supabaseClient";
import ToggleMap from "../ToggleMap/ToggleMap";
import { Size, useWindowSize } from "../../hooks/hooks";

export default function FindMain() {
  const size: Size = useWindowSize();
  console.log(size);

  const windowWidth: any = size.width;
  const [showMap, setShowMap] = useState(false);

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
    setToggle,
  ]: any = useSearchContext();
  const router = useRouter();

  async function fetchComments(index: number) {
    let slugData = searchResults[index].foodbank.slug;
    const { data, error } = await supabase
      .from("comments")
      .select()
      .like("slug", slugData);
    console.log("supabase url", supabase);
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
    console.log ("THINGS HAPPENING")
    setShowMap(!showMap)
  }

  export function FindMain () {
    if (windowWidth < 450) {
      if (showMap) {
        return <Map coord={location} />;
      } return (
        <div className=" min-w-[33%] max-w-[33%]   bg-green-500 scrollbar-bg-blue-500 overflow-auto my-3 pr-3">
          <div id="List">
            {searchResults.map((element: any, index: number) => {
              return (
                <div key="cardpad" className="p-1">
                  <Card
                    isPressable
                    key={uuidv4()}
                    onPress={() => handleCard(index)}>
                    <p>{element.name}</p>
                    <p>{element.address}</p>
                    <div></div>
                  </Card>
                  <button onClick={() => moreInfo(index)}>More Info</button>
                </div>
              );
            })}
          </div>
        </div>
      );
    } else {
      return (
        <>
          <Map coord={location}  />
          <div className=" min-w-[33%] max-w-[33%]  max-h-[80vh]  bg-red-500 scrollbar-bg-blue-500 overflow-auto my-3 pr-3">
            <div id="List">
              {searchResults.map((element: any, index: number) => {
                return (
                  <div key="cardpad" className="p-1">
                    <Card
                      isPressable
                      key={uuidv4()}
                      onPress={() => handleCard(index)}>
                      <p>{element.name}</p>
                      <p>{element.address}</p>
                      <div></div>
                    </Card>
                    <button onClick={() => moreInfo(index)}>More Info</button>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      );
  };

  return (
    <div
      id="desktop-content"
      className="   justify-items-start sm:bg-blue-500 
   bg-red-500 min-h-[80vh] max-h-[72vh] sm:flex-col pr-9">
      <ToggleMap handleToggle={handleToggle} showMap={showMap} />
      <div
        id="main-content-wrapper"
        className=" flex  xs:flex-col sm:flex-col md:flex-row lg:flex-row">
        {renderContent()}
      
      </div>
    </div>
  );
}
}