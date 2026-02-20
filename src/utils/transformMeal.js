function generateNumberFromId(id, min, max) {
  const seed = parseInt(id.slice(-4)); // เอาเลขท้าย ๆ
  return (seed % (max - min + 1)) + min;
}
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

  const rating = generateNumberFromId(meal.idMeal, 3, 5);
  const time = generateNumberFromId(meal.idMeal, 20, 60);
  const serving = generateNumberFromId(meal.idMeal, 1, 4);

  return {
    id: meal.idMeal,
    title: meal.strMeal,
    image: meal.strMealThumb,
    category: meal.strCategory,
    area: meal.strArea,

    rating,
    time,
    serving,

    ingredients,
    steps,

    nutrition: {
      calories: generateNumberFromId(meal.idMeal, 300, 700),
      protein: generateNumberFromId(meal.idMeal, 15, 50),
      fat: generateNumberFromId(meal.idMeal, 10, 30),
      carb: generateNumberFromId(meal.idMeal, 30, 80),
    },
  };
}
