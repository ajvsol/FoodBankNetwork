import { useState, useEffect } from "react";

export default function useFetch(url) {
  const [searchResults, setSearchResults] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchStuff() {
      try {
        const responseJSON = await fetch(url);
        const result = await responseJSON.json();
        setSearchResults(result);
      } catch (e) {
        setError(e);
      }
    }
    fetchStuff();
  }, [url]);
  return { searchResults, error };
}