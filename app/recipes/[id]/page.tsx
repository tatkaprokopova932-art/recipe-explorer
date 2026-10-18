import { notFound } from "next/navigation";
import Image from "next/image";

type Recipe = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strInstructions: string;
  [key: string]: string | null;
};

type RecipePageProps = {
  params: Promise<{ id: string }>;
};
type RecipeResponse = {
  meals: Recipe[] | null;
};

export default async function RecipeDetailsPage({ params }: RecipePageProps) {
  const { id } = await params;
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
    <main>
      <h1>{recipe.strMeal}</h1>
      <Image
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        width={400}
        height={400}
      />
      <h2>Instructions</h2>
      <p>{recipe.strInstructions}</p>
      <h2>Ingredients</h2>
      <ul>
        {ingredients.map((ingredient) => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>
    </main>
  );
}
