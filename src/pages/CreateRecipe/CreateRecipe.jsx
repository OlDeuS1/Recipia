import { useState } from "react";
import { useNavigate } from "react-router-dom";
import UploadBox from "./components/UploadBox";
import IngredientSection from "./components/IngredientSection";
import StepSection from "./components/StepSection";
import Breadcrumb from "../../components/common/Breadcrumb";
import SectionHead from "../../components/common/SectionHead";
import BasicSection from "./components/BasicSection";
import NutritionSection from "./components/NutritionSection";
import { fetchRecipes, fetchCategories } from "../../services/recipeService";

export default function CreateRecipe() {
  const navigate = useNavigate();

  const initialForm = {
    name: "",
    category: "",
    description: "",
    time: "",
    serving: "",
    image: "",
    ingredients: [""],
    instructions: [""],
    nutrition: {
      calories: "",
      protein: "",
      fat: "",
      carb: "",
    },
  };

  const [formData, setFormData] = useState(initialForm);

  const handleReset = () => {
    setFormData(initialForm);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.image) {
      alert("กรุณาใส่ชื่อสูตรและรูปภาพให้ครบถ้วน");
      return;
    }

    const newRecipe = {
      ...formData,
      id: fetchRecipes.length + 1,
    };

    const existing = JSON.parse(localStorage.getItem("myRecipes")) || [];
    localStorage.setItem("myRecipes", JSON.stringify([newRecipe, ...existing]));

    alert("บันทึกสูตรอาหารเรียบร้อย!");
    navigate("/");
  };

  return (
    <>
      <div className="flex flex-col gap-10">
        <Breadcrumb />
        <SectionHead
          title="สร้างสูตรอาหารใหม่"
          kicker="แบ่งปันสูตรอาหารของคุณให้ชุมชน"
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 py-14 space-y-10">
        <form
          onSubmit={handleSave}
          onReset={handleReset}
          className="space-y-10"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              รูปหน้าปก
            </label>
            <UploadBox
              image={formData.image}
              setImage={(img) => setFormData({ ...formData, image: img })}
            />
          </div>
          <BasicSection formData={formData} handleChange={handleChange} />
          <IngredientSection
            ingredients={formData.ingredients}
            setFormData={setFormData}
          />
          <StepSection
            instructions={formData.instructions}
            setFormData={setFormData}
          />

          <NutritionSection formData={formData} setFormData={setFormData} />

          <div className="flex gap-4 pt-4">
            <button
              type="submit"
              className="px-8 py-3 bg-slate-900 text-white rounded-xl font-medium hover:bg-slate-800 transition shadow-md"
            >
              บันทึกสูตร
            </button>
            <button
              type="reset"
              className="px-8 py-3 bg-gray-200 text-gray-700 rounded-xl hover:bg-gray-300 transition"
            >
              ยกเลิก
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
