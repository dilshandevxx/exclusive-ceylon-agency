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
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <Link 
            href="/" 
            className={`text-2xl font-serif font-bold tracking-tight z-50 transition-colors ${scrolled || mobileMenuOpen ? 'text-stone-900' : 'text-white drop-shadow-md'}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Exclusive<span className="text-accent-gold-dark hover:text-accent-gold transition-colors">Ceylon</span>
          </Link>
          
          {/* Desktop Navigation */}
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
          
          <div className="hidden md:block">
            <Link href="/planner" className={`px-6 py-2.5 rounded-full text-sm font-medium hover:bg-accent-gold hover:text-white transition-all ${scrolled ? 'bg-stone-900 text-white shadow-sm hover:shadow-md' : 'bg-white/90 backdrop-blur-sm text-stone-900 hover:bg-white shadow-sm'}`}>
              Plan Your Journey
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button 
            className={`md:hidden p-2 rounded-md focus:outline-none z-50 transition-colors ${scrolled || mobileMenuOpen ? 'text-stone-900' : 'text-white drop-shadow-md'}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
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
