import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchRecipeById } from "../../services/recipeService";

export default function Breadcrumb() {
  const location = useLocation();
  const segments = location.pathname.split("/").filter(Boolean);

  const labelMap = {
    bookmark: "บุ๊กมาร์ค",
    recipe: "สูตรอาหาร",
    create: "สร้างสูตร",
  };

  const [namesById, setNamesById] = useState({});

  useEffect(() => {
    let mounted = true;

    async function loadNames() {
      const ids = segments.filter((s) => !isNaN(s));
      const next = {};

      await Promise.all(
        ids.map(async (id) => {
          try {
            const m = await fetchRecipeById(id);
            if (m && m.name) next[id] = m.name;
          } catch (e) {
            // ignore
          }
        }),
      );

      if (mounted) setNamesById((p) => ({ ...p, ...next }));
    }

    if (segments.length) loadNames();

    return () => {
      mounted = false;
    };
  }, [location.pathname]);

  const crumbs = [
    { label: "หน้าแรก", to: "/" },
    ...segments.map((seg, idx) => {
      const to = "/" + segments.slice(0, idx + 1).join("/");

      const isId = !isNaN(seg);

      return {
        label: isId
          ? namesById[seg] || "รายละเอียดสูตร"
          : labelMap[seg] || decodeURIComponent(seg),
        to,
      };
    }),
  ];

  return (
    <nav
      aria-label="Breadcrumb"
      className="text-sm text-gray-500 flex items-center gap-2"
    >
      {crumbs.map((c, i) => (
        <span
          key={c.to}
          className={i === crumbs.length - 1 ? "text-gray-900 font-medium" : ""}
        >
          {i !== 0 && <span className="text-gray-400">/</span>}

          {i === crumbs.length - 1 ? (
            <span>{c.label}</span>
          ) : (
            <Link to={c.to} className="hover:text-gray-700 transition">
              {c.label}
            </Link>
          )}
        </span>
      ))}
    </nav>
  );
}
