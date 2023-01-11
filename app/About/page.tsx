"use client";

import { useSearchContext } from "../../context/search"
import { v4 as uuidv4 } from "uuid";


export default function About() {
	const [search, setSearch, text, setText, searchResults, setSearchResults]: any = useSearchContext();


	return <>
		<p>About</p>
		<p>search: {search}</p>
		<p>text: {text}</p>
		<p>searchResults length: {searchResults.length}</p>
		<div>
			{searchResults.map((element: any) => {
				return <p key={uuidv4()}>{element.name}</p> 
			})}
		</div>
	</>
}