import RecipeInstructions from "./RecipeInstructions";
import RecipeSidebar from "./RecipeSidebar";
import RecipeReviewsSection from "./RecipeReviewsSection";

export default function RecipeContentSection({ recipe }) {
  return (
    <section className="mt-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div className="lg:col-span-2 space-y-16 order-2 lg:order-1">
          <RecipeInstructions recipe={recipe} />
          <RecipeReviewsSection />
        </div>

        <aside className="space-y-10 order-1 lg:order-2">
          <RecipeSidebar recipe={recipe} />
        </aside>
      </div>
    </section>
  );
}
