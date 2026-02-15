import RecipeImage from "./RecipeImage";
import RecipeHeader from "./RecipeHeader";

export default function RecipeHeroSection() {
  return (
    <section className="recipe-hero">
      <RecipeImage />
      <div className="container mx-auto px-4">
        <RecipeHeader />
      </div>
    </section>
  );
}
