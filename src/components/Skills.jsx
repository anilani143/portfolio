import { skillsData } from '../data/portfolioData.js';

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative bg-slate-950/20">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight inline-block relative">
            <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">My Tech Stack</span>
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-sky-400 rounded-full mt-2"></span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto font-light text-base md:text-lg">
            Technologies, frameworks, databases, and tools I use to bring ideas to life.
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsData.map((categoryGroup, index) => {
            const Icon = categoryGroup.icon;
            return (
              <div 
                key={index}
                className="glass-card glass-card-hover p-6 rounded-2xl border border-slate-800 flex flex-col space-y-6"
              >
                {/* Category Header */}
                <div className="flex items-center space-x-3 pb-4 border-b border-slate-800/60">
                  <div className="p-2.5 bg-sky-500/10 text-sky-400 rounded-xl">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-white font-bold text-lg">{categoryGroup.category}</h3>
                </div>

                {/* Skill List */}
                <div className="flex flex-wrap gap-2">
                  {categoryGroup.skills.map((skill, sIdx) => (
                    <span 
                      key={sIdx}
                      className="px-3 py-1.5 bg-slate-800/40 text-slate-300 hover:text-white border border-slate-800 hover:border-sky-500/30 rounded-lg text-xs md:text-sm font-medium transition-all duration-300 shadow-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* LeetCode & DSA Shoutout */}
        <div className="mt-12 glass-card p-6 md:p-8 rounded-2xl border border-slate-800 max-w-3xl mx-auto text-center space-y-4">
          <h4 className="text-white font-bold text-lg md:text-xl">Algorithmic Problem Solving</h4>
          <p className="text-slate-400 font-light text-sm md:text-base leading-relaxed max-w-xl mx-auto">
            I actively practice Data Structures and Algorithms to build clean, optimized logic. 
            I have successfully solved over <strong className="text-sky-400 font-medium">100+ coding challenges</strong> on LeetCode.
          </p>
        </div>

      </div>
    </section>
  );
}
