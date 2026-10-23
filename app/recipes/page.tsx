import RecipeCard from "@/components/RecipeCard";

type Recipe = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
};

export default async function RecipesPage({
  searchParams,
}: {
  searchParams: Promise<{ search?: string }>;
}) {
  const params = await searchParams;
  const search = params.search?.trim() || "chicken";

  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(search)}`,
  );

  if (!response.ok) {
    return (
      <>
        <h1>Could not load recipes.</h1>
      </>
    );
  }

  const data: { meals: Recipe[] | null } = await response.json();

  const recipes = data.meals ?? [];

  return (
    <>
    <div className="search-section">
      <h1>Explore Recipes</h1>

      <form action="/recipes" method="GET">
        <label htmlFor="recipe-search">Search by recipe name</label>

        <div className="search-controls">
          <input
            id="recipe-search"
            name="search"
            placeholder="Search recipes..."
            defaultValue={search}
          />
          <button type="submit">Search</button>
        </div>
      </form>
      </div>

      <p>Explore recipes for: {search}</p>
      {recipes.length === 0 && <p>No recipes found.</p>}

      <div className="recipes-grid">
        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe.idMeal}
            name={recipe.strMeal}
            image={recipe.strMealThumb}
            id={recipe.idMeal}
            search={search}
          />
        ))}
      </div>
    </>
  );
}
