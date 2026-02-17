import UploadBox from "./components/UploadBox";
import IngredientSection from "./components/IngredientSection";
import StepSection from "./components/StepSection";
import Breadcrumb from "../../components/common/Breadcrumb";
import SectionHead from "../../components/common/SectionHead";
import NutritionSection from "./components/NutritionSection";
import BasicSection from "./components/BasicSection";

export default function CreateRecipe() {
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
        <UploadBox />

        <BasicSection />

        <IngredientSection />

        <StepSection />

        <NutritionSection />

        {/* Buttons */}
        <div className="flex gap-4 pt-4">
          <button
            className="px-8 py-3 bg-gray-900 text-white
                             rounded-xl font-medium
                             hover:bg-gray-800 transition"
          >
            บันทึกสูตร
          </button>

          <button
            className="px-8 py-3 bg-gray-200 text-gray-700
                             rounded-xl hover:bg-gray-300 transition"
          >
            ยกเลิก
          </button>
        </div>
      </div>
    </>
  );
}
