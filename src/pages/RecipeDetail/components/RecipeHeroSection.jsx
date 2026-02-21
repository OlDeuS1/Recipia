import RecipeImage from "./RecipeImage";
import RecipeHeader from "./RecipeHeader";

export default function RecipeHeroSection({ recipe }) {
  return (
    <section>
      <RecipeImage image={recipe.image} title={recipe.name} />
      <RecipeHeader recipe={recipe} />
    </section>
  );
}
