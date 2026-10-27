import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

type Recipe = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strInstructions: string;
  [key: string]: string | null;
};

type RecipePageProps = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ search?: string }>;
};
type RecipeResponse = {
  meals: Recipe[] | null;
};

export default async function RecipeDetailsPage({ params, searchParams }: RecipePageProps) {
  const { id } = await params;
  const { search } = await searchParams;
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch recipe");
  }

  const data: RecipeResponse = await response.json();
  const recipe = data.meals?.[0];

  if (!recipe) {
    notFound();
  }
  const ingredients: string[] = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = recipe[`strIngredient${i}`];
    const measure = recipe[`strMeasure${i}`];
    if (ingredient && ingredient.trim()) {
      ingredients.push(`${measure?.trim() ?? ""} ${ingredient.trim()}`.trim());
    }
  }

  return (
    <>
      <h1>{recipe.strMeal}</h1>
      <div className="recipe-top">
      <Image
        className="recipe-detail-image"
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        width={400}
        height={400}
      />

      <div className="ingredients-block">
      <h2 className="ingredients-title">Ingredients</h2>
      <ul className="ingredients-list">
        {ingredients.map((ingredient, index) => (
  <li key={index}>{ingredient}</li>
))}
      </ul>
      </div>
      </div>
            <h2 className="instructions-title">Instructions</h2>
      <p>{recipe.strInstructions}</p>

      <Link
  href={`/recipes?search=${encodeURIComponent(search ?? "chicken")}`}
  className="back-button"
>
  ← Back to results
</Link>
    </>
  );
}
