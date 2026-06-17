"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "React.js", category: "Frontend" },
  { name: "JavaScript (ES6+)", category: "Frontend" },
  { name: "HTML5 & CSS3", category: "Frontend" },
  { name: "Bootstrap & Tailwind", category: "Frontend" },
  { name: "SharePoint Online", category: "Enterprise" },
  { name: "SQL", category: "Database" },
  { name: "REST APIs", category: "Backend" },
  { name: "Git & GitHub", category: "Tools" },
  { name: "VS Code", category: "Tools" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

export default function TechStack() {
  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">My <span className="text-primary">Tech Stack</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Technologies and tools I work with to build high-performance applications and enterprise solutions.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass-card p-6 rounded-2xl border border-white/5 hover:border-primary/50 transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-white group-hover:text-primary transition-colors relative z-10">
                {skill.name}
              </h3>
              <p className="text-sm text-gray-500 relative z-10">{skill.category}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
