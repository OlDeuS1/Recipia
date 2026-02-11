import { Search } from "lucide-react";

function SearchBar({ placeholder = "Search for recipes" }) {
  return (
    <label className="flex items-center gap-3 bg-gray-100 hover:bg-gray-200 focus-within:ring-2 focus-within:ring-slate-900 rounded-full px-4 h-10 max-w-2xl w-full transition">
      <Search size={18} className="text-gray-500" />
      <input
        type="search"
        placeholder={placeholder}
        className="bg-transparent w-full text-sm text-gray-800 outline-none border-none focus:outline-none focus:ring-0 placeholder-gray-400"
      />
    </label>
  );
}

export default SearchBar;
