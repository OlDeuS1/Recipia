import { transformMeal } from "../utils/transformMeal";

const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

async function safeFetch(url) {
	try {
		const res = await fetch(url);
		if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
		return await res.json();
	} catch (err) {
		console.error("homeService fetch error:", err, url);
		return null;
	}
}

export async function searchMeals(query) {
	if (!query) return [];
	const data = await safeFetch(`${BASE_URL}/search.php?s=${encodeURIComponent(query)}`);
	if (!data || !data.meals) return [];
	return data.meals.map(transformMeal);
}

export async function getMealById(id) {
	if (!id) return null;
	const data = await safeFetch(`${BASE_URL}/lookup.php?i=${encodeURIComponent(id)}`);
	if (!data || !data.meals) return null;
	return transformMeal(data.meals[0]);
}

export async function fetchRandomMeals(count = 6) {
	const promises = Array.from({ length: count }, () => safeFetch(`${BASE_URL}/random.php`));
	const results = await Promise.all(promises);
	const meals = [];
	for (const res of results) {
		if (res && res.meals && res.meals[0]) meals.push(transformMeal(res.meals[0]));
	}
	return meals;
}

export default {
	searchMeals,
	getMealById,
	fetchRandomMeals,
};
