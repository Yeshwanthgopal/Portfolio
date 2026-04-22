"use client";
import { useState, useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Preloader from "@/components/Preloader";
import ContactModal from "@/components/ContactModal";

export default function Home() {
  const [showContent, setShowContent] = useState(false);
  const [skipPreloader, setSkipPreloader] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    if (typeof window !== "undefined") {
      if (sessionStorage.getItem("hasVisited")) {
        setSkipPreloader(true);
        setShowContent(true);
        setTimeout(() => {
          const scrollPos = sessionStorage.getItem("scrollPosition");
          if (scrollPos) window.scrollTo({ top: parseInt(scrollPos, 10), behavior: "instant" });
        }, 100);
      }
      
      const handleScroll = () => {
        sessionStorage.setItem("scrollPosition", window.scrollY.toString());
      };
      
      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const handleCollaborate = (e: React.MouseEvent) => {
    e.preventDefault();
    const email = "yeshwanthgopaljaladi@gmail.com";
    const mailtoUrl = `mailto:${email}`;
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;

    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 768;

    if (isMobile) {
      window.location.href = mailtoUrl;
    } else {
      setShowContactModal(true);
    }
  };

  if (!isMounted) return <div className="min-h-screen bg-zinc-950" />;

  return (
    <>
      {!skipPreloader && <Preloader onFlash={() => setShowContent(true)} />}
      
      {showContent && (
        <main className="relative bg-zinc-950 min-h-screen text-zinc-100 font-sans selection:bg-yellow-500/20 overflow-clip">
          <HeroSection />
          <Experience />
          <Skills />
          <Projects />
          <Education />
          
          <footer className="py-16 border-t border-white/10 bg-zinc-950 text-center text-zinc-500 flex flex-col items-center gap-4">
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 font-mono text-sm uppercase tracking-widest text-zinc-400">
              <button 
                onClick={handleCollaborate}
                className="hover:text-yellow-400 transition-colors"
              >
                yeshwanthgopaljaladi@gmail.com
              </button>
              <span className="hidden md:inline text-zinc-700">•</span>
              <a href="tel:+918374141583" className="hover:text-yellow-400 transition-colors">+91 8374141583</a>
            </div>
            <div className="text-sm font-mono uppercase tracking-widest text-zinc-600 mt-4">
              © {new Date().getFullYear()} Yeshwanth Gopal Jaladi. All rights reserved.
            </div>
          </footer>

          <ContactModal 
            isOpen={showContactModal} 
            onClose={() => setShowContactModal(false)} 
          />
        </main>
      )}
    </>
  );
}
