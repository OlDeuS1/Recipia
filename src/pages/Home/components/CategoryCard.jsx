import { Link } from "react-router-dom";

function CategoryCard({ item }) {
  const targetUrl = `/recipe?category=${encodeURIComponent(item.category)}`;

  return (
    <Link
      to={targetUrl}
      className="group relative block rounded-3xl overflow-hidden min-h-[160px] cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300"
    >
      {/* ภาพพื้นหลัง */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
        style={{ backgroundImage: `url(${item.image})` }}
      />

      {/* ไล่สีเงาดำ (Gradient Overlay) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

      {/* ข้อความหมวดหมู่ */}
      <div className="relative z-10 h-full flex flex-col justify-end p-4 text-white">
        <h3 className="text-sm md:text-base font-semibold leading-tight">
          {item.category}
        </h3>
      </div>
    </Link>
  );
}

export default CategoryCard;
