"use client";

import { useSearchContext } from "../../context/search"
import { v4 as uuidv4 } from "uuid";


export function SearchResultsList(): any {
	const[searchResults] = useSearchContext();

	searchResults.map((element: any) => {
		return <p key={uuidv4()}>{element.name}</p> 
	})
}

export default function About() {
	const [search, setSearch, text, setText]: any = useSearchContext();

	//console.log(text)
	return <>
		<p>About</p>
		<SearchResultsList />
		<p>{search}</p>
		<p>{text}</p>
	</>
}