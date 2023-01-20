
import React, {useState} from "react";
import { useSearchContext } from "../../context/search";
import Map from "../../components/map";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import supabase from "../../components/supabaseClient";

export default function MoreInfoBank() {
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
    setMapCode,
    mapCode
  ]: any = useSearchContext();
  const router = useRouter();

  function goBack() {
    router.push("/find");
  }

  const mapCodeDirections = `&origin=${search}&destination=${location}`

 function handleClick () {
    console.log (mapCode)
    setMapCode(mapCodeDirections)
  }

  

  return (
    <>
      <div>
        <button onClick={goBack}>Go Back</button>
      </div>
      <div>
        <p>{bank.name}</p>
        <p>{bank.address}</p>
        <p>{bank.phone}</p>
        <p>{bank.email}</p>
      </div>
      <h1>Comments</h1>
      <div>
        {comments.map((element: any) => {
          return (
            <div key={uuidv4()}>
              <p>{element.comment}</p>
              <p>{element.author}</p>
            </div>
          );
        })}
      </div>

      <div>
        <Map coord={location} origin={search} />

        <button onClick={handleClick}>Directions</button>

      </div>
    </>
  );
}
