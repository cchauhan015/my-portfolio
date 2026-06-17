"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Software Developer",
    company: "SharePoint Empower Pvt. Ltd., Rajkot",
    duration: "2022 - Present",
    achievements: [
      "Developed and maintained web applications using React.js.",
      "Built reusable and responsive UI components.",
      "Integrated REST APIs and managed data flow.",
      "Worked extensively with SharePoint Online solutions.",
      "Collaborated with team members to deliver client requirements.",
      "Participated in testing, debugging, and performance optimization."
    ]
  },
  {
    role: "Master of Computer Applications (MCA)",
    company: "RK University, Rajkot",
    duration: "2022 - 2024",
    achievements: [
      "Graduated with a CGPA of 8.78.",
      "Gained comprehensive knowledge in advanced software development, algorithms, and application architecture.",
    ]
  },
  {
    role: "Bachelor of Computer Applications (BCA)",
    company: "RK University, Rajkot",
    duration: "2019 - 2022",
    achievements: [
      "Graduated with a CGPA of 7.89.",
      "Learnt the fundamentals of computer science, programming logic, and web technologies.",
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative z-10 bg-background/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Work <span className="text-primary">Experience</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 md:-translate-x-1/2"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`relative flex flex-col md:flex-row gap-8 mb-16 last:mb-0 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 w-14 h-14 bg-background border-4 border-primary rounded-full flex items-center justify-center md:-translate-x-1/2 z-10 shadow-[0_0_15px_rgba(0,245,255,0.3)]">
                <Briefcase size={20} className="text-primary" />
              </div>

              {/* Content */}
              <div className="w-full md:w-1/2 pl-20 md:pl-0 flex flex-col justify-center">
                <div className={`glass-card p-8 rounded-2xl border border-white/5 hover:border-primary/50 transition-colors group relative ${index % 2 === 0 ? 'md:ml-12' : 'md:mr-12'}`}>
                  {/* Pointer */}
                  <div className={`hidden md:block absolute top-6 w-0 h-0 border-y-8 border-y-transparent border-r-8 border-r-white/5 group-hover:border-r-primary/50 transition-colors ${index % 2 === 0 ? '-left-2 border-r-8 border-l-0' : '-right-2 border-l-8 border-r-0 border-l-white/5 group-hover:border-l-primary/50'}`}></div>

                  <span className="text-primary font-semibold tracking-wider text-sm mb-2 block">{exp.duration}</span>
                  <h3 className="text-2xl font-bold mb-1">{exp.role}</h3>
                  <h4 className="text-gray-400 text-lg mb-6">{exp.company}</h4>

                  <ul className="space-y-3">
                    {exp.achievements.map((achieve, i) => (
                      <li key={i} className="text-gray-300 flex items-start">
                        <span className="text-primary mr-2 mt-1.5">•</span>
                        <span className="leading-relaxed">{achieve}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Empty Space for layout */}
              <div className="hidden md:block w-1/2"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
