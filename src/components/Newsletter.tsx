export default function Newsletter() {
  return (
    <section className="py-32 px-6 md:px-12 bg-white border-y border-stone-100 text-center">
      <div className="container mx-auto max-w-3xl">
        <span className="text-accent-gold uppercase tracking-[0.2em] text-xs font-semibold mb-6 block">
          The Journey Begins
        </span>
        <h2 className="text-4xl md:text-5xl font-serif text-stone-900 leading-tight mb-8">
          Curate Your Exclusive Escape
        </h2>
        <p className="text-stone-500 font-light text-lg mb-12 max-w-2xl mx-auto">
          Join our private circle to receive bespoke itineraries, insider access, and whispers of undrawn luxury straight to your inbox.
        </p>
        
        <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto">
          <input 
            type="email" 
            placeholder="Enter your email address" 
            className="w-full sm:w-2/3 bg-transparent border-b border-stone-300 focus:border-stone-900 outline-none px-4 py-3 text-stone-900 placeholder:text-stone-400 font-light transition-colors"
            required
          />
          <button 
            type="button" 
            className="w-full sm:w-1/3 bg-stone-900 hover:bg-accent-gold text-white px-6 py-4 rounded-full text-sm font-semibold tracking-wide uppercase transition-all duration-300 shadow-sm hover:shadow-md"
          >
            Join the Circle
          </button>
        </form>
      </div>
    </section>
  );
}
