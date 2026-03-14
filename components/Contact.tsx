import React from "react";

interface ContactProps {
  data: {
    contact: {
      email: string;
      linkedin: string;
      github: string;
      twitter: string;
    };
  };
}

const Contact = ({ data }: ContactProps) => {
  const { email, linkedin, github, twitter } = data.contact;

  const links = [
    { name: "Email", href: `mailto:${email}`, icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
    { name: "LinkedIn", href: linkedin, icon: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M2 4a2 2 0 114 0 2 2 0 01-4 0z" },
    { name: "GitHub", href: github, icon: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.94c2.64-.26 5.46-1.29 5.46-5.84a4.52 4.52 0 00-1.23-3.13 4.18 4.18 0 00.1-3.13s-1.02-.26-3.23 1.23a11.05 11.05 0 00-5.52 0C5.62 2.26 4.6 2.52 4.6 2.52a4.18 4.18 0 00.1 3.13 4.52 4.52 0 00-1.23 3.13c0 4.55 2.82 5.58 5.46 5.84a3.37 3.37 0 00-.94 2.94V19" },
    { name: "Twitter", href: twitter, icon: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" },
  ];

  return (
    <section id="contact" className="py-24 px-6 bg-slate-950 relative">
      {/* Background Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-xl h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
      
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          Get In <span className="text-gradient">Touch</span>
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-xl mx-auto">
          I&apos;m currently open to new opportunities. Whether you have a question or just want to say hi, feel free to reach out!
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3 p-6 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center group-hover:from-purple-500/40 group-hover:to-pink-500/40 transition-all">
                <svg className="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={link.icon} />
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors">
                {link.name}
              </span>
            </a>
          ))}
        </div>

        <div className="text-center">
          <a
            href={`mailto:${email}`}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium hover:opacity-90 transition-opacity shadow-lg shadow-purple-500/25"
          >
            <span>Say Hello</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;