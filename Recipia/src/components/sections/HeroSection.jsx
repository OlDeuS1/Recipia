import ArrowForwardIcon from "@mui/icons-material/ArrowForward"

function HeroSection() {
  return (
    <section className="hero hero-code" aria-label="Hero">
      <div className="hero-media" aria-hidden="true" />
      <div className="hero-overlay" aria-hidden="true" />
      <div className="hero-content hero-content-tight">
        <h1>ค้นพบสูตรอาหารใหม่ๆทุกวันกับ Recipia</h1>
        <p className="hero-copy">
          รวบรวมสูตรอาหารอร่อยจากทั่วโลก พร้อมคำแนะนำละเอียดทุกขั้นตอน
        </p>
        <div>
          <button className="primary-button hero-cta">
            Explore now
            <ArrowForwardIcon />
          </button>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
