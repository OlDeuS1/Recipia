function CTASection() {
  return (
    <section className="bg-gray-50">
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl py-16 px-6 text-center shadow-xl">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          มาเป็นส่วนหนึ่งของ Recipia
        </h2>

        <p className="text-gray-300 mb-8 text-base md:text-lg">
          พื้นที่สำหรับคนรักการทำอาหาร ที่รวบรวมสูตรเด็ดและเทคนิคใหม่ๆ
        </p>

        <button className="bg-white text-slate-900 px-6 py-3 rounded-full font-medium hover:scale-105 transition-all duration-200 shadow-md">
          เพิ่มสูตรใหม่ →
        </button>
      </div>
    </section>
  );
}

export default CTASection
