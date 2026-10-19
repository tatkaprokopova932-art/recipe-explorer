import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Recipe Explorer</h1>

      <p>Discover delicious recipes from around the world!</p>

      <Link href="/recipes">Explore Recipes</Link>
    </>
  );
}
