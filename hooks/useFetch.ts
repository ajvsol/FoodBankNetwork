import { useState, useEffect } from "react";

export default function useFetch(text: string) {
  const [searchResults, setSearchResults] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchStuff() {
      try {
        const responseJSON = await fetch(`https://www.givefood.org.uk/api/2/locations/search/?address=${text}`);
        const result = await responseJSON.json();
        setSearchResults(result);
      } catch (e: any) {
        setError(e);
      }
    }
    fetchStuff();
  }, [text]);

  return { searchResults, error };
}