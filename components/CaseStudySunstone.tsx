"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";


// --- CSS Device Mockups ---
const BrowserMockup = () => (
  <a href="https://sunstone.co.in" target="_blank" rel="noopener noreferrer" className="block w-full max-w-4xl mx-auto rounded-xl overflow-hidden border border-zinc-800 bg-zinc-950 shadow-[0_0_80px_rgba(234,179,8,0.15)] transition-all duration-700 hover:shadow-[0_0_120px_rgba(234,179,8,0.25)] hover:-translate-y-2 cursor-pointer">
    <div className="h-8 bg-zinc-900 border-b border-zinc-800 flex items-center px-4 space-x-2">
      <div className="w-3 h-3 rounded-full bg-zinc-700 hover:bg-red-500 transition-colors" />
      <div className="w-3 h-3 rounded-full bg-zinc-700 hover:bg-yellow-500 transition-colors" />
      <div className="w-3 h-3 rounded-full bg-zinc-700 hover:bg-green-500 transition-colors" />
    </div>
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img src="/sunstone.png" alt="Sunstone Desktop Mockup" className="w-full h-auto block" />
  </a>
);

const PhoneMockup = () => (
  <a href="https://sunstone.co.in" target="_blank" rel="noopener noreferrer" className="block mx-auto rounded-[3rem] overflow-hidden border-8 border-zinc-900 bg-zinc-950 shadow-[0_0_60px_rgba(234,179,8,0.2)] w-[344px] relative hover:-translate-y-2 transition-transform duration-700 cursor-pointer">
    {/* Notch */}
    <div className="w-32 h-6 bg-zinc-900 mx-auto rounded-b-xl absolute top-0 left-1/2 -translate-x-1/2 z-10" />
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img src="/sunstone-mobile.png" alt="Sunstone Mobile Mockup" className="w-full h-auto block" />
  </a>
);

// --- Component Exports ---

