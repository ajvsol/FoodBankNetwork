import { NavBarHome } from "../components/NavBar/NavBarHome";
import Image from "next/image";
import SearchBar from '../components/SearchBar'

export default function HomePage() {
	// minHeight: '100vh' needed to select whole page
	return (
		<div style={{background: 'green', minHeight: '100vh', height: '100vh'}} className='h-screen min-h-screen'>
			<NavBarHome/>
			<div style={{background: 'red', height: '100%'}} className='h-full flex flex-col justify-center items-center flex-1 bg-red-500'>
				<a href='/'>
					<Image
						src="/../images/foodbanklogo2.svg"
						alt="logo-image"
						width="300"
						height="200"
						className='flex justify-center'
					/>
				</a>
				<p>Welcome to our site</p>
				<div className="width-full">
					<SearchBar/>
				</div>
			</div>	
		</div>
	)
}