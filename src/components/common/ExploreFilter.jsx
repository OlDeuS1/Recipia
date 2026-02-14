import { Search, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function ExploreFilter() {
    const [sort, setSort] = useState("ล่าสุด");
    const [open, setOpen] = useState(false);

    const sortOptions = ["ล่าสุด", "ยอดนิยม", "คะแนนสูงสุด"];
     
  return (
    <div className="flex flex-wrap items-center justify-between gap-4">
      {/* LEFT SIDE */}
      <div className="flex flex-wrap items-center gap-3 flex-1">
        {/* Filter Pills */}
        <button className="px-4 py-2 bg-gray-900 text-white rounded-full text-sm font-medium">
          อาหารไทย
        </button>

        <button className="px-4 py-2 bg-gray-900 text-white rounded-full text-sm font-medium">
          30 นาที
        </button>

        <button className="px-4 py-2 bg-gray-900 text-white rounded-full text-sm font-medium">
          1–2 คน
        </button>

        {/* Search */}
        <div className="relative w-72">
          <input
            type="text"
            placeholder="ระบุชื่อเมนูที่ต้องการ..."
            className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
          />
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
          />
        </div>

        {/* Clear */}
        <button className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-sm font-medium hover:bg-gray-200 transition">
          ล้างทั้งหมด
        </button>
      </div>

      {/* RIGHT SIDE - Sort */}
      <div className="relative">
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-full text-sm font-medium hover:bg-gray-800 transition"
        >
          เรียงลำดับ : {sort}
          <ChevronDown size={16} />
        </button>

        {open && (
          <div className="absolute right-0 mt-2 w-40 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden z-50">
            {sortOptions.map((option) => (
              <button
                key={option}
                onClick={() => {
                  setSort(option);
                  setOpen(false);
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

// {
//   /* Category */
// }
// <button className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-full text-sm font-medium hover:bg-gray-800 transition">
//   อาหารไทย
//   <ChevronDown size={16} />
// </button>;

// {
//   /* Time */
// }
// <button className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-full text-sm font-medium hover:bg-gray-800 transition">
//   30 นาที
//   <ChevronDown size={16} />
// </button>;

// {
//   /* Serving */
// }
// <button className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-full text-sm font-medium hover:bg-gray-800 transition">
//   1–2 คน
//   <ChevronDown size={16} />
// </button>;
