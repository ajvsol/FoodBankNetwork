import React from "react";
import Map from "../map";
import { useSearchContext } from "../../context/search";
import { Card } from "@nextui-org/react";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/router";
import supabase from "../supabaseClient";



export default function FindMain () {
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
    return <div
    id="desktop-content"
    className=" flex flex-row justify-items-start 
    xs:bg-yellow-700
    sm:bg-fuchsia-900
    md:bg-red-500 min-h-[80vh] max-h-[72vh] ">
    <Map coord={location} />
    <div className=" min-w-[33%] max-w-[33%] overflow-auto my-3 pr-3">
      <div
      id="List">
      {searchResults.map((element: any, index: number) => {
        return (
         <div className="p-1"> 
            <Card 
                isPressable
                key={uuidv4()}
                onPress={() => handleCard(index)}>
            <p>{element.name}</p>
            <p>{element.address}</p>
            <div>
              <button
                onClick={() => moreInfo(index)}>
                More Info
              </button>
            </div>
          </Card>
          </div>
           
        );
      })}
     
     </div>
    </div>
  </div>
}