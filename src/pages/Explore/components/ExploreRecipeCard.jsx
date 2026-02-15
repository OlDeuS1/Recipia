import { Timer, Users } from "lucide-react";

function ExploreRecipeCard({ item }) {
  return (
    <article className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">
      <div className="overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      <div className="p-4 flex flex-col gap-3">
        <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-800 text-xs font-medium w-fit">
          {item.tag}
        </span>

        <div className="flex items-center gap-2 text-sm text-gray-600 leading-none">
          <Timer size={16} />
          <span>{item.time}</span>

          <span className="opacity-40">•</span>

          <Users size={16} />
          <span>{item.serving}</span>
        </div>

        <h3 className="text-base font-semibold text-gray-900 group-hover:text-gray-700 transition-colors">
          {item.title}
        </h3>
      </div>
    </article>
  );
}

export default ExploreRecipeCard;
