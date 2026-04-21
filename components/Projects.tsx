import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import CaseStudyConversive from "./CaseStudyConversive";
import CaseStudySunstone from "./CaseStudySunstone";
import CaseStudyCredilinq from "./CaseStudyCredilinq";
import CaseStudyGemstower from "./CaseStudyGemstower";

export default function Projects() {
  const projects = [
    {
      title: "Conversive",
      category: "UI Lead",
      description: "Conversive is an AI-powered conversational messaging platform that automates customer interactions. It bridges enterprise communication by unifying channels like SMS, WhatsApp, and web chat into a centralized AI agent interface.",
      color: "bg-yellow-500/10", // Accent
      bgColor: "#2037e1",
      className: "md:col-span-2 md:row-span-1 min-h-[500px]",
      logo: "/conversive logo_1.png"
    },
    {
      title: "Gemstower",
      category: "Visual Identity",
      description: "Gemstower is a boutique independent senior living project developed by Gems Group in Kolkata. It offers an inclusive, highly secure, and community-focused lifestyle with premium healthcare support for adults aged 55 and above.",
      color: "bg-yellow-500/10", // Accent
      bgColor: "#aac054",
      className: "md:col-span-1 md:row-span-1 min-h-[500px]",
      logo: "/Gemstower logo.png"
    },
    {
      title: "Sunstone",
      category: "Web & Branding",
      description: "Sunstone is a premium residential bungalow enclave developed by Gems Group in South Kolkata. It offers exclusive low-density bungalows prioritizing open green spaces, private terraces, and luxury lifestyle amenities.",
      color: "bg-yellow-500/10", // Accent
      bgColor: "#b2a5c5",
      className: "md:col-span-2 md:row-span-1 min-h-[500px]",
      logo: "/Sunstone.webp"
    },
    {
      title: "Credilinq",
      category: "Landing Page",
      description: "CrediLinq is an embedded finance infrastructure company operating as a B2B Credit-as-a-Service provider. They utilize AI-powered underwriting to give SMEs faster, seamless access to scalable growth capital.",
      color: "bg-yellow-500/10", // Accent
      bgColor: "#ed0057",
      className: "md:col-span-1 md:row-span-1 min-h-[500px]",
      logo: "/credilinq.png"
    }
  ];
  const projectOrder = ["Conversive", "Gemstower", "Sunstone", "Credilinq"];
  const [activeProject, setActiveProject] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveProject(null);
      }
    };

    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (projectOrder.includes(hash)) {
        setActiveProject(hash);
      } else {
        setActiveProject(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("hashchange", handleHashChange);
    
    // Check hash on mount, but only after hydration is likely complete
    const timeout = setTimeout(handleHashChange, 0);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("hashchange", handleHashChange);
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    if (activeProject) {
      if (window.location.hash !== `#${activeProject}`) {
        window.location.hash = activeProject;
      }
    } else if (window.location.hash) {
      // Clear hash if no project active
      const hash = window.location.hash.replace("#", "");
      if (projectOrder.includes(hash)) {
        window.history.replaceState({}, document.title, window.location.pathname + window.location.search);
      }
    }
  }, [activeProject]);


  const handleNext = () => {
    if (!activeProject) return;
    const currentIndex = projectOrder.indexOf(activeProject);
    const nextIndex = (currentIndex + 1) % projectOrder.length;
    // We scroll back to top optionally or just set the new project
    // Framer motion might take care of the enter animation but we should make sure window scrolls to top
    window.scrollTo(0, 0);
    setActiveProject(projectOrder[nextIndex]);
  };

  return (
    <>
    <section className="relative z-20 bg-zinc-950 min-h-screen py-20 md:py-32 px-4 md:px-8 border-t border-white/5 text-zinc-100">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-4xl md:text-6xl font-bold tracking-tighter mb-12 md:mb-16 text-white">Key Highlights</h3>
        
        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div 
              key={i} 
              onClick={() => setActiveProject(project.title)}
              style={{ backgroundColor: project.bgColor }}
              className={`group relative overflow-hidden rounded-[2rem] p-6 md:p-8 flex flex-col justify-between cursor-pointer
                         backdrop-blur-md transition-all duration-500
                         hover:-translate-y-1 ${project.className}`}
            >
              {/* Abstract decorative background */}
              <div className={`absolute top-0 right-0 w-64 h-64 rounded-full blur-[100px] -mr-20 -mt-20 opacity-20 mix-blend-screen group-hover:opacity-40 transition-opacity duration-700 ${project.color}`} />
              
              <div className="flex-1 flex items-center justify-center p-8 relative z-10 w-full h-full">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={project.logo} alt={`${project.title} logo`} className={`w-full h-full object-contain group-hover:scale-110 transition-transform duration-700 ${project.title === 'Gemstower' ? 'max-h-[220px]' : 'max-h-[160px] drop-shadow-2xl'}`} />
              </div>

              {/* Soft black gradient overlay for text readability */}
              <div className={`absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none z-[5] ${project.title === "Gemstower" ? "h-[45%]" : "h-[65%]"}`} />

              <div className="relative z-10 mt-auto pt-12">
                <h4 className={`font-semibold tracking-tight mb-4 text-white group-hover:text-yellow-100 transition-colors ${project.className.includes("md:row-span-2") ? "text-4xl md:text-5xl" : "text-3xl md:text-4xl"}`}>
                  {project.title}
                </h4>
                <p className={`text-zinc-200 font-light max-w-lg ${project.className.includes("md:row-span-2") ? "text-xl md:text-2xl" : "text-lg md:text-xl"}`}>
                  {project.description}
                </p>
                <button 
                  className="mt-8 self-start px-6 py-3 rounded-full border border-yellow-500/50 text-yellow-500 font-medium text-sm transition-all z-20 relative pointer-events-none group-hover:bg-yellow-500 group-hover:text-black group-hover:shadow-[0_0_20px_rgba(234,179,8,0.4)]"
                >
                  View Case Study 
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    
    <AnimatePresence>
      {activeProject === "Conversive" && (
        <CaseStudyConversive onClose={() => setActiveProject(null)} onNext={handleNext} />
      )}
      {activeProject === "Sunstone" && (
        <CaseStudySunstone onClose={() => setActiveProject(null)} onNext={handleNext} />
      )}
      {activeProject === "Gemstower" && (
        <CaseStudyGemstower onClose={() => setActiveProject(null)} onNext={handleNext} />
      )}
      {activeProject === "Credilinq" && (
        <CaseStudyCredilinq onClose={() => setActiveProject(null)} onNext={handleNext} />
      )}
    </AnimatePresence>
    </>
  );
}
