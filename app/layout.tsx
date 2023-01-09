import Image from 'next/image'

export function NavBar() {
  return <>
    <button>Home</button>
    <button>More Info</button>
    <button>About</button>
  </>
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

// [x] logo
// navbar
// search bar
  return (
    <html>
      <head />
      <body>
        <Image
          src='/../images/foodbanklogo2.svg'
          alt='logo-image' 
          width='300'
          height='200'
          />
        <NavBar />
        Example text
        {children}
      </body>
    </html>
  )
}
