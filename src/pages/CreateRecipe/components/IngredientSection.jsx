import { Plus, X } from "lucide-react";
import FormSection from "./FormSection";
import TextInput from "./TextInput";

export default function IngredientSection({ ingredients, setFormData }) {
  const addField = () =>
    setFormData((prev) => ({
      ...prev,
      ingredients: [...prev.ingredients, ""],
    }));
  const updateField = (index, value) => {
    const newArr = [...ingredients];
    newArr[index] = value;
    setFormData((prev) => ({ ...prev, ingredients: newArr }));
  };
  const removeField = (index) => {
    setFormData((prev) => ({
      ...prev,
      ingredients: prev.ingredients.filter((_, i) => i !== index),
    }));
  };

  return (
    <FormSection
      title="วัตถุดิบ"
      action={
        <button
          type="button"
          onClick={addField}
          className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-xl text-sm hover:bg-gray-800 transition"
        >
          <Plus size={16} /> เพิ่มวัตถุดิบ
        </button>
      }
    >
      {ingredients.map((item, index) => (
        <div key={index} className="flex gap-2 items-center">
          <div className="flex-1">
            <TextInput
              value={item}
              onChange={(e) => updateField(index, e.target.value)}
              placeholder="เช่น เนื้อไก่ 200 กรัม"
            />
          </div>
          {ingredients.length > 1 && (
            <button
              type="button"
              onClick={() => removeField(index)}
              className="p-2 text-gray-400 hover:text-red-500 transition"
            >
              <X size={20} />
            </button>
          )}
        </div>
      ))}
    </FormSection>
  );
}
