import recipes from '../data/recipes.json'

/**
 * Return all recipes as-is (no transformation).
 * @returns {Promise<Array>} resolves to array of recipe objects
 */
export function fetchRecipes() {
	return Promise.resolve(recipes)
}

/**
 * Return a single recipe by id (string or number).
 * @param {string|number} id
 * @returns {Promise<Object|null>} resolves to recipe or null
 */
export function fetchRecipeById(id) {
	const key = String(id)
	const recipe = recipes.find((r) => String(r.id) === key)
	return Promise.resolve(recipe || null)
}

/**
 * Return unique category list from recipes.
 * @returns {Promise<Array<string>>}
 */
export function fetchCategories() {
  const cats = Array.from(new Set(recipes.map((r) => r.category).filter(Boolean)))
  return Promise.resolve(cats)
}

export default { fetchRecipes, fetchRecipeById, fetchCategories }

