import FormSection from "./FormSection";
import TextInput from "./TextInput";

export default function NutritionSection(){
    return(
        <FormSection title="ข้อมูลโภชนาการ">
          <div className="grid grid-cols-2 gap-4">
            <TextInput type="number" placeholder="พลังงาน (kcal)" />
            <TextInput type="number" placeholder="โปรตีน (g)" />
            <TextInput type="number" placeholder="ไขมัน (g)" />
            <TextInput type="number" placeholder="คาร์บ (g)" />
          </div>
        </FormSection>
    )
}