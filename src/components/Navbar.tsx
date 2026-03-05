"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled || mobileMenuOpen
            ? "bg-white/95 backdrop-blur-md shadow-sm py-4 border-b border-stone-100"
            : "bg-transparent py-6"
        }`}
      >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center md:grid md:grid-cols-3 md:items-center">
        {/* Left Links (Desktop) */}
        <div className={`hidden md:flex justify-start space-x-8 text-[11px] font-semibold tracking-[0.2em] uppercase transition-colors ${scrolled ? 'text-stone-500' : 'text-white/90 drop-shadow-md'}`}>
          <Link href="/planner" className="hover:text-accent-gold transition-colors relative group py-2">
            Journeys
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-accent-gold transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/#about" className="hover:text-accent-gold transition-colors relative group py-2">
            Journal
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-accent-gold transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>

        {/* Center Logo */}
        <div className="flex justify-start md:justify-center z-50">
          <Link 
            href="/" 
            className={`text-2xl md:text-3xl font-serif font-bold tracking-tight transition-colors ${scrolled || mobileMenuOpen ? 'text-stone-900' : 'text-white drop-shadow-md'}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Exclusive<span className="text-accent-gold-dark hover:text-accent-gold transition-colors">Ceylon</span>
          </Link>
        </div>
        
        {/* Right Links (Desktop) */}
        <div className={`hidden md:flex items-center justify-end space-x-8 text-[11px] font-semibold tracking-[0.2em] uppercase transition-colors ${scrolled ? 'text-stone-500' : 'text-white/90 drop-shadow-md'}`}>
          <Link href="/shop" className="hover:text-accent-gold transition-colors relative group py-2">
            Shop
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-accent-gold transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/planner" className={`px-7 py-3 rounded-full transition-all duration-300 ${scrolled ? 'bg-stone-900 text-white shadow-sm hover:bg-accent-gold hover:shadow-md' : 'bg-white/10 backdrop-blur-md border border-white/30 text-white hover:bg-white hover:text-stone-900 shadow-sm'}`}>
            Plan Your Journey
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex md:hidden justify-end z-50">
          <button 
            className={`p-2 focus:outline-none transition-colors ${scrolled || mobileMenuOpen ? 'text-stone-900' : 'text-white drop-shadow-md'}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 pb-6 flex flex-col shadow-xl md:hidden h-[100dvh]"
          >
            <div className="flex flex-col space-y-8 mt-10 text-center">
              <Link 
                href="/planner" 
                className="text-2xl font-medium tracking-wide uppercase text-stone-900 hover:text-accent-gold transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Journeys
              </Link>
              <Link 
                href="/#about" 
                className="text-2xl font-medium tracking-wide uppercase text-stone-900 hover:text-accent-gold transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Journal
              </Link>
              <Link 
                href="/shop" 
                className="text-2xl font-medium tracking-wide uppercase text-stone-900 hover:text-accent-gold transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Shop
              </Link>
              
              <div className="pt-8 border-t border-stone-100 flex justify-center mt-auto">
                <Link 
                  href="/planner" 
                  className="bg-stone-900 text-white px-8 py-4 w-full rounded-full text-lg font-medium hover:bg-accent-gold transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Plan Your Journey
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
