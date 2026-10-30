import { Code2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData.js';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-[#0b0f19] border-t border-slate-900/60 py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
        
        {/* Left Side: Brand Logo & Title */}
        <div className="flex items-center space-x-3">
          <button 
            onClick={handleScrollToTop}
            className="flex items-center space-x-2 text-white font-bold text-lg group cursor-pointer focus:outline-none"
          >
            <Code2 className="w-5 h-5 text-sky-400 group-hover:rotate-12 transition-transform duration-300" />
            <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent group-hover:to-sky-400 transition-colors duration-300">
              {personalInfo.name}
            </span>
          </button>
          <span className="text-slate-600">|</span>
          <p className="text-slate-400 text-xs md:text-sm font-light">{personalInfo.title}</p>
        </div>

        {/* Right Side: Copyright details */}
        <div className="flex flex-col items-center md:items-end space-y-2">
          <p className="text-slate-500 text-xs font-light">
            &copy; {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          <p className="text-slate-500 text-[10px] font-light flex items-center space-x-1">
            <span>Made with React</span>
            <span className="text-red-500 animate-pulse">❤️</span>
            <span>&amp; Tailwind CSS</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
