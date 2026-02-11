import { Search, Plus, Bookmark, User } from "lucide-react";

function Topbar() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between gap-6 md:gap-10 px-4 md:px-32 py-3 bg-white/80 backdrop-blur-md border-b border-gray-200">
      {/* LEFT */}
      <div className="flex items-center gap-8 flex-1">
        <div className="flex items-center gap-3 text-2xl font-bold flex-shrink-0">
          Recipia
        </div>

        <label className="flex items-center gap-3 bg-gray-100 hover:bg-gray-200 focus-within:ring-2 focus-within:ring-slate-900 rounded-full px-4 h-10 max-w-2xl w-full transition">
          <Search size={18} className="text-gray-500" />
          <input
            type="search"
            placeholder="Search for recipes"
            className="bg-transparent w-full text-sm text-gray-800 outline-none border-none focus:outline-none focus:ring-0 placeholder-gray-400"
          />
        </label>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-4 flex-shrink-0">
        <button className="flex items-center gap-2 bg-slate-900 text-white px-4 h-10 rounded-full hover:bg-slate-800 transition-all duration-200 shadow-md active:scale-95">
          <Plus size={18} strokeWidth={2.5} />
          <span className="text-sm font-semibold">สร้างสูตร</span>
        </button>
        <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-all duration-200 hover:scale-105">
          <Bookmark size={20} strokeWidth={2} />
        </button>
        <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-all duration-200 hover:scale-105">
          <User size={20} strokeWidth={2} />
        </button>
      </div>
    </header>
  );
}

export default Topbar;
