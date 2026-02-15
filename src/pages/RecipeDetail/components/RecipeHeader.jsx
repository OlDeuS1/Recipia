import { Star, Clock, Users } from "lucide-react";

export default function RecipeHeader() {
  return (
    <div className="mb-6">
      <span className="inline-flex items-center px-3 py-2 rounded-full bg-gray-100 text-gray-800 text-xs font-medium">
        อาหารไทย
      </span>

      <h1 className="text-3xl font-bold mt-2 mb-3">ผัดไทยกุ้งสด</h1>

      <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
        <div className="flex text-yellow-400">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={16} fill="currentColor" />
          ))}
        </div>
        <span>123 รีวิว</span>
      </div>

      <p className="text-lg text-gray-600 leading-relaxed">
        ผัดไทยเส้นจันทร์กุ้งสด ปรุงรสด้วยซอสและน้ำมะขามเปียก ใส่เต้าหู้
        ถั่วงอก และไข่ คลุกเคล้าอย่างลงตัว รสชาติเปรี้ยวหวานแบบต้นตำรับ
      </p>

      <div className="flex gap-6 mt-6 text-sm text-gray-500">
        <div className="flex items-center gap-2">
          <Clock size={16} />
          เวลา 35 นาที
        </div>
        <div className="flex items-center gap-2">
          <Users size={16} />
          สำหรับ 2 ที่
        </div>
      </div>
    </div>
  );
}
