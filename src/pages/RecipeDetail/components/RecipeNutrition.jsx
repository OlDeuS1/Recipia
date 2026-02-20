export default function RecipeNutrition({ recipe }) {
  const { nutrition } = recipe;

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">
        โภชนาการ (ต่อ 1 จาน)
      </h2>
      <ul className="space-y-4 text-base">
        <li className="flex justify-between border-b pb-3">
          <span>พลังงาน</span>
          <span>{nutrition.calories} kcal</span>
        </li>
        <li className="flex justify-between border-b pb-3">
          <span>โปรตีน</span>
          <span>{nutrition.protein} g</span>
        </li>
        <li className="flex justify-between border-b pb-3">
          <span>ไขมัน</span>
          <span>{nutrition.fat} g</span>
        </li>
        <li className="flex justify-between">
          <span>คาร์โบไฮเดรต</span>
          <span>{nutrition.carb} g</span>
        </li>
      </ul>
    </div>
  );
}
