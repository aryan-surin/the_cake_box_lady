export default function FounderStory() {
    return (
      <section className="py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <p className="uppercase tracking-[0.3em] text-sm text-[#C97B63] mb-4">
              Our Story
            </p>
  
            <h2 className="text-5xl md:text-7xl font-serif leading-[1] mb-8">
              Baked with
              <span className="block italic text-[#C97B63]">
                Heart & Passion
              </span>
            </h2>
  
            <p className="text-lg leading-relaxed text-[#6E4B3A] mb-6">
              The Cake Box Lady was born from a passion for handcrafted
              celebrations and meaningful moments shared with loved ones.
            </p>
  
            <p className="text-lg leading-relaxed text-[#6E4B3A]">
              Every cake is designed with warmth, artistry, and emotional care —
              turning celebrations into unforgettable memories.
            </p>
          </div>
  
          <div>
            <img
              src="https://images.unsplash.com/photo-1486427944299-d1955d23e34d?q=80&w=1400&auto=format&fit=crop"
              alt="Founder"
              className="rounded-[40px] shadow-2xl"
            />
          </div>
        </div>
      </section>
    )
  }