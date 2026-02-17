import SectionHead from "./SectionHead";
import RecipeCard from "../../../components/common/RecipeCard";
import { ArrowRight } from "lucide-react";

function CatalogSection({ catalog }) {
  return (
    <section className="flex flex-col gap-10">
      <SectionHead
        title="เมนูยอดนิยม"
        kicker="เมนูที่ได้รับความนิยมในสัปดาห์นี้"
        action={
          <button className="group inline-flex items-center gap-1.5 font-semibold text-gray-900 leading-none transition-colors duration-200 hover:text-gray-700">
            <span className="flex items-center">ดูทั้งหมด</span>
            <ArrowRight
              size={18}
              strokeWidth={2.5}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </button>
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {catalog.map((item) => (
          <RecipeCard key={item.title} item={item} fixed />
        ))}
      </div>
    </section>
  );
}

export default CatalogSection;
