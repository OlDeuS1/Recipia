import { Star } from "lucide-react";

export default function RecipeReviewsSection() {
  return (
    <section className="mt-20">
      <h2 className="text-2xl font-semibold text-gray-900 mb-8">รีวิว</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {[1, 2].map((item) => (
          <div
            key={item}
            className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
              <span className="font-medium text-gray-900">User {item}</span>
            </div>

            <div className="flex text-yellow-500 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="currentColor" />
              ))}
            </div>

            <p className="text-gray-700 text-base leading-relaxed">
              อร่อยมาก ทำง่าย รสชาติดี กลมกล่อม เหมาะสำหรับทำทานในครอบครัว
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
