
// import { AppProps } from 'next/app'

// import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
// import { SessionContextProvider, Session } from '@supabase/auth-helpers-react'
// import { useState } from 'react'

// export default function MyApp({
//   Component,
//   pageProps,
// }: AppProps<{
//   initialSession: Session
// }>) {
//   // Create a new supabase browser client on every first render.
//   const [supabaseClient] = useState(() => createBrowserSupabaseClient())

//   return (
//     <SessionContextProvider
//       supabaseClient={supabaseClient}
//       initialSession={pageProps.initialSession}
//     >
//       <Component {...pageProps} />
//     </SessionContextProvider>
//   )
// }

import '../styles/globals.css'
import { AppProps } from 'next/app'
import { SearchContextProvider } from '../context/search'
import { useState } from 'react'
import { createBrowserSupabaseClient, SupabaseClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider, Session } from '@supabase/auth-helpers-react'



export default function MyApp({ Component, pageProps }: AppProps<{
  initialSession: Session,
}>) {
  const [supabase] = useState(() => createBrowserSupabaseClient())

return (
       <SessionContextProvider supabaseClient={supabase} initialSession={pageProps.initialSession}>
        <SearchContextProvider>
      <Component {...pageProps} />
      </SearchContextProvider>
    </SessionContextProvider>
    
)
}