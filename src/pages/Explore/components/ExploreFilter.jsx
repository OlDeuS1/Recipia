import { Search, ChevronDown } from "lucide-react";
import { useEffect, useState, useRef } from "react";

export default function ExploreFilter({
  categories = [],
  onFilterChange = () => {},
  initialQuery = "", // รับค่าเริ่มต้นจาก Props
}) {
  // ค่าตัวกรองที่เลือก
  const [sort, setSort] = useState("ล่าสุด");
  const [query, setQuery] = useState(initialQuery);
  const [category, setCategory] = useState(null);
  const [maxTime, setMaxTime] = useState(null);
  const [serving, setServing] = useState(null);

  // ควบคุมการเปิด-ปิด Dropdown ด้วย State เดียว (ลดการสร้าง State ซ้ำซ้อน)
  const [activeMenu, setActiveMenu] = useState(null);
  const filterRef = useRef(null); // ไว้ใช้เช็คว่าคลิกข้างนอกกรอบหรือเปล่า

  const sortOptions = ["ล่าสุด", "ยอดนิยม", "คะแนนสูงสุด"];
  const categoryOptions = [
    "ทั้งหมด",
    ...categories.map((c) => c.category || "ไม่ระบุ"),
  ];
  const timeOptions = [
    { label: "ทั้งหมด", value: null },
    { label: "≤ 30 นาที", value: 30 },
    { label: "≤ 60 นาที", value: 60 },
  ];
  const servingOptions = [
    { label: "ทั้งหมด", value: null },
    { label: "1–2 คน", value: 2 },
    { label: "3–4 คน", value: 4 },
    { label: "5+ คน", value: 999 },
  ];

  useEffect(() => {
    setQuery(initialQuery);
  }, [initialQuery]);

  // อัปเดต Filter กลับไปที่หน้า Explore เมื่อค่าเปลี่ยน
  useEffect(() => {
    onFilterChange({ sort, query, category, maxTime, serving });
  }, [sort, query, category, maxTime, serving]);

  // ซ่อน Dropdown เมื่อคลิกที่อื่นบนหน้าจอ
  useEffect(() => {
    function handleClickOutside(event) {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setActiveMenu(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function clearAll() {
    setSort("ล่าสุด");
    setQuery("");
    setCategory(null);
    setMaxTime(null);
    setServing(null);
  }

  // ตัวช่วยในการสลับเปิด-ปิดเมนู
  const toggleMenu = (menuName) => {
    setActiveMenu(activeMenu === menuName ? null : menuName);
  };

  return (
    <div
      ref={filterRef}
      className="flex flex-wrap items-center justify-between gap-4"
    >
      <div className="flex flex-wrap items-center gap-3 flex-1">
        {/* Dropdown: หมวดหมู่ */}
        <div className="relative">
          <button
            onClick={() => toggleMenu("category")}
            className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-full text-sm font-medium hover:bg-gray-800 transition"
          >
            {category || "หมวดทั้งหมด"}
            <ChevronDown size={14} />
          </button>
          {activeMenu === "category" && (
            <div className="absolute mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden z-50">
              {categoryOptions.map((opt) => (
                <button
                  key={opt}
                  onClick={() => {
                    if (opt === "ทั้งหมด") setCategory(null);
                    else setCategory(opt === category ? null : opt);
                    setActiveMenu(null);
                  }}
                  className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                >
                  {opt}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Dropdown: เวลา */}
        <div className="relative">
          <button
            onClick={() => toggleMenu("time")}
            className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-full text-sm font-medium hover:bg-gray-800 transition"
          >
            {maxTime ? `≤ ${maxTime} นาที` : "เวลาทั้งหมด"}
            <ChevronDown size={14} />
          </button>
          {activeMenu === "time" && (
            <div className="absolute mt-2 w-40 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden z-50">
              {timeOptions.map((opt) => (
                <button
                  key={String(opt.value)}
                  onClick={() => {
                    setMaxTime(opt.value);
                    setActiveMenu(null);
                  }}
                  className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                >
                  {opt.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Dropdown: จำนวนคน */}
        <div className="relative">
          <button
            onClick={() => toggleMenu("serving")}
            className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-full text-sm font-medium hover:bg-gray-800 transition"
          >
            {serving
              ? servingOptions.find((o) => o.value === serving)?.label
              : "จำนวนคน"}
            <ChevronDown size={14} />
          </button>
          {activeMenu === "serving" && (
            <div className="absolute mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden z-50">
              {servingOptions.map((opt) => (
                <button
                  key={String(opt.value)}
                  onClick={() => {
                    setServing(opt.value);
                    setActiveMenu(null);
                  }}
                  className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                >
                  {opt.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Search Input */}
        <div className="relative w-72">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            type="text"
            placeholder="ระบุชื่อเมนูที่ต้องการ..."
            className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
          />
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
          />
        </div>

        {/* ปุ่มล้างค่า */}
        <button
          onClick={clearAll}
          className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-sm font-medium hover:bg-gray-200 transition"
        >
          ล้างทั้งหมด
        </button>
      </div>

      {/* Dropdown: เรียงลำดับ */}
      <div className="relative">
        <button
          onClick={() => toggleMenu("sort")}
          className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-full text-sm font-medium hover:bg-gray-800 transition"
        >
          เรียงลำดับ : {sort}
          <ChevronDown size={16} />
        </button>

        {activeMenu === "sort" && (
          <div className="absolute right-0 mt-2 w-40 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden z-50">
            {sortOptions.map((option) => (
              <button
                key={option}
                onClick={() => {
                  setSort(option);
                  setActiveMenu(null);
                }}
                className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
              >
                {option}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
