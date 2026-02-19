export function transformMeal(meal) {
  const ingredients = [];

  for (let i = 1; i <= 20; i++) {
    const name = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];

    if (name && name.trim() !== "") {
      ingredients.push({ name, measure });
    }
  }

  const steps = meal.strInstructions
    ? meal.strInstructions.split(/\r?\n/).filter(Boolean)
    : [];

  return {
    id: meal.idMeal,
    title: meal.strMeal,
    image: meal.strMealThumb,
    category: meal.strCategory,
    area: meal.strArea,
    description: meal.strInstructions?.slice(0, 120) + "...",

    time: Math.floor(Math.random() * 40) + 20,
    servings: Math.floor(Math.random() * 3) + 1,

    ingredients,
    steps,

    nutrition: {
      calories: Math.floor(Math.random() * 400) + 300,
      protein: Math.floor(Math.random() * 30) + 10,
      fat: Math.floor(Math.random() * 20) + 10,
      carb: Math.floor(Math.random() * 50) + 30,
    },

    source: "TheMealDB",
  };
}
