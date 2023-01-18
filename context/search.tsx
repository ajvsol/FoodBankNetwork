import { createContext, useContext, useState } from 'react';
//import { Root, Foodbank, Urls, Needs, Politics, Urls2, Urls3 } from '../types/index'

//const searchResultsInitial: Root[] | [] = [];
const searchResultsInitial: any = [];

export const SearchContext = createContext([] as any);

// Context provider
export function SearchContextProvider({children}: any) {
	
	const [search, setSearch] = useState('')
	const [text, setText] = useState('')
	const [searchResults, setSearchResults] = useState(searchResultsInitial)
	const [location, setLocation] = useState('region=GB&zoom=5&center=53.4862, 0.00');
	const [bank, setBank] = useState(searchResultsInitial)
	const [comments, setComments] = useState([])

	return <SearchContext.Provider value={[search, setSearch, text, setText, searchResults, setSearchResults, location, setLocation, bank, setBank, comments, setComments]} >
		{children}
	</SearchContext.Provider>
}

// Custom hook
export function useSearchContext() {
	return useContext(SearchContext)
}

export const searchResultsExample = [
	{
		"type": "organisation",
		"name": "AY Group",
		"lat_lng": "51.4858132,-0.2010718",
		"distance_m": 3590,
		"distance_mi": 2.23,
		"phone": "02073818502",
		"email": "office@ay-group.org",
		"foodbank": {
			"name": "AY Group",
			"slug": "ay-group",
			"network": "IFAN",
			"urls": {
				"self": "https://www.givefood.org.uk/api/2/foodbank/ay-group/",
				"html": "https://www.givefood.org.uk/needs/at/ay-group/"
			}
		},
		"needs": {
			"id": "8d41439d",
			"needs": "Unknown",
			"excess": null,
			"number": 0,
			"found": "2020-08-29T09:24:39.159"
		},
		"address": "Estate Office Block A\r\nPeabody Hall\r\nFulham Estate\r\nLillie Road\r\nSW6 1UH",
		"postcode": "SW6 1UH",
		"politics": {
			"parliamentary_constituency": "Chelsea and Fulham",
			"mp": "Greg Hands",
			"mp_party": "Conservative",
			"mp_parl_id": 1526,
			"ward": "Lillie",
			"district": "Hammersmith and Fulham",
			"urls": {
				"self": "https://www.givefood.org.uk/api/2/constituency/chelsea-and-fulham/",
				"html": "https://www.givefood.org.uk/needs/in/constituency/chelsea-and-fulham/"
			}
		},
		"urls": {
			"html": "https://www.givefood.org.uk/needs/at/ay-group/"
		}
	}
]