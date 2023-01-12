import Link from "next/link";

export function NavBar() {
    return (
      <nav className="bg-red-500">
        <Link className="text-2xl" href="/">Home</Link>
        <Link href="/find">Find a Food Bank</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    );
  }