export default function RecipeInstructions({ recipe }) {
  return (
    <div className="mb-16">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">วิธีทำ</h2>
      <ol className="space-y-6 text-gray-700 text-lg leading-relaxed list-decimal pl-6">
        {recipe.instructions.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
    </div>
  );
}
