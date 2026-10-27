import Image from "next/image";
import Link from "next/link";

type RecipeCardProps = {
  name: string;
  image: string;
  id: string;
  search: string;
  priority: boolean;
};

export default function RecipeCard({
  name,
  image,
  id,
  search,
  priority,
}: RecipeCardProps) {
  return (
    <article>
      <Link href={`/recipes/${id}?search=${encodeURIComponent(search)}`}>
        <Image
          src={image}
          alt={name}
          width={250}
          height={250}
          style={{ width: "100%", height: "auto" }}
          priority={priority}
        />
        <h2>{name}</h2>
      </Link>
    </article>
  );
}
