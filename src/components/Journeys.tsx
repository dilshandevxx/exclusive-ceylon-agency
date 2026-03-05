"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut" as const } 
  },
};

export default function Journeys() {
  return (
    <section id="journeys" className="py-24 md:py-32 px-6 md:px-12 bg-white border-y border-stone-100">
      <div className="container mx-auto max-w-7xl">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
        >
          <div className="max-w-xl">
            <motion.span variants={itemVariants} className="text-accent-gold uppercase tracking-[0.2em] text-xs font-semibold mb-4 block">
              Custom Itineraries
            </motion.span>
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-serif text-stone-900 leading-tight">
              Bespoke Journeys
            </motion.h2>
          </div>
          <motion.div variants={itemVariants}>
            <Link href="/planner" className="text-sm text-stone-900 border-b-2 border-transparent hover:border-accent-gold hover:text-accent-gold pb-1 transition-all duration-300 font-medium uppercase tracking-wider">
              Choose Your Journey
            </Link>
          </motion.div>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
        >
          {journeys.map((journey) => (
            <motion.div variants={itemVariants} key={journey.id} className="group relative overflow-hidden rounded-xl cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500 bg-stone-50 border border-stone-100 flex flex-col h-full">
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
                  <h3 className="text-2xl text-stone-900 font-serif font-medium leading-snug mb-4 group-hover:text-accent-gold transition-colors">
                    {journey.title}
                  </h3>
                  <p className="text-stone-500 font-light mb-8">
                    {journey.description}
                  </p>
                </div>
                <Link href={`/planner#${journey.id}`} className="inline-flex py-3 px-6 border border-stone-200 hover:border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white rounded-full text-xs font-medium tracking-wide uppercase transition-all duration-300 self-start">
                  View Itinerary
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="mt-16 text-center"
        >
          <motion.div variants={itemVariants}>
            <Link href="/planner" className="inline-block bg-stone-900 text-white hover:bg-accent-gold hover:text-white px-10 py-5 rounded-full text-sm font-semibold tracking-wide uppercase transition-all duration-300 shadow-lg hover:shadow-xl">
              Start Planning
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
