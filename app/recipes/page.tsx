import RecipeCard from "@/components/RecipeCard";

type Recipe = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
};

export default async function RecipesPage() {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?s=chicken"
  );

  if (!response.ok) {
    return <main><h1>Could not load recipes.</h1></main>;
  }

  const data: { meals: Recipe[] | null } =
    await response.json();

  const recipes = data.meals ?? [];

  return (
    <main>
      <h1>Explore Recipes</h1>
      <p>Discover delicious chicken recipes!</p>

      <div>
        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe.idMeal}
            name={recipe.strMeal}
            image={recipe.strMealThumb}
          />
        ))}
      </div>
    </main>
  );
}
