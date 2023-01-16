import { NavBarHome } from "../components/NavBar/NavBarHome";
import Image from "next/image";
import SearchBar from '../components/SearchBar'

export default function HomePage() {
	// minHeight: '100vh' needed to select whole page
	return (
		<div className='flex flex-col dark:bg-green-400 bg-green-400 h-screen min-h-screen'>
			<NavBarHome/>
			<div className='bg-red-500 flex flex-col margin items-center gap-5 flex-1'>
				<a href='/'>
					<Image
						src="/../images/foodbanklogo2.svg"
						alt="logo-image"
						width="300"
						height="200"
						className='flex mt-20'
					/>
				</a>
				<p>Welcome to our site</p>
				<SearchBar/>
			</div>	
		</div>
	)
}