import React from "react";
import { useSearchContext } from "../../context/search";

export default function ToggleMap({ handleToggle, showMap }: any): JSX.Element { 
//   const [toggle, setToggle]: any = useSearchContext();

//   function handleToggle() {
//     if (toggle == "hidden") {
//       setToggle("");
//     } else {
//       setToggle("hidden");
//     }
//   }

console.log(handleToggle)

  return (
    <div onClick={handleToggle} className="relative inline-flex items-center md:hidden  cursor-pointer">
      <input
        type="checkbox"
        checked={showMap}
        className="sr-only peer"
        onChange={handleToggle}
      />

      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
      <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
        Toggle me
      </span>
    </div>
  );
}