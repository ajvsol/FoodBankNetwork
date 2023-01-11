import {useSearchContext} from "../../context/search"
//import { Root, Foodbank, Urls, Needs, Politics, Urls2, Urls3 } from '../../types/index'

export function SearchResultsList() {
    const[searchResults] = useSearchContext()
    return <div>{searchResults.forEach((element: any)  => <div> <p>{element.name}</p> </div> )}</div>
}