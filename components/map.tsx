const key = process.env.NEXT_PUBLIC_GOOGLE_KEY
import { useSearchContext } from "../context/search";
import { useState } from "react";

export default function Map({ coord, origin}: any): JSX.Element {

    const [
        toggle,
        setToggle,
        mapCode,
        setMapCode
      ]: any = useSearchContext();
 

 const mapCoded = `&q=${coord}`



  return (
    <div className={`lg:min-w-[67vw] lg:min-h-[80vh] rounded-md  ${toggle}`}>
      <iframe className="md:min-w-[67vw] min-h-[80vh] sm:min-w-[100vw] rounded-md p-3"
        
        loading="lazy"
        src={`https://www.google.com/maps/embed/v1/place?key=${key}${mapCoded}`}>

        </iframe>
        {/* <iframe
  width="450"
  height="250"

  referrerpolicy="no-referrer-when-downgrade"
  src={`https://www.google.com/maps/embed/v1/directions?key=${key}&origin=Oslo+Norway&destination=Telemark+Norway&avoid=tolls|highways`}
  allowfullscreen>
</iframe> */}
    </div>
  );
}
