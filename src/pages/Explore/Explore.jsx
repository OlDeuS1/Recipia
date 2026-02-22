import Breadcrumb from "../../components/common/Breadcrumb";
import ExploreFilter from "./components/ExploreFilter";
import RecipeMasonry from "./components/RecipeMasonry";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchRecipes, fetchCategories } from "../../services/recipeService";

function Explore() {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParam = searchParams.get("q") || ""; // ดึงคำค้นหาจาก URL

  const breakpointColumnsObj = { default: 4, 1280: 4, 1024: 3, 768: 2, 640: 1 };

  const [allRecipes, setAllRecipes] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  // เก็บ State ของ Filter ปัจจุบันไว้ที่นี่ (เอาค่าเริ่มต้นจาก URL มาใส่)
  const [activeFilters, setActiveFilters] = useState({
    query: queryParam,
    sort: "ล่าสุด",
    category: null,
    maxTime: null,
    serving: null,
  });

  // 1. โหลดข้อมูลแค่ครั้งเดียวตอนเปิดหน้า
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
        // ❌ เอา setRecipes(mealData) ออก เพราะเดี๋ยวเราจะให้ useEffect ด้านล่างจัดการให้
      } catch (error) {
        console.error("เกิดข้อผิดพลาดในการโหลดข้อมูล:", error);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  // 2. กรองข้อมูลอัตโนมัติ เมื่อ Data โหลดเสร็จ หรือ Filter เปลี่ยน
  useEffect(() => {
    let filtered = [...allRecipes];

    if (activeFilters.category) {
      filtered = filtered.filter((r) => r.category === activeFilters.category);
    }
    if (activeFilters.maxTime) {
      filtered = filtered.filter(
        (r) => Number(r.time) <= Number(activeFilters.maxTime),
      );
    }
    if (activeFilters.serving) {
      if (activeFilters.serving === 999) {
        filtered = filtered.filter((r) => Number(r.serving) >= 5);
      } else {
        filtered = filtered.filter(
          (r) => Number(r.serving) <= Number(activeFilters.serving),
        );
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

  // 3. ฟังก์ชันรับค่าจาก Component ลูก (ExploreFilter)
  const handleFilterChange = (filters) => {
    setActiveFilters(filters);

    // อัปเดต URL สวยๆ เวลาพิมพ์ช่องค้นหา (ถ้าค่าไม่ตรงกับ URL)
    if (filters.query !== queryParam) {
      setSearchParams(filters.query ? { q: filters.query } : {}, {
        replace: true,
      });
    }
  };

  return (
    <main className="flex flex-col gap-10">
      <Breadcrumb />

      <ExploreFilter
        categories={categories}
        onFilterChange={handleFilterChange}
        initialQuery={queryParam} // ส่งคำค้นหาจาก URL ไปตั้งค่าเริ่มต้นให้ช่อง Input
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
