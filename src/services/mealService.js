import recipes from "../data/recipes.json";

const HOME_CATEGORIES = [
  "Beef",
  "Chicken",
  "Seafood",
  "Dessert",
  "Vegetarian",
  "Pasta",
];

function transformLocalRecipe(r) {
  return {
    id: String(r.id),
    title: r.name || r.title,
    image: r.thumbnail || r.image,
    category: r.category || "",
    rating: r.rating,
    time: r.time,
    serving: r.serving,
    ingredients: Array.isArray(r.ingredients)
      ? r.ingredients.map((it) => ({ name: it, measure: "" }))
      : [],
    steps: Array.isArray(r.instructions) ? r.instructions : [],
    nutrition: r.nutrition,
  };
}

export async function getMeals() {
  try {
    // สำหรับแต่ละ category เลือกเมนูสูงสุด 4 รายการ
    const selected = HOME_CATEGORIES.flatMap((cat) =>
      recipes.filter((r) => r.category === cat).slice(0, 4),
    );

    return selected.map(transformLocalRecipe);
  } catch (error) {
    console.error("Error loading local meals:", error);
    return [];
  }
}

export async function getCategories() {
  // หา thumbnail ตัวอย่างสำหรับแต่ละหมวด
  return HOME_CATEGORIES.map((cat) => {
    const sample = recipes.find((r) => r.category === cat);
    return {
      id: cat,
      name: cat,
      image: sample ? sample.thumbnail : "",
    };
  });
}

export async function getMealById(id) {
  const found = recipes.find((r) => String(r.id) === String(id));
  if (!found) return null;
  return transformLocalRecipe(found);
}
