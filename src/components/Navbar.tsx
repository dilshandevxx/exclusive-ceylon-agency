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
          ? "bg-white/95 backdrop-blur-md shadow-sm py-4 border-b border-stone-100"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link href="/" className={`text-2xl font-serif font-bold tracking-tight z-50 transition-colors ${scrolled ? 'text-stone-900' : 'text-white drop-shadow-md'}`}>
          Exclusive<span className="text-accent-gold-dark hover:text-accent-gold transition-colors">Ceylon</span>
        </Link>
        <div className={`hidden md:flex space-x-8 text-sm font-medium tracking-wide uppercase transition-colors ${scrolled ? 'text-stone-600' : 'text-stone-100 drop-shadow-md'}`}>
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
        <button className={`hidden md:block px-6 py-2 rounded-full text-sm font-medium hover:bg-accent-gold hover:text-white transition-all ${scrolled ? 'bg-stone-900 text-white shadow-sm hover:shadow-md' : 'bg-white/90 backdrop-blur-sm text-stone-900 hover:bg-white shadow-sm'}`}>
          Plan Your Journey
        </button>
      </div>
    </nav>
  );
}
