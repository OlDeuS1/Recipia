import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function SearchBar({ placeholder = "Search for recipes" }) {
  const [term, setTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (!term.trim()) return;
    // พาไปหน้า explore พร้อม query string เช่น /recipe?q=ต้มยำ
    navigate(`/recipe?q=${encodeURIComponent(term)}`);
    setTerm(""); // ล้างช่อง search หลังจากกด enter
  };

  return (
    <form onSubmit={handleSearch} className="max-w-2xl w-full">
      <label className="flex items-center gap-3 bg-gray-100 hover:bg-gray-200 focus-within:ring-2 focus-within:ring-slate-900 rounded-full px-4 h-10 transition cursor-text">
        <Search size={18} className="text-gray-500" />
        <input
          type="search"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          placeholder={placeholder}
          className="bg-transparent w-full text-sm text-gray-800 outline-none border-none focus:outline-none focus:ring-0 placeholder-gray-400"
        />
      </label>
    </form>
  );
}

export default SearchBar;
