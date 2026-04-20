import React from "react";

export default function Skills() {
  const categories = [
    {
      name: "UX Design",
      skills: ["User Research", "Personas", "Journey Mapping", "Information Architecture", "Wireframing", "Prototyping", "Usability Testing"]
    },
    {
      name: "UI Design",
      skills: ["Interaction Design", "Visual Design", "Design Systems", "Components", "Typography", "Color"]
    },
    {
      name: "Tools & Tech",
      skills: ["Figma", "Adobe Illustrator", "Photoshop", "InDesign", "HTML", "CSS", "JavaScript"]
    },
    {
      name: "Methods & AI",
      skills: ["Design Thinking", "UCD", "Agile", "Midjourney", "ChatGPT", "Sora", "Freepik AI", "Claude"]
    }
  ];

  return (
    <section className="relative z-20 bg-zinc-950 py-24 px-8 border-t border-white/5 text-zinc-100">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-3xl md:text-5xl font-bold tracking-tighter mb-16 text-center text-white">Core Competencies</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, i) => (
            <div 
              key={i}
              className="relative overflow-hidden rounded-3xl p-8 backdrop-blur-md bg-zinc-900/40 border border-white/5 shadow-sm hover:shadow-md transition-shadow hover:bg-zinc-800/60"
            >
              <h4 className="text-xl font-semibold mb-6 text-white">{category.name}</h4>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span 
                    key={idx}
                    className="px-3 py-1.5 rounded-lg bg-yellow-500/10 border border-yellow-500/20 text-sm font-medium text-yellow-500 hover:bg-yellow-500/20 hover:text-white transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
