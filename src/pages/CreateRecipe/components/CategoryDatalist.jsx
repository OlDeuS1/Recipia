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
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
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
