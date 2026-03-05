"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const publications = [
  { name: "CONDÉ NAST", sub: "TRAVELER", type: "serif" },
  { name: "TRAVEL", sub: "+ LEISURE", type: "serif" },
  { name: "Forbes", type: "sans" },
  { name: "VOGUE", type: "sans" },
  { name: "The New York Times", type: "serif" },
];

export default function TrustBar() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <section className="py-12 border-b border-stone-100 bg-white overflow-hidden" ref={ref}>
      <div className="container mx-auto px-6 md:px-12 flex flex-col items-center justify-center gap-10">
        <span className="text-stone-400 text-xs font-semibold uppercase tracking-[0.3em] whitespace-nowrap">
          As Featured In
        </span>
        
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 md:gap-x-20 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
          {publications.map((pub, idx) => (
            <motion.div
              key={pub.name}
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8, delay: idx * 0.15, ease: "easeOut" }
                }
              }}
              className={`flex flex-col items-center justify-center ${pub.type === 'serif' ? 'font-serif' : 'font-sans'}`}
            >
              <h3 className="text-stone-800 text-lg md:text-2xl font-bold tracking-tighter leading-none m-0">
                {pub.name}
              </h3>
              {pub.sub && (
                <span className="text-[10px] md:text-xs text-stone-800 tracking-[0.2em] font-light mt-1">
                  {pub.sub}
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
