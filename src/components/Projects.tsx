// Updated Projects section with full UI code and enhancements

import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github, Zap, Cloud, Smartphone, Globe, Star, Eye, Gamepad2, Lock } from 'lucide-react';

const Projects: React.FC = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: 'SafeSpace.AI',
      description: 'A full-stack mental wellness companion app with AI chat, mood tracking, journaling, and Supabase-powered analytics.',
      image: 'https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'OpenAI', 'shadcn/ui'],
      color: 'from-blue-600 to-indigo-600',
      icon: Smartphone,
      github: 'https://github.com/0Tusharbhardwaj/SAFESPACE.AI',
      live: 'https://safespace-ai.vercel.app/',
      status: 'Development',
      stars: 45,
      views: '1.2k'
    },
    {
      title: 'UPTAC College Predictor',
      description: 'A SaaS-based college predictor using official UPTAC B.Tech. 2024 rank data with filters, CSV export, and WhatsApp group integration.',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['React', 'Tailwind CSS', 'TypeScript', 'JSON'],
      color: 'from-purple-600 to-pink-600',
      icon: Globe,
      github: 'https://github.com/0Tusharbhardwaj/uptac-college-predictor',
      live: 'https://uptac-college-predictor.vercel.app/',
      status: 'Live',
      stars: 160,
      views: '6k+'
    },
    {
      title: 'UPTAC Other Courses Predictor',
      description: 'Predictor tool for B.Pharm, BFAD, BHMCT, etc., under UPTAC 2024 with accurate OR-CR data and exportable predictions.',
      image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['React', 'Tailwind CSS', 'TypeScript', 'CSV'],
      color: 'from-cyan-600 to-emerald-600',
      icon: Globe,
      github: 'https://github.com/0Tusharbhardwaj/uptac-other-courses-predictor',
      live: 'https://other-college-predictor.vercel.app/',
      status: 'Live',
      stars: 135,
      views: '6k+'
    },
    {
      title: 'Vinky Space',
      description: 'A colorful and fun personal website for my little brother with gallery, achievements, and multiplayer games.',
      image: 'https://raw.githubusercontent.com/0Tusharbhardwaj/vinky-space/main/public/photos/photo_2025-07-12_10-45-01.jpg',
      tech: ['React', 'Tailwind CSS', 'Lucide', 'Vite'],
      color: 'from-pink-500 to-yellow-400',
      icon: Gamepad2,
      github: 'https://github.com/0Tusharbhardwaj/vinky-space',
      live: 'https://vinky-space-eight.vercel.app/',
      status: 'Live',
      stars: 88,
      views: '1.9k'
    },
    {
      title: 'Passo – Password Manager',
      description: 'A secure, modern password manager supporting both local and Supabase cloud storage with auth and encryption.',
      image: 'https://www.dreamstime.com/illustration/password-banner.html',
      tech: ['React', 'Tailwind CSS', 'Supabase', 'Vite', 'CryptoJS'],
      color: 'from-slate-600 to-slate-900',
      icon: Lock,
      github: 'https://github.com/0Tusharbhardwaj/passo',
      live: 'https://passo-two.vercel.app/',
      status: 'Live',
      stars: 72,
      views: '2.2k'
    }
  ];

  return (
    <section ref={sectionRef} id="projects" className="py-24 bg-gradient-to-b from-gray-900 via-black to-gray-800 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mb-6 animate-pulse-glow">
            <Globe className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">Featured Projects</h2>
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
                className={`group relative overflow-hidden rounded-3xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
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
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-6 py-3 bg-gray-700/50 hover:bg-gray-700 text-white rounded-xl transition-all duration-300 hover:scale-105 backdrop-blur-sm border border-gray-600/50 hover:border-gray-500"
                    >
                      <Github className="w-4 h-4" />
                      <span className="text-sm font-medium">Source</span>
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center space-x-2 px-6 py-3 bg-gradient-to-r ${project.color} text-white rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl`}
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm font-medium">Live Demo</span>
                    </a>
                  </div>
                </div>
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
    </section>
  );
};

export default Projects;
