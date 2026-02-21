import recipes from '../data/recipes.json'

export function fetchRecipes() {
	return Promise.resolve(recipes)
}

export function fetchRecipeById(id) {
	const key = String(id)
	const recipe = recipes.find((r) => String(r.id) === key)
	return Promise.resolve(recipe || null)
}

export function fetchCategories() {
	const map = new Map();
  for (const r of recipes) {
    if (!r || !r.category) continue;
    if (!map.has(r.category)) map.set(r.category, r);
  }
  // return one recipe object per category
  return Promise.resolve(Array.from(map.values()));
}

export function fetchPopularRecipes(desc = true) {
	const sorted = [...recipes].sort((a, b) => {
		const ra = Number(a.rating) || 0
		const rb = Number(b.rating) || 0
		return desc ? rb - ra : ra - rb
	})
	return Promise.resolve(sorted)
}

export default { fetchRecipes, fetchRecipeById, fetchCategories, fetchPopularRecipes }

