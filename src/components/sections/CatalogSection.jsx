import SectionHead from "../common/SectionHead";
import { ArrowRight, Timer, Star } from "lucide-react";

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
    <section className="flex flex-col gap-8">
      <SectionHead
        title="เมนูยอดนิยม"
        kicker="เมนูที่ได้รับความนิยมในสัปดาห์นี้"
        action={
          <button className="group inline-flex items-center gap-1 text-gray-900 font-semibold transition-colors duration-200 hover:text-gray-700">
            ดูทั้งหมด
            <ArrowRight
              size={16}
              strokeWidth={2.5}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </button>
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
        {catalog.map((item) => (
          <article
            key={item.title}
            className="group bg-white rounded-3xl overflow-hidden border border-gray-200 flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            {/* Image */}
            <div
              className="h-44 bg-gray-100 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
              style={{ background: mediaBackgrounds[item.media] }}
              aria-hidden="true"
            />

            {/* Content */}
            <div className="p-5 flex flex-col gap-3">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-900 text-xs font-semibold w-fit">
                {item.tag}
              </span>

              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Timer size={16} strokeWidth={2} />
                <span className="pt-1">{item.time}</span>
                <span className="pt-1">•</span>

                <Star
                  size={16}
                  strokeWidth={2}
                  className="text-yellow-500 fill-yellow-500"
                />
                <span className="pt-1">{item.rating}</span>
              </div>

              <h3 className="text-base font-semibold text-gray-900">
                {item.title}
              </h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default CatalogSection;
