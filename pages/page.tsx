import { NavBarHome } from "../components/NavBar/NavBarHome";
import Image from "next/image";
import SearchBar from '../components/SearchBar'
import type { NextPage } from 'next'

const Home: NextPage = () => {
	// minHeight: '100vh' needed to select whole page
	return (
		<div className='flex flex-col h-screen min-h-screen'>
			<NavBarHome/>
			<div className='flex flex-col margin items-center gap-5 flex-1'>
				<a href='/'>
					<Image
						src="/logo1.png"
						alt="logo-image"
						width="300"
						height="200"
						className='flex mt-20'
					/>
				</a>
				<p
				className='text-gray-900 dark:text-gray-300'
				>Find your nearest food bank:
				</p>
				<SearchBar/>
			</div>	
		</div>
	)
}

export default Home