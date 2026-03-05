"use client";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const itineraries = [
  {
    id: "wildlife-safari",
    title: "Leopard's Trail Safari",
    tagline: "Into the Heart of the Wild",
    duration: "7 Days / 6 Nights",
    highlights: ["Private Jeep Safaris", "Glamping in Yala", "Night Walks", "Elephant Gatherings"],
    image: "/images/hero/srilanka_safari_leopard_1772679412914.png",
    price: "From $3,200 pp",
  },
  {
    id: "hill-country-retreat",
    title: "The Emerald Tea Escape",
    tagline: "Serenity Above the Clouds",
    duration: "5 Days / 4 Nights",
    highlights: ["Scenic Train Journey", "Tea Tasting Sessions", "Mountain Hikes", "Colonial Luxury Stays"],
    image: "/images/hero/srilanka_ella_train_1772679391831.png",
    price: "From $2,400 pp",
  },
  {
    id: "coastal-bliss",
    title: "Southern Riviera Bliss",
    tagline: "Where the Ocean Meets Luxury",
    duration: "10 Days / 9 Nights",
    highlights: ["Private Beach Villas", "Whale Watching Yacht", "Surfing Lessons", "Galle Fort Tour"],
    image: "/images/hero/srilanka_mirissa_beach_1772679373412.png",
    price: "From $4,500 pp",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 1, ease: "easeOut" as const } 
  },
};

export default function Planner() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Planner Header */}
      <section className="pt-40 pb-20 px-6 md:px-12 bg-stone-50 border-b border-stone-200 relative z-10 w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-stone-100 via-stone-50 to-white z-10" />
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="relative z-20 text-center max-w-3xl mx-auto"
        >
          <motion.span variants={itemVariants} className="text-accent-gold uppercase tracking-[0.3em] text-xs font-semibold mb-6 block">
            Your Bespoke Adventure
          </motion.span>
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-serif text-stone-900 leading-tight mb-8">
            Choose Your Journey
          </motion.h1>
          <motion.p variants={itemVariants} className="text-stone-500 font-light text-lg md:text-xl leading-relaxed">
            Browse our carefully curated itineraries or connect with an artisan to craft a completely personalized Ceylon experience.
          </motion.p>
        </motion.div>
      </section>

      {/* Itineraries List */}
      <section className="py-24 px-6 md:px-12">
        <div className="container mx-auto max-w-6xl space-y-24">
          {itineraries.map((itinerary, index) => (
            <div key={itinerary.id} id={itinerary.id} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center animate-fade-in-up" style={{ animationDelay: `${0.2 * index}s` }}>
              <div className={`relative h-[400px] md:h-[500px] w-full rounded-2xl overflow-hidden shadow-xl ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                <Image
                  src={itinerary.image}
                  alt={itinerary.title}
                  fill
                  className="object-cover transition-transform duration-1000 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className={`${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-xs font-medium uppercase tracking-widest text-accent-gold">{itinerary.duration}</span>
                  <span className="w-12 h-px bg-stone-200"></span>
                  <span className="text-xs font-medium uppercase tracking-widest text-stone-500">{itinerary.price}</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-serif text-stone-900 mb-3">{itinerary.title}</h2>
                <p className="text-lg text-stone-500 font-light italic mb-8">{itinerary.tagline}</p>
                
                <div className="mb-10">
                  <h4 className="text-sm font-medium uppercase tracking-widest text-stone-900 mb-4">Journey Highlights</h4>
                  <ul className="space-y-3">
                    {itinerary.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-3 text-stone-600 font-light text-sm">
                        <span className="text-accent-gold mt-1">✦</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button className="bg-stone-900 text-white hover:bg-accent-gold hover:text-white px-8 py-4 rounded-full text-sm font-medium tracking-wider uppercase transition-all duration-300 shadow-md">
                  Inquire Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Custom Request CTA */}
      <section className="py-24 px-6 md:px-12 bg-stone-50 border-t border-stone-200 text-center">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-serif text-stone-900 mb-6">Seeking Something Unique?</h2>
          <p className="text-stone-500 font-light mb-10 max-w-2xl mx-auto">
            Our travel artisans specialize in designing completely custom itineraries from scratch. Let us know your dreams, and we will manifest them.
          </p>
          <button className="border border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white px-8 py-4 rounded-full text-sm font-medium tracking-wider uppercase transition-colors">
            Contact an Artisan
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
