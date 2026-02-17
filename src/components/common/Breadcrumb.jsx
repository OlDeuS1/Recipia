import { Link, useLocation } from "react-router-dom";

export default function Breadcrumb() {
  const location = useLocation();
  const segments = location.pathname.split("/").filter(Boolean);

  const labelMap = {
    explore: "ค้นหา",
    bookmark: "บุ๊กมาร์ค",
    recipe: "สูตรอาหาร",
  };

  const crumbs = [
    { label: "หน้าแรก", to: "/" },
    ...segments.map((seg, idx) => {
      const to = "/" + segments.slice(0, idx + 1).join("/");

      const isId = !isNaN(seg);

      return {
        label: isId
          ? "รายละเอียดสูตร"
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
