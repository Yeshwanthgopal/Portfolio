"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const experiences = [
    {
      role: "UI/UX & Graphic Designer",
      company: "Artea",
      period: "Apr 2024 – Present",
      description: [
        "Led end-to-end product design for multiple web platforms, improving task completion rates by 20%+ through optimized user flows.",
        "Redesigned website architecture and interaction patterns, reducing bounce rates by 15% and improving session duration.",
        "Built and scaled reusable design systems, reducing design-to-development handoff time by 30%.",
        "Translated user and business requirements into wireframes and high-fidelity prototypes.",
        "Delivered offline branding including hoardings, standees, and event collaterals."
      ],
      color: "from-yellow-500/10" // Accent
    },
    {
      role: "Freelance Designer",
      company: "Self-Employed",
      period: "July 2022 – Apr 2024",
      description: [
        "Delivered end-to-end branding and visual design across logos, packaging, and custom icon systems, strengthening usability and brand recall.",
        "Created lyrical videos and high-engagement social media creatives through iterative, feedback-led design."
      ],
      color: "from-yellow-500/10" // Accent
    },
    {
      role: "Program Analyst",
      company: "Cognizant",
      period: "Sep 2020 – May 2022",
      description: [
        "Owned development of the provider portal module for Emblem Health, with a focus on user experience and reliable delivery in an Agile team.",
        "Collaborated with business analysts, designers, and engineering teams to maintain technical quality standards and optimize architecture."
      ],
      color: "from-yellow-500/10" // Accent
    }
  ];

  return (
    <section className="relative z-20 bg-zinc-950 py-20 md:py-32 px-4 md:px-8 border-t border-white/5 text-zinc-100 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-4xl md:text-6xl font-bold tracking-tighter mb-16 md:mb-24 text-center text-white"
        >
          Career Timeline
        </motion.h3>
        
        <div className="relative" ref={containerRef}>
          {/* Default Background Line */}
          <div className="absolute left-8 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-zinc-800" />
          
          {/* Animated Filled Line */}
          <motion.div 
            style={{ height: lineHeight }}
            className="absolute left-8 -translate-x-1/2 top-0 w-[2px] bg-yellow-500 origin-top shadow-[0_0_15px_rgba(234,179,8,0.5)] z-0"
          />

          <div className="space-y-16">
            {experiences.map((exp, i) => {
              return (
                <div key={i} className="relative flex items-center">
                  
                  {/* Timeline Dot */}
                  <motion.div 
                    initial="inactive"
                    whileInView="active"
                    viewport={{ once: false, margin: "0px 0px -50% 0px" }}
                    variants={{
                      inactive: { backgroundColor: "#09090b", borderColor: "#3f3f46" }, // zinc-950, zinc-700
                      active:   { backgroundColor: "#713f12", borderColor: "#eab308" }  // yellow-900, yellow-500
                    }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-8 -translate-x-1/2 w-[24px] h-[24px] rounded-full border-[4px] z-10 flex items-center justify-center"
                  >
                    <motion.div
                      variants={{
                        inactive: { opacity: 0, scale: 1 },
                        active: { 
                          opacity: [0.6, 0], 
                          scale: [1, 2.5], 
                          transition: { repeat: Infinity, duration: 2, ease: "easeOut" } 
                        }
                      }}
                      className="absolute inset-0 rounded-full bg-yellow-500"
                    />
                  </motion.div>
                  
                  {/* Content Card */}
                  <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="pl-20 md:pl-24 w-full"
                  >
                    <div className="group relative overflow-hidden rounded-3xl p-6 md:p-8 backdrop-blur-md bg-zinc-900/40 border border-white/5 shadow-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 hover:bg-zinc-800/60 hover:shadow-yellow-500/10 hover:border-white/10">
                      {/* Decorative gradient glow line */}
                      <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${exp.color} to-transparent opacity-100`} />
                      
                      <div className="flex flex-col mb-6">
                        <div className="inline-block px-3 py-1 mb-4 rounded-full border border-yellow-500/20 bg-yellow-500/10 text-xs font-mono text-yellow-500 w-max shadow-sm">
                          {exp.period}
                        </div>
                        <h4 className="text-2xl md:text-3xl font-semibold text-white">{exp.role}</h4>
                        <div className="text-xl text-zinc-400 font-medium mt-1">{exp.company}</div>
                      </div>
                      
                      <ul className="space-y-3">
                        {exp.description.map((item, idx) => (
                          <li key={idx} className="flex items-start text-zinc-300 text-base md:text-lg font-light leading-relaxed">
                            <span className="mr-3 w-1.5 h-1.5 rounded-full bg-yellow-500 flex-shrink-0 mt-2.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
