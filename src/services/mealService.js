import { transformMeal } from "../utils/transformMeal";

const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

const HOME_CATEGORIES = [
  "Beef",
  "Chicken",
  "Seafood",
  "Dessert",
  "Vegetarian",
  "Pasta",
];

export async function getMeals() {
  try {
    const results = await Promise.all(
      HOME_CATEGORIES.map((category) =>
        fetch(`${BASE_URL}/filter.php?c=${category}`).then((res) => res.json()),
      ),
    );

    // ตัดหมวดละ 4 เมนูก่อนรวม
    const selectedMeals = results.flatMap((res) =>
      (res.meals || []).slice(0, 4),
    );

    // ดึง detail
    const detailedMeals = await Promise.all(
      selectedMeals.map((meal) =>
        fetch(`${BASE_URL}/lookup.php?i=${meal.idMeal}`)
          .then((res) => res.json())
          .then((data) => data.meals?.[0]),
      ),
    );

    return detailedMeals.filter(Boolean).map(transformMeal);
  } catch (error) {
    console.error("Error fetching meals:", error);
    return [];
  }
}