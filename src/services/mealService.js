import { transformMeal } from "../utils/transformMeal";

const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

export async function getMeals() {
  const res = await fetch(`${BASE_URL}/search.php?s=`);

  const data = await res.json();
  if (!data.meals) return [];

  return data.meals.map(transformMeal);
}