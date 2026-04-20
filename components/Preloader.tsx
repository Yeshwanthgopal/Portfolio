import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const QUOTES = [
  { text: "I'm not gonna run away, I never go back on my word!", author: "Naruto Uzumaki" },
  { text: "No matter how hard or impossible it is, never lose sight of your goal.", author: "Monkey D. Luffy" },
  { text: "Set your heart ablaze, go beyond your limits!", author: "Kyojuro Rengoku" },
  { text: "I can do it. I know I can do it. I'm the guy who gets it done!", author: "Tanjiro Kamado" },
  { text: "If you don't fight, you can't win! Fight! Fight!", author: "Eren Yeager" },
  { text: "I've decided. I'm going to save people. I won't ever doubt myself again.", author: "Yuji Itadori" },
  { text: "If you can only do one thing, hone it to perfection. Hone it to the utmost limit!", author: "Zenitsu Agatsuma" }
];

// Left Eye Pupils (moves Left, then Right, then Center)
const irisLeftVariants = {
  animate: {
    x: [0, 0, -35, -35, 35, 35, 0, 0],
    transition: {
      duration: 4,
      times: [0, 0.1, 0.15, 0.35, 0.4, 0.6, 0.65, 1],
      ease: "easeInOut"
    }
  }
};

// Right Eye Pupils (ScaleX is inverted, so +X moves it visually to the screen's Left)
const irisRightVariants = {
  animate: {
    x: [0, 0, 35, 35, -35, -35, 0, 0],
    transition: {
      duration: 4,
      times: [0, 0.1, 0.15, 0.35, 0.4, 0.6, 0.65, 1],
      ease: "easeInOut"
    }
  }
};

const leftBlink = {
  animate: {
    scaleY: [1, 1], 
    transition: {
      duration: 4,
      times: [0, 1]
    }
  }
};

const rightBlink = {
  animate: {
    scaleY: [1, 1, 0.05], 
    scaleX: [-1, -1, -1],
    transition: {
      duration: 4,
      times: [0, 0.95, 1]
    }
  }
};

