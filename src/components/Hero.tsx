"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const backgroundImages = [
  "/images/hero/srilanka_sigiriya_luxury_1772679356220.png",
  "/images/hero/srilanka_mirissa_beach_1772679373412.png",
  "/images/hero/srilanka_ella_train_1772679391831.png",
  "/images/hero/srilanka_safari_leopard_1772679412914.png"
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 6000); // Change image every 6 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen min-h-[600px] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image Slideshow */}
      {backgroundImages.map((src, index) => (
        <div 
          key={src}
          className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={src}
            alt={`Sri Lanka landscape ${index + 1}`}
            fill
            priority={index === 0} // Only prioritize the first image for LCP
            className={`object-cover ${index === currentImageIndex ? 'animate-slow-pan' : ''}`}
            sizes="100vw"
          />
        </div>
      ))}

      {/* Gradient Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/70 z-10" />

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto flex flex-col items-center mt-20">
        <span className="text-accent-gold uppercase tracking-[0.2em] text-sm md:text-base font-semibold mb-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Discover the Undiscovered
        </span>
        <h1 className="text-5xl md:text-7xl lg:text-8xl text-white font-serif leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          Timeless Beauty of <br />
          <span className="italic font-light">Ceylon</span>
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl font-light text-balance animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          Embark on a curated journey through pristine beaches, misty mountains, and ancient heritage. Experience luxury travel reinvented.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <Link href="/planner" className="bg-accent-gold hover:bg-white text-stone-950 hover:text-stone-950 px-8 py-4 rounded-full text-sm font-semibold tracking-wide uppercase transition-all duration-300 text-center">
            Plan Your Trip
          </Link>
          <Link href="/shop" className="glass-effect text-white hover:bg-white/20 px-8 py-4 rounded-full text-sm font-semibold tracking-wide uppercase transition-all duration-300 backdrop-blur-md border border-white/20 flex items-center justify-center">
            Visit Boutique
          </Link>
        </div>
      </div>

      {/* Pagination / Slidebar at the bottom */}
      <div className="absolute bottom-10 z-20 flex space-x-3 items-center">
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
