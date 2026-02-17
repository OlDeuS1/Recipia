import { Timer, Users } from "lucide-react";
import { Link } from "react-router-dom";

function RecipeCard({ item, fixed = false, footer }) {
  return (
    <article
      className={`
        group bg-white rounded-3xl overflow-hidden
        shadow-sm hover:shadow-xl
        transition-all duration-300 hover:-translate-y-1
        ${fixed ? "flex flex-col" : ""}
      `}
    >
      <Link to={`/id`} className="flex flex-col flex-1">
        {/* Image */}
        <div className={fixed ? "h-56 overflow-hidden" : "overflow-hidden"}>
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover 
                       transition-transform duration-700 
                       group-hover:scale-110"
          />
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col gap-3 flex-1">
          <span
            className="inline-flex px-3 py-1 rounded-full 
                           bg-gray-100 text-gray-700 
                           text-xs font-medium w-fit"
          >
            {item.tag}
          </span>

          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Timer size={16} />
            <span>{item.time}</span>
            <span className="opacity-40">•</span>
            <Users size={16} />
            <span>{item.serving}</span>
          </div>

          <h3 className="text-base font-semibold text-gray-900">
            {item.title}
          </h3>
        </div>
      </Link>

      {/* Footer */}
      {footer && <div className="px-5 pb-5">{footer}</div>}
    </article>
  );
}

export default RecipeCard;
