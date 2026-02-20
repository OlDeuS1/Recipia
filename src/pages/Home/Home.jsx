import { useEffect, useState } from "react";
import { getMeals } from "../../services/mealService";
import HeroSection from "./components/HeroSection";
import CategorySection from "./components/CategorySection";
import CatalogSection from "./components/CatalogSection";
import CTASection from "./components/CTASection";

export default function Home() {
  const collections = [
    { title: "Plant Forward", media: "media-ten" },
    {
      title: "Weeknight Warmers",
      media: "media-eleven",
    },
    { title: "Sweet Escape", media: "media-twelve" },
    { title: "Seafood Studio", media: "media-thirteen" },
    { title: "Breakfast Rituals", media: "media-fourteen" },
    { title: "Cozy Bowls", media: "media-fifteen" },
  ];

  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      setLoading(true);
      const data = await getMeals();
      setRecipes(data);
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
      <CategorySection collections={collections} />
      <CatalogSection catalog={popularRecipes} />
      <CTASection />
    </main>
  );
}
