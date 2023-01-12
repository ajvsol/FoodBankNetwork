import Link from "next/link";

export function NavBarHome() {
    return (
      <nav className="bg-red-500">
        <Link href="/aboutHome">About</Link>
        <Link href="/contactHome">Contact</Link>
      </nav>
    );
  }