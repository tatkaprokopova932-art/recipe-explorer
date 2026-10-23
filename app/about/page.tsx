import Image from "next/image";
export default function AboutPage() {
  return (
    <>
      <h1>About Recipe Explorer</h1>
      <p>
        Recipe Explorer helps people discover recipes and find cooking
        inspiration.
      </p>

      <h2>Who is this website for?</h2>
      <p>
        This website is for anyone who enjoys cooking and wants to discover new
        meals.
      </p>

      <h2>Where do the recipes come from?</h2>
      <p>
        Recipe Explorer uses TheMealDB API to display recipes, ingredients, and
        cooking instructions.
      </p>

      <div className="about-gallery">
      <Image
        src="/images/about-salmon.jpg"
        alt="Salmon served with vegetables"
        width={500}
        height={350}
      />
      <Image
        src="/images/about-food.jpg"
        alt="A selection of delicious dishes"
        width={500}
        height={350}
      />

      <Image
        src="/images/about-chicken.jpg"
        alt="Chicken served with vegetables"
        width={500}
        height={350}
      />

      <Image
        src="/images/pasta.jpg"
        alt="A plate of spaghetti with fresh herbs"
        width={500}
        height={350}
      />
      </div>
    </>
  );
}
