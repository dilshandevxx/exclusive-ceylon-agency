import Image from "next/image";
import Link from "next/link";

const journeys = [
  {
    id: "wildlife-safari",
    title: "Leopard's Trail Safari",
    duration: "7 Days / 6 Nights",
    description: "Embark on an exclusive private safari through Yala National Park with expert naturalists.",
    image: "/images/hero/srilanka_safari_leopard_1772679412914.png",
  },
  {
    id: "hill-country-retreat",
    title: "The Emerald Tea Escape",
    duration: "5 Days / 4 Nights",
    description: "Journey through the misty hills of Ella and Nuwara Eliya via a scenic luxury train ride.",
    image: "/images/hero/srilanka_ella_train_1772679391831.png",
  },
  {
    id: "coastal-bliss",
    title: "Southern Riviera Bliss",
    duration: "10 Days / 9 Nights",
    description: "Unwind on pristine private beaches, sail on luxury catamarans, and watch majestic whales.",
    image: "/images/hero/srilanka_mirissa_beach_1772679373412.png",
  },
];

export default function Journeys() {
  return (
    <section id="journeys" className="py-24 md:py-32 px-6 md:px-12 bg-stone-100 dark:bg-stone-900 border-y border-stone-200 dark:border-stone-800">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-accent-gold uppercase tracking-[0.2em] text-xs font-semibold mb-4 block animate-fade-in-up">
              Custom Itineraries
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-stone-900 dark:text-stone-50 leading-tight animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Bespoke Journeys
            </h2>
          </div>
          <Link href="/planner" className="text-sm border-b border-stone-900 dark:border-stone-50 pb-1 hover:text-accent-gold hover:border-accent-gold transition-colors font-medium uppercase tracking-wider animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Choose Your Journey
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {journeys.map((journey, i) => (
            <div key={journey.id} className="group relative overflow-hidden rounded-xl cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500 bg-white dark:bg-stone-950 flex flex-col h-full animate-fade-in-up" style={{ animationDelay: `${0.4 + i * 0.2}s` }}>
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={journey.image}
                  alt={journey.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
              <div className="p-8 flex-col flex flex-1 justify-between">
                <div>
                  <span className="text-accent-gold/90 text-[10px] md:text-xs font-semibold uppercase tracking-[0.2em] block mb-3">
                    {journey.duration}
                  </span>
                  <h3 className="text-2xl text-stone-900 dark:text-white font-serif font-medium leading-snug mb-4 group-hover:text-accent-gold transition-colors">
                    {journey.title}
                  </h3>
                  <p className="text-stone-600 dark:text-stone-400 font-light mb-8">
                    {journey.description}
                  </p>
                </div>
                <Link href={`/planner#${journey.id}`} className="inline-flex py-3 px-6 border border-stone-300 dark:border-stone-700 hover:border-stone-900 dark:hover:border-stone-300 rounded-full text-xs font-medium tracking-wide uppercase transition-all duration-300 self-start">
                  View Itinerary
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center animate-fade-in-up" style={{ animationDelay: '1s' }}>
          <Link href="/planner" className="inline-block bg-stone-900 dark:bg-stone-50 text-stone-50 dark:text-stone-900 hover:bg-accent-gold dark:hover:bg-accent-gold hover:text-white dark:hover:text-white px-10 py-5 rounded-full text-sm font-semibold tracking-wide uppercase transition-all duration-300">
            Choose Your Journey
          </Link>
        </div>
      </div>
    </section>
  );
}
