"use client";

import { motion } from "framer-motion";
import { Code, Layout, Server, Database, Globe } from "lucide-react";

const services = [
  {
    title: "React Development",
    description: "Creating interactive, high-performance user interfaces and single-page applications with React.js.",
    icon: <Layout size={32} />
  },
  {
    title: "SharePoint Solutions",
    description: "Developing custom enterprise solutions, web parts, and extensions using SharePoint Online.",
    icon: <Server size={32} />
  },
  {
    title: "Frontend Engineering",
    description: "Translating designs into responsive, pixel-perfect, and accessible HTML5/CSS3/Bootstrap code.",
    icon: <Code size={32} />
  },
  {
    title: "Database & Backend",
    description: "Designing schemas and managing data flow using SQL and REST APIs.",
    icon: <Database size={32} />
  },
  {
    title: "API Integration",
    description: "Connecting frontend applications with RESTful APIs and external services securely.",
    icon: <Globe size={32} />
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 relative bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">My <span className="text-primary">Services</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -10 }}
              className="glass-card p-8 rounded-3xl group border border-white/5 hover:border-primary/50 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full blur-2xl group-hover:bg-primary/20 transition-colors pointer-events-none"></div>
              
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
