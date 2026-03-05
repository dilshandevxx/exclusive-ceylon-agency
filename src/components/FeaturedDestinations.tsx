import Image from "next/image";

const destinations = [
  {
    name: "Sigiriya Rock Fortress",
    region: "Cultural Triangle",
    image: "/images/hero/srilanka_sigiriya_luxury_1772679356220.png",
  },
  {
    name: "Nine Arch Bridge",
    region: "Ella, Hill Country",
    image: "/images/hero/srilanka_ella_train_1772679391831.png",
  },
  {
    name: "Mirissa Coast",
    region: "Southern Province",
    image: "/images/hero/srilanka_mirissa_beach_1772679373412.png",
  },
];

export default function FeaturedDestinations() {
  return (
    <section id="destinations" className="py-24 md:py-32 px-6 md:px-12 bg-white dark:bg-stone-950">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-accent-gold uppercase tracking-[0.2em] text-xs font-semibold mb-4 block animate-fade-in-up">
              Curated Masterpieces
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-stone-900 dark:text-stone-50 leading-tight animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Iconic Locations Await
            </h2>
          </div>
          <button className="text-sm border-b border-stone-900 dark:border-stone-50 pb-1 hover:text-accent-gold hover:border-accent-gold transition-colors font-medium uppercase tracking-wider animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            View All Destinations
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {destinations.map((dest, i) => (
            <div key={i} className="group relative overflow-hidden rounded-xl aspect-[3/4] cursor-pointer animate-fade-in-up shadow-sm hover:shadow-2xl transition-all duration-700" style={{ animationDelay: `${0.4 + i * 0.2}s` }}>
              <Image
                src={dest.image}
                alt={dest.name}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="absolute inset-0 border border-white/10 rounded-xl z-20 pointer-events-none" />

              <div className="absolute bottom-0 left-0 p-8 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-700 ease-out z-10">
                <span className="text-accent-gold/90 text-[10px] md:text-xs font-semibold uppercase tracking-[0.2em] block mb-3">
                  {dest.region}
                </span>
                <h3 className="text-2xl md:text-3xl text-white font-serif font-medium leading-snug">{dest.name}</h3>
                
                <div className="mt-4 pt-4 border-t border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                  <span className="text-xs text-white uppercase tracking-wider font-light flex items-center gap-2">
                    Explore Details
                    <span className="text-lg">→</span>
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
