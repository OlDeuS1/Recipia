import { Star, Clock, Users } from "lucide-react";

export default function RecipeHeader({ recipe }) {
  return (
    <div className="mt-10 mb-16">
      <span className="inline-flex items-center px-4 py-2 rounded-full bg-gray-100 text-gray-800 text-sm font-medium">
        {recipe.category}
      </span>

      <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-4 leading-tight">
        {recipe.title}
      </h1>

      <div className="flex items-center gap-3 mb-6">
        <div className="flex text-yellow-500">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={18}
              fill={i < Math.round(recipe.rating) ? "currentColor" : "none"}
            />
          ))}
        </div>
        <span className="text-gray-600 text-sm">{recipe.rating} คะแนน</span>
      </div>

      <div className="flex flex-wrap gap-8 mt-8 text-base text-gray-700">
        <div className="flex items-center gap-2">
          <Clock size={18} />
          เวลา {recipe.time} นาที
        </div>
        <div className="flex items-center gap-2">
          <Users size={18} />
          สำหรับ {recipe.serving} ที่
        </div>
      </div>
    </div>
  );
}
