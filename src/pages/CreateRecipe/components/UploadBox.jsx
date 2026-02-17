import { Upload } from "lucide-react";

export default function UploadBox() {
  return (
    <div
      className="bg-white rounded-3xl border-2 border-dashed border-gray-300
                    h-64 flex flex-col items-center justify-center
                    text-center gap-4 hover:border-gray-400 transition"
    >
      <Upload size={28} className="text-gray-500" />

      <p className="text-gray-700 font-medium">อัปโหลดรูปภาพหน้าปกสูตรอาหาร</p>

      <button
        className="px-5 py-2 bg-gray-900 text-white
                         rounded-xl text-sm hover:bg-gray-800 transition"
      >
        เลือกไฟล์
      </button>
    </div>
  );
}
