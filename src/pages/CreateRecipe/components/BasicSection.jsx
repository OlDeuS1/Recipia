import FormSection from "./FormSection";
import TextArea from "./TextArea";
import TextInput from "./TextInput";

export default function BasicSection(){
    return(
         <FormSection title="ข้อมูลพื้นฐาน">
          <TextInput placeholder="ชื่อสูตรอาหาร" />
          <TextArea placeholder="คำอธิบาย" rows={4} />

          <div className="grid grid-cols-2 gap-4">
            <TextInput type="number" placeholder="เวลาเตรียม (นาที)" />
            <TextInput type="number" placeholder="จำนวนเสิร์ฟ" />
          </div>
        </FormSection>
    )
}