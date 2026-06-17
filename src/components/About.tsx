"use client";

import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";

function AnimatedCounter({ value, label }: { value: number; label: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const startTime = performance.now();
      
      const updateCounter = (currentTime: number) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        const easeProgress = 1 - Math.pow(1 - progress, 4);
        setCount(Math.floor(easeProgress * value));
        
        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        }
      };
      requestAnimationFrame(updateCounter);
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-center p-6 glass-card rounded-2xl border border-white/5 hover:border-primary/50 transition-colors group">
      <h3 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mb-2 group-hover:scale-110 transition-transform">
        {count}+
      </h3>
      <p className="text-gray-400 text-xs md:text-sm uppercase tracking-wider">{label}</p>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-24 relative z-10 bg-background/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">About <span className="text-primary">Me</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden glass-card p-2 relative group max-w-md mx-auto lg:max-w-none">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 z-10 group-hover:opacity-0 transition-opacity duration-500 rounded-3xl pointer-events-none"></div>
              <img 
                src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?q=80&w=800&auto=format&fit=crop" 
                alt="Developer Profile" 
                className="w-full h-full object-cover rounded-[1.25rem] filter grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              {/* Abstract decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary rounded-full blur-3xl opacity-30 pointer-events-none"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary rounded-full blur-3xl opacity-30 pointer-events-none"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="text-2xl md:text-3xl font-semibold mb-6">A brief story about my journey.</h3>
            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              I am a React Developer with 2 years of experience in developing web applications. With a Master's in Computer Applications (MCA), I have a strong foundation in building responsive user interfaces, integrating APIs, and delivering complete business solutions.
            </p>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              I specialize in React.js, JavaScript, SharePoint Online, and SQL. I am passionate about creating impactful web applications, and I always strive to write clean, maintainable code while providing genuine value and efficiency for my clients and users.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              <AnimatedCounter value={2} label="Years Experience" />
              <AnimatedCounter value={10} label="Projects Delivered" />
              <AnimatedCounter value={5} label="Tech Stacks" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
