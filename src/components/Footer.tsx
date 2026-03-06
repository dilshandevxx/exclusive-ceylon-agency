import { Instagram, Facebook, Twitter, MapPin, Phone, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-stone-950 text-stone-400 py-20 px-6 md:px-12 border-t border-stone-800 overflow-hidden mt-auto">
      {/* Decorative accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent-gold/50 to-transparent opacity-50"></div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          <div className="col-span-1 md:col-span-4">
            <Link href="/" className="inline-block mb-6 transition-transform hover:scale-[1.02]">
              <div className="relative w-[150px] h-[45px] md:w-[180px] md:h-[55px] mix-blend-screen opacity-90">
                <Image 
                  src="/images/logo/1000149818.webp" 
                  alt="Exclusive Ceylon Logo" 
                  fill 
                  className="object-contain object-left"
                />
              </div>
            </Link>
            <p className="max-w-md font-light text-sm leading-relaxed mb-8 block w-full text-stone-400">
              Curating unparalleled luxury experiences across the resplendent isle of Sri Lanka. Discover the extraordinary with our dedicated travel artisans, turning every journey into a masterpiece.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center hover:bg-accent-gold hover:text-white hover:border-accent-gold text-stone-300 transition-all duration-300 shadow-sm">
                <Instagram size={18} strokeWidth={1.5} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center hover:bg-accent-gold hover:text-white hover:border-accent-gold text-stone-300 transition-all duration-300 shadow-sm">
                <Facebook size={18} strokeWidth={1.5} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center hover:bg-accent-gold hover:text-white hover:border-accent-gold text-stone-300 transition-all duration-300 shadow-sm">
                <Twitter size={18} strokeWidth={1.5} />
              </a>
            </div>
          </div>
          
          <div className="col-span-1 md:col-span-2 md:col-start-6">
            <h4 className="text-white font-serif font-medium mb-6 uppercase tracking-widest text-xs">Journeys</h4>
            <ul className="space-y-4 text-sm font-light">
              <li><a href="#" className="hover:text-accent-gold transition-colors inline-block hover:translate-x-1 duration-300">Wildlife Safaris</a></li>
              <li><a href="#" className="hover:text-accent-gold transition-colors inline-block hover:translate-x-1 duration-300">Heritage Tours</a></li>
              <li><a href="#" className="hover:text-accent-gold transition-colors inline-block hover:translate-x-1 duration-300">Wellness Retreats</a></li>
              <li><a href="#" className="hover:text-accent-gold transition-colors inline-block hover:translate-x-1 duration-300">Coastal Escapes</a></li>
              <li><a href="#" className="hover:text-accent-gold transition-colors inline-block hover:translate-x-1 duration-300">Boutique Shopping</a></li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-2">
            <h4 className="text-white font-serif font-medium mb-6 uppercase tracking-widest text-xs">Company</h4>
            <ul className="space-y-4 text-sm font-light">
              <li><a href="#" className="hover:text-accent-gold transition-colors inline-block hover:translate-x-1 duration-300">About Us</a></li>
              <li><a href="#" className="hover:text-accent-gold transition-colors inline-block hover:translate-x-1 duration-300">Our Artisans</a></li>
              <li><a href="#" className="hover:text-accent-gold transition-colors inline-block hover:translate-x-1 duration-300">Travel Journal</a></li>
              <li><a href="#" className="hover:text-accent-gold transition-colors inline-block hover:translate-x-1 duration-300">FAQ</a></li>
            </ul>
          </div>
          
          <div className="col-span-1 md:col-span-3">
            <h4 className="text-white font-serif font-medium mb-6 uppercase tracking-widest text-xs">Contact Us</h4>
            <ul className="space-y-4 text-sm font-light">
              <li className="flex items-start gap-3 group">
                <Phone size={16} className="text-accent-gold mt-0.5 group-hover:scale-110 transition-transform" />
                <span className="hover:text-white transition-colors cursor-pointer">+94 77 123 4567</span>
              </li>
              <li className="flex items-start gap-3 group">
                <Mail size={16} className="text-accent-gold mt-0.5 group-hover:scale-110 transition-transform" />
                <span className="hover:text-white transition-colors cursor-pointer">concierge@exclusiveceylon.com</span>
              </li>
              <li className="flex items-start gap-3 group">
                <MapPin size={16} className="text-accent-gold mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="hover:text-white transition-colors cursor-pointer">No. 12, Galle Face Terrace<br/>Colombo 03, Sri Lanka</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-stone-800/60 flex flex-col md:flex-row justify-between items-center text-xs font-light text-stone-500">
          <p className="block mb-4 md:mb-0">&copy; {new Date().getFullYear()} Exclusive Ceylon. All rights reserved.</p>
          <div className="flex space-x-6">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
            <span className="hover:text-white cursor-pointer transition-colors">Cookie Policy</span>
          </div>
        </div>
      </div>
      
      {/* Large watermark text at the bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden flex justify-center pointer-events-none opacity-[0.03] select-none">
        <h2 className="text-[12vw] font-serif font-bold text-white whitespace-nowrap translate-y-1/4">
          EXCLUSIVE CEYLON
        </h2>
      </div>
    </footer>
  );
}
