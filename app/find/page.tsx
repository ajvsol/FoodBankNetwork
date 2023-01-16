"use client";

import { useSearchContext } from "../../context/search"
import { v4 as uuidv4 } from "uuid";
import { Card } from '@nextui-org/react';
import Link from "next/link";
import Map from "../../components/map"
import { NavBar } from "../../components/NavBar/NavBar";
import { useRouter } from "next/navigation";
//import { Navbar } from "@nextui-org/react"; for later checking


export default function About() {
	
	const [search, setSearch, text, setText, searchResults, setSearchResults, location, setLocation, bank, setBank]: any = useSearchContext();
	const router = useRouter()

	function moreInfo(index: number) {
		setBank(searchResults[index])
		setLocation(searchResults[index].lat_lng);
		router.push('/moreInfoBank')
	  }

	function handleCard(index: number) {
    	setLocation(searchResults[index].lat_lng);
    	console.log(`handleCard: `, location);
	}
	

	return <>
		<NavBar/>
		<div>
			{searchResults.map((element: any ,index:number) => {
				return <Card isPressable key={uuidv4()} onPress={()=>{handleCard(index)}}>
					<p>{element.name}</p>
					<p>{element.address}</p>
					<div>
					<button onClick={()=>{moreInfo(index)}}>More Info</button>
					</div>
				</Card>
				})}
				
		</div>
		<Map coord={location}/>
		
	</>
}