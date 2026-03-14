import React from "react";

const Footer = () => {
  return (
    <footer className="py-8 px-6 bg-slate-900/50 border-t border-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Portfolio. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#hero" className="text-gray-500 hover:text-white text-sm transition-colors">
              Back to top
            </a>
            <a href="#contact" className="text-gray-500 hover:text-white text-sm transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;