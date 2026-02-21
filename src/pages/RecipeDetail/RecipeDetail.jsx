import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Bookmark } from "lucide-react";
import { fetchRecipeById } from "../../services/recipeService";

import Breadcrumb from "../../components/common/Breadcrumb";
import RecipeHeroSection from "./components/RecipeHeroSection";
import RecipeContentSection from "./components/RecipeContentSection";

export default function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    async function load() {
      const data = await fetchRecipeById(id);
      setRecipe(data);
    }
    load();
  }, [id]);

  if (!recipe) return <div className="p-10">Loading...</div>;

  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap justify-between items-center mb-12">
        <Breadcrumb />
        <button className="flex items-center gap-2 bg-white px-5 py-2.5 rounded-full shadow-sm border border-gray-200 text-sm font-medium text-gray-800 hover:bg-gray-50 transition">
          <Bookmark size={16} />
          บันทึก
        </button>
      </div>

      <RecipeHeroSection recipe={recipe} />
      <RecipeContentSection recipe={recipe} />
    </div>
  );
}
