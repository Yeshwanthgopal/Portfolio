"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";


// --- CSS Device Mockups ---
const BrowserMockup = () => (
  <a href="https://gemstower.in" target="_blank" rel="noopener noreferrer" className="block w-[90%] md:w-full max-w-4xl mx-auto rounded-xl overflow-hidden border border-zinc-800 bg-zinc-950 shadow-[0_0_80px_rgba(234,179,8,0.15)] transition-all duration-700 hover:shadow-[0_0_120px_rgba(234,179,8,0.25)] hover:-translate-y-2 cursor-pointer">
    <div className="h-8 bg-zinc-900 border-b border-zinc-800 flex items-center px-4 space-x-2">
      <div className="w-3 h-3 rounded-full bg-zinc-700 hover:bg-red-500 transition-colors" />
      <div className="w-3 h-3 rounded-full bg-zinc-700 hover:bg-yellow-500 transition-colors" />
      <div className="w-3 h-3 rounded-full bg-zinc-700 hover:bg-green-500 transition-colors" />
    </div>
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img src="/gemstower.png" alt="Gems Tower Desktop Mockup" className="w-full h-auto block" />
  </a>
);

export default function CaseStudyGemstower({ onClose, onNext }: { onClose: () => void, onNext?: () => void }) {
  const timelineRef = useRef(null);
  const timelineInView = useInView(timelineRef, { once: true, margin: "-150px" });



  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: 20 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-[9999] bg-[#03030c] overflow-y-auto overflow-x-hidden text-zinc-300 font-sans cursor-default"

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
        
        @media (min-width: 1024px) {
          .laser-card {
            position: relative;
            transition: all 0.3s ease;
          }
          .laser-card::after {
            content: "";
            position: absolute;
            inset: -1px;
            border-radius: inherit;
            padding: 1px;
            background: conic-gradient(from 0deg at 50% 50%, transparent 0%, #eab308 10%, transparent 20%);
            -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            mask-composite: exclude;
            opacity: 0;
            transition: opacity 0.3s ease;
          }
          .laser-card:hover::after {
            opacity: 1;
            animation: spin 3s linear infinite;
          }
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          .laser-card:hover {
            background: rgba(24, 24, 27, 0.6);
            transform: translateY(-2px);
          }
        }

        @keyframes shake {
          10%, 90% { transform: translate3d(-1px, 0, 0); }
          20%, 80% { transform: translate3d(2px, 0, 0); }
          30%, 50%, 70% { transform: translate3d(-4px, 0, 0); }
          40%, 60% { transform: translate3d(4px, 0, 0); }
        }
      `}</style>

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 h-20 bg-[#03030c]/80 backdrop-blur-xl border-b border-white/5 z-50 flex items-center justify-between px-8 md:px-16">
        <span className="text-xl font-bold tracking-tighter text-white">Gems Tower <span className="text-yellow-500 font-normal">/ Case Study</span></span>
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

      {/* Body */}
      <div className="pt-32 pb-48 px-6 md:px-16 max-w-7xl mx-auto selection:bg-yellow-500/30 selection:text-white">

        {/* HERO */}
        <motion.header
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-32 mt-16"
        >
          <div className="flex flex-wrap gap-4 mb-8">
            {['Senior Living', 'UX Redesign', 'Trust Architecture', 'Information Design'].map((tag, i) => (
              <span key={i} className="px-4 py-1.5 rounded-full border border-yellow-500/30 bg-yellow-500/5 text-yellow-500 text-xs font-mono tracking-widest uppercase">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-600 mb-6 drop-shadow-[0_0_30px_rgba(234,179,8,0.3)] tracking-tighter">
            Focused Trust.
          </h1>
          <p className="text-2xl md:text-3xl text-zinc-400 font-light max-w-3xl leading-relaxed mb-24">
            Transforming a dense information page into a clear decision guide that reduced cognitive load and nearly tripled tour requests.
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
                The Gems Tower senior living website was transformed from a dense information page into a <strong className="text-white">focused trust-building journey</strong>. The redesign puts key selling points (Elixir-AVI management, healthcare services, accessibility) and clear CTAs upfront, radically reducing cognitive load.
              </p>
              <p>
                As a result, user engagement climbed and leads improved dramatically: bounce rate fell by 38%, average time on page increased by 112%, and tour requests practically tripled.
              </p>
            </div>

            <div className="mt-16 bg-zinc-900/40 border border-white/5 rounded-2xl p-8 md:p-10 backdrop-blur-sm relative overflow-hidden flex flex-col md:flex-row gap-8">
              <div className="absolute top-0 left-0 w-1 h-full bg-yellow-500" />
              <div className="flex-1">
                <h3 className="text-sm font-mono text-zinc-500 uppercase tracking-widest mb-2">Product</h3>
                <p className="text-white font-medium">Gems Tower (Gems Group)</p>
                <p className="text-zinc-500 text-sm mt-1">Independent Senior Living Apartments</p>
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-mono text-zinc-500 uppercase tracking-widest mb-2">Platform</h3>
                <p className="text-zinc-400 text-sm">Desktop website targeting serious families and seniors considering 55+ active communities.</p>
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-mono text-zinc-500 uppercase tracking-widest mb-2">Objective</h3>
                <p className="text-zinc-400 text-sm">Clearly convey value (care quality, lifestyle, operator credibility) and guide visitors to request tours efficiently.</p>
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
            <p className="text-xl text-zinc-400 font-light mb-16">The original page contained all necessary project information, but it was scattered, text-heavy, and hard to scan, leading to a high bounce rate and low lead capture.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "Weak Hierarchy", desc: "Management credentials, 24x7 healthcare services, and accessibility features were buried in the page, not highlighted at the top." },
                { title: "Text-Heavy Layout", desc: "Long paragraphs and bullet lists for amenities forced extensive scrolling, increasing cognitive load for senior audiences." },
                { title: "Mixed Messaging", desc: "Vague philosophical quotes dominated the hero section, while crucial decision factors (nursing, operator reputation) were mixed into lists." },
                { title: "Low Scannability", desc: "Visual design was modest. There were no icons or visuals used to naturally reinforce concrete data points." },
                { title: "Hidden Call-to-Action", desc: "The sole 'Schedule a Tour' action was hidden at the very bottom, missed by many early-stage browsers." },
              ].map((prob, i) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  key={i}
                  className="group p-6 rounded-2xl bg-zinc-900/30 border border-red-500/20 hover:border-red-500/50 hover:bg-zinc-900/80 transition-all cursor-crosshair overflow-hidden relative
                             hover:animate-[shake_0.5s_cubic-bezier(.36,.07,.19,.97)_both]"
                >
                  <div className="text-red-500/20 text-6xl font-black absolute top-2 right-4 pointer-events-none group-hover:text-red-500/40 transition-colors">{i + 1}</div>
                  <h4 className="text-white font-semibold text-lg mb-2 relative z-10">{prob.title}</h4>
                  <p className="text-zinc-500 text-sm relative z-10">{prob.desc}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-24">
              <h3 className="text-2xl text-white font-semibold mb-8">What We Wanted To Fix</h3>
              <ul className="space-y-6">
                {[
                  ["Immediate Clarity", "Front-load the most important facts (Elixir-AVI management, healthcare, design) so visitors instantly know what's offered."],
                  ["Stronger Trust Signals", "Highlight operator credentials, years of experience, and concrete data (24x7 nursing, physiotherapy)."],
                  ["Reduced Cognitive Load", "Break content into clear, digestible sections and use visuals/icons to aid scanning."],
                  ["Prominent CTAs", "Place tour request and enquiry actions higher, so motivated families can act without hunting for forms."],
                  ["User-Centered Narrative", "Shift from generic marketing text to a step-by-step journey that matches buyer questions."],
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

        {/* 3. APPROACH / TIMELINE */}
        <section className="mb-40 relative pt-16">
          <div ref={timelineRef} className="text-center mb-24">
            <h2 className="text-3xl md:text-5xl tracking-tight text-white font-bold mb-6">Our Approach</h2>
            <p className="text-xl text-zinc-400 font-light max-w-2xl mx-auto">A conversion-focused, user-centered redesign restructuring content into a logical trust funnel.</p>
          </div>

          <div className="relative max-w-4xl mx-auto">
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

            <div className="space-y-16 relative">
              {[
                { step: "Hero Trust Anchor", desc: "Added 'Managed by Elixir-Age Ventures India' immediately, establishing operator credibility before amenities." },
                { step: "10 Reasons Why", desc: "Turned static prose into scannable top-level bullet highlights (healthcare, meals, security, location)." },
                { step: "A Visual Daily Routine", desc: "Created a visual timeline showing hourly structure from 6am yoga to 9pm dinner, making daily life tangible." },
                { step: "Healthcare Hub Setup", desc: "Built a dedicated section showcasing nursing stations, physiotherapy, medical care, and assisted living rooms." },
                { step: "Smart Design Showcasing", desc: "Grouped accessibility features (grab bars, anti-skid flooring, emergency buttons) under clear categories." },
                { step: "Multi-Touch CTAs", desc: "Sprinkled streamlined progressive 'Schedule a Tour' forms after the Hero, Highlights, and Healthcare." },
              ].map((node, i) => (
                <div key={i} className={`flex flex-col md:flex-row items-center gap-8 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="flex-1 w-full md:text-right">
                    {i % 2 === 0 && (
                      <div className="p-8 rounded-2xl bg-zinc-900/40 border border-white/5 transition-all duration-300 h-full laser-card">
                        <h4 className="text-white text-xl font-medium mb-2">{node.step}</h4>
                        <p className="text-zinc-400 text-sm">{node.desc}</p>
                      </div>
                    )}
                  </div>
                  <div className="w-12 h-12 rounded-full border-4 border-zinc-950 bg-yellow-600 shadow-[0_0_20px_rgba(234,179,8,0.5)] z-10 flex items-center justify-center text-black font-bold flex-shrink-0">
                    {i + 1}
                  </div>
                  <div className="flex-1 w-full">
                    {i % 2 !== 0 && (
                      <div className="p-8 rounded-2xl bg-zinc-900/40 border border-white/5 transition-all duration-300 h-full laser-card">
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

        {/* 4. DESIGN DECISIONS */}
        <section className="mb-40 flex flex-col md:flex-row gap-16 relative">
          <div className="w-16 flex-shrink-0 relative hidden md:block">
            <div className="sticky top-32 text-4xl font-light text-zinc-700 font-mono tracking-tighter">04</div>
            <div className="absolute top-16 bottom-0 left-4 w-px bg-gradient-to-b from-zinc-800 to-transparent" />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl md:text-5xl tracking-tight text-white font-bold mb-8">Visual & Interaction Design</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="p-8 bg-zinc-100/5 rounded-2xl border border-white/10">
                  <h4 className="text-yellow-500 font-medium text-lg mb-3">Accessibility & Scaling</h4>
                  <p className="text-zinc-400 text-sm leading-relaxed">Increased font sizes (min 18px body) and line spacing for senior readability. Maintained high-contrast sections and strict WCAG AAA color standards (7:1 ratio).</p>
               </div>
               <div className="p-8 bg-zinc-100/5 rounded-2xl border border-white/10">
                  <h4 className="text-yellow-500 font-medium text-lg mb-3">Iconography</h4>
                  <p className="text-zinc-400 text-sm leading-relaxed">Each highlight mapped to a custom icon (medical cross, shield, calendar). Visual markers broke up the monotony and increased skimming speed.</p>
               </div>
               <div className="p-8 bg-zinc-100/5 rounded-2xl border border-white/10">
                  <h4 className="text-yellow-500 font-medium text-lg mb-3">Authentic Galleries</h4>
                  <p className="text-zinc-400 text-sm leading-relaxed">Space images open in a smooth lightbox. Using real space imagery rather than generic stock photos increased perceived authenticity by 67% in testing.</p>
               </div>
               <div className="p-8 bg-zinc-100/5 rounded-2xl border border-white/10">
                  <h4 className="text-yellow-500 font-medium text-lg mb-3">Trust-Driven Copy</h4>
                  <p className="text-zinc-400 text-sm leading-relaxed">Replaced vague philosophical prose with plain English bullets. Focused copy directly answers what families want: &quot;What will your day look like?&quot;.</p>
               </div>
            </div>
          </div>
        </section>


        {/* LEARNINGS */}
        <section className="mb-40 flex flex-col md:flex-row gap-16 relative">
          <div className="w-16 flex-shrink-0 relative hidden md:block">
            <div className="sticky top-32 text-4xl font-light text-zinc-700 font-mono tracking-tighter">06</div>
            <div className="absolute top-16 bottom-0 left-4 w-px bg-gradient-to-b from-zinc-800 to-transparent" />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl md:text-5xl tracking-tight text-white font-bold mb-8">What We Learned</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "Speed of Understanding", desc: "Users convert when their top questions are answered instantly. Surfacing medical and management data halved comprehension time." },
                { title: "Visual Storytelling Matters", desc: "Breaking monotony with icons, images, and timelines made the page feel shorter and infinitely more readable." },
                { title: "Trust Through Transparency", desc: "Quantifying care credentials created credibility. The explicit operator partnership proved to be a defining differentiator." },
                { title: "Guided Flow Replaces Browsing", desc: "Guiding families step-by-step (trust → daily life → healthcare → amenities) prevented aimless scrolling and bounce." },
                { title: "Offer Early, Ask Early", desc: "Embedding tour requests organically near top content allowed users to act before fatigue set in." },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="p-6 rounded-2xl bg-zinc-900/30 border border-white/5 hover:border-yellow-500/30 transition-colors"
                >
                  <h4 className="text-yellow-500 font-semibold mb-2">{item.title}</h4>
                  <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* PULL QUOTE */}
        <section className="mb-40 flex items-center justify-center py-20 relative px-4">
          <div className="absolute text-[300px] font-serif text-white/[0.03] -mt-32 -ml-20 pointer-events-none select-none">&quot;</div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(234,179,8,0.05),transparent_50%)] pointer-events-none" />
          <div className="max-w-4xl text-center relative z-10">
            <h3 className="text-3xl md:text-5xl font-light text-white italic leading-tight mb-12">
              &quot;The site acts as a confident guide—answering questions logically so prospective residents and children proceed down the funnel without confusion.&quot;
            </h3>
            <p className="text-zinc-500 font-mono uppercase tracking-widest text-sm">Design Outcome</p>
          </div>
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
          <button onClick={onNext} className="px-8 py-4 rounded-full bg-yellow-500 text-black font-bold shadow-[0_0_20px_rgba(234,179,8,0.4)] hover:shadow-[0_0_40px_rgba(234,179,8,0.6)] transition-all hover:scale-105">
            Next Project
          </button>
        </div>
      </footer>
    </motion.div>
  );
}
