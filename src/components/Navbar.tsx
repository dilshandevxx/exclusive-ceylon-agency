"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-black/90 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link href="/" className="text-2xl font-serif font-bold tracking-tight text-white mix-blend-difference z-50">
          Exclusive<span className="text-accent-gold-dark dark:text-accent-gold">Ceylon</span>
        </Link>
        <div className={`hidden md:flex space-x-8 text-sm font-medium tracking-wide uppercase ${scrolled ? 'text-stone-900 dark:text-stone-100' : 'text-stone-100'}`}>
          <Link href="/planner" className="hover:text-accent-gold transition-colors">
            Journeys
          </Link>
          <Link href="/#about" className="hover:text-accent-gold transition-colors">
            Journal
          </Link>
          <Link href="/shop" className="hover:text-accent-gold transition-colors">
            Shop
          </Link>
        </div>
        <button className={`hidden md:block px-6 py-2 rounded-full text-sm font-medium hover:bg-accent-gold dark:hover:bg-accent-gold hover:text-white transition-colors ${scrolled ? 'bg-stone-900 text-stone-50 dark:bg-stone-50 dark:text-stone-900' : 'bg-white text-stone-900'}`}>
          Plan Your Journey
        </button>
      </div>
    </nav>
  );
}
