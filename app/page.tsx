import Map from "../components/map"


import { useSearchContext } from "../context/search"

export default function HomePage() {
	const [search, setSearch, text, setText, searchResults, setSearchResults, location, setLocation]: any = useSearchContext();
	return (
		<div>
		<p>Test</p>
		<Map coord={location}/>
		</div>
	)
}