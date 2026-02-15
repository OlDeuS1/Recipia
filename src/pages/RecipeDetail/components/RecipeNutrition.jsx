export default function RecipeNutrition() {
    return (
      <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">
          โภชนาการ (ต่อ 1 จาน)
        </h2>
        <ul className="space-y-4 text-base">
          <li className="flex justify-between border-b pb-3">
            <span className="text-gray-700">พลังงาน</span>
            <span className="font-semibold text-gray-900">490 kcal</span>
          </li>
          <li className="flex justify-between border-b pb-3">
            <span className="text-gray-700">โปรตีน</span>
            <span className="font-semibold text-gray-900">21 g</span>
          </li>
          <li className="flex justify-between border-b pb-3">
            <span className="text-gray-700">ไขมัน</span>
            <span className="font-semibold text-gray-900">20 g</span>
          </li>
          <li className="flex justify-between">
            <span className="text-gray-700">คาร์โบไฮเดรต</span>
            <span className="font-semibold text-gray-900">59 g</span>
          </li>
        </ul>
      </div>
    );
}