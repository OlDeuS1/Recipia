import Breadcrumb from "../../components/common/Breadcrumb";
import ExploreFilter from "./components/ExploreFilter";
import RecipeMasonry from "./components/RecipeMasonry";
import { useEffect, useState } from "react";
import { fetchRecipes, fetchCategories } from "../../services/recipeService";
import { useSearchParams } from "react-router-dom";

function Explore() {
  const breakpointColumnsObj = {
    default: 4,
    1280: 4,
    1024: 3,
    768: 2,
    640: 1,
  };
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParam = searchParams.get("q") || ""; // ดึงค่า ?q=... จาก URL

  const [allRecipes, setAllRecipes] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  // ดึงข้อมูลตอนเปิดหน้า
  useEffect(() => {
    async function loadData() {
      setLoading(true);
      try {
        const [mealData, categoryData] = await Promise.all([
          fetchRecipes(),
          fetchCategories(),
        ]);
        setAllRecipes(mealData);
        setRecipes(mealData);
        setCategories(categoryData);
      } catch (error) {
        console.error("เกิดข้อผิดพลาดในการโหลดข้อมูล:", error);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  // ฟังก์ชันจัดการตอน User เปลี่ยน Filter
  const handleFilterChange = (filters) => {
    let filtered = [...allRecipes];

    // 1. กรองหมวดหมู่
    if (filters.category) {
      filtered = filtered.filter((r) => r.category === filters.category);
    }

    // 2. กรองเวลาทำอาหาร
    if (filters.maxTime) {
      filtered = filtered.filter(
        (r) => Number(r.time) <= Number(filters.maxTime),
      );
    }

    // 3. กรองจำนวนคนเสิร์ฟ
    if (filters.serving) {
      if (filters.serving === 999) {
        filtered = filtered.filter((r) => Number(r.serving) >= 5); // 5+ คน
      } else {
        filtered = filtered.filter(
          (r) => Number(r.serving) <= Number(filters.serving),
        );
      }
    }

    // 4. กรองจากคำค้นหา (Search)
    if (filters.query) {
      const q = filters.query.toLowerCase();
      filtered = filtered.filter((r) =>
        (r.name || "").toLowerCase().includes(q),
      );
    }

    // 5. จัดเรียงข้อมูล (Sort)
    if (filters.sort === "คะแนนสูงสุด" || filters.sort === "ยอดนิยม") {
      filtered.sort(
        (a, b) => (Number(b.rating) || 0) - (Number(a.rating) || 0),
      );
    }

    setRecipes(filtered);

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
        initialQuery={queryParam} // ส่งค่าจาก URL ลงไปให้ Filter
      />

      {/* เพิ่ม Loading state เล็กน้อยให้ดูเนียนตา */}
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
