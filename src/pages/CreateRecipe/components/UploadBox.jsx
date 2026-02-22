import { Upload } from "lucide-react";
import { useRef } from "react";

export default function UploadBox({ image, setImage }) {
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImage(reader.result); // แปลงภาพเพื่อแสดงผลและบันทึก
      reader.readAsDataURL(file);
    }
  };

  return (
    <div
      onClick={() => fileInputRef.current?.click()}
      className="relative bg-white rounded-3xl border-2 border-dashed border-gray-300 h-64 flex flex-col items-center justify-center text-center gap-4 hover:border-gray-400 transition cursor-pointer overflow-hidden"
    >
      <input
        type="file"
        accept="image/*"
        className="hidden"
        ref={fileInputRef}
        onChange={handleFileChange}
      />

      {image ? (
        <img
          src={image}
          alt="Preview"
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : (
        <>
          <Upload size={28} className="text-gray-500" />
          <p className="text-gray-700 font-medium">
            อัปโหลดรูปภาพหน้าปกสูตรอาหาร
          </p>
          <button
            type="button"
            className="px-5 py-2 bg-gray-900 text-white rounded-xl text-sm hover:bg-gray-800 transition"
          >
            เลือกไฟล์
          </button>
        </>
      )}
    </div>
  );
}
