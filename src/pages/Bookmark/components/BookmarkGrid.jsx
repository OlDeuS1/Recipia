import { useState, useEffect } from "react";
import RecipeCard from "../../../components/common/RecipeCard";
import { Trash2 } from "lucide-react";

export default function BookmarkGrid() {
  const [bookmarks, setBookmarks] = useState([]);

  // 🌟 ดึงข้อมูลที่บันทึกไว้จาก localStorage ตอนเปิดหน้า
  useEffect(() => {
    const savedBookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
    setBookmarks(savedBookmarks);
  }, []);

  // 🌟 ฟังก์ชันลบรายการออกจากที่บันทึก
  const handleRemove = (id) => {
    const updatedBookmarks = bookmarks.filter(
      (item) => String(item.id) !== String(id),
    );
    setBookmarks(updatedBookmarks); // อัปเดตหน้าจอทันที
    localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks)); // อัปเดตข้อมูลใน localStorage
  };

  // ถ้ายังไม่มีข้อมูลเลย ให้แสดงข้อความแจ้งเตือน
  if (bookmarks.length === 0) {
    return (
      <div className="text-center py-20 text-gray-500 bg-white rounded-3xl border border-dashed border-gray-300">
        คุณยังไม่ได้บันทึกสูตรอาหารใดๆ
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {bookmarks.map((item) => (
        <RecipeCard
          key={item.id}
          item={item}
          fixed
          footer={
            <button
              onClick={() => handleRemove(item.id)}
              className="w-full flex items-center justify-center gap-2
                 border border-gray-200 rounded-xl py-2
                 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 hover:border-red-200 transition"
            >
              <Trash2 size={16} />
              ลบออกจากที่บันทึก
            </button>
          }
        />
      ))}
    </div>
  );
}
