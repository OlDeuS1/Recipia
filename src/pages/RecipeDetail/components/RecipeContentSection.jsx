import RecipeInstructions from "./RecipeInstructions";
import RecipeIngredient from "./RecipeIngredient";
import RecipeReviews from "./RecipeReviews";

export default function RecipeContentSection() {
  return (
    <section className="recipe-content container mx-auto px-4 mt-12">
      <div className="grid md:grid-cols-3 gap-12">
        <div className="md:col-span-2">
          <RecipeInstructions />
          <RecipeReviews />
        </div>

        <aside className="space-y-10">
          <RecipeIngredient />
        </aside>
      </div>
    </section>
  );
}