export default function Preloader({ onFlash }: { onFlash: () => void }) {
  const [phase, setPhase] = useState<"loading" | "flash" | "complete">("loading");
  const [quote, setQuote] = useState(QUOTES[0]);

  useEffect(() => {
    setQuote(QUOTES[Math.floor(Math.random() * QUOTES.length)]);
    
    // Exactly 4000ms, immediately triggering the flash phase
    const timer = setTimeout(() => {
      if (typeof window !== 'undefined') sessionStorage.setItem("hasVisited", "true");
      setPhase("flash");
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (phase === "flash") {
      onFlash(); // Instantly trigger the main page rendering
      const flasher = setTimeout(() => {
        setPhase("complete"); // Unmount the preloader completely after the fade
      }, 300); 
      return () => clearTimeout(flasher);
    }
  }, [phase, onFlash]);

  if (phase === "complete") return null;

  return (
    <div className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center pointer-events-none ${phase === "loading" ? "bg-black" : ""}`}>
      
      {(phase === "loading") && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="flex flex-col items-center justify-center gap-10 max-w-4xl px-4 w-full relative z-50 text-center"
        >
          {/* Exact Replica Zenitsu Vector Eyes */}
          <div className="flex gap-4 md:gap-10 items-center justify-center mb-4">
            
            {/* Left Eye */}
            <motion.div 
              variants={leftBlink} animate="animate"
              className="w-40 h-32 md:w-56 md:h-44"
              style={{ transformOrigin: "center center" }}
            >
              <svg width="100%" height="100%" viewBox="0 0 200 150" className="drop-shadow-[0_0_15px_rgba(253,224,71,0.15)]">
                <defs>
                  <clipPath id="leftEyeClip">
                     <path d="M 10 115 Q 90 0 180 55 L 140 130 L 50 135 Z" />
                  </clipPath>
                  <linearGradient id="zenitsuIrisLeft" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="15%" stopColor="#4a2211" />
                    <stop offset="16%" stopColor="#251108" />
                    <stop offset="20%" stopColor="#251108" />
                    <stop offset="21%" stopColor="#4a2211" />
                    
                    <stop offset="35%" stopColor="#4a2211" />
                    <stop offset="36%" stopColor="#251108" />
                    <stop offset="40%" stopColor="#251108" />
                    <stop offset="41%" stopColor="#4a2211" />

                    <stop offset="50%" stopColor="#4a2211" />
                    <stop offset="52%" stopColor="#df9f49" />
                    <stop offset="100%" stopColor="#fce46c" />
                  </linearGradient>
                </defs>

                {/* Worried Eyebrow */}
                <path d="M 40 45 Q 100 25 170 15" stroke="#31170d" strokeWidth="6" strokeLinecap="round" fill="none" />
                
                <g clipPath="url(#leftEyeClip)">
                  <path d="M 10 115 Q 90 0 180 55 L 140 130 L 50 135 Z" fill="#ffffff" />
                  
                  <motion.g variants={irisLeftVariants} animate="animate">
                    <circle cx="100" cy="85" r="46" fill="url(#zenitsuIrisLeft)" stroke="#251108" strokeWidth="4" />
                    <path d="M 77 85 L 123 85 A 23 23 0 0 1 77 85" fill="#36170a" />
                  </motion.g>
                </g>
                
                <path d="M -5 125 Q 90 -10 190 60" stroke="#251108" strokeWidth="22" strokeLinecap="square" fill="none" />
                
                <path d="M 5 110 L 50 135" stroke="#251108" strokeWidth="5" strokeLinecap="round" fill="none" />
                <path d="M 140 130 L 190 55" stroke="#251108" strokeWidth="5" strokeLinecap="round" fill="none" />
              </svg>
            </motion.div>

            {/* Right Eye */}
            <motion.div 
              variants={rightBlink} animate="animate"
              className="w-40 h-32 md:w-56 md:h-44"
              style={{ transformOrigin: "center center", scaleX: -1 }}
            >
              <svg width="100%" height="100%" viewBox="0 0 200 150" className="drop-shadow-[0_0_15px_rgba(253,224,71,0.15)]">
                <defs>
                  <clipPath id="rightEyeClip">
                     <path d="M 10 115 Q 90 0 180 55 L 140 130 L 50 135 Z" />
                  </clipPath>
                </defs>

                <path d="M 40 45 Q 100 25 170 15" stroke="#31170d" strokeWidth="6" strokeLinecap="round" fill="none" />
                
                <g clipPath="url(#rightEyeClip)">
                  <path d="M 10 115 Q 90 0 180 55 L 140 130 L 50 135 Z" fill="#ffffff" />
                  
                  <motion.g variants={irisRightVariants} animate="animate">
                    <circle cx="100" cy="85" r="46" fill="url(#zenitsuIrisLeft)" stroke="#251108" strokeWidth="4" />
                    <path d="M 77 85 L 123 85 A 23 23 0 0 1 77 85" fill="#36170a" />
                  </motion.g>
                </g>
                
                <path d="M -5 125 Q 90 -10 190 60" stroke="#251108" strokeWidth="22" strokeLinecap="square" fill="none" />
                
                <path d="M 5 110 L 50 135" stroke="#251108" strokeWidth="5" strokeLinecap="round" fill="none" />
                <path d="M 140 130 L 190 55" stroke="#251108" strokeWidth="5" strokeLinecap="round" fill="none" />
              </svg>
            </motion.div>

          </div>

          <div className="flex flex-col items-center">
            <p className="text-zinc-100 text-lg md:text-2xl font-serif max-w-3xl mx-auto italic leading-relaxed mb-6">
              "{quote.text}"
            </p>
            <span className="text-yellow-500 font-bold uppercase tracking-widest text-sm drop-shadow-[0_0_12px_rgba(234,179,8,0.7)]">
              — {quote.author}
            </span>
          </div>
        </motion.div>
      )}

      {/* Lightning White Flash blending instantly into the loaded page */}
      {(phase === "flash") && (
        <motion.div 
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="absolute inset-0 bg-white z-[10000] pointer-events-none"
        />
      )}
    </div>
  );
}
