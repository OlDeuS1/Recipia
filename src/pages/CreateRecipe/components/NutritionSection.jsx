import FormSection from "./FormSection";
import TextInput from "./TextInput";

export default function NutritionSection({ formData, handleChange }) {
  return (
    <FormSection title="ข้อมูลโภชนาการ">
      <div className="grid grid-cols-2 gap-4">
        <TextInput
          name="calories"
          value={formData.calories}
          onChange={handleChange}
          type="number"
          placeholder="พลังงาน (kcal)"
          label="พลังงาน (kcal)"
        />
        <TextInput
          name="protein"
          value={formData.protein}
          onChange={handleChange}
          type="number"
          placeholder="โปรตีน (g)"
          label="โปรตีน (g)"
        />
        <TextInput
          name="fat"
          value={formData.fat}
          onChange={handleChange}
          type="number"
          placeholder="ไขมัน (g)"
          label="ไขมัน (g)"
        />
        <TextInput
          name="carbs"
          value={formData.carbs}
          onChange={handleChange}
          type="number"
          placeholder="คาร์บ (g)"
          label="คาร์บ (g)"
        />
      </div>
    </FormSection>
  );
}
