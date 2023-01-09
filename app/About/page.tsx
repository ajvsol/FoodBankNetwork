"use client";

import { useSearchContext } from "../../context/search"

export default function About() {
	const text = useSearchContext();

	console.log(text)
	return <p></p>
}