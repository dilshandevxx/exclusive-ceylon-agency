export default function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-400 py-16 px-6 md:px-12 border-t border-stone-800">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-serif font-bold tracking-tight text-white mb-6">
              Exclusive<span className="text-accent-gold-dark">Ceylon</span>
            </h3>
            <p className="max-w-md font-light text-sm leading-relaxed mb-6 block w-full">
              Curating unparalleled luxury experiences across the resplendent isle of Sri Lanka. Discover the extraordinary with our dedicated travel artisans.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 rounded-full border border-stone-800 flex items-center justify-center hover:bg-accent-gold hover:text-stone-950 hover:border-accent-gold cursor-pointer transition-all">
                in
              </div>
              <div className="w-10 h-10 rounded-full border border-stone-800 flex items-center justify-center hover:bg-accent-gold hover:text-stone-950 hover:border-accent-gold cursor-pointer transition-all">
                fb
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-6 uppercase tracking-wider text-xs">Journeys</h4>
            <ul className="space-y-3 text-sm font-light">
              <li className="hover:text-accent-gold cursor-pointer transition-colors block">Wildlife Safaris</li>
              <li className="hover:text-accent-gold cursor-pointer transition-colors block">Heritage Tours</li>
              <li className="hover:text-accent-gold cursor-pointer transition-colors block">Wellness Retreats</li>
              <li className="hover:text-accent-gold cursor-pointer transition-colors block">Coastal Escapes</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-6 uppercase tracking-wider text-xs">Contact</h4>
            <ul className="space-y-3 text-sm font-light">
              <li className="hover:text-accent-gold cursor-pointer transition-colors block">+94 77 123 4567</li>
              <li className="hover:text-accent-gold cursor-pointer transition-colors block">concierge@exclusiveceylon.com</li>
              <li className="hover:text-accent-gold cursor-pointer transition-colors block">Colombo, Sri Lanka</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center text-xs font-light">
          <p className="block">&copy; {new Date().getFullYear()} Exclusive Ceylon. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
