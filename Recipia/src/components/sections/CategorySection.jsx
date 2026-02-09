import SectionHead from "../common/SectionHead"

function CategorySection({ collections }) {
  return (
    <section className="section">
      <SectionHead title="เลือกตามหมวดหมู่" />
      <div className="mini-grid">
        {collections.map((item) => (
          <article className="mini-card" key={item.title}>
            <div className={`mini-media ${item.media}`} aria-hidden="true" />
            <div className="mini-body">
              <h3>{item.title}</h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default CategorySection
