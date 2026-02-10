import SectionHead from "../common/SectionHead"

const mediaBackgrounds = {
  "media-ten":
    "linear-gradient(140deg, rgba(56, 189, 248, 0.7), rgba(224, 242, 254, 0.4)), url(https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80)",
  "media-eleven":
    "linear-gradient(140deg, rgba(34, 197, 94, 0.7), rgba(220, 252, 231, 0.4)), url(https://images.unsplash.com/photo-1473093226795-af9932fe5856?auto=format&fit=crop&w=600&q=80)",
  "media-twelve":
    "linear-gradient(140deg, rgba(244, 63, 94, 0.7), rgba(254, 205, 211, 0.4)), url(https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?auto=format&fit=crop&w=600&q=80)",
  "media-thirteen":
    "linear-gradient(140deg, rgba(59, 130, 246, 0.7), rgba(191, 219, 254, 0.4)), url(https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80)",
  "media-fourteen":
    "linear-gradient(140deg, rgba(251, 191, 36, 0.7), rgba(254, 249, 195, 0.4)), url(https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=600&q=80)",
  "media-fifteen":
    "linear-gradient(140deg, rgba(20, 184, 166, 0.7), rgba(204, 251, 241, 0.4)), url(https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=600&q=80)",
};

function CategorySection({ collections }) {
  return (
    <section className="flex flex-col gap-8">
      <SectionHead title="เลือกตามหมวดหมู่" />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
        {collections.map((item) => (
          <article
            key={item.title}
            className="rounded-2xl overflow-hidden bg-gray-900 text-white relative flex items-center justify-center min-h-40"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ background: mediaBackgrounds[item.media] }}
              aria-hidden="true"
            />
            <div className="relative z-10 p-4 text-center">
              <h3 className="m-0 text-base font-semibold">{item.title}</h3>
              {item.subtitle && (
                <p className="m-0 text-xs text-white/65">{item.subtitle}</p>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default CategorySection
