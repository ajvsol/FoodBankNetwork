"use client";

import { useSearchContext } from "../../context/search"
import { v4 as uuidv4 } from "uuid";
import { Card } from '@nextui-org/react';
import Link from "next/link";
import Map from "../../components/map"
import { NavBar } from "../../components/NavBar";
//import { Navbar } from "@nextui-org/react"; for later checking


export default function About() {
	const [search, setSearch, text, setText, searchResults, setSearchResults, location, setLocation]: any = useSearchContext();

	function handleCard(index: number): void {
    	setLocation(searchResults[index].lat_lng);
    	console.log(`handleCard: `, location);
	}

	return <>
		<NavBar/>
		<div>
			{searchResults.map((element: any ,index:number) => {
				return <Card isPressable key={uuidv4()} onPress={()=>{handleCard(index)}}>{element.name}</Card> 
			})}
		</div>
		<Map coord={location}/>
		
	</>
}