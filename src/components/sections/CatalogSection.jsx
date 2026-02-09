import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import SectionHead from "../common/SectionHead"

function CatalogSection({ catalog }) {
  return (
    <section className="section">
      <SectionHead
        title="เมนูยอดนิยม"
        kicker="เมนูที่ได้รับความนิยมในสัปดาห์นี้"
        action={
          <button className="text-button">
            View All
            <ArrowForwardIcon />
          </button>
        }
      />
      <div className="catalog-grid">
        {catalog.map((item) => (
          <article className="catalog-card" key={item.title}>
            <div className={`catalog-media ${item.media}`} aria-hidden="true" />
            <div className="catalog-body">
              <span className="tag">{item.tag}</span>
              <div className="card-meta">
                <span>{item.time}</span>
                <span>•</span>
                <span>{item.rating}</span>
              </div>
              <h3>{item.title}</h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default CatalogSection
