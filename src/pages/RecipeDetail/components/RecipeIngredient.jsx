export default function RecipeIngredient({ recipe }) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">วัตถุดิบ</h2>
      <ul className="space-y-3 text-base text-gray-700 leading-relaxed list-disc pl-5">
        {recipe.ingredients.map((item, index) => (
          <li key={index}>
            {item.name} {item.measure}
          </li>
        ))}
      </ul>
    </div>
  );
}
