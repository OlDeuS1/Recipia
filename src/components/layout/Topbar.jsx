import { Plus, Bookmark, User } from "lucide-react";
import SearchBar from "../common/SearchBar";
import { Link } from "react-router-dom";

function Topbar() {
  return (
    <header className="sticky top-0 z-50 -mx-4 md:-mx-10 lg:-mx-20 xl:-mx-40 px-3 sm:px-4 md:px-10 lg:px-20 xl:px-40 flex flex-row flex-nowrap items-center justify-between gap-2 md:gap-6 lg:gap-10 py-2.5 sm:py-3 bg-white/80 backdrop-blur-md border-b border-gray-200">
      {/* LEFT */}
      <div className="flex items-center gap-2 sm:gap-4 flex-1 min-w-0">
        <div className="flex items-center gap-2 text-lg sm:text-2xl font-bold shrink-0">
          <Link to="/">Recipia</Link>
        </div>
        <div className="flex-1 min-w-0">
          <SearchBar />
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex flex-nowrap items-center justify-end gap-2 sm:gap-3 md:gap-4 shrink-0">
        <Link to="/create">
          <button className="flex items-center gap-1.5 bg-slate-900 text-white px-3 sm:px-4 h-9 sm:h-10 rounded-full hover:bg-slate-800 transition-all duration-200 shadow-md active:scale-95 text-xs sm:text-sm">
            <Plus size={16} strokeWidth={2.3} />
            <span className="font-semibold whitespace-nowrap">สร้างสูตร</span>
          </button>
        </Link>
        <Link to="/bookmark">
          <button className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-all duration-200 hover:scale-105">
            <Bookmark size={18} strokeWidth={2} />
          </button>
        </Link>
        <button className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-all duration-200 hover:scale-105">
          <User size={18} strokeWidth={2} />
        </button>
      </div>
    </header>
  );
}

export default Topbar;
