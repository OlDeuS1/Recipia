import { useState, useEffect } from "react";
import { fetchCategories } from "../../../services/recipeService";

export default function CategoryDatalist({ value, onChange }) {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const result = await fetchCategories();
        const categoryNames = result.map((cat) => cat.category);
        setCategories(categoryNames);
      } catch (error) {
        console.error("ไม่สามารถดึงหมวดหมู่ได้:", error);
      } finally {
        setLoading(false);
      }
    };

    loadCategories();
  }, []);

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        หมวดหมู่
      </label>
      <input
        type="text"
        list="categoryList"
        name="category"
        value={value}
        onChange={onChange}
        placeholder="เลือกหรือพิมพ์หมวดหมู่อาหาร"
        className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900"
      />
      {!loading && (
        <datalist id="categoryList">
          {categories.map((category) => (
            <option key={category} value={category} />
          ))}
        </datalist>
      )}
    </div>
  );
}
