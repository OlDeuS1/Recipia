export default function Ingredient() {
  return (
    <>
      <div>
        <h2 className="text-xl font-semibold mb-4">โภชนาการ (ต่อ 1 จาน)</h2>
        <ul className="text-sm text-gray-600 space-y-2">
          <li>พลังงาน: 490 kcal</li>
          <li>โปรตีน: 21 g</li>
          <li>ไขมัน: 20 g</li>
          <li>คาร์บ: 59 g</li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">วัตถุดิบ</h2>
        <ul className="text-sm text-gray-600 space-y-2 list-disc pl-4">
          <li>เส้นจันทร์ 200 กรัม</li>
          <li>กุ้งสด 8–10 ตัว</li>
          <li>ถั่วงอก 1 ถ้วย</li>
          <li>ไข่ไก่ 2 ฟอง</li>
          <li>เต้าหู้เหลือง 1/2 ถ้วย</li>
          <li>น้ำมะขามเปียก 2 ช้อนโต๊ะ</li>
          <li>น้ำปลา 2 ช้อนโต๊ะ</li>
          <li>ถั่วลิสงคั่วบด</li>
        </ul>
      </div>
    </>
  );
}
