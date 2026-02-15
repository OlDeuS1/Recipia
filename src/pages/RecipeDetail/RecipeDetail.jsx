import { Bookmark } from "lucide-react";
import Breadcrumb from "../../components/common/Breadcrumb";
import RecipeHeroSection from "./components/RecipeHeroSection";
import RecipeContentSection from "./components/RecipeContentSection";

export default function RecipeDetail() {
  return (
    <div className="">
      <div className="flex flex-wrap justify-between mb-10">
        <Breadcrumb />
        <button className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md text-md font-medium hover:bg-gray-100 transition">
          <Bookmark size={16} />
          บันทึก
        </button>
      </div>

      <RecipeHeroSection />

      <RecipeContentSection />

    </div>
  );
}
