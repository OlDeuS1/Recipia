import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
function HeroSection() {
  return (
    <section
      className="relative rounded-2xl overflow-hidden h-[500px] md:h-[600px] grid items-end bg-black"
      aria-label="Hero"
    >
      {/* Hero Media Background */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-orange-500 via-yellow-400 to-green-500"
        aria-hidden="true"
      />
      {/* Hero Overlay */}
      <div className="absolute inset-0 bg-black/40" aria-hidden="true" />

      {/* Hero Content */}
      <div className="relative z-10 text-white px-6 md:px-12 py-20 md:py-24 max-w-3xl flex flex-col gap-6">
        <h1 className="font-display text-4xl md:text-6xl leading-tight m-0">
          ค้นพบสูตรอาหารใหม่ๆทุกวันกับ Recipia
        </h1>
        <p className="text-lg md:text-xl text-white/75 m-0">
          รวบรวมสูตรอาหารอร่อยจากทั่วโลก พร้อมคำแนะนำละเอียดทุกขั้นตอน
        </p>
        <div className="mt-3">
          <button className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-full font-semibold cursor-pointer transition-colors hover:bg-gray-100">
            Explore now
            <ArrowForwardIcon />
          </button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
