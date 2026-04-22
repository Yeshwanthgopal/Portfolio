"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";


// --- CSS Device Mockups ---
const BrowserMockup = () => (
  <a href="/CrediLinq TikTok Landing Page.pdf" target="_blank" rel="noopener noreferrer" className="block w-[90%] md:w-full max-w-4xl mx-auto rounded-xl overflow-hidden border border-zinc-800 bg-zinc-950 shadow-[0_0_80px_rgba(234,179,8,0.15)] transition-all duration-700 hover:shadow-[0_0_120px_rgba(234,179,8,0.25)] hover:-translate-y-2 cursor-pointer relative group">
    <div className="h-8 bg-zinc-900 border-b border-zinc-800 flex items-center px-4 space-x-2 relative z-20">
      <div className="w-3 h-3 rounded-full bg-zinc-700 hover:bg-red-500 transition-colors" />
      <div className="w-3 h-3 rounded-full bg-zinc-700 hover:bg-yellow-500 transition-colors" />
      <div className="w-3 h-3 rounded-full bg-zinc-700 hover:bg-green-500 transition-colors" />
    </div>
    
    <div className="h-[400px] md:h-[600px] bg-zinc-950 flex justify-center relative overflow-hidden group-hover:opacity-90 transition-opacity">
      {/* Invisible overlay over the iframe to catch clicks since iframe consumes events! */}
      <div className="absolute inset-0 z-10" />
      <object data="/CrediLinq TikTok Landing Page.pdf#toolbar=0&navpanes=0&scrollbar=0&view=FitH" type="application/pdf" className="w-full h-[120%] -mt-[1px] pointer-events-none" aria-label="CrediLinq Landing Page PDF Preview">
        <p className="text-zinc-500 flex items-center justify-center p-8">Click to view the CrediLinq PDF Mockup.</p>
      </object>
    </div>
  </a>
);

