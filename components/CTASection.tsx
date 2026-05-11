export default function CTASection() {
    return (
      <section className="py-32 px-6 md:px-12 bg-[#C97B63] text-white text-center">
        <div className="max-w-4xl mx-auto">
          <p className="uppercase tracking-[0.3em] text-sm mb-4">
            Same Day Orders Available
          </p>
  
          <h2 className="text-5xl md:text-7xl font-serif leading-[1] mb-8">
            Let’s Create Your
            <span className="block italic">
              Next Sweet Memory
            </span>
          </h2>
  
          <p className="text-xl text-white/90 mb-10 leading-relaxed">
            Handcrafted cakes designed for birthdays, weddings, and every special
            moment in between.
          </p>
  
          <button className="bg-white text-[#C97B63] px-10 py-5 rounded-full hover:scale-105 transition duration-300">
            Order on WhatsApp
          </button>
        </div>
      </section>
    )
  }