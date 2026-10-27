import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/recipes">Recipes</Link>
        <Link href="/about">About</Link>
      </nav>
    </header>
  );
}