import React from "react";

interface AboutProps {
  data: {
    about: string;
    experience: number;
    currentRole: string;
    highlights: string[];
  };
}

const About = ({ data }: AboutProps) => {
  return (
    <section id="about" className="py-24 px-6 bg-slate-900/50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-gradient">Me</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300">
            <div className="text-4xl font-bold text-gradient mb-2">{data.experience}+</div>
            <div className="text-gray-400">Years Experience</div>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-pink-500/50 transition-all duration-300">
            <div className="text-sm text-gray-400 mb-1">Current Role</div>
            <div className="text-white font-semibold">{data.currentRole}</div>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-red-500/50 transition-all duration-300">
            <div className="text-sm text-gray-400 mb-1">Focus Areas</div>
            <div className="text-white font-semibold">Innovation & Strategy</div>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-2xl p-8 border border-slate-700/50">
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            {data.about}
          </p>
          
          {data.highlights && data.highlights.length > 0 && (
            <div>
              <h3 className="text-xl font-semibold mb-4 text-white">Highlights</h3>
              <ul className="space-y-3">
                {data.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex-shrink-0"></span>
                    <span className="text-gray-300">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;