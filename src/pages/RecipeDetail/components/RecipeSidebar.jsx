import RecipeIngredient from "./RecipeIngredient";
import RecipeNutrition from "./RecipeNutrition";

export default function RecipeSidebar() {
  return (
    <div className="space-y-8 md:sticky md:top-28">
      <RecipeNutrition/>
      <RecipeIngredient/>
    </div>
  );
}
