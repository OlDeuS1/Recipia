import { Star } from "lucide-react";

export default function RecipeReviews() {
  return (
    <section className="recipe-reviews container mx-auto px-4 mt-16">
      <h2 className="text-xl font-semibold mb-6">รีวิว</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {[1, 2].map((item) => (
          <div key={item} className="bg-gray-50 p-6 rounded-xl shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
              <span className="font-medium text-sm">User {item}</span>
            </div>

            <div className="flex text-yellow-400 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill="currentColor" />
              ))}
            </div>

            <p className="text-sm text-gray-600">
              อร่อยมาก ทำง่าย รสชาติดี เหมาะกับทำทานที่บ้าน
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
