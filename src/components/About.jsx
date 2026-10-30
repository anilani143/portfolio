import { Code, Server, Heart, BrainCircuit } from 'lucide-react';
import { educationData } from '../data/portfolioData.js';

export default function About() {
  const highlights = [
    {
      icon: Code,
      title: 'Frontend Development',
      desc: 'Creating pixel-perfect, highly responsive interfaces using React and Tailwind CSS.'
    },
    {
      icon: Server,
      title: 'Backend Systems',
      desc: 'Building reliable REST APIs, database schemas, and JWT user authentication.'
    },
    {
      icon: BrainCircuit,
      title: 'Problem Solving',
      desc: 'Developing algorithm skills through active practice with Data Structures on platforms like LeetCode.'
    },
    {
      icon: Heart,
      title: 'Clean Code',
      desc: 'Writing structured, commented, modular, and maintainable codebase solutions.'
    }
  ];

  return (
    <section id="about" className="py-20 relative bg-gray-975">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center md:text-left mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight inline-block relative">
            <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">About Me</span>
            <span className="absolute bottom-0 left-1/2 md:left-0 transform -translate-x-1/2 md:translate-x-0 w-12 h-1 bg-sky-400 rounded-full mt-4"></span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl font-light text-base md:text-lg">
            A quick glimpse into who I am, my core interests, and my professional drive.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left Column: Biography */}
          <div className="w-full min-w-0 lg:flex-[7] space-y-6 text-slate-300 font-light text-base md:text-lg leading-relaxed">
            <p>
              I'm <strong className="text-white font-medium">Anil Kumar</strong>, a passionate MERN Stack Developer currently pursuing a B.Tech in Computer Science.
            </p>
            <p>
              I enjoy designing and building fully functional web systems, writing clean code, and solving algorithmic problems. My technical path is driven by a deep interest in full-stack JavaScript ecosystems (Node.js, Express, React, MongoDB) and dynamic user interfaces.
            </p>
            <p>
              Over the past year, I have built several frontend and backend projects, focusing on responsive UI designs, RESTful APIs, JWT authorization, and integration with third-party web services.
            </p>
            <p className="border-l-4 border-sky-400 pl-4 py-2 bg-slate-800/20 rounded-r-lg italic text-slate-400">
              "Currently seeking internship opportunities where I can apply my development skills to solve real-world problems and grow alongside experienced engineering teams."
            </p>

            {/* Quick Education Card */}
            <div className="glass-card p-6 rounded-2xl border border-slate-800 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mt-8">
              <div>
                <h4 className="text-white font-semibold text-lg">{educationData.institution}</h4>
                <p className="text-slate-400 text-sm mt-1">{educationData.status}</p>
              </div>
              <div className="px-4 py-2 bg-sky-500/10 border border-sky-500/20 rounded-xl">
                <span className="text-sky-400 font-mono font-bold text-lg">{educationData.performance}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Highlights / Cards */}
          <div className="w-full min-w-0 lg:flex-[5] flex flex-wrap gap-4">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div 
                  key={idx} 
                  className="glass-card glass-card-hover basis-full sm:basis-[calc(50%-0.5rem)] p-6 rounded-2xl flex flex-col space-y-3"
                >
                  <div className="p-3 bg-sky-500/10 text-sky-400 rounded-xl w-fit">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-white font-semibold text-base">{item.title}</h3>
                  <p className="text-slate-400 text-xs md:text-sm leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