export default function CaseStudyCredilinq({ onClose, onNext }: { onClose: () => void, onNext?: () => void }) {
  const timelineRef = useRef(null);
  const timelineInView = useInView(timelineRef, { once: true, margin: "-150px" });

  
  

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: 20 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-[9999] bg-[#03030c] overflow-y-auto overflow-x-hidden text-zinc-300 font-sans cursor-default">
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
          .laser-container {
            position: relative;
            z-index: 1;
            transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
            border: 1px solid transparent;
          }
          .laser-svg {
            position: absolute;
            inset: -1px;
            width: calc(100% + 2px);
            height: calc(100% + 2px);
            pointer-events: none;
            z-index: -1;
          }
          .laser-rect-base {
            stroke: #eab308;
            stroke-width: 2;
            stroke-opacity: 0;
            transition: stroke-opacity 0.3s ease;
          }
          .laser-rect-trace {
            stroke: #eab308;
            stroke-width: 3;
            stroke-dasharray: 0.3 0.7;
            opacity: 0;
            filter: drop-shadow(0 0 12px #eab308) drop-shadow(0 0 4px #eab308);
            transition: opacity 0.3s ease;
          }
          .laser-container:hover {
            background: rgba(24, 24, 27, 0.95);
            transform: translateY(-8px);
          }
          .laser-container:hover .laser-rect-base {
            stroke-opacity: 0.2;
          }
          .laser-container:hover .laser-rect-trace {
            opacity: 1;
            animation: trace-infinite 3s linear infinite;
          }
          @keyframes trace-infinite {
            from { stroke-dashoffset: 1; }
            to { stroke-dashoffset: 0; }
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
        <span className="text-xl font-bold tracking-tighter text-white">CrediLinq <span className="text-yellow-500 font-normal">/ Case Study</span></span>
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
            {['Fintech', 'Landing Page UX', 'Conversion Strategy', 'Trust Architecture'].map((tag, i) => (
              <span key={i} className="px-4 py-1.5 rounded-full border border-yellow-500/30 bg-yellow-500/5 text-yellow-500 text-xs font-mono tracking-widest uppercase">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-600 mb-6 drop-shadow-[0_0_30px_rgba(234,179,8,0.3)] tracking-tighter">
            Clarity Converts.
          </h1>
          <p className="text-2xl md:text-3xl text-zinc-400 font-light max-w-3xl leading-relaxed mb-24">
            Redesigning the CrediLinq TikTok Seller landing page into a high-clarity, high-trust acquisition experience that turns complex fintech into confident decisions.
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
                The redesigned CrediLinq TikTok Seller landing page performs better because it makes the funding offer <strong className="text-white">instantly clear</strong>, <strong className="text-white">credible</strong>, and <strong className="text-white">easy to act on</strong>. After the redesign, users understood the value faster, engaged deeper, and moved into the eligibility flow with more confidence.
              </p>
              <p>
                The result is a cleaner acquisition experience that supports higher-intent leads and stronger conversion momentum — turning a complex financial product into a clear, credible, conversion-ready desktop experience.
              </p>
            </div>

            <div className="mt-16 bg-zinc-900/40 border border-white/5 rounded-2xl p-8 md:p-10 backdrop-blur-sm relative overflow-hidden flex flex-col md:flex-row gap-8">
              <div className="absolute top-0 left-0 w-1 h-full bg-yellow-500" />
              <div className="flex-1">
                <h3 className="text-sm font-mono text-zinc-500 uppercase tracking-widest mb-2">Product</h3>
                <p className="text-white font-medium">CrediLinq — TikTok Seller Landing Page</p>
                <p className="text-zinc-500 text-sm mt-1">Fintech / Working Capital</p>
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-mono text-zinc-500 uppercase tracking-widest mb-2">Platform</h3>
                <p className="text-zinc-400 text-sm">Desktop website. First serious acquisition touchpoint for TikTok Shop sellers seeking flexible working capital.</p>
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-mono text-zinc-500 uppercase tracking-widest mb-2">Objective</h3>
                <p className="text-zinc-400 text-sm">Improve clarity, credibility, and conversion by matching how TikTok sellers evaluate funding decisions rapidly.</p>
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
            <p className="text-xl text-zinc-400 font-light mb-16">The original TikTok Seller landing page did not support quick decision-making. The right product existed — but the experience created friction.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "Delayed Value Proposition", desc: "The offer was visible but not immediately actionable. Users had to scroll before understanding what CrediLinq could do for them." },
                { title: "Copy-Heavy Experience", desc: "The page relied too heavily on text and did not visually communicate speed or scale — two things TikTok sellers care deeply about." },
                { title: "Late Trust Signals", desc: "Trust indicators appeared too far down the scroll, slowing confidence-building before users were willing to commit to action." },
                { title: "Abstract Funding Flow", desc: "The financing process felt intangible. First-time visitors had to work too hard to understand revenue-based financing basics." },
                { title: "Early Drop-off", desc: "Users hesitated in the first scroll and needed far more reassurance before they'd even consider starting an eligibility check." },
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
                  ["Immediate Clarity", "Make the funding value clear in the very first screen — amount, pricing, and CTA all visible above the fold."],
                  ["Visual Trust", "Communicate speed, scale, and credibility through proof points like $250M+ disbursed and 10,000+ sellers, surfaced earlier."],
                  ["Scannable Offer", "Turn financing into a scannable, easy-to-understand story — use cases, steps, and pricing clearly laid out."],
                  ["Reduced Friction", "Guide users from curiosity to eligibility check with less hesitation through cleaner hierarchy and intentional flow."],
                  ["Transparency", "Clear pricing language — no equity, no hidden fees — addressing the biggest hesitation in fintech products directly."],
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
            <h2 className="text-3xl md:text-5xl tracking-tight text-white font-bold mb-8">Real-Time Research Findings</h2>
            <p className="text-xl text-zinc-400 font-light mb-16">Shaped by observed user behavior, sales feedback, and competitive analysis — four core insights drove every redesign decision.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 perspective-[1000px]">
              {[
                { q: "Attention is Won Fast", a: "Desktop users decided within seconds if the page felt relevant. They scanned the hero for numbers, proof, and control before reading any copy." },
                { q: "Trust Needs Specifics", a: "Generic claims had little impact. Numbers, clear pricing, and visible proof points like '$250M+ disbursed' built significantly stronger confidence." },
                { q: "Pricing Changes Behaviour", a: "Users paid close attention to fees and repayment terms before scrolling further. Direct pricing language made them more confident about continuing." },
                { q: "Complexity Kills Momentum", a: "When funding sounded abstract, users hesitated. When the page showed exactly how the process worked, users moved forward far more easily." },
              ].map((item, i) => (
                <div key={i} className="group relative w-full h-[260px] bg-transparent cursor-pointer [perspective:1000px]">
                  <div className="absolute inset-0 transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    {/* Front */}
                    <div className="absolute inset-0 bg-zinc-900 border border-white/10 rounded-2xl p-8 flex flex-col justify-center items-center text-center [backface-visibility:hidden]">
                      <div className="w-12 h-12 rounded-full bg-yellow-500/10 border border-yellow-500/30 flex items-center justify-center mb-6 text-yellow-500">{i + 1}</div>
                      <h3 className="text-white text-xl font-medium">{item.q}</h3>
                      <span className="text-xs text-zinc-600 mt-8 font-mono uppercase tracking-widest">Hover to reveal insight</span>
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

        {/* 4. APPROACH / TIMELINE */}
        <section className="mb-40 relative pt-16">
          <div ref={timelineRef} className="text-center mb-24">
            <h2 className="text-3xl md:text-5xl tracking-tight text-white font-bold mb-6">Our Approach</h2>
            <p className="text-xl text-zinc-400 font-light max-w-2xl mx-auto">A conversion-led, trust-first desktop UX strategy — restructuring every layer of the page.</p>
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

            <div className="space-y-16 relative">
            {[
              { step: "Hero Re-Architecture", desc: "Funding up to $2M, pricing from 1.5% per month, and the eligibility form — all visible without scrolling. Reduced uncertainty immediately." },
              { step: "Visual Proof & Credibility", desc: "Brought $250M+ disbursed and 10,000+ sellers supported front and centre. Early validation before users commit to any action." },
              { step: "Making the Offer Tangible", desc: "Connected the product to real seller goals: funding viral products, scaling TikTok ads, bridging payout gaps. Practical over abstract." },
              { step: "Simplified 3-Step Flow", desc: "Apply -> Fast Decision -> Access Funds. A clear structure that makes the process feel lighter and easier to trust from the first glance." },
              { step: "Pricing & Control", desc: "No equity, no hidden fees, repayment aligned with payout cycles. Directly addressed the biggest source of hesitation in fintech products." },
            ].map((node, i) => (
              <div key={i} className={`flex flex-col md:flex-row items-center gap-8 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                {/* Card Container */}
                <div className={`flex-1 w-full ${i % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                  <div className="p-8 rounded-2xl bg-zinc-900/40 transition-all duration-500 h-full laser-container">
                    <svg className="laser-svg hidden md:block" fill="none">
                      <rect x="1" y="1" width="calc(100% - 2px)" height="calc(100% - 2px)" rx="16" className="laser-rect-base" />
                      <rect x="1" y="1" width="calc(100% - 2px)" height="calc(100% - 2px)" rx="16" pathLength="1" className="laser-rect-trace" />
                    </svg>
                    <h4 className="text-white text-xl font-medium mb-2">{node.step}</h4>
                    <p className="text-zinc-400 text-sm">{node.desc}</p>
                  </div>
                </div>

                {/* Number Indicator (Desktop Only) */}
                <div className="hidden md:flex w-12 h-12 rounded-full border-4 border-zinc-950 bg-yellow-500 shadow-[0_0_20px_rgba(234,179,8,0.5)] z-10 items-center justify-center text-black font-bold flex-shrink-0">
                  {i + 1}
                </div>

                {/* Spacer for alternating layout (Desktop Only) */}
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
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
                { title: "Speed is Perceived Speed", desc: "Users don't just care how fast a product is. They care how fast it feels to understand." },
                { title: "Clarity Builds Financial Trust", desc: "When the interface explains the offer quickly and visibly, users are more willing to continue through the funnel." },
                { title: "Control Over Pressure", desc: "Users respond better when they feel informed and in charge, not pushed by aggressive messaging." },
                { title: "Transparency Reduces Hesitation", desc: "Clear pricing and process visibility do more to improve conversion than aggressive CTAs ever could." },
                { title: "Outcomes Over Features", desc: "When the page shows what the funding helps sellers do, the product feels more relevant and immediately useful." },
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
              &quot;The redesigned CrediLinq page turns a complex financial product into a clear, credible, and conversion-ready experience — one that understands how TikTok sellers actually operate.&quot;
            </h3>
            <p className="text-zinc-500 font-mono uppercase tracking-widest text-sm">Design Strategy Conclusion</p>
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
