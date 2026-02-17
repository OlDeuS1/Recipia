import { Plus } from "lucide-react";
import FormSection from "./FormSection";
import TextInput from "./TextInput";

export default function IngredientSection() {
  return (
    <FormSection
      title="วัตถุดิบ"
      action={
        <button
          className="flex items-center gap-2
                           bg-gray-900 text-white
                           px-4 py-2 rounded-xl text-sm
                           hover:bg-gray-800 transition"
        >
          <Plus size={16} />
          เพิ่มวัตถุดิบ
        </button>
      }
    >
      <TextInput placeholder="เช่น เนื้อไก่ 200 กรัม" />
    </FormSection>
  );
}
