import {useSearchContext} from "../../context/search"


export function SearchResultsList(){
    const[searchResults] = useSearchContext()
    return <div>{searchResults.forEach((element:object)  => <div> <p>{element.name:string}</p> </div> )}</div>}

