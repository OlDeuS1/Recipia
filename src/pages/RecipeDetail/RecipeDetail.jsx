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
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    async function load() {
      const data = await fetchRecipeById(id);
      setRecipe(data);
    }
    load();

    const savedBookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
    setIsBookmarked(
      savedBookmarks.some((item) => String(item.id) === String(id)),
    );
  }, [id]);

  const toggleBookmark = () => {
    let savedBookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];

    if (isBookmarked) {
      savedBookmarks = savedBookmarks.filter(
        (item) => String(item.id) !== String(recipe.id),
      );
    } else {
      savedBookmarks.push(recipe);
    }

    localStorage.setItem("bookmarks", JSON.stringify(savedBookmarks));
    setIsBookmarked(!isBookmarked);
  };

  if (!recipe) return <div className="p-10">Loading...</div>;

  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap justify-between items-center mb-12">
        <Breadcrumb />

        <button
          onClick={toggleBookmark}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-full shadow-sm border text-sm font-medium transition ${
            isBookmarked
              ? "bg-slate-900 text-white border-slate-900 hover:bg-slate-800"
              : "bg-white text-gray-800 border-gray-200 hover:bg-gray-50"
          }`}
        >
          <Bookmark size={16} fill={isBookmarked ? "currentColor" : "none"} />
          {isBookmarked ? "บันทึกแล้ว" : "บันทึก"}
        </button>
      </div>

      <RecipeHeroSection recipe={recipe} />
      <RecipeContentSection recipe={recipe} />
    </div>
  );
}
