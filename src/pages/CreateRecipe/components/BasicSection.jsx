import FormSection from "./FormSection";
import TextArea from "./TextArea";
import TextInput from "./TextInput";
import CategoryDatalist from "./CategoryDatalist";

export default function BasicSection({ formData, handleChange }) {
  return (
    <FormSection title="ข้อมูลพื้นฐาน">
      <div className="grid grid-cols-2 gap-4">
        <TextInput
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="ชื่อสูตรอาหาร"
          label="ชื่อสูตร"
        />
        <CategoryDatalist value={formData.category} onChange={handleChange} />
      </div>
      <TextArea
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="คำอธิบาย"
        rows={4}
        label="คำอธิบาย"
      />
      <div className="grid grid-cols-2 gap-4">
        <TextInput
          name="time"
          value={formData.time}
          onChange={handleChange}
          type="number"
          placeholder="เวลาเตรียม (นาที)"
          label="เวลาเตรียม (นาที)"
        />
        <TextInput
          name="serving"
          value={formData.serving}
          onChange={handleChange}
          type="number"
          placeholder="จำนวนเสิร์ฟ"
          label="จำนวนเสิร์ฟ"
        />
      </div>
    </FormSection>
  );
}
