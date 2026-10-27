import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Discover Your Next Favorite Recipe</h1>

        <p>
          Explore delicious recipes from around the world. Find inspiration for
          your next meal!
        </p>

        <Link href="/recipes" className="hero-button">
          Explore Recipes →
        </Link>
      </div>
      <Image
        src="/images/hero.jpg"
        alt="Delicious burger"
        width={800}
        height={530}
        loading="eager"
      />
    </section>
  );
}
