"use client";
import { motion } from "framer-motion";
import {
  PawPrint,
  Landmark,
  Flower2,
  Mountain,
  Map,
  Sparkles,
  UtensilsCrossed,
  Hotel,
  ShoppingBag
} from "lucide-react";

// For Thrills we'll use Map instead of Compass to ensure we have a different icon, since Compass sometimes looks too similar to others, or we use Activity, but Map is good. Actually Map is good for Scenic places if Mountain is not there, let's just use Map for Thrills or Compass. 
// Oh I see I used 'Map' in the imports above. Let's stick with beautiful icons:

const amenities = [
  { id: "wildlife", name: "Wild Life", icon: PawPrint },
  { id: "heritage", name: "Heritage", icon: Landmark },
  { id: "wellness", name: "Wellness", icon: Flower2 },
  { id: "scenic", name: "Scenic Places", icon: Mountain },
  { id: "thrills", name: "Thrills", icon: Map },
  { id: "festival", name: "Festival", icon: Sparkles },
  { id: "foods", name: "Traditional Foods", icon: UtensilsCrossed },
  { id: "hotels", name: "Boutique Hotels", icon: Hotel },
  { id: "shopping", name: "Shopping", icon: ShoppingBag },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut" } 
  },
};

export default function Amenities() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-white border-y border-stone-100">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-accent-gold uppercase tracking-[0.3em] text-[10px] md:text-xs font-semibold mb-6 block"
          >
            Distinctive Offerings
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-stone-900 leading-tight mb-8"
          >
            Amenities & Facilities
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-stone-500 font-light text-lg md:text-xl leading-relaxed max-w-2xl mx-auto"
          >
            If you are looking for a relaxing, refreshing and rejuvenating experience altogether, we offer all of that under one roof.
          </motion.p>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {amenities.map((item) => (
            <motion.div 
              key={item.id} 
              variants={itemVariants}
              className="flex flex-col items-center justify-center p-10 bg-stone-50 rounded-2xl border border-stone-100 hover:border-accent-gold/50 shadow-sm hover:shadow-xl transition-all duration-500 group cursor-pointer"
            >
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-sm mb-6 group-hover:-translate-y-2 transition-transform duration-500 border border-stone-100 group-hover:border-accent-gold/20">
                <item.icon strokeWidth={1.2} size={28} className="text-stone-700 group-hover:text-accent-gold transition-colors duration-500" />
              </div>
              <h3 className="text-stone-900 font-serif text-lg tracking-wide group-hover:text-accent-gold transition-colors duration-500">{item.name}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
