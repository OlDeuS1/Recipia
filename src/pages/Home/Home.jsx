import { useEffect, useState } from "react";
import { fetchRecipes, fetchCategories } from "../../services/recipeService";
import HeroSection from "./components/HeroSection";
import CategorySection from "./components/CategorySection";
import CatalogSection from "./components/CatalogSection";
import CTASection from "./components/CTASection";

export default function Home() {
  const [recipes, setRecipes] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      setLoading(true);

      const [mealData, categoryData] = await Promise.all([
        fetchRecipes(),
        fetchCategories(),
      ]);

      setRecipes(mealData);
      setCategories(categoryData);
      setLoading(false);
    }

    load();
  }, []);

  const popularRecipes = [...recipes]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 8);

  return (
    <main className="flex flex-col gap-16">
      <HeroSection />
      <CategorySection categories={categories} />
      <CatalogSection recipes={popularRecipes} />
      <CTASection />
    </main>
  );
}
