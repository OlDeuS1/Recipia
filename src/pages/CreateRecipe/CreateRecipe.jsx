import UploadBox from "./components/UploadBox";
import FormSection from "./components/FormSection";
import TextInput from "./components/TextInput";
import TextArea from "./components/TextArea";
import IngredientSection from "./components/IngredientSection";
import StepSection from "./components/StepSection";
import Breadcrumb from "../../components/common/Breadcrumb";
import SectionHead from "../../components/common/SectionHead";

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

        {/* Basic Info */}
        <FormSection title="ข้อมูลพื้นฐาน">
          <TextInput placeholder="ชื่อสูตรอาหาร" />
          <TextArea placeholder="คำอธิบาย" rows={4} />

          <div className="grid grid-cols-2 gap-4">
            <TextInput type="number" placeholder="เวลาเตรียม (นาที)" />
            <TextInput type="number" placeholder="จำนวนเสิร์ฟ" />
          </div>
        </FormSection>

        <IngredientSection />

        <StepSection />

        {/* Nutrition */}
        <FormSection title="ข้อมูลโภชนาการ">
          <div className="grid grid-cols-2 gap-4">
            <TextInput type="number" placeholder="พลังงาน (kcal)" />
            <TextInput type="number" placeholder="โปรตีน (g)" />
            <TextInput type="number" placeholder="ไขมัน (g)" />
            <TextInput type="number" placeholder="คาร์บ (g)" />
          </div>
        </FormSection>

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
