"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";

const backgroundImages = [
  "/images/hero/srilanka_ella_train_1772679391831.png",
  "/images/hero/srilanka_sigiriya_luxury_1772679356220.png",
  "/images/hero/srilanka_mirissa_beach_1772679373412.png",
  "/images/hero/srilanka_safari_leopard_1772679412914.png"
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.5,
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

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 6000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen min-h-[700px] w-full flex items-center justify-center overflow-hidden font-sans">
      {/* Background Image Slideshow */}
      <AnimatePresence>
        {backgroundImages.map((src, index) => (
          index === currentImageIndex && (
            <motion.div 
              key={src}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute inset-0 z-0"
            >
              <Image
                src={src}
                alt={`Sri Lanka landscape ${index + 1}`}
                fill
                priority={index === 0} 
                className="object-cover"
                sizes="100vw"
              />
            </motion.div>
          )
        ))}
      </AnimatePresence>

      {/* Gradient Overlay - Darker overall to make text pop, like the reference */}
      <div className="absolute inset-0 bg-gradient-to-r from-stone-950/80 via-stone-900/50 to-stone-950/50 z-10" />

      {/* Content */}
      <div className="relative z-20 container mx-auto max-w-7xl px-6 md:px-12 h-full flex flex-col justify-center">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end pt-20"
        >
          {/* Left Column - Text */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <motion.h1 variants={itemVariants} className="text-5xl sm:text-6xl md:text-7xl lg:text-[90px] text-white font-bold leading-[1.1] mb-12 tracking-tight">
              Discover<br />
              <span className="text-stone-300">Ceylon&apos;s</span><br />
              Hidden Trails
            </motion.h1>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-8 sm:gap-12 items-start sm:items-center w-full max-w-2xl">
              <p className="text-sm sm:text-base text-stone-200 font-light leading-relaxed flex-1">
                Explore our collection of secluded sanctuaries crafted for restorative rest. Disconnect from the daily grind and immerse yourself in a journey of self-discovery.
              </p>
              
              <div className="flex flex-col gap-1 sm:min-w-[150px]">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-accent-gold fill-accent-gold" />
                  <span className="text-2xl font-semibold text-white">4.5</span>
                </div>
                <span className="text-stone-400 text-sm font-light">from 1,100+ stays</span>
              </div>
            </motion.div>
          </div>

          {/* Only Left Column Text remains */}
        </motion.div>
      </div>

      {/* Pagination / Slidebar at the bottom */}
      <div className="absolute bottom-10 z-20 flex space-x-3 items-center justify-center w-full">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`transition-all duration-500 rounded-full ${
              index === currentImageIndex 
                ? "w-10 h-1.5 bg-accent-gold" 
                : "w-2 h-1.5 bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
