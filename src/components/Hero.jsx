import { ArrowRight, Download, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData.js';

// Custom SVG Icons
const GithubIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" clipRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const LeetCodeIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.414L3.186 9.79a1.375 1.375 0 1 0 1.94 1.94l9.376-9.377A1.375 1.375 0 0 0 13.483 0zM17.93 4.364a1.377 1.377 0 0 0-.97.403L15.3 7.29a1.375 1.375 0 0 0 0 1.94l4.512 4.512c.536.536 1.407.536 1.94 0l1.665-1.665a1.375 1.375 0 0 0 0-1.94l-4.513-4.513a1.377 1.377 0 0 0-.974-.406zM9.58 14.752l-5.93 5.93a1.375 1.375 0 0 0 0 1.94l1.664 1.664a1.375 1.375 0 0 0 1.94 0l5.93-5.93a1.375 1.375 0 0 0 0-1.94L11.52 14.75a1.375 1.375 0 0 0-1.94 0z" />
  </svg>
);

export default function Hero() {
  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen pt-24 pb-16 flex items-center justify-center overflow-hidden ">
      <div className="water-bubbles" aria-hidden="true">
        {Array.from({ length: 14 }, (_, index) => <span key={index} />)}
      </div>

      {/* Decorative Glow Elements */}
      <div className="absolute top-1/4 left-1/10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
        {/* Text Area */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
          <div className="inline-flex items-center space-x-2 bg-sky-500/10 border border-sky-500/20 px-3.5 py-1.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping"></span>
            <span className="text-sky-400 text-xs font-semibold uppercase tracking-wider">Available for Internships</span>
          </div>

          <div className="space-y-2">
            <p className="text-sky-400 font-mono text-base tracking-wide">Hi, I'm</p>
            <h1>

              <span className="block text-white  sm:text-5xl md:text-6xl font-bold tracking-tight text-5xl ">
                <span className="inline-block text-orange-400 animate-letter-bob">A</span>nil{' '}
                <span className="inline-block text-orange-400 animate-letter-bob animation-delay-300">K</span>umar
              </span>
              <span className="sm-block mt-1 from-sky-200 via-sky-100 text-3xl sm:mt-3 ">
               Full Stack Developer buliding modern , scalable & AI-powered web applications 
              </span>

            </h1>
          </div>

          <p className="text-white text-lg md:text-xl leading-relaxed max-w-2xl font-light">
            {personalInfo.bio}
          </p>

          {/* Social icons */}
          <div className="flex items-center space-x-5">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-black hover:bg-black border border-slate-700/50 hover:border-sky-400/50 text-white hover:text-orange-400 rounded-xl transition-all duration-300 shadow-md hover:shadow-sky-500/10"
              aria-label="GitHub Profile"
            >
              <GithubIcon />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-black hover:bg-black border border-slate-700/50 hover:border-sky-400/50 text-white hover:text-orange-400 rounded-xl transition-all duration-300 shadow-md hover:shadow-sky-500/10"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon />
            </a>
            <a
              href={personalInfo.gmailUrl}
              className="p-3 bg-black hover:bg-black border border-slate-700/50 hover:border-sky-400/50 text-white hover:text-orange-400 rounded-xl transition-all duration-300 shadow-md hover:shadow-sky-500/10"
              aria-label="Send Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href={personalInfo.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-black hover:bg-black border border-slate-700/50 hover:border-sky-400/50 text-white hover:text-orange-400 rounded-xl transition-all duration-300 shadow-md hover:shadow-sky-500/10"
              aria-label="LeetCode Profile"
            >
              <LeetCodeIcon />
            </a>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap gap-4 pt-4 w-full sm:w-auto">
            <button
              onClick={() => handleScrollTo('projects')}
              className="px-8 py-4 bg-gradient-to-r from-sky-500 to-indigo-500 hover:from-sky-400 hover:to-indigo-400 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-sky-500/25 active:scale-98 flex items-center justify-center space-x-2 group cursor-pointer border border-sky-400/20 w-full sm:w-auto"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <a
              href={personalInfo.resumeUrl}
              className="px-8 py-4 bg-black hover:bg-black text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-md border border-slate-700/60 hover:border-orange-400/80 active:scale-98 flex items-center justify-center space-x-2 w-full sm:w-auto"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </a>
            <button
              onClick={() => handleScrollTo('contact')}
              className="px-8 py-4 bg-transparent hover:bg-white/5 text-sky-400 hover:text-sky-300 font-semibold rounded-xl transition-all duration-300 active:scale-98 flex items-center justify-center space-x-2 border border-sky-400/20 hover:border-sky-400/40 w-full sm:w-auto cursor-pointer"
            >
              <span>Contact Me</span>
            </button>
          </div>
        </div>

        {/* Visual / Image Area */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative animate-float">
            {/* Glowing borders */}
            <div className="absolute inset-0 bg-gradient-to-tr from-sky-500 to-indigo-500 rounded-full blur-2xl opacity-30 animate-pulse-slow"></div>
            
            {/* Custom Circular Photo Container */}
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full p-2 bg-gradient-to-tr from-sky-400 via-slate-800 to-indigo-500 shadow-2xl shadow-sky-500/10">
              <div className="w-full h-full rounded-full overflow-hidden bg-black flex items-center justify-center border-4 border-black">
                <img
                  src="/anil.jpeg"
                  alt="Anil Kumar - MERN Stack Developer Avatar"
                  className="w-full h-full object-cover select-none pointer-events-none"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
