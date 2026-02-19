import { useEffect, useState } from "react";
import HeroSection from "./components/HeroSection";
import CategorySection from "./components/CategorySection";
import CatalogSection from "./components/CatalogSection";
import CTASection from "./components/CTASection";
import { fetchRandomMeals } from "../../services/mealService";

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

  useEffect(() => {
    let mounted = true;
    (async () => {
      const data = await fetchRandomMeals(8);
      if (mounted && Array.isArray(data)) setRecipes(data);
    })();
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <main className="flex flex-col gap-16">
      <HeroSection />
      <CategorySection collections={collections} />
      <CatalogSection catalog={recipes} />
      <CTASection />
    </main>
  );
}
