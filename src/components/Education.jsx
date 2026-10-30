import { GraduationCap, Calendar, CheckCircle } from 'lucide-react';
import { educationData } from '../data/portfolioData.js';

export default function Education() {
  const coreSubjects = [
    'Data Structures & Algorithms',
    'Database Management Systems (DBMS)',
    'Object-Oriented Programming (OOPs)',
    'Operating Systems',
    'Computer Networks',
    'Web Engineering'
  ];

  return (
    <section id="education" className="py-20 relative bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight inline-block relative">
            <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">Education</span>
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-sky-400 rounded-full mt-2"></span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto font-light text-base md:text-lg">
            My academic foundation and core computer science training.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main timeline wrapper */}
          <div className="relative border-l-2 border-slate-800 ml-4 md:ml-6 pl-8 md:pl-12 space-y-12">
            
            {/* Card Node */}
            <div className="relative">
              {/* Node bullet */}
              <span className="absolute -left-14 md:-left-18 top-1.5 p-2 bg-slate-900 border-2 border-sky-400 text-sky-400 rounded-full flex items-center justify-center shadow-lg shadow-sky-500/10">
                <GraduationCap className="w-5 h-5" />
              </span>

              {/* Card content */}
              <div className="glass-card p-6 md:p-8 rounded-2xl border border-slate-800 space-y-6">
                
                {/* Header info */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                  <div className="space-y-1">
                    <span className="px-3 py-1 bg-sky-500/10 border border-sky-500/20 text-sky-400 rounded-full text-xs font-semibold uppercase tracking-wider">
                      {educationData.status}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-white pt-2">{educationData.institution}</h3>
                    <p className="text-slate-400 text-sm font-light">Specialization in Computer Science & Engineering</p>
                  </div>
                  
                  <div className="flex items-center space-x-2 text-slate-400 font-mono text-sm bg-slate-800/50 px-4 py-2 rounded-xl border border-slate-800/80">
                    <Calendar className="w-4 h-4 text-sky-400" />
                    <span>{educationData.duration}</span>
                  </div>
                </div>

                {/* Score and bio */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center border-t border-b border-slate-800/60 py-6">
                  <div className="md:col-span-3 flex flex-col items-center md:items-start space-y-1 bg-sky-500/5 border border-sky-500/10 rounded-xl p-4 text-center md:text-left">
                    <span className="text-slate-400 text-xs uppercase tracking-wider font-semibold">Current Score</span>
                    <span className="text-3xl font-extrabold text-sky-400 font-mono">{educationData.performance.split(' ')[1]}</span>
                    <span className="text-slate-400 text-xs">CGPA out of 10</span>
                  </div>

                  <div className="md:col-span-9">
                    <p className="text-slate-300 font-light text-sm md:text-base leading-relaxed">
                      {educationData.description}
                    </p>
                  </div>
                </div>

                {/* Core Courses List */}
                <div className="space-y-3">
                  <h4 className="text-white font-semibold text-sm uppercase tracking-wider">Key Coursework Completed:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {coreSubjects.map((subject, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-slate-400 text-sm">
                        <CheckCircle className="w-4 h-4 text-sky-400 shrink-0" />
                        <span className="font-light text-slate-300">{subject}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
