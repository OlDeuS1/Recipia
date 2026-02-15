import { Bookmark } from "lucide-react";
import Breadcrumb from "../../components/common/Breadcrumb";
import RecipeHeroSection from "./components/RecipeHeroSection";
import RecipeContentSection from "./components/RecipeContentSection";

export default function RecipeDetail() {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap justify-between items-center mb-12">
        <Breadcrumb />
        <button className="flex items-center gap-2 bg-white px-5 py-2.5 rounded-full shadow-sm border border-gray-200 text-sm font-medium text-gray-800 hover:bg-gray-50 transition">
          <Bookmark size={16} />
          บันทึก
        </button>
      </div>

      <RecipeHeroSection />
      <RecipeContentSection />
    </div>
  );
}
