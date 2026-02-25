import recipes from "../data/recipes.json";

function getAllRecipes() {
  let localRecipes = [];
  try {
    const saved = localStorage.getItem("myRecipes");
    if (saved) {
      localRecipes = JSON.parse(saved);
    }
  } catch (error) {
    console.error("ไม่สามารถดึงข้อมูลจาก localStorage ได้:", error);
  }

  return [...localRecipes, ...recipes];
}

export function fetchRecipes() {
  return Promise.resolve(getAllRecipes());
}

export function fetchRecipeById(id) {
  const allRecipes = getAllRecipes();
  const key = String(id);
  const recipe = allRecipes.find((r) => String(r.id) === key);
  return Promise.resolve(recipe || null);
}

export function fetchCategories() {
  const allRecipes = getAllRecipes();
  const map = new Map();

  for (const r of allRecipes) {
    if (!r || !r.category) continue;
    if (!map.has(r.category)) map.set(r.category, r);
  }

  return Promise.resolve(Array.from(map.values()));
}

export function fetchPopularRecipes(desc = true) {
  const allRecipes = getAllRecipes();
  const sorted = [...allRecipes].sort((a, b) => {
    const ra = Number(a.rating) || 0;
    const rb = Number(b.rating) || 0;
    return desc ? rb - ra : ra - rb;
  });
  return Promise.resolve(sorted);
}
