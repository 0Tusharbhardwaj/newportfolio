import React, { useState, useEffect, useRef } from 'react';
import {
  Github,
  ExternalLink,
  Zap,
  Globe,
  Star,
  Eye,
  Gamepad2,
  Lock,
  Smartphone,
} from 'lucide-react';

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
      description:
        'A full-stack mental wellness companion app with AI chat, mood tracking, journaling, and Supabase-powered analytics.',
      image:
        'https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'OpenAI'],
      color: 'from-blue-600 to-indigo-600',
      icon: Smartphone,
      github: 'https://github.com/0Tusharbhardwaj/SAFESPACE.AI',
      live: 'https://safespace-ai.vercel.app/',
      status: 'Development',
      stars: 45,
      views: '1.2k',
    },
    {
      title: 'UPTAC College Predictor',
      description:
        'A SaaS-based college predictor using official UPTAC B.Tech. 2024 rank data with filters, CSV export, and WhatsApp group integration.',
      image:
        'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['React', 'Tailwind CSS', 'TypeScript', 'JSON'],
      color: 'from-purple-600 to-pink-600',
      icon: Globe,
      github: 'https://github.com/0Tusharbhardwaj/uptac-college-predictor',
      live: 'https://uptac-college-predictor.vercel.app/',
      status: 'Live',
      stars: 160,
      views: '6k+',
    },
    {
      title: 'UPTAC Other Courses Predictor',
      description:
        'Predictor tool for B.Pharm, BFAD, BHMCT, etc., under UPTAC 2024 with accurate OR-CR data and exportable predictions.',
      image:
        'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['React', 'Tailwind CSS', 'TypeScript', 'CSV'],
      color: 'from-cyan-600 to-emerald-600',
      icon: Globe,
      github: 'https://github.com/0Tusharbhardwaj/uptac-other-courses-predictor',
      live: 'https://other-college-predictor.vercel.app/',
      status: 'Live',
      stars: 135,
      views: '6k+',
    },
    {
      title: 'Passo – Password Manager',
      description:
        'A secure and modern password manager with local and cloud storage options using Supabase. Includes auth, sync, and intuitive UI.',
      image:
        'https://thumbs.dreamstime.com/b/password-banner-concept-data-protection-online-privacy-internet-security-virtual-screen-padlock-blurred-background-password-banner-216760217.jpg',
      tech: ['React', 'Vite', 'Tailwind CSS', 'Supabase', 'CryptoJS'],
      color: 'from-indigo-500 to-fuchsia-500',
      icon: Lock,
      github: 'https://github.com/0Tusharbhardwaj/passo',
      live: 'https://passo-two.vercel.app/',
      status: 'Live',
      stars: 51,
      views: '1.1k',
    },
    {
      title: 'Vinky Space – Joyful Website',
      description:
        'A colorful, fun personal website for my younger brother with games, gallery, and achievements — built purely to make him smile.',
      image:
        'https://cdn.vectorstock.com/i/1000x1000/87/11/banner-template-design-with-happy-kids-vector-45768711.jpg',
      tech: ['React', 'Vite', 'Tailwind CSS'],
      color: 'from-pink-400 to-yellow-400',
      icon: Gamepad2,
      github: 'https://github.com/0Tusharbhardwaj/vinky-space',
      live: 'https://vinky-space-eight.vercel.app/',
      status: 'Live',
      stars: 72,
      views: '2.7k',
    },
  ];

  return (
    <section ref={sectionRef} id="projects" className="py-24 bg-black">
      <div className="container mx-auto px-6">
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
            const Icon = project.icon;
            return (
              <div
                key={index}
                className={`group overflow-hidden rounded-3xl bg-gray-800 border border-gray-700 hover:border-cyan-500 transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span
                      className={`px-3 py-1 text-xs font-semibold rounded-full ${
                        project.status === 'Live'
                          ? 'bg-green-600 text-white'
                          : 'bg-yellow-600 text-white'
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${project.color} rounded-full flex items-center justify-center`}>
                      <Icon className="text-white w-6 h-6" />
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 text-xs bg-gray-700 text-gray-300 rounded-full"
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
                      className="flex items-center px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg"
                    >
                      <Github className="w-4 h-4 mr-2" /> Source
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center px-4 py-2 bg-gradient-to-r ${project.color} text-white rounded-lg`}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" /> Live Demo
                    </a>
                  </div>
                  <div className="flex mt-4 space-x-4">
                    <div className="flex items-center text-yellow-400">
                      <Star className="w-4 h-4 mr-1" />
                      <span className="text-sm">{project.stars}</span>
                    </div>
                    <div className="flex items-center text-cyan-400">
                      <Eye className="w-4 h-4 mr-1" />
                      <span className="text-sm">{project.views}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-20">
          <p className="text-gray-400 text-lg">More projects in progress... stay tuned!</p>
          <div className="mt-6 inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:scale-105 transition-transform shadow-lg">
            <Zap className="w-5 h-5 mr-2" /> View All Projects
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
