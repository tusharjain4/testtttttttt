import React from "react";

interface SkillsProps {
  data: {
    skills: string[];
  };
}

const Skills = ({ data }: SkillsProps) => {
  const hasSkills = data.skills && data.skills.length > 0;

  return (
    <section id="skills" className="py-24 px-6 bg-slate-950">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-gradient">Skills</span>
        </h2>

        {hasSkills ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {data.skills.map((skill, index) => (
              <div
                key={index}
                className="group relative bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="relative z-10 text-white font-medium">{skill}</span>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-800/50 border border-slate-700/50 mb-4">
              <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <p className="text-gray-400">Skills information coming soon...</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;