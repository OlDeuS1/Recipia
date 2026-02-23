import FormSection from "./FormSection";
import TextInput from "./TextInput";

export default function NutritionSection({ formData, setFormData }) {
  const nutrition = formData.nutrition || {
    calories: "",
    protein: "",
    fat: "",
    carbs: "",
  };

  const update = (key, value) => {
    setFormData((prev) => ({
      ...prev,
      nutrition: { ...(prev.nutrition || {}), [key]: value },
    }));
  };

  return (
    <FormSection title="ข้อมูลโภชนาการ">
      <div className="grid grid-cols-2 gap-4">
        <TextInput
          name="calories"
          value={nutrition.calories}
          onChange={(e) => update("calories", e.target.value)}
          type="number"
          placeholder="พลังงาน (kcal)"
          label="พลังงาน (kcal)"
        />
        <TextInput
          name="protein"
          value={nutrition.protein}
          onChange={(e) => update("protein", e.target.value)}
          type="number"
          placeholder="โปรตีน (g)"
          label="โปรตีน (g)"
        />
        <TextInput
          name="fat"
          value={nutrition.fat}
          onChange={(e) => update("fat", e.target.value)}
          type="number"
          placeholder="ไขมัน (g)"
          label="ไขมัน (g)"
        />
        <TextInput
          name="carb"
          value={nutrition.carb}
          onChange={(e) => update("carb", e.target.value)}
          type="number"
          placeholder="คาร์บ (g)"
          label="คาร์บ (g)"
        />
      </div>
    </FormSection>
  );
}
