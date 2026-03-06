"use client";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowUpRight, Compass, Map, Sun } from "lucide-react";

const itineraries = [
  {
    id: "wildlife-safari",
    title: "Leopard&apos;s Trail Safari",
    tagline: "Into the Heart of the Wild",
    duration: "7 Days / 6 Nights",
    category: "Wildlife",
    icon: Compass,
    highlights: ["Private Jeep Safaris", "Glamping in Yala", "Night Walks", "Elephant Gatherings"],
    image: "/images/hero/srilanka_safari_leopard_1772679412914.png",
    price: "From $3,200 pp",
    cols: "md:col-span-8",
  },
  {
    id: "hill-country-retreat",
    title: "The Emerald Tea Escape",
    tagline: "Serenity Above the Clouds",
    duration: "5 Days / 4 Nights",
    category: "Wellness",
    icon: Map,
    highlights: ["Scenic Train Journey", "Tea Tasting Sessions", "Mountain Hikes"],
    image: "/images/hero/srilanka_ella_train_1772679391831.png",
    price: "From $2,400 pp",
    cols: "md:col-span-4",
  },
  {
    id: "coastal-bliss",
    title: "Southern Riviera Bliss",
    tagline: "Where the Ocean Meets Luxury",
    duration: "10 Days / 9 Nights",
    category: "Coastal",
    icon: Sun,
    highlights: ["Private Beach Villas", "Whale Watching Yacht", "Surfing Lessons", "Galle Fort Tour"],
    image: "/images/hero/srilanka_mirissa_beach_1772679373412.png",
    price: "From $4,500 pp",
    cols: "md:col-span-12",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
};

export default function Planner() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Editorial Header */}
      <section className="pt-48 pb-24 px-6 md:px-12 bg-stone-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-stone-200 to-transparent"></div>
        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="flex flex-col md:flex-row gap-12 justify-between items-end"
          >
            <div className="max-w-3xl">
              <motion.span variants={itemVariants} className="flex items-center gap-3 text-accent-gold uppercase tracking-[0.3em] text-[10px] md:text-xs font-semibold mb-6">
                <span className="w-8 h-[1px] bg-accent-gold"></span>
                Curated Experiences
              </motion.span>
              <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-[80px] font-serif text-stone-900 leading-[1.1] tracking-tight">
                Journeys of <br />
                <span className="text-stone-400 italic font-light">Distinction</span>
              </motion.h1>
            </div>
            <motion.div variants={itemVariants} className="max-w-sm pb-2">
              <p className="text-stone-500 font-light text-base md:text-lg leading-relaxed border-l border-stone-200 pl-6">
                Browse our masterfully crafted itineraries or connect with an artisan to design a completely bespoke Ceylon adventure.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Asymmetrical Grid */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="container mx-auto max-w-7xl">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8"
          >
            {itineraries.map((itinerary) => (
              <motion.div 
                key={itinerary.id} 
                variants={itemVariants}
                className={`${itinerary.cols} group relative h-[500px] md:h-[600px] w-full rounded-2xl overflow-hidden cursor-pointer`}
              >
                {/* Background Image & Overlay */}
                <Image
                  src={itinerary.image}
                  alt={itinerary.title}
                  fill
                  className="object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-900/20 to-transparent transition-opacity duration-500 group-hover:opacity-80" />

                {/* Top Tags */}
                <div className="absolute top-6 left-6 right-6 flex justify-between items-start z-20">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full flex items-center gap-2">
                    <itinerary.icon size={14} className="text-white" />
                    <span className="text-white text-[10px] font-semibold uppercase tracking-widest">{itinerary.category}</span>
                  </div>
                  <div className="bg-stone-900/40 backdrop-blur-md border border-white/10 w-10 h-10 rounded-full flex items-center justify-center opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    <ArrowUpRight size={18} className="text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10 z-20 flex flex-col justify-end translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                  <div className="flex items-center gap-4 mb-4 opacity-80">
                    <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-accent-gold">{itinerary.duration}</span>
                    <span className="w-8 h-[1px] bg-white/30"></span>
                    <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/80">{itinerary.price}</span>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white mb-2 leading-tight">
                    {itinerary.title}
                  </h2>
                  <p className="text-stone-300 font-light text-lg mb-8 opacity-100 group-hover:opacity-0 transition-opacity duration-300 absolute bottom-0 translate-y-12">
                    {itinerary.tagline}
                  </p>

                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 mb-2">
                    <ul className="flex flex-wrap gap-2">
                      {itinerary.highlights.slice(0, 3).map((highlight, i) => (
                        <li key={i} className="text-[11px] text-white/80 tracking-wide uppercase border border-white/20 rounded-full px-3 py-1 bg-white/5 backdrop-blur-sm">
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Tailored Request CTA */}
      <section className="py-32 px-6 md:px-12 bg-stone-950 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero/srilanka_wild_elephant.png')] bg-cover bg-center opacity-20 mix-blend-luminosity"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/80 to-stone-950/40"></div>
        
        <div className="container mx-auto max-w-2xl relative z-10">
          <span className="text-accent-gold uppercase tracking-[0.3em] text-[10px] md:text-xs font-semibold mb-6 block">
            The Ultimate Luxury
          </span>
          <h2 className="text-4xl md:text-6xl font-serif text-white leading-tight mb-8">
            Blank Canvas
          </h2>
          <p className="text-stone-400 font-light text-lg md:text-xl leading-relaxed mb-12 max-w-xl mx-auto">
            Entrust our master travel artisans to design a journey from scratch, entirely woven around your specific desires and rhythm.
          </p>
          <button className="bg-transparent border border-white/30 text-white hover:bg-white hover:text-stone-950 px-10 py-5 rounded-full text-sm font-semibold tracking-[0.2em] uppercase transition-all duration-500 shadow-2xl backdrop-blur-sm">
            Begin the Dialogue
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
