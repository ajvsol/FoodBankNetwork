"use client";

import { useSearchContext } from "../../context/search"
import { v4 as uuidv4 } from "uuid";
//import Block from 'next'

const arr1 = [1, 2, 3]

//export function SearchResultsList(): any {
//	const[searchResults] = useSearchContext();

//	//for (let i = 0; i < searchResults.length; i++) {
//	//	return <p>{i}</p>
//	//}

//	console.log(` SearchResultsList(): `, searchResults)
//	return <p>searchResults length: {searchResults.length}</p>

	//return (
	//	<div>
	//		{/*{arr1?.map((item: any) => {
	//			return <p key={uuidv4()}>{item}</p>;
	//		})}*/}

	//		{}
	//	</div>
	//);

	//searchResults.map((item: any) => {
	//	return <p key={uuidv4()}>{item.name}</p> 
	//})

	//searchResults.map((item: any) => {
	//	return <p key={uuidv4()}>{item.name}</p> 
	//})

	

	//const rows : any[] = [];
	//for (let i = 0; i < searchResults.length; i++) {
	//	rows.push(<p key={uuidv4()} >{searchResults[i].name}</p>)
	//}
	//console.log(`rows: `, rows)
	//return <div>{rows}</div>

//}

export default function About() {
	const [search, setSearch, text, setText, searchResults, setSearchResults]: any = useSearchContext();



	//console.log(text)
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