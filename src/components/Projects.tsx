import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github, Zap, Cloud, Smartphone, Globe, Star, Eye, Gamepad2 } from 'lucide-react';

const Projects: React.FC = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: 'SafeSpace.AI',
      description: 'A full-stack mental health companion with journaling, mood tracking, analytics, and AI chat powered by OpenAI and Supabase Edge Functions.',
      image: 'https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['React', 'TypeScript', 'Supabase', 'OpenAI', 'Tailwind CSS'],
      color: 'from-pink-500 to-red-500',
      icon: Eye,
      github: 'https://github.com/0Tusharbhardwaj/SAFESPACE.AI',
      live: 'https://safespace-ai.vercel.app/',
      status: 'Development',
      stars: 73,
      views: '1.9k'
    },
    {
      title: 'UPTAC College Predictor Suite',
      description: 'Two powerful tools for predicting eligible colleges under UPTAC 2024 for B.Tech and other UG courses using real closing rank data.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'CSV Export', 'JSON'],
      color: 'from-cyan-500 to-purple-500',
      icon: Globe,
      github: 'https://github.com/0Tusharbhardwaj/uptac-college-predictor',
      live: 'https://uptac-college-predictor.vercel.app/',
      status: 'Live',
      stars: 156,
      views: '6.2k'
    },
    {
      title: 'Vinky Space',
      description: 'A joyful, colorful personal website built for my 7-year-old brother featuring his gallery, milestones, fun facts, multiplayer games, and a password manager.',
      image: 'https://images.pexels.com/photos/2081061/pexels-photo-2081061.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['React', 'Tailwind CSS', 'LocalStorage', 'Vite', 'Lucide Icons'],
      color: 'from-yellow-400 to-pink-400',
      icon: Gamepad2,
      github: 'https://github.com/0Tusharbhardwaj/vinky-space',
      live: 'https://vinky-space-eight.vercel.app/',
      status: 'Live',
      stars: 34,
      views: '720'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="projects"
      className="py-24 bg-gradient-to-b from-gray-900 via-black to-gray-800 relative overflow-hidden"
    >
      {/* Background grid and floating particles */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M60 10L100 35L100 85L60 110L20 85L20 35Z' fill='none' stroke='%2306b6d4' stroke-width='1' opacity='0.3'/%3E%3Cpath d='M60 30L80 42.5L80 77.5L60 90L40 77.5L40 42.5Z' fill='none' stroke='%238b5cf6' stroke-width='1' opacity='0.2'/%3E%3C/svg%3E")`,
          backgroundSize: '120px 120px'
        }}></div>
      </div>
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-float opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mb-6 animate-pulse-glow">
              <Globe className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              Showcasing the intersection of innovation, technology, and user experience
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-green-400 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {projects.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <div
                  key={index}
                  className={`group relative overflow-hidden rounded-3xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-700 transform ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                  onMouseEnter={() => setHoveredProject(index)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <div className="relative h-72 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                        project.status === 'Live' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                        project.status === 'Beta' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' :
                        'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${project.color} p-2.5 transform group-hover:rotate-12 transition-transform duration-300 shadow-lg`}>
                        <IconComponent className="w-full h-full text-white" />
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 flex space-x-4">
                      <div className="flex items-center space-x-1 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1">
                        <Star className="w-3 h-3 text-yellow-400" />
                        <span className="text-xs text-white">{project.stars}</span>
                      </div>
                      <div className="flex items-center space-x-1 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1">
                        <Eye className="w-3 h-3 text-cyan-400" />
                        <span className="text-xs text-white">{project.views}</span>
                      </div>
                    </div>
                    <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                  </div>

                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1.5 text-xs font-medium bg-gray-700/50 backdrop-blur-sm text-gray-300 rounded-full border border-gray-600/50 group-hover:border-cyan-500/50 transition-colors hover:bg-gray-600/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex space-x-4">
                      <a
                        href={project.github}
                        className="flex items-center space-x-2 px-6 py-3 bg-gray-700/50 hover:bg-gray-700 text-white rounded-xl transition-all duration-300 hover:scale-105 backdrop-blur-sm border border-gray-600/50 hover:border-gray-500"
                      >
                        <Github className="w-4 h-4" />
                        <span className="text-sm font-medium">Source</span>
                      </a>
                      <a
                        href={project.live}
                        className={`flex items-center space-x-2 px-6 py-3 bg-gradient-to-r ${project.color} text-white rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl`}
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span className="text-sm font-medium">Live Demo</span>
                      </a>
                    </div>
                  </div>

                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${project.color} rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10 blur`}></div>

                  {hoveredProject === index && (
                    <div className="absolute top-6 left-6">
                      <div className="flex space-x-1">
                        {[...Array(3)].map((_, i) => (
                          <div
                            key={i}
                            className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"
                            style={{ animationDelay: `${i * 0.2}s` }}
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 max-w-2xl mx-auto mb-8">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center animate-pulse">
                  <Zap className="w-6 h-6 text-white" />
                </div>
              </div>
              <p className="text-gray-300 text-lg mb-4 font-light">
                More innovative projects cooking in the lab...
              </p>
              <p className="text-gray-400 text-sm">
                Currently working on exciting new Web3 and Cloud solutions
              </p>
            </div>
            
            <button className="px-10 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25">
              View All Projects
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
