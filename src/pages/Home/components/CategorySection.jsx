import SectionHead from "../../../components/common/SectionHead";
import CategoryCard from "./CategoryCard";

function CategorySection({ categories = [] }) {
  return (
    <section className="flex flex-col gap-10">
      <SectionHead title="เลือกตามหมวดหมู่" />

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {categories.slice(0, 6).map((item) => (
          <CategoryCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}

export default CategorySection;
