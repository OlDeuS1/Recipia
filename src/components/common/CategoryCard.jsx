function CategoryCard({ item, background }) {
  return (
    <article
      className="group relative rounded-3xl overflow-hidden min-h-[160px] cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300"
    >
      {/* Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
        style={{ backgroundImage: background }}
      />

      {/* Bottom Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end p-4 text-white">
        <h3 className="text-sm md:text-base font-semibold leading-tight">{item.title}</h3>
      </div>
    </article>
  );
}

export default CategoryCard;
