import { Star, Clock, Users } from "lucide-react";

export default function RecipeHeader() {
  return (
    <div className="mt-10 mb-16">
      <span className="inline-flex items-center px-4 py-2 rounded-full bg-gray-100 text-gray-800 text-sm font-medium">
        อาหารไทย
      </span>

      <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-4 leading-tight">
        ผัดไทยกุ้งสด
      </h1>

      <div className="flex items-center gap-3 mb-6">
        <div className="flex text-yellow-500">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={18} fill="currentColor" />
          ))}
        </div>
        <span className="text-gray-600 text-sm">123 รีวิว</span>
      </div>

      <p className="text-gray-700 text-lg leading-relaxed max-w-2xl">
        ผัดไทยเส้นจันทร์กุ้งสด ปรุงรสด้วยซอสและน้ำมะขามเปียก ใส่เต้าหู้ ถั่วงอก
        และไข่ คลุกเคล้าอย่างลงตัว รสชาติเปรี้ยวหวานแบบต้นตำรับ
      </p>

      <div className="flex flex-wrap gap-8 mt-8 text-base text-gray-700">
        <div className="flex items-center gap-2">
          <Clock size={18} />
          เวลา 35 นาที
        </div>
        <div className="flex items-center gap-2">
          <Users size={18} />
          สำหรับ 2 ที่
        </div>
      </div>
    </div>
  );
}
