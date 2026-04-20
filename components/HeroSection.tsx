"use client";
import React, { useRef, useEffect, MouseEvent, useState } from "react";

const LEAVES = Array.from({ length: 30 }).map((_, i) => ({
  id: i,
  left: Math.random() * 100,
  top: -10, // Always drop from above the screen
  delay: Math.random() * -20, // Start already active using negative delay
  duration: 10 + Math.random() * 15,
  size: 12 + Math.random() * 35, // Various sizes from tiny to large
  xSway: `${(Math.random() - 0.5) * 400}px` // Drift violently left or right while falling
}));

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const colorImgRef = useRef<HTMLImageElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isGlitching, setIsGlitching] = useState(false);
  const [isSwapped, setIsSwapped] = useState(false);
  const [isGameOpen, setIsGameOpen] = useState(false);

  useEffect(() => {
    setIsLoaded(true);

    const interval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsSwapped(prev => !prev), 200);
      setTimeout(() => setIsGlitching(false), 450);
    }, 14000);

    // Particle Repulsion Physics Loop
    let mouseX = -1000;
    let mouseY = -1000;
    const handleGlobalMove = (e: globalThis.MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    window.addEventListener('mousemove', handleGlobalMove);

    let rafId: number;
    const leaves = document.querySelectorAll('.interactive-leaf') as NodeListOf<HTMLDivElement>;

    const updatePhysics = () => {
      leaves.forEach(leaf => {
        const rect = leaf.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const distX = centerX - mouseX;
        const distY = centerY - mouseY;
        const distance = Math.sqrt(distX * distX + distY * distY);

        let currentX = parseFloat(leaf.dataset.pushX || '0');
        let currentY = parseFloat(leaf.dataset.pushY || '0');

        if (distance < 350) {
           const force = Math.pow((350 - distance) / 350, 1.5); // Exponential force curving so edge is soft, close is explosive
           const pushFactor = 40; // Massive push factor
           currentX += (distX / distance) * force * pushFactor;
           currentY += (distY / distance) * force * pushFactor;
        }

        // Friction drift decay - higher number means they glide further before stopping
        currentX *= 0.94;
        currentY *= 0.94;
        
        leaf.dataset.pushX = currentX.toString();
        leaf.dataset.pushY = currentY.toString();

        leaf.style.transform = `translate(${currentX}px, ${currentY}px)`;
      });
      rafId = requestAnimationFrame(updatePhysics);
    };
    updatePhysics();

    return () => {
      clearInterval(interval);
      window.removeEventListener('mousemove', handleGlobalMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current || !colorImgRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    // Calculate absolute pixels for exact mask positioning
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    colorImgRef.current.style.transition = "none";
    colorImgRef.current.style.opacity = "1";
    
    // Wobbly round organic blob acting as the mask
    const blobSvg = encodeURIComponent(`
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <defs><filter id="f"><feGaussianBlur stdDeviation="3"/></filter></defs>
        <path d="M 50,5 C 75,0 95,20 90,45 C 85,75 70,95 45,90 C 20,85 0,70 5,45 C 10,20 25,10 50,5 Z" fill="black" filter="url(#f)"/>
      </svg>
    `);
    
    // Significantly larger reveal area
    const size = 200;
    const offset = size / 2;
    const maskStr = `url('data:image/svg+xml;utf8,${blobSvg}')`;
    
    colorImgRef.current.style.webkitMaskImage = maskStr;
    colorImgRef.current.style.maskImage = maskStr;
    colorImgRef.current.style.webkitMaskPosition = `${x - offset}px ${y - offset}px`;
    colorImgRef.current.style.maskPosition = `${x - offset}px ${y - offset}px`;
    colorImgRef.current.style.webkitMaskSize = `${size}px ${size}px`;
    colorImgRef.current.style.maskSize = `${size}px ${size}px`;
    colorImgRef.current.style.webkitMaskRepeat = "no-repeat";
    colorImgRef.current.style.maskRepeat = "no-repeat";
  };

  const handleMouseLeave = () => {
    if (!colorImgRef.current) return;
    colorImgRef.current.style.transition = "opacity 0.5s ease-out";
    colorImgRef.current.style.opacity = "0";
  };

  const socialLinks = [
    {
      name: "Dribbble",
      url: "#",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#ea4c89]">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"></path>
        </svg>
      )
    },
    {
      name: "Instagram",
      url: "#",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#E1306C]">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      )
    },
    {
      name: "LinkedIn",
      url: "#",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#0a66c2]">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      )
    },
    {
      name: "Behance",
      url: "#",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-[#1769ff]">
          <path d="M21.99 15.3v-.9c0-3.3-1.62-5.7-5.12-5.7-3.69 0-5.32 2.66-5.32 6.03 0 3.39 1.8 5.97 5.75 5.97 3.3 0 4.95-1.92 5.09-4.2h-2.1c-.24 1.29-1.38 1.95-2.91 1.95-1.74 0-2.82-1.02-2.97-3.15h7.58zm-7.53-2.1c.21-1.68 1.26-2.61 2.52-2.61 1.35 0 2.25.93 2.37 2.61h-4.89z"/>
          <path d="M2.93 20.7h5.13c4.11 0 5.4-2.16 5.4-4.8 0-2.13-1.2-3.48-2.67-4.08 1.23-.57 2.22-1.8 2.22-3.63 0-2.64-1.74-4.29-5.19-4.29H2.93v16.8zm2.4-14.7h2.25c1.77 0 2.7.75 2.7 2.19 0 1.5-1.05 2.22-2.85 2.22H5.33V6zM5.33 18.6v-4.5h2.52c2.04 0 3.21.9 3.21 2.37 0 1.56-1.14 2.13-3 2.13H5.33z"/>
          <path d="M17.43 6h4.5v1.8h-4.5z"/>
        </svg>
      )
    }
  ];

  // Thunder Cursor dynamically generated
  const thunderSvg = encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24"><path fill="#eab308" stroke="#000000" stroke-width="1.5" d="M13 22l1-9H9l6-11v8h4l-8 12z"/></svg>`
  );

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        /* Falling Particles Animation */
        @keyframes floatParticle {
          0% { transform: translate3d(0, 0, 0) rotate(0deg); opacity: 0; }
          10% { opacity: 0.9; }
          90% { opacity: 0.9; }
          100% { transform: translate3d(var(--xSway), 120vh, 0) rotate(720deg); opacity: 0; }
        }
        @keyframes spinLeaf {
          0% { transform: rotateY(0deg) rotateX(0deg); }
          100% { transform: rotateY(360deg) rotateX(180deg); }
        }
        
        @keyframes heroFadeIn {
          from { opacity: 0; filter: brightness(2); }
          to { opacity: 1; filter: brightness(1); }
        }
        @keyframes nameSettle {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideUpFade {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes riseUp {
          from { transform: translate3d(0, 20vh, 0); opacity: 0; }
          to { transform: translate3d(0, 0, 0); opacity: 1; }
        }
        
        /* Horizontal Slice Matrix Glitch - Keeps the base static and tears pieces out */
        @keyframes slice-1 {
          0% { clip-path: inset(10% 0 75% 0); transform: scale(1.5) translateY(25%) translate3d(-20px, 0, 0); filter: hue-rotate(90deg); }
          25% { clip-path: inset(45% 0 35% 0); transform: scale(1.5) translateY(25%) translate3d(25px, 0, 0); filter: invert(1); }
          50% { clip-path: inset(80% 0 5% 0); transform: scale(1.5) translateY(25%) translate3d(-30px, 0, 0); filter: contrast(3); }
          75% { clip-path: inset(20% 0 60% 0); transform: scale(1.5) translateY(25%) translate3d(15px, 0, 0); }
          100% { clip-path: inset(60% 0 10% 0); transform: scale(1.5) translateY(25%) translate3d(-10px, 0, 0); filter: hue-rotate(180deg); }
        }
        @keyframes slice-2 {
          0% { clip-path: inset(60% 0 10% 0); transform: scale(1.5) translateY(25%) translate3d(25px, 0, 0); filter: saturate(4); }
          25% { clip-path: inset(15% 0 70% 0); transform: scale(1.5) translateY(25%) translate3d(-20px, 0, 0); filter: blur(2px); }
          50% { clip-path: inset(5% 0 85% 0); transform: scale(1.5) translateY(25%) translate3d(30px, 0, 0); filter: hue-rotate(-90deg); }
          75% { clip-path: inset(70% 0 15% 0); transform: scale(1.5) translateY(25%) translate3d(-25px, 0, 0); filter: invert(0.8); }
          100% { clip-path: inset(30% 0 50% 0); transform: scale(1.5) translateY(25%) translate3d(10px, 0, 0); }
        }
        @keyframes slice-3 {
          0% { clip-path: inset(85% 0 5% 0); transform: scale(1.5) translateY(25%) translate3d(-15px, 0, 0); filter: invert(1); }
          25% { clip-path: inset(25% 0 60% 0); transform: scale(1.5) translateY(25%) translate3d(15px, 0, 0); }
          50% { clip-path: inset(45% 0 45% 0); transform: scale(1.5) translateY(25%) translate3d(-10px, 0, 0); filter: contrast(2); }
          75% { clip-path: inset(10% 0 80% 0); transform: scale(1.5) translateY(25%) translate3d(20px, 0, 0); filter: hue-rotate(45deg); }
          100% { clip-path: inset(55% 0 25% 0); transform: scale(1.5) translateY(25%) translate3d(-5px, 0, 0); }
        }

        .glitch-slice-1 { animation: slice-1 0.45s infinite steps(1, end); }
        .glitch-slice-2 { animation: slice-2 0.45s infinite steps(1, end); }
        .glitch-slice-3 { animation: slice-3 0.45s infinite steps(1, end); }

        .is-loaded { animation: heroFadeIn 0.8s ease-in both; }
        .is-loaded .name-settle { animation: nameSettle 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.2s both; }
        .is-loaded .slide-up-1 { animation: slideUpFade 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.4s both; }
        .is-loaded .slide-up-2 { animation: slideUpFade 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.5s both; }
        .is-loaded .slide-up-3 { animation: slideUpFade 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.6s both; }
        .is-loaded .social-1 { animation: slideUpFade 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.75s both; }
        .is-loaded .social-2 { animation: slideUpFade 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.8s both; }
        .is-loaded .social-3 { animation: slideUpFade 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.85s both; }
        .is-loaded .social-4 { animation: slideUpFade 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.9s both; }
        .is-loaded .slide-up-scroll { animation: slideUpFade 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.9s both; }
        .is-loaded .rise-up { animation: riseUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.4s both; }

        /* Thunder custom cursor applied to entire hero bounding box */
        .thunder-cursor {
          cursor: url('data:image/svg+xml;utf8,${thunderSvg}') 12 12, auto;
        }
      `}} />

      <section className={`thunder-cursor relative min-h-[100dvh] md:min-h-[75dvh] lg:min-h-[100dvh] w-full overflow-hidden bg-zinc-950 text-white flex flex-col md:flex-row md:items-center ${isLoaded ? 'is-loaded' : 'opacity-0'}`}>
        
        {/* INTERACTIVE LEAVES OVERLAY */}
        {LEAVES.map(leaf => (
          <div key={leaf.id} className="interactive-leaf absolute pointer-events-none z-[5]" style={{ left: `${leaf.left}%`, top: `${leaf.top}%`, width: `${leaf.size}px`, height: `${leaf.size}px` }}>
            {/* The inner element handles the floating animation using omnidirectional variables */}
            <div 
              className="w-full h-full"
              style={{
                animation: `floatParticle ${leaf.duration}s linear infinite`,
                animationDelay: `${leaf.delay}s`,
                ['--xSway' as string]: `${leaf.xSway}`
              }}
            >
              <svg 
                viewBox="0 0 24 24" fill="currentColor" 
                className="w-full h-full text-green-500 drop-shadow-sm/20" 
                style={{ animation: `spinLeaf ${leaf.duration / 3}s ease-in-out infinite alternate`, animationDelay: `${leaf.delay}s` }}
              >
                <path d="M12 2c0 0-4.5 4-4.5 10s4.5 10 4.5 10 4.5-4 4.5-10S12 2 12 2z" />
              </svg>
            </div>
          </div>
        ))}

        {/* CINEMATIC BACKGROUND IMAGE */}
        <div className="absolute inset-0 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/bg-hero.png" alt="Spotlight Background" className="w-full h-full object-cover object-center opacity-70" />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/90 via-zinc-950/50 to-transparent w-full md:w-[60%]" />
        </div>

        {/* MAIN BOUNDED CONTAINER FOR TEXT AND CHAT - Keeps 4k screens from blowing out */}
        <div className="relative z-10 w-full max-w-[1536px] mx-auto min-h-[100dvh] md:min-h-[75dvh] lg:min-h-[100dvh] flex flex-col md:flex-row md:items-stretch">
          
          {/* MAIN TEXT CONTENT (FLEX TOP CELL ON MOBILE, LEFT CELL ON DESKTOP) */}
          <div className="relative z-30 w-full md:w-[55%] flex-none shrink-0 flex flex-col justify-center items-center text-center md:items-start md:text-left px-4 md:px-12 lg:px-20 gap-3 md:gap-4 pointer-events-none pt-[120px] md:pt-0 pb-2 md:pb-0">
            
            {/* YELLOW SEKUYA NAME */}
            <div className="name-settle pointer-events-auto w-full">
              <h1 
                style={{ fontFamily: "'Sekuya', sans-serif" }} 
                className="text-yellow-500 text-[36px] sm:text-[42px] md:text-[5vw] xl:text-[80px] leading-[0.9] md:leading-[0.9] drop-shadow-[0_10px_20px_rgba(234,179,8,0.15)] mb-1 md:mb-2 uppercase w-full"
              >
                YESHWANTH<br/>JALADI
              </h1>
            </div>
            
            {/* ROLE */}
            <h3 className="font-bold text-[14px] sm:text-[16px] md:text-[20px] lg:text-[24px] xl:text-[28px] tracking-tight slide-up-1 text-zinc-100 uppercase mt-1 md:mt-2 pointer-events-auto whitespace-nowrap">
              UI/UX Designer <span className="text-zinc-600 font-light mx-1 md:mx-2">|</span> Graphic Designer
            </h3>
            
            {/* PARAGRAPH */}
            <p className="text-zinc-400 text-[13px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] max-w-[280px] sm:max-w-[300px] md:max-w-[400px] lg:max-w-[450px] leading-relaxed font-medium slide-up-2 pointer-events-auto mx-auto md:mx-0">
              I make complex things feel simple, and simple things feel good.
            </p>

            {/* ACTION BUTTONS */}
            <div className="slide-up-3 mt-4 md:mt-6 pointer-events-auto flex flex-wrap justify-center md:justify-start items-center gap-2 md:gap-4 w-full">
              <button className="rounded-full bg-yellow-500 text-black font-semibold px-5 py-3 text-[13px] md:px-8 md:py-4 md:text-[16px] flex items-center gap-2 hover:bg-yellow-400 transition-all shadow-[0_0_20px_rgba(234,179,8,0.2)] hover:shadow-[0_0_35px_rgba(234,179,8,0.4)]">
                Let's collaborate 
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="md:w-[18px] md:h-[18px]">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </button>
              
              <button 
                onClick={() => setIsGameOpen(true)}
                className="rounded-full bg-transparent border-2 border-yellow-500 text-yellow-500 font-semibold px-5 py-3 text-[13px] md:px-8 md:py-[13px] md:text-[16px] flex items-center gap-2 hover:bg-yellow-500 hover:text-black transition-all shadow-[0_0_15px_rgba(234,179,8,0.1)] hover:shadow-[0_0_30px_rgba(234,179,8,0.3)]"
              >
                Let's play ⚡
              </button>
            </div>
          </div>

          {/* RIGHT SIDE PORTRAITS OVERLAY */}
          {/* Strictly flex-based layout for robust partitioning on Laptops/Tablets */}
          <div 
            className="relative z-20 w-full flex-1 md:w-[45%] flex items-end justify-center md:justify-end pointer-events-auto rise-up mt-4 md:mt-0 overflow-visible"
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            {/* Base Image State */}
            <img 
              src={isSwapped ? "/Transformed.png" : "/Normal.png"}
              alt="Base Portrait" 
              className="w-full h-auto max-h-full object-contain object-bottom pointer-events-none scale-[1.15] md:scale-[1.25] lg:scale-[1.3] min-[2500px]:scale-[1.6] origin-bottom md:translate-x-[5%] xl:translate-y-[25%] min-[2500px]:translate-y-[15%]" 
            />
            
            {/* Glitch Slices Layer */}
            {isGlitching && (
              <>
                <img 
                  src={!isSwapped ? "/Transformed.png" : "/Normal.png"}
                  alt="Glitch Slice 1" 
                  className="absolute bottom-0 w-full h-auto max-h-full object-contain object-bottom pointer-events-none scale-[1.15] md:scale-[1.25] lg:scale-[1.3] min-[2500px]:scale-[1.6] origin-bottom md:translate-x-[5%] xl:translate-y-[25%] min-[2500px]:translate-y-[15%] glitch-slice-1 opacity-90" 
                />
                <img 
                  src={isSwapped ? "/Transformed.png" : "/Normal.png"}
                  alt="Glitch Slice 2" 
                  className="absolute bottom-0 w-full h-auto max-h-full object-contain object-bottom pointer-events-none scale-[1.15] md:scale-[1.25] lg:scale-[1.3] min-[2500px]:scale-[1.6] origin-bottom md:translate-x-[5%] xl:translate-y-[25%] min-[2500px]:translate-y-[15%] glitch-slice-2 mix-blend-screen" 
                />
                <img 
                  src={!isSwapped ? "/Transformed.png" : "/Normal.png"}
                  alt="Glitch Slice 3" 
                  className="absolute bottom-0 w-full h-auto max-h-full object-contain object-bottom pointer-events-none scale-[1.15] md:scale-[1.25] lg:scale-[1.3] min-[2500px]:scale-[1.6] origin-bottom md:translate-x-[5%] xl:translate-y-[25%] min-[2500px]:translate-y-[15%] glitch-slice-3 opacity-90" 
                />
              </>
            )}

            {/* Masked Overlay State */}
            <img 
              ref={colorImgRef}
              src={isSwapped ? "/Normal.png" : "/Transformed.png"}
              alt="Revealed Portrait" 
              className="absolute bottom-0 w-full h-auto max-h-full object-contain object-bottom pointer-events-none opacity-0 scale-[1.15] md:scale-[1.25] lg:scale-[1.3] min-[2500px]:scale-[1.6] origin-bottom md:translate-x-[5%] xl:translate-y-[25%] min-[2500px]:translate-y-[15%] hidden md:block"
              style={{ 
                WebkitMaskImage: `radial-gradient(180px circle at 50% 50%, black 10%, transparent 80%)`,
                maskImage: `radial-gradient(180px circle at 50% 50%, black 10%, transparent 80%)`
              }}
            />
          </div>
        </div>

        {/* BOTTOM LEFT SOCIAL BUTTONS */}
        <div className="absolute bottom-[40px] left-[24px] md:left-[48px] z-30 flex gap-[16px] items-center pointer-events-auto">
          {socialLinks.map((link, index) => (
            <a 
              key={link.name}
              href={link.url}
              className={`flex items-center justify-center w-[48px] h-[48px] border border-white/5 bg-zinc-900/60 backdrop-blur-md rounded-full hover:bg-yellow-500/20 hover:border-yellow-500/40 transition-colors shadow-sm social-${index + 1}`}
              title={link.name}
            >
              {link.icon}
            </a>
          ))}
        </div>

        {/* RIGHT EDGE SCROLL INDICATOR */}
        <div className="absolute right-[-14px] top-1/2 -translate-y-1/2 text-zinc-500 text-[11px] font-bold tracking-[3px] rotate-90 z-30 opacity-70 slide-up-scroll pointer-events-none">
          SCROLL ↓
        </div>

        {/* ZENITSU RUN MODAL (IFRAME) */}
        {isGameOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md pointer-events-auto">
            <div className="relative w-[95%] max-w-[800px] h-[400px] md:h-[500px] bg-zinc-950 border-4 border-yellow-500 rounded-xl shadow-[0_0_80px_rgba(234,179,8,0.3)] overflow-hidden flex flex-col">
              
              {/* Custom Header Bar */}
              <div className="bg-zinc-900 border-b border-yellow-500/30 px-4 py-3 flex justify-between items-center z-10">
                <span className="text-yellow-500 font-bold tracking-widest" style={{ fontFamily: "'Courier New', Courier, monospace" }}>ZENITSU_RUN.EXE</span>
                <button 
                  onClick={() => setIsGameOpen(false)}
                  className="text-zinc-400 hover:text-red-500 transition-colors pointer-events-auto"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
              </div>

              {/* Game Iframe */}
              <div className="flex-1 w-full relative bg-[#03030f]">
                 <iframe 
                   src="/zenitsu.html" 
                   className="absolute inset-0 w-full h-full border-0" 
                   title="Zenitsu Run Canvas Game"
                   onLoad={(e) => {
                     const iframe = e.target as HTMLIFrameElement;
                     iframe.contentWindow?.focus();
                   }}
                 />
              </div>

            </div>
          </div>
        )}

      </section>
    </>
  );
}
