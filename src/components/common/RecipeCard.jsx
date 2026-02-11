import { Timer, Star } from "lucide-react";

function RecipeCard({ item, background }) {
  return (
    <article className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
          style={{ background: background }}
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-3">
        <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-800 text-xs font-medium w-fit">
          {item.tag}
        </span>

        <div className="flex items-center gap-2 text-sm text-gray-600 leading-none">
          <Timer size={16} strokeWidth={2} />
          <span>{item.time}</span>

          <span className="opacity-40">•</span>

          <Star size={16} strokeWidth={2} className="text-yellow-500 fill-yellow-500" />
          <span>{item.rating}</span>
        </div>

        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-gray-700 transition-colors">
          {item.title}
        </h3>
      </div>
    </article>
  );
}

export default RecipeCard;
