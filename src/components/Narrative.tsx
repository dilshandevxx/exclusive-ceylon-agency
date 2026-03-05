import Image from "next/image";

export default function Narrative() {
  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-12 bg-stone-50 dark:bg-stone-900 border-y border-stone-100 dark:border-stone-800 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1 lg:col-span-5 max-w-xl">
            <span className="text-accent-gold uppercase tracking-[0.3em] text-[10px] md:text-xs font-semibold mb-8 block animate-fade-in-up">
              The Artisan's Narrative
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-stone-900 dark:text-stone-50 leading-tight mb-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Crafting Memories Beyond the Ordinary
            </h2>
            <div className="space-y-8 text-stone-600 dark:text-stone-400 font-light text-lg md:text-xl leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <p>
                We believe that travel is an art form. It's the delicate balance of thrilling discovery and serene reprieve. At Exclusive Ceylon, we compose symphonies of experiences tailored exactly to your rhythm.
              </p>
              <p>
                From private seaplane transfers over the emerald canopy to exclusive dinners within ancient ruins, our artisans weave narratives that linger long after the journey ends.
              </p>
            </div>
            <button className="mt-12 group flex items-center gap-4 text-stone-900 dark:text-stone-50 text-sm font-medium tracking-widest uppercase transition-all duration-300 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <span className="border-b border-transparent group-hover:border-stone-900 dark:group-hover:border-stone-50 pb-1 transition-all duration-300">Read Our Story</span>
              <span className="text-accent-gold group-hover:translate-x-2 transition-transform duration-300">→</span>
            </button>
          </div>

          {/* Image Collage */}
          <div className="order-1 lg:order-2 lg:col-span-7 relative h-[500px] md:h-[700px] w-full animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="absolute top-0 right-0 w-[80%] h-[85%] rounded-[40px] overflow-hidden shadow-2xl z-0">
              <Image
                src="https://images.unsplash.com/photo-1588665985834-1c6cebe2b814?auto=format&fit=crop&q=80&w=1200"
                alt="Ceylon Tea Service"
                fill
                className="object-cover transition-transform duration-[2s] hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute bottom-5 left-0 w-[55%] h-[60%] rounded-[30px] overflow-hidden shadow-2xl border-[12px] border-stone-50 dark:border-stone-900 z-10 transition-transform duration-[2s] hover:-translate-y-4 hover:scale-105">
              <Image
                src="https://images.unsplash.com/photo-1625736300986-caab5ee80918?auto=format&fit=crop&q=80&w=800"
                alt="Elephant in Wild"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
