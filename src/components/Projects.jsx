import { ExternalLink, Star } from 'lucide-react';
import { projectsData } from '../data/portfolioData.js';

// Custom GitHub SVG Icon
const GithubIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
  </svg>
);

export default function Projects() {
  const getMockImage = (key) => {
    switch (key) {
      case 'movie_booking_dashboard':
        return '/ticket-booking.png';
      case 'spotify_ui_player':
        return '/spotnify.png';
      case 'youtube_video_app':
        return '/utube-clone.jpg';
      default:
        return '/avatar.png';
    }
  };

  return (
    <section id="projects" className="py-20 relative bg-slate-950/40">
      {/* Background decoration */}
      <div className="absolute top-1/3 right-1/10 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/3 left-1/10 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight inline-block relative">
            <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">My Projects</span>
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-sky-400 rounded-full mt-2"></span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto font-light text-base md:text-lg">
            A showcase of full-stack backend integrations and responsive frontend clones.
          </p>
        </div>

        {/* Projects Listing */}
        <div className="space-y-16">
          {projectsData.map((project) => {
            if (project.isFeatured) {
              return (
                /* FEATURED PROJECT: Movie Ticket Booking App */
                <div 
                  key={project.id}
                  className="glass-card rounded-3xl overflow-hidden border border-slate-800 shadow-xl flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-12 p-6 md:p-8"
                >
                  {/* Image container */}
                  <div className="lg:col-span-6 relative rounded-2xl overflow-hidden group border border-slate-800 bg-slate-900 aspect-video flex items-center justify-center">
                    <img 
                      src={getMockImage(project.mockImage)} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 p-5"
                      loading="lazy"
                    />
                    {/* Featured badge */}
                    <div className="absolute top-4 left-4 bg-sky-500 hover:bg-sky-400 text-white font-semibold text-xs tracking-wider uppercase px-3 py-1.5 rounded-xl shadow-lg flex items-center space-x-1">
                      <Star className="w-3.5 h-3.5 fill-white" />
                      <span>Featured Full Stack Project</span>
                    </div>
                  </div>

                  {/* Info details */}
                  <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
                    <div className="space-y-4">
                      <div>
                        <span className="text-sky-400 font-mono text-xs uppercase tracking-wider font-semibold">{project.subtitle}</span>
                        <h3 className="text-2xl md:text-3xl font-extrabold text-white pt-1">{project.title}</h3>
                      </div>
                      
                      <p className="text-slate-300 font-light text-sm md:text-base leading-relaxed">
                        {project.description}
                      </p>

                      {/* Features bullets */}
                      <ul className="space-y-2">
                        {project.features.map((feature, fIdx) => (
                          <li key={fIdx} className="flex items-start text-xs md:text-sm text-slate-400 font-light">
                            <span className="text-sky-400 mr-2 shrink-0">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech list & links */}
                    <div className="space-y-6 pt-4 border-t border-slate-800/80">
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((t, tIdx) => (
                          <span 
                            key={tIdx}
                            className="px-3 py-1 bg-slate-800 text-slate-300 rounded-lg text-xs font-semibold border border-slate-800 hover:border-sky-500/20 transition-all duration-300"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center space-x-4">
                        <a 
                          href={project.githubUrl} 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700/80 border border-slate-700/80 hover:border-slate-600/85 text-white font-medium rounded-xl text-sm transition-all duration-300 flex items-center space-x-2 shadow-sm"
                        >
                          <GithubIcon className="w-4 h-4" />
                          <span>Code Repository</span>
                        </a>
                        <a 
                          href="http://quickshow-pied-gamma.vercel.app"
                           target="_blank"
                          className="px-5 py-2.5 bg-gradient-to-r from-sky-500 to-indigo-500 hover:from-sky-400 hover:to-indigo-400 text-white font-medium rounded-xl text-sm transition-all duration-300 flex items-center space-x-2 shadow-lg shadow-sky-500/10 hover:shadow-sky-500/20 active:scale-95 border border-sky-400/20"
                        >
                          <span>Live Demo</span>
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
            return null; // Handle other projects in grid below
          })}

          {/* Grid for standard projects: Spotify and YouTube Clones */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
            {projectsData.filter(p => !p.isFeatured).map((project) => (
              <div 
                key={project.id}
                className="glass-card rounded-2xl overflow-hidden border border-slate-800 flex flex-col justify-between"
              >
                {/* Image */}
                <div className="relative aspect-video bg-slate-900 group border-b border-slate-800 flex items-center justify-center">
                  <img 
                    src={getMockImage(project.mockImage)} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 p-5"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-slate-900/80 border border-slate-700/40 text-slate-300 font-semibold text-[10px] tracking-wider uppercase px-2 py-1 rounded-lg">
                    {project.subtitle}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-grow flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    <p className="text-slate-400 font-light text-sm leading-relaxed">
                      {project.description}
                    </p>

                    {/* Features checklist */}
                    <ul className="space-y-1.5 pt-1">
                      {project.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start text-xs text-slate-400 font-light">
                          <span className="text-sky-400 mr-2 shrink-0">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Footer tech & links */}
                  <div className="space-y-5 pt-4 border-t border-slate-800/60">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((t, tIdx) => (
                        <span 
                          key={tIdx}
                          className="px-2.5 py-0.5 bg-slate-800 text-slate-300 rounded-md text-[11px] font-medium border border-slate-800"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center space-x-3 pt-2">
                      <a 
                        href={project.githubUrl} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-2 bg-slate-800 hover:bg-slate-700/80 border border-slate-700/80 text-white font-medium rounded-lg text-xs transition-all duration-300 flex items-center justify-center space-x-1.5"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>GitHub</span>
                      </a>
                      <a 
                        href={project.liveUrl}
                          target="_blank"
                        className="flex-1 py-2 bg-sky-500/10 hover:bg-sky-500/20 border border-sky-500/20 text-sky-400 hover:text-sky-300 font-medium rounded-lg text-xs transition-all duration-300 flex items-center justify-center space-x-1.5"
                      >
                        <span>Demo Link</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
