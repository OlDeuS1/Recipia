import { Plus } from "lucide-react";
import FormSection from "./FormSection";
import TextArea from "./TextArea";

export default function StepSection() {
  return (
    <FormSection
      title="วิธีทำ"
      action={
        <button
          className="flex items-center gap-2
                           bg-gray-900 text-white
                           px-4 py-2 rounded-xl text-sm
                           hover:bg-gray-800 transition"
        >
          <Plus size={16} />
          เพิ่มขั้นตอน
        </button>
      }
    >
      <TextArea placeholder="อธิบายขั้นตอน..." />
    </FormSection>
  );
}
