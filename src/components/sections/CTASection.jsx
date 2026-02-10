function CTASection() {
  return (
    <section className="bg-gray-900 text-white rounded-3xl px-6 md:px-16 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div>
        <p className="text-white/65 text-sm mb-1">Join the kitchen</p>
        <h2 className="m-0 mb-2 font-display text-3xl md:text-4xl">
          Get weekly menus, tips, and chef secrets.
        </h2>
        <p className="m-0 text-white/75">
          Subscribe to receive curated recipes and seasonal cooking guides
          straight to your inbox.
        </p>
      </div>
      <button className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-5 py-2 rounded-full font-semibold cursor-pointer transition-colors hover:bg-gray-100">
        Subscribe
      </button>
    </section>
  );
}

export default CTASection
