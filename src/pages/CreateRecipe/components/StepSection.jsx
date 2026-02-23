import { Plus, X } from "lucide-react";
import FormSection from "./FormSection";
import TextArea from "./TextArea";

export default function StepSection({ instructions, setFormData }) {
  // ฟังก์ชันเพิ่มช่องวิธีทำ
  const addField = () => {
    setFormData((prev) => ({
      ...prev,
      instructions: [...prev.instructions, ""],
    }));
  };

  // ฟังก์ชันอัปเดตข้อความเมื่อพิมพ์
  const updateField = (index, value) => {
    const newInstructions = [...instructions];
    newInstructions[index] = value;
    setFormData((prev) => ({ ...prev, instructions: newInstructions }));
  };

  // ฟังก์ชันลบช่องวิธีทำ
  const removeField = (index) => {
    setFormData((prev) => ({
      ...prev,
      instructions: prev.instructions.filter((_, i) => i !== index),
    }));
  };

  return (
    <FormSection
      title="วิธีทำ"
      action={
        <button
          type="button" // ต้องใส่ type="button" ป้องกันไม่ให้มันเผลอ submit form
          onClick={addField}
          className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-xl text-sm hover:bg-gray-800 transition"
        >
          <Plus size={16} />
          เพิ่มขั้นตอน
        </button>
      }
    >
      <div className="space-y-4">
        {instructions.map((item, index) => (
          <div key={index} className="flex gap-4 items-start">
            {/* ตัวเลขลำดับขั้นตอน */}
            <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-gray-100 text-gray-800 font-semibold rounded-full mt-2">
              {index + 1}
            </div>

            <div className="flex-1">
              <TextArea
                value={item}
                onChange={(e) => updateField(index, e.target.value)}
                placeholder="อธิบายขั้นตอนการทำ..."
                rows={3}
              />
            </div>

            {/* ปุ่มลบ (จะแสดงก็ต่อเมื่อมีมากกว่า 1 ขั้นตอน) */}
            {instructions.length > 1 && (
              <button
                type="button"
                onClick={() => removeField(index)}
                className="p-2 text-gray-400 hover:text-red-500 transition mt-2"
              >
                <X size={20} />
              </button>
            )}
          </div>
        ))}
      </div>
    </FormSection>
  );
}
