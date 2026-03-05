import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const products = [
  {
    id: 1,
    name: "Ceylon Sapphire Ring",
    category: "Jewelry",
    price: "$2,400",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b2548e?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    name: "Artisan Wood Carving",
    category: "Decor",
    price: "$450",
    image: "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    name: "Premium Silver Tea Set",
    category: "Homeware",
    price: "$890",
    image: "https://images.unsplash.com/photo-1577937927133-66ef06acdf18?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 4,
    name: "Handwoven Silk Scarf",
    category: "Apparel",
    price: "$180",
    image: "https://images.unsplash.com/photo-1604907085750-be87034b077a?auto=format&fit=crop&q=80&w=800",
  },
];

export default function Shop() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Shop Header */}
      <section className="pt-40 pb-20 px-6 md:px-12 bg-stone-50 border-b border-stone-200 relative z-10 w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-stone-100 via-stone-50 to-white z-10" />
        <div className="relative z-20 text-center max-w-3xl mx-auto">
          <span className="text-accent-gold uppercase tracking-[0.3em] text-xs font-semibold mb-6 block animate-fade-in-up">
            Exclusive Collection
          </span>
          <h1 className="text-5xl md:text-7xl font-serif text-stone-900 leading-tight mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            The Artisan Boutique
          </h1>
          <p className="text-stone-500 font-light text-lg md:text-xl leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Bring a piece of Ceylon's heritage into your home with our curated selection of luxury goods.
          </p>
        </div>
      </section>

      {/* Shop Grid */}
      <section className="py-24 px-6 md:px-12">
        <div className="container mx-auto max-w-7xl">
          <div className="flex justify-between items-center mb-12 border-b border-stone-200 pb-6">
            <span className="text-stone-500 uppercase tracking-widest text-xs font-medium">Showing {products.length} Items</span>
            <div className="flex gap-4">
              <button className="text-stone-900 uppercase tracking-widest text-xs font-medium hover:text-accent-gold transition-colors">Sort By</button>
              <button className="text-stone-900 uppercase tracking-widest text-xs font-medium hover:text-accent-gold transition-colors">Filters</button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
            {products.map((product, index) => (
              <div key={product.id} className="group cursor-pointer animate-fade-in-up" style={{ animationDelay: `${0.1 * index}s` }}>
                <div className="relative aspect-[3/4] mb-6 overflow-hidden rounded-sm bg-stone-50 border border-stone-100">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/10 transition-colors duration-500" />
                  <div className="absolute bottom-0 left-0 w-full p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 flex justify-center">
                    <button className="bg-white/95 backdrop-blur-sm text-stone-900 px-6 py-3 text-xs uppercase tracking-widest font-medium hover:bg-stone-900 hover:text-white transition-colors w-full shadow-sm">
                      Quick Add
                    </button>
                  </div>
                </div>
                <div className="text-center">
                  <span className="text-accent-gold text-[10px] uppercase tracking-[0.2em] font-medium block mb-2">{product.category}</span>
                  <h3 className="font-serif text-lg text-stone-900 mb-2 group-hover:text-accent-gold transition-colors">{product.name}</h3>
                  <span className="text-stone-600 font-light">{product.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
