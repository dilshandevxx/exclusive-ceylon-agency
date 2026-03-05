export default function Whispers() {
  const testimonials = [
    {
      quote: "A perfectly articulated journey. The artisan's attention to detail made every dawn more breathtaking than the last.",
      author: "Eleanor V.",
      location: "London, UK",
    },
    {
      quote: "From the secluded tea trails to the untouched eastern coast, Exclusive Ceylon paints an unforgettable masterpiece of luxury.",
      author: "Marcus T.",
      location: "New York, USA",
    },
    {
      quote: "The seamless fusion of heritage and high-end comfort. A truly bespoke experience that forever changed how I travel.",
      author: "Sofia L.",
      location: "Milan, Italy",
    },
  ];

  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-stone-50 border-y border-stone-100 relative overflow-hidden">
      {/* Decorative large quotes */}
      <div className="absolute top-10 right-10 md:top-20 md:right-32 text-[200px] text-stone-200 font-serif leading-none select-none opacity-50 z-0">
        &quot;
      </div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center md:text-left mb-16">
          <span className="text-accent-gold uppercase tracking-[0.2em] text-xs font-semibold mb-4 block">
            Whispers
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-stone-900 leading-tight">
            From Our Guests
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {testimonials.map((t, idx) => (
            <div 
              key={idx} 
              className="p-8 md:p-10 bg-white rounded-2xl shadow-sm border border-stone-100 flex flex-col justify-between hover:shadow-xl hover:-translate-y-2 transition-all duration-500"
            >
              <p className="text-stone-600 font-light text-lg italic leading-relaxed mb-10">
                &quot;{t.quote}&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center font-serif text-stone-900">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-medium text-stone-900 text-sm">
                    {t.author}
                  </h4>
                  <span className="text-xs text-stone-500 uppercase tracking-wider">
                    {t.location}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
