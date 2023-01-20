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
    return <div
    id="desktop-content"
    className=" flex flex-row justify-items-start sm:bg-blue-500 
   bg-red-500 min-h-[80vh] max-h-[72vh] pr-9">
        
    <Map coord={location} />

    <div className=" min-w-[33%] max-w-[33%]   bg-blue-500 scrollbar-bg-blue-500 overflow-auto my-3 pr-3">
    <label className="relative inline-flex items-center sm:hidden cursor-pointer">
  <input type="checkbox" value="" className="sr-only peer" onClick={()=>{handleToggle()}}/>
  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
  <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Toggle me</span>
</label>

<p className={`${toggle}`}>OOOOOOOOOOOOOOOOOOO</p>

      <div
      id="List">
        
      {searchResults.map((element: any, index: number) => {
        return (
         <div key="cardpad"className="p-1"> 
            <Card 
                isPressable
                key={uuidv4()}
                onPress={() => handleCard(index)}>
            <p>{element.name}</p>
            <p>{element.address}</p>
            <div>
              
            </div>
          </Card>
          <button
                onClick={() => moreInfo(index)}>
                More Info
              </button>
          </div>
           
        );
      })}
     
     </div>
    </div>
  </div>
}