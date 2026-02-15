import SectionHead from "./SectionHead";
import RecipeCard from "./RecipeCard";
import { ArrowRight } from "lucide-react";

const mediaBackgrounds = {
  "media-sixteen":
    "url(https://images.unsplash.com/photo-1514516870926-2063a7a3988d?auto=format&fit=crop&w=700&q=80)",
  "media-seventeen":
    "url(https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?auto=format&fit=crop&w=700&q=80)",
  "media-eighteen":
    "url(https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=700&q=80)",
  "media-nineteen":
    "url(https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=700&q=80)",
  "media-twenty":
    "url(https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=700&q=80)",
  "media-twentyone":
    "url(https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=700&q=80)",
  "media-twentytwo":
    "url(https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?auto=format&fit=crop&w=700&q=80)",
  "media-twentythree":
    "url(https://images.unsplash.com/photo-1473093226795-af9932fe5856?auto=format&fit=crop&w=700&q=80)",
};

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
          <RecipeCard
            key={item.title}
            item={item}
            background={mediaBackgrounds[item.media]}
          />
        ))}
      </div>
    </section>
  );
}

export default CatalogSection;
