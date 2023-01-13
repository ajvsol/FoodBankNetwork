'use client'

import { useSearchContext } from "../../context/search"
import Map from "../../components/map"
import { useRouter } from "next/navigation";


export default function MoreInfoBank(){
    const [search, setSearch, text, setText, searchResults, setSearchResults, location, setLocation, bank, setBank]: any = useSearchContext();
	const router = useRouter()


	function goBack() {
		router.push('/find')
	  }

    return(
        <>
        <div>
            <button onClick={goBack}>Go Back</button>
        </div>
        <div>
            <p>{bank.name}</p>
            <p>{bank.address}</p>
            <p>{bank.phone}</p>
            <p>{bank.email}</p>
            <Map coord={location}/>
      </div>
        
        </>
    )
}