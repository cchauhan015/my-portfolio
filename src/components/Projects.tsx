"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Payslip Management System",
    description: "Developed a digital payslip management solution to improve accessibility and document tracking. Created responsive user interfaces and integrated SharePoint data management features.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200&auto=format&fit=crop",
    tech: ["React.js", "SharePoint Online"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Product Client Tracker",
    description: "Built a client management and tracking system with CRUD operations. Designed dashboards for monitoring client activities and improved record management efficiency.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    tech: ["React.js", "SharePoint Online"],
    liveUrl: "#",
    githubUrl: "#",
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured <span className="text-primary">Projects</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A selection of my recent work, showcasing case studies from enterprise solutions to consumer-facing applications.
          </p>
        </motion.div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Image Container */}
              <div className="w-full lg:w-1/2 group">
                <div className="relative rounded-3xl overflow-hidden glass-card aspect-[4/3] transform transition-transform duration-700 group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-primary/20">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-secondary/30 opacity-50 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500 z-10 pointer-events-none"></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Project Details */}
              <div className={`w-full lg:w-1/2 flex flex-col justify-center ${index % 2 === 0 ? 'lg:pl-8' : 'lg:pr-8'}`}>
                <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                <div className={`glass p-6 rounded-2xl mb-6 relative z-20 shadow-lg group-hover:border-primary/30 transition-colors border border-white/5 ${index % 2 === 0 ? 'lg:-ml-20' : 'lg:-mr-20'}`}>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 mb-8">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-4 py-1.5 rounded-full text-sm font-medium bg-white/5 text-primary border border-white/10 hover:border-primary/50 transition-colors cursor-default">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <a
                    href={project.liveUrl}
                    className="flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-black font-semibold hover:bg-primary/90 transition-colors group"
                  >
                    <ExternalLink size={20} className="group-hover:rotate-12 transition-transform" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 hover:border-white hover:bg-white/5 transition-all text-white font-medium group"
                  >
                    <FaGithub size={20} className="group-hover:scale-110 transition-transform" />
                    Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
