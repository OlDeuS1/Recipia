import Breadcrumb from "../../components/common/Breadcrumb";
import ExploreFilter from "./components/ExploreFilter";
import RecipeMasonry from "./components/RecipeMasonry";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchRecipes, fetchCategories } from "../../services/recipeService";

function Explore() {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParam = searchParams.get("q") || "";
  const categoryParam = searchParams.get("category") || null;

  const breakpointColumnsObj = { default: 4, 1280: 4, 1024: 3, 768: 2, 640: 1 };

  const [allRecipes, setAllRecipes] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const [activeFilters, setActiveFilters] = useState({
    query: queryParam,
    sort: "ล่าสุด",
    category: categoryParam,
    maxTime: null,
    serving: null,
  });

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      try {
        const [mealData, categoryData] = await Promise.all([
          fetchRecipes(),
          fetchCategories(),
        ]);
        setAllRecipes(mealData);
        setCategories(categoryData);
      } catch (error) {
        console.error("เกิดข้อผิดพลาดในการโหลดข้อมูล:", error);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  useEffect(() => {
    let filtered = [...allRecipes];

    if (activeFilters.category) {
      filtered = filtered.filter((r) => r.category === activeFilters.category);
    }
    if (activeFilters.maxTime) {
      const timeVal = Number(activeFilters.maxTime);
      if (timeVal === 999) {
        filtered = filtered.filter((r) => Number(r.time) > 60);
      } else {
        filtered = filtered.filter((r) => Number(r.time) <= timeVal);
      }
    }
    if (activeFilters.serving) {
      const serveVal = Number(activeFilters.serving);
      if (serveVal === 2) {
        filtered = filtered.filter(
          (r) => Number(r.serving) >= 1 && Number(r.serving) <= 2,
        );
      } else if (serveVal === 4) {
        filtered = filtered.filter(
          (r) => Number(r.serving) >= 3 && Number(r.serving) <= 4,
        );
      } else if (serveVal === 999) {
        filtered = filtered.filter((r) => Number(r.serving) >= 5);
      }
    }
    if (activeFilters.query) {
      const q = activeFilters.query.toLowerCase();
      filtered = filtered.filter((r) =>
        (r.name || "").toLowerCase().includes(q),
      );
    }
    if (
      activeFilters.sort === "คะแนนสูงสุด" ||
      activeFilters.sort === "ยอดนิยม"
    ) {
      filtered.sort(
        (a, b) => (Number(b.rating) || 0) - (Number(a.rating) || 0),
      );
    }

    setRecipes(filtered);
  }, [allRecipes, activeFilters]);

  const handleFilterChange = (filters) => {
    setActiveFilters(filters);

    const newParams = new URLSearchParams(searchParams);

    if (filters.query) newParams.set("q", filters.query);
    else newParams.delete("q");

    if (filters.category) newParams.set("category", filters.category);
    else newParams.delete("category");

    if (newParams.toString() !== searchParams.toString()) {
      setSearchParams(newParams, { replace: true });
    }
  };

  return (
    <main className="flex flex-col gap-10">
      <Breadcrumb />

      <ExploreFilter
        categories={categories}
        onFilterChange={handleFilterChange}
        initialQuery={queryParam}
        initialCategory={categoryParam}
      />

      {loading ? (
        <div className="text-center py-10 text-gray-500">
          กำลังโหลดเมนูอร่อยๆ...
        </div>
      ) : (
        <RecipeMasonry
          recipes={recipes}
          breakpointCols={breakpointColumnsObj}
        />
      )}
    </main>
  );
}

export default Explore;
