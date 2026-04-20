import React from "react";

export default function Education() {
  const certs = [
    "Google UX Design (Google)",
    "Figma UI/UX Design Essentials (Udemy)",
    "Motion Design with Figma (Udemy)",
    "Data-Driven Product Research and Design (LinkedIn)",
    "Using AI Tools for UX Design (LinkedIn)",
    "Graphic Design Mastery (Udemy)"
  ];

  return (
    <section className="relative z-20 bg-zinc-950 py-16 md:py-24 px-4 md:px-8 border-t border-white/5 text-zinc-100">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Education */}
        <div className="rounded-3xl p-6 md:p-8 backdrop-blur-md bg-zinc-900/40 border border-white/5 shadow-sm hover:shadow-md transition-shadow hover:bg-zinc-800/60">
          <h3 className="text-2xl md:text-3xl font-bold tracking-tighter mb-8 text-white">Education</h3>
          <div className="mb-4">
            <h4 className="text-xl font-semibold text-white">GITAM University</h4>
            <p className="text-zinc-400 text-lg font-light mt-1">Bachelor&apos;s Degree in Information Technology</p>
          </div>
        </div>

        {/* Certifications */}
        <div className="rounded-3xl p-6 md:p-8 backdrop-blur-md bg-zinc-900/40 border border-white/5 relative overflow-hidden group shadow-sm hover:shadow-md transition-shadow hover:bg-zinc-800/60">
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-[100px] -mr-20 -mt-20 opacity-40 mix-blend-screen bg-yellow-500/20 group-hover:opacity-60 transition-opacity duration-700" />
          
          <h3 className="relative z-10 text-2xl md:text-3xl font-bold tracking-tighter mb-8 text-white">Certifications & Courses</h3>
          <ul className="relative z-10 space-y-3">
            {certs.map((cert, i) => (
              <li key={i} className="flex items-start text-zinc-300 text-base font-light">
                <svg className="w-5 h-5 mr-3 mt-0.5 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {cert}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}
