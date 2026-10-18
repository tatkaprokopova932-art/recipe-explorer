import Image from "next/image";
import Link from "next/link";

type RecipeCardProps = {
  name: string;
  image: string;
  id: string;
};

export default function RecipeCard({ id, name, image }: RecipeCardProps) {
  return (
    <article>
      <Link href={`/recipes/${id}`}>
      <Image
        src={image}
        alt={name}
        width={250}
        height={250}
        style={{ width: "100%", height: "auto" }}
      />
      <h2>{name}</h2>
      </Link>
    </article>
  );
}
