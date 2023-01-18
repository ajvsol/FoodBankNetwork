import { Inter } from '@next/font/google'
import { NavBarHome } from '../components/NavBar/NavBarHome'
import SearchBar from '../components/SearchBar'
import Image from 'next/image'
import type { NextPage } from 'next'
//import '../styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
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
      
          
      
         
        
           
    </>
  )
}
