import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
function CTASection() {
  return (
    <section className="bg-gray-50 px-4 sm:px-6 md:px-8">
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl py-10 sm:py-14 md:py-16 px-4 sm:px-6 md:px-10 text-center shadow-xl w-full">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
          มาเป็นส่วนหนึ่งของ Recipia
        </h2>

        <p className="text-gray-300 mb-6 sm:mb-8 text-sm sm:text-base md:text-lg">
          พื้นที่สำหรับคนรักการทำอาหาร ที่รวบรวมสูตรเด็ดและเทคนิคใหม่ๆ
        </p>
        <Link to="/create">
          <button className="group inline-flex items-center gap-2 bg-white text-gray-900 px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 rounded-full font-semibold leading-none text-sm sm:text-base transition-all duration-200 hover:bg-gray-100 active:scale-95">
            <span className="flex items-center">เพิ่มสูตรใหม่</span>

            <span className="flex items-center justify-center">
              <ArrowRight
                size={18}
                strokeWidth={2.5}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </span>
          </button>
        </Link>
      </div>
    </section>
  );
}

export default CTASection;
