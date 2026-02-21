import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <section
      className="relative rounded-2xl overflow-hidden h-[500px] md:h-[600px] grid items-end"
      aria-label="Hero"
    >
      <img
        src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Delicious food"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 text-white px-6 md:px-12 py-20 md:py-24 max-w-3xl flex flex-col gap-6">
        <h1 className="font-display text-4xl md:text-6xl leading-tight m-0">
          ค้นพบสูตรอาหารใหม่ๆทุกวันกับ Recipia
        </h1>

        <p className="text-lg md:text-xl text-white/80 m-0">
          รวบรวมสูตรอาหารอร่อยจากทั่วโลก พร้อมคำแนะนำละเอียดทุกขั้นตอน
        </p>
        <div className="mt-3">
          <Link to="/recipe">
            <button className="group inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-full font-semibold leading-none transition-all duration-200 hover:bg-gray-100 active:scale-95">
              เริ่มค้นหาสูตร
              <ArrowRight
                size={18}
                strokeWidth={2.5}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
