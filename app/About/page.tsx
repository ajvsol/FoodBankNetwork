"use client";

import { useSearchContext } from "../../context/search"

export default function About() {
	const [search, setSearch, text, setText]: any = useSearchContext();
	
	function testClick() {
		console.log(`search:`, search)
		
		console.log(`text:`, text)
		return search
	}

	console.log(`search-about: `, search)

	//console.log(text)
	return <>
		<p>About</p>
		<p>{search}</p>
		<p>{text}</p>
		<button onClick={testClick}>Click</button>
	</>
}