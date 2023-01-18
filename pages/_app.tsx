import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SearchContextProvider } from '../context/search'

export default function MyApp({ Component, pageProps }: AppProps) {
return <SearchContextProvider>
      <Component {...pageProps} />
    </SearchContextProvider>
  
    
}
