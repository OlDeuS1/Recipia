import RecipeImage from "./RecipeImage";
import RecipeHeader from "./RecipeHeader";

export default function RecipeHeroSection({ recipe }) {
  return (
    <section>
      <RecipeImage image={recipe.image} title={recipe.title} />
      <RecipeHeader recipe={recipe} />
    </section>
  );
}
