import React from "react";
import Image from "next/image";

interface HeroProps {
  data: {
    name: string;
    role: string;
    tagline: string;
    heroImageUrl: string;
  };
}

const Hero = ({ data }: HeroProps) => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950"
    >
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      
      <div className="relative z-10 text-center px-6 py-12">
        {data.heroImageUrl && (
          <div className="mb-8 relative w-40 h-40 mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-lg opacity-50"></div>
            <Image
              src={data.heroImageUrl}
              alt={data.name}
              fill
              className="rounded-full object-cover border-4 border-slate-800 relative z-10"
              priority
            />
          </div>
        )}
        <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
          <span className="text-gradient">{data.name}</span>
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-400 mb-6 font-light">
          {data.role}
        </h2>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
          {data.tagline}
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="#contact"
            className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium hover:opacity-90 transition-opacity shadow-lg shadow-purple-500/25"
          >
            Get In Touch
          </a>
          <a
            href="#projects"
            className="px-8 py-3 rounded-full border border-gray-600 text-gray-300 font-medium hover:border-gray-400 hover:text-white transition-all"
          >
            View Work
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;