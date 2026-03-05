"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 1, ease: [0.2, 0.8, 0.2, 1] as const } 
  }
};

const imageVariant = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { duration: 1.5, ease: "easeOut" as const } 
  }
};

export default function Narrative() {
  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-12 bg-white border-y border-stone-100 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ staggerChildren: 0.2 }}
            className="order-2 lg:order-1 lg:col-span-5 max-w-xl"
          >
             <motion.span variants={fadeUpVariant} className="text-accent-gold uppercase tracking-[0.3em] text-[10px] md:text-xs font-semibold mb-8 block">
              The Artisan&apos;s Narrative
             </motion.span>
             <motion.h2 variants={fadeUpVariant} className="text-4xl md:text-5xl lg:text-6xl font-serif text-stone-900 leading-tight mb-10">
              Crafting Memories Beyond the Ordinary
             </motion.h2>
             <motion.div variants={fadeUpVariant} className="space-y-8 text-stone-600 font-light text-lg md:text-xl leading-relaxed">
              <p>
                We believe that travel is an art form. It&apos;s the delicate balance of thrilling discovery and serene reprieve. At Exclusive Ceylon, we compose symphonies of experiences tailored exactly to your rhythm.
              </p>
              <p>
                 From private seaplane transfers over the emerald canopy to exclusive dinners within ancient ruins, our artisans weave narratives that linger long after the journey ends.
              </p>
            </motion.div>
             <motion.button variants={fadeUpVariant} className="mt-12 group flex items-center gap-4 text-stone-900 text-sm font-medium tracking-widest uppercase transition-all duration-300">
               <span className="border-b border-transparent group-hover:border-stone-900 pb-1 transition-all duration-300">Read Our Story</span>
               <span className="text-accent-gold group-hover:translate-x-2 transition-transform duration-300">→</span>
             </motion.button>
          </motion.div>

          {/* Image Collage */}
          <div className="order-1 lg:order-2 lg:col-span-7 relative h-[500px] md:h-[700px] w-full">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={imageVariant}
              className="absolute top-0 right-0 w-[80%] h-[85%] rounded-[40px] overflow-hidden shadow-xl z-0"
            >
              <Image
                src="/images/narrative/srilanka_luxury_tea_service.png"
                alt="Ceylon Luxury Tea Service"
                fill
                className="object-cover transition-transform duration-[2s] hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={imageVariant}
              transition={{ delay: 0.3, duration: 1.5 }}
              className="absolute bottom-5 left-0 w-[55%] h-[60%] rounded-[30px] overflow-hidden shadow-2xl border-[12px] border-white z-10 transition-transform duration-[2s] hover:-translate-y-4 hover:scale-105"
            >
              <Image
                src="/images/narrative/srilanka_wild_elephant.png"
                alt="Wild Elephant in Sri Lanka"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
