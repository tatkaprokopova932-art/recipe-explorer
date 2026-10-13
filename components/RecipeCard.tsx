import Image from "next/image";
type RecipeCardProps = {
  name: string;
  image: string;
};

export default function RecipeCard({ name, image }: RecipeCardProps) {
  return (
    <article>
      <Image src={image} alt={name} width={250} height={250} />

      <h2>{name}</h2>
    </article>
  );
}
