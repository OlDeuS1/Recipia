import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Topbar() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 items-center px-4 md:px-32 py-6 bg-gray-300">
      <div className="flex items-center gap-3 font-display text-2xl font-bold">
        Recipia
      </div>
      <label
        className="flex items-center gap-3 bg-gray-100 rounded-full px-4 py-2 max-w-2xl w-full"
        aria-label="Search recipes"
      >
        <SearchIcon fontSize="small" />
        <input
          type="search"
          placeholder="Search for recipes"
          className="border-none bg-transparent w-full text-base font-inherit text-gray-900 outline-none placeholder-gray-500"
        />
      </label>
      <div className="flex items-center gap-3 justify-start md:justify-end flex-wrap">
        <button className="inline-flex items-center gap-2 rounded-full bg-slate-900 text-white px-4 py-2 text-sm font-semibold hover:bg-slate-800">
          <AddIcon fontSize="small" />
          เพิ่มสูตร
        </button>
        <button
          className="inline-grid place-items-center w-12 h-12 rounded-full border-none bg-white text-gray-900 cursor-pointer hover:bg-gray-100"
          aria-label="Saved"
        >
          <BookmarkIcon />
        </button>
        <button
          className="inline-grid place-items-center w-12 h-12 rounded-full border-none bg-white text-gray-900 cursor-pointer hover:bg-gray-100"
          aria-label="Profile"
        >
          <AccountCircleIcon />
        </button>
      </div>
    </header>
  );
}

export default Topbar;
