import { Award, CheckCircle2 } from 'lucide-react';
import { achievementsData } from '../data/portfolioData.js';

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 relative bg-slate-905/30">
      {/* Glow decorations */}
      <div className="absolute top-1/4 left-1/10 w-64 h-64 bg-sky-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight inline-block relative">
            <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">Key Achievements</span>
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-sky-400 rounded-full mt-2"></span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto font-light text-base md:text-lg">
            Milestones and development skills that define my growth as a developer.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {achievementsData.map((achievement, idx) => (
            <div 
              key={idx}
              className="glass-card glass-card-hover p-6 rounded-2xl border border-slate-800 flex items-start space-x-4"
            >
              <div className="p-3 bg-sky-500/10 text-sky-400 rounded-xl shrink-0">
                {idx === 0 ? <Award className="w-6 h-6 animate-pulse" /> : <CheckCircle2 className="w-6 h-6 text-sky-400" />}
              </div>
              
              <div className="space-y-1">
                <h3 className="text-white font-bold text-base md:text-lg">{achievement.title}</h3>
                <p className="text-slate-400 text-xs md:text-sm font-light leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
