import SectionHead from "../../../components/common/SectionHead";
import CategoryCard from "./CategoryCard";

const mediaBackgrounds = {
  "media-ten":
    "url(https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80)",
  "media-eleven":
    "url(https://images.unsplash.com/photo-1473093226795-af9932fe5856?auto=format&fit=crop&w=600&q=80)",
  "media-twelve":
    "url(https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?auto=format&fit=crop&w=600&q=80)",
  "media-thirteen":
    "url(https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80)",
  "media-fourteen":
    "url(https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=600&q=80)",
  "media-fifteen":
    "url(https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=600&q=80)",
};

function CategorySection({ collections }) {
  return (
    <section className="flex flex-col gap-10">
      <SectionHead title="เลือกตามหมวดหมู่" />

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {collections.map((item) => (
          <CategoryCard
            key={item.title}
            item={item}
            background={mediaBackgrounds[item.media]}
          />
        ))}
      </div>
    </section>
  );
}

export default CategorySection;
