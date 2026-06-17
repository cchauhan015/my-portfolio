"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Alex Johnson",
    role: "CEO at TechStartup",
    content: "Working with this developer was a game changer for our product. The React architecture they set up is incredibly scalable, and the attention to UI details is outstanding.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop"
  },
  {
    name: "Sarah Williams",
    role: "Product Manager",
    content: "They delivered the SharePoint intranet portal ahead of schedule. The custom SPFx web parts look stunning and perform flawlessly. Highly recommended for enterprise projects.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
  },
  {
    name: "Michael Chen",
    role: "Design Lead",
    content: "It is rare to find a developer who truly understands design. The GSAP animations and glassmorphism effects they implemented brought our static designs to life perfectly.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-background/50">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Client <span className="text-primary">Testimonials</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <div className="overflow-hidden relative pb-12">
            <motion.div 
              className="flex"
              animate={{ x: `-${currentIndex * 100}%` }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
            >
              {testimonials.map((test, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="glass-card p-10 md:p-14 rounded-3xl border border-white/5 relative">
                    <Quote className="absolute top-8 right-8 text-white/5 w-24 h-24 pointer-events-none" />
                    <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-10 italic relative z-10">
                      "{test.content}"
                    </p>
                    <div className="flex items-center gap-4 relative z-10">
                      <img src={test.image} alt={test.name} className="w-14 h-14 rounded-full object-cover border-2 border-primary" />
                      <div>
                        <h4 className="font-bold text-white text-lg">{test.name}</h4>
                        <p className="text-primary text-sm">{test.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <button 
              onClick={prev}
              className="p-3 rounded-full glass hover:bg-primary hover:text-black transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-8 bg-primary' : 'w-2 bg-white/20 hover:bg-white/50'}`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
            <button 
              onClick={next}
              className="p-3 rounded-full glass hover:bg-primary hover:text-black transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