export default function CaseStudySunstone({ onClose }: { onClose: () => void }) {
  
  // Custom cursor logic for "magnetic" button feel
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e: React.MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY });

  // For Timeline SVG drawing
  const timelineRef = useRef(null);
  const timelineInView = useInView(timelineRef, { once: true, margin: "-150px" });

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.98, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: 20 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-[9999] bg-[#03030c] overflow-y-auto overflow-x-hidden text-zinc-300 font-sans cursor-default"
      onMouseMove={handleMouseMove}
    >
      <style>{`
        .shimmer-bg {
          position: relative;
          overflow: hidden;
        }
        .shimmer-bg::after {
          content: "";
          position: absolute;
          top: 0; right: 0; bottom: 0; left: 0;
          transform: translateX(-100%);
          background-image: linear-gradient(90deg, rgba(255,255,255,0) 0, rgba(255,255,255,0.05) 20%, rgba(255,255,255,0.1) 60%, rgba(255,255,255,0));
          animation: shimmer 3s infinite;
        }
        @keyframes shimmer { 100% { transform: translateX(100%); } }
        
        .tilt-card { transform-style: preserve-3d; perspective: 1000px; }
        .tilt-card:hover > div { transform: rotateX(5deg) rotateY(10deg); transition: transform 0.1s ease-out; }
      `}</style>

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 h-20 bg-[#03030c]/80 backdrop-blur-xl border-b border-white/5 z-50 flex items-center justify-between px-8 md:px-16">
        <span className="text-xl font-bold tracking-tighter text-white">Sunstone <span className="text-yellow-500 font-normal">/ Case Study</span></span>
        <button 
          onClick={onClose}
          className="group flex items-center space-x-2 text-zinc-400 hover:text-yellow-500 transition-colors"
        >
          <span className="text-sm font-mono tracking-widest uppercase mt-0.5">Return</span>
          <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </nav>

      {/* Body Wrapper */}
      <div className="pt-32 pb-48 px-6 md:px-16 max-w-7xl mx-auto selection:bg-yellow-500/30 selection:text-white">
        
        {/* HERO */}
        <motion.header 
           initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }}
           className="mb-32 mt-16"
        >
          <div className="flex flex-wrap gap-4 mb-8">
            {['Real Estate Sales', 'Information Architecture', 'UI/UX Redesign', 'Conversion Strategy'].map((tag, i) => (
              <span key={i} className="px-4 py-1.5 rounded-full border border-yellow-500/30 bg-yellow-500/5 text-yellow-500 text-xs font-mono tracking-widest uppercase">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-600 mb-6 drop-shadow-[0_0_30px_rgba(234,179,8,0.3)] tracking-tighter">
            Clear Value, Faster Leads.
          </h1>
          <p className="text-2xl md:text-3xl text-zinc-400 font-light max-w-3xl leading-relaxed mb-24">
            Transforming a dense brochure page into a highly-focused, user-led real estate sales narrative for Sunstone Premium Bungalows.
          </p>
          
          <BrowserMockup />
        </motion.header>

        {/* 1. OVERVIEW */}
        <section className="mb-40 flex flex-col md:flex-row gap-16 relative">
          <div className="w-16 flex-shrink-0 relative hidden md:block">
            <div className="sticky top-32 text-4xl font-light text-zinc-700 font-mono tracking-tighter">01</div>
            <div className="absolute top-16 bottom-0 left-4 w-px bg-gradient-to-b from-zinc-800 to-transparent" />
          </div>
          <div className="flex-1 space-y-12">
            <h2 className="text-3xl tracking-tight text-white font-semibold">Executive Summary</h2>
            <div className="prose prose-invert prose-lg max-w-none text-zinc-400 font-light leading-relaxed">
              <p className="text-xl text-zinc-300 leading-relaxed mb-8">
                The Sunstone bungalow project site was transformed from a scattered feature-list into a focused funnel. Resulting in a drop in bounce rate by <strong className="text-white">~30%</strong> and a <strong className="text-white">doubling</strong> of brochure downloads.
              </p>
              <p>
                By putting key selling points (price, metro access, green space) and a clear Call-to-Action upfront, we significantly reduced cognitive load. Prospects spent 150% more time on the page and confidently requested more information.
              </p>
            </div>

            <div className="mt-16 bg-zinc-900/40 border border-white/5 rounded-2xl p-8 md:p-10 backdrop-blur-sm relative overflow-hidden flex flex-col md:flex-row gap-8">
               <div className="absolute top-0 left-0 w-1 h-full bg-yellow-500" />
               <div className="flex-1">
                 <h3 className="text-sm font-mono text-zinc-500 uppercase tracking-widest mb-2">Product</h3>
                 <p className="text-white font-medium">Sunstone Premium 3 BHK Bungalows</p>
                 <p className="text-zinc-500 text-sm mt-1">Joka (Gems Group)</p>
               </div>
               <div className="flex-1">
                 <h3 className="text-sm font-mono text-zinc-500 uppercase tracking-widest mb-2">Context</h3>
                 <p className="text-zinc-400 text-sm">A 7-acre gated enclave of luxury 3BHK bungalows near Kolkata’s Joka Metro. The site needed to capture serious homebuyers and investors.</p>
               </div>
               <div className="flex-1">
                 <h3 className="text-sm font-mono text-zinc-500 uppercase tracking-widest mb-2">Objective</h3>
                 <p className="text-zinc-400 text-sm">Quickly convey the value proposition (affordable luxury, location) and frictionlessly guide visitors to enquire or download a brochure.</p>
               </div>
            </div>
          </div>
        </section>

        {/* 2. THE CHALLENGE */}
        <section className="mb-40 flex flex-col md:flex-row gap-16 relative">
          <div className="w-16 flex-shrink-0 relative hidden md:block">
            <div className="sticky top-32 text-4xl font-light text-zinc-700 font-mono tracking-tighter">02</div>
            <div className="absolute top-16 bottom-0 left-4 w-px bg-gradient-to-b from-zinc-800 to-transparent" />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl md:text-5xl tracking-tight text-white font-bold mb-8">The Challenge</h2>
            <p className="text-xl text-zinc-400 font-light mb-16">The original page contained all required info, but critical decision-making factors were buried or missing entirely.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "Weak Hierarchy", desc: "Pricing, configuration, and project status were buried deep in a side panel instead of being highlighted instantly." },
                { title: "Heavy Cognitive Load", desc: "Long, endless paragraphs and bullet lists for specs and amenities forced users to scroll without focus." },
                { title: "Mixed Messaging", desc: "Generic marketing copy dominated the fold, mixing crucial lifestyle facts into walls of text." },
                { title: "Low Scannability", desc: "A lack of custom icons or supportive visuals meant users had to read paragraphs to find simple answers." },
                { title: "Buried CTAs", desc: "The only 'Download Brochure' action sat at the very bottom of the page, invisible to early-stage browsers." }
              ].map((prob, i) => (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  key={i} 
                  className="group p-6 rounded-2xl bg-zinc-900/30 border border-yellow-500/20 hover:border-yellow-500/50 hover:bg-zinc-900/80 transition-all cursor-crosshair overflow-hidden relative"
                >
                  <div className="text-yellow-500/10 text-6xl font-black absolute top-2 right-4 pointer-events-none group-hover:text-yellow-500/30 transition-colors">{i+1}</div>
                  <h4 className="text-white font-semibold text-lg mb-2 relative z-10">{prob.title}</h4>
                  <p className="text-zinc-500 text-sm relative z-10">{prob.desc}</p>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-24">
               <h3 className="text-2xl text-white font-semibold mb-8">What We Wanted To Fix</h3>
               <ul className="space-y-6">
                 {[
                   ["Immediate Clarity", "Front-load the most important facts (price, location, green space) so visitors instantly know what is offered."],
                   ["Stronger Trust Signals", "Highlight reputation and credibility through concrete data features (investment zone, construction quality)."],
                   ["Reduced Cognitive Load", "Break content into scannable, digestible sections fortified by custom iconography."],
                   ["Prominent Interventions", "Place enquiry actions rapidly up the page, so motivated buyers can act without hunting for forms."]
                 ].map(([title, desc], i) => (
                   <li key={i} className="flex gap-6">
                     <span className="mt-1 w-6 h-6 rounded-full bg-yellow-500/20 border border-yellow-500 flex items-center justify-center flex-shrink-0 text-yellow-500 text-xs">✓</span>
                     <div>
                       <strong className="text-white block mb-1">{title}</strong>
                       <span className="text-zinc-400 font-light">{desc}</span>
                     </div>
                   </li>
                 ))}
               </ul>
            </div>
          </div>
        </section>

        {/* 3. RESEARCH */}
        <section className="mb-40 flex flex-col md:flex-row gap-16 relative">
          <div className="w-16 flex-shrink-0 relative hidden md:block">
            <div className="sticky top-32 text-4xl font-light text-zinc-700 font-mono tracking-tighter">03</div>
            <div className="absolute top-16 bottom-0 left-4 w-px bg-gradient-to-b from-zinc-800 to-transparent" />
          </div>
          <div className="flex-1">
             <h2 className="text-3xl md:text-5xl tracking-tight text-white font-bold mb-8">User Personas</h2>
             <p className="text-xl text-zinc-400 font-light mb-16">Through analytics review and live interviews, we identified three core demographics mapping to unique information-gathering styles.</p>

             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 perspective-[1000px]">
               {[
                 { q: "The Young Homebuyer", a: "Scanning instantly for cost and commute. In testing: 'We need to know how ₹58L compares and if the metro is genuinely 4.2km away.'" },
                 { q: "Family Decision-Makers", a: "Prioritizing security, community, and nearby schools. Examining the site specifically for healthcare availability and childcare integrations." },
                 { q: "The ROI Investor", a: "Zeroing directly in on high-level stats. They actively tabulated acreage, density, and future growth trajectories independently." }
               ].map((item, i) => (
                 <div key={i} className="group relative w-full h-[280px] bg-transparent cursor-pointer [perspective:1000px]">
                   <div className="absolute inset-0 transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                     {/* Front */}
                     <div className="absolute inset-0 bg-zinc-900 border border-white/10 rounded-2xl p-8 flex flex-col justify-center items-center text-center [backface-visibility:hidden]">
                       <div className="w-12 h-12 rounded-full bg-yellow-500/10 border border-yellow-500/30 flex items-center justify-center mb-6 text-yellow-500">
                         {i+1}
                       </div>
                       <h3 className="text-white text-xl font-medium">{item.q}</h3>
                       <span className="text-xs text-zinc-600 mt-8 font-mono uppercase tracking-widest">Hover to reveal insights</span>
                     </div>
                     {/* Back */}
                     <div className="absolute inset-0 bg-yellow-600/10 border border-yellow-500/50 rounded-2xl p-8 flex items-center justify-center text-center [backface-visibility:hidden] [transform:rotateY(180deg)]">
                       <p className="text-zinc-200 text-sm leading-relaxed">{item.a}</p>
                     </div>
                   </div>
                 </div>
               ))}
             </div>
          </div>
        </section>

        {/* 4. PROCESS TIMELINE */}
        <section className="mb-40 relative pt-16">
          <div ref={timelineRef} className="text-center mb-24">
            <h2 className="text-3xl md:text-5xl tracking-tight text-white font-bold mb-6">Our Approach</h2>
            <p className="text-xl text-zinc-400 font-light max-w-2xl mx-auto">Reordering information architecture into a logical sales funnel.</p>
          </div>

          <div className="relative max-w-4xl mx-auto">
             {/* The animated dashed line */}
             <div className="absolute left-1/2 top-0 bottom-0 w-px -ml-px hidden md:block">
                <svg className="w-full h-full" preserveAspectRatio="none">
                  <motion.line 
                    x1="0" y1="0" x2="0" y2="100%" 
                    stroke="rgba(234, 179, 8, 0.4)" 
                    strokeWidth="2" 
                    strokeDasharray="6 6"
                    initial={{ pathLength: 0 }}
                    animate={timelineInView ? { pathLength: 1 } : { pathLength: 0 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                  />
                </svg>
             </div>

             {/* Nodes */}
             <div className="space-y-16 relative perspective-[1000px] tilt-card">
                {[
                  { step: "Project Highlights Banner", desc: "Front-loaded price, product type, connectivity, and investment angles directly into the first scroll view." },
                  { step: "Visual Stats Panel", desc: "Solidified trust with numerical metrics. Highlighting '40,000 sqft lifestyle club' and '7-acre acreage' prominently." },
                  { step: "Accelerated CTA Capture", desc: "Introduced a slim 'Download Brochure' inline-form immediately following the hooks, converting curiosity rapidly." },
                  { step: "Connectivity Deep-Dive", desc: "Visual map systems proving distance claims to Joka and Thakurpukur outposts definitively." }
                ].map((node, i) => (
                  <div key={i} className={`flex flex-col md:flex-row items-center gap-8 ${i%2===0 ? 'md:flex-row-reverse' : ''}`}>
                     <div className="flex-1 w-full md:text-right">
                       {i%2===0 && (
                         <div className="p-8 rounded-2xl bg-zinc-900/40 border border-white/5 hover:border-yellow-500/50 transition-colors h-full transform-gpu duration-300">
                           <h4 className="text-white text-xl font-medium mb-2">{node.step}</h4>
                           <p className="text-zinc-400 text-sm">{node.desc}</p>
                         </div>
                       )}
                     </div>
                     <div className="w-12 h-12 rounded-full border-4 border-zinc-950 bg-yellow-600 shadow-[0_0_20px_rgba(234,179,8,0.5)] z-10 flex items-center justify-center text-black font-bold">
                       {i+1}
                     </div>
                     <div className="flex-1 w-full">
                       {i%2!==0 && (
                         <div className="p-8 rounded-2xl bg-zinc-900/40 border border-white/5 hover:border-yellow-500/50 transition-colors h-full transform-gpu duration-300">
                           <h4 className="text-white text-xl font-medium mb-2">{node.step}</h4>
                           <p className="text-zinc-400 text-sm">{node.desc}</p>
                         </div>
                       )}
                     </div>
                  </div>
                ))}
             </div>
          </div>
        </section>



        {/* PULL QUOTE */}
        <section className="mb-40 flex items-center justify-center py-20 relative px-4">
           <div className="absolute text-[300px] font-serif text-white/[0.03] -mt-32 -ml-20 pointer-events-none select-none">"</div>
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(234,179,8,0.05),transparent_50%)] pointer-events-none" />
           <div className="max-w-4xl text-center relative z-10">
              <h3 className="text-3xl md:text-5xl font-light text-white italic leading-tight mb-12">
                "The new Sunstone site acts as a truly confident salesperson—answering buyer questions without confusion and turning casual interest into heavy, high-intent inquiries."
              </h3>
              <p className="text-zinc-500 font-mono uppercase tracking-widest text-sm">Design Strategy Conclusion</p>
           </div>
        </section>

        <section className="mb-20">
          <PhoneMockup />
        </section>

      </div>

      {/* FOOTER */}
      <footer className="relative bg-[#020208] py-40 border-t border-white/5 flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-yellow-500/5 [mask-image:linear-gradient(to_bottom,transparent,black)] pointer-events-none" />
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 relative z-10 text-center tracking-tight">Ready for the next?</h2>
        <p className="text-xl text-zinc-400 font-light mb-12 relative z-10 text-center">There is always more to explore.</p>
        
        <div className="flex gap-6 relative z-10">
          <button onClick={onClose} className="px-8 py-4 rounded-full bg-zinc-900 border border-white/10 text-white font-medium hover:bg-zinc-800 transition-colors">
            Return to Portfolio
          </button>
          <button className="px-8 py-4 rounded-full bg-yellow-500 text-black font-bold shadow-[0_0_20px_rgba(234,179,8,0.4)] hover:shadow-[0_0_40px_rgba(234,179,8,0.6)] transition-all hover:scale-105">
            Next Project
          </button>
        </div>
      </footer>
    </motion.div>
  );
}
