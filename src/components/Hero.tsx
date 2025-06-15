import React, { useEffect, useState } from 'react';
import { ChevronDown, Globe, Cloud, Code, Zap, Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center overflow-hidden">
      {/* Dynamic Cyber Grid Background */}
      <div className="absolute inset-0 opacity-30">
        <div 
          className="absolute inset-0 transition-all duration-1000 ease-out"
          style={{
            backgroundImage: `
              linear-gradient(rgba(6, 182, 212, 0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 182, 212, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
          }}
        />
      </div>

      {/* 3D Floating Tech Orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-600/20 backdrop-blur-sm border border-cyan-500/30 flex items-center justify-center animate-float">
          <Globe className="w-8 h-8 text-cyan-400" />
        </div>
        <div className="absolute top-40 right-32 w-12 h-12 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-600/20 backdrop-blur-sm border border-purple-500/30 flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
          <Cloud className="w-6 h-6 text-purple-400" />
        </div>
        <div className="absolute bottom-40 left-32 w-14 h-14 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-600/20 backdrop-blur-sm border border-green-500/30 flex items-center justify-center animate-float" style={{ animationDelay: '2s' }}>
          <Code className="w-7 h-7 text-green-400" />
        </div>
        <div className="absolute top-32 right-20 w-10 h-10 rounded-full bg-gradient-to-r from-yellow-500/20 to-orange-600/20 backdrop-blur-sm border border-yellow-500/30 flex items-center justify-center animate-float" style={{ animationDelay: '1.5s' }}>
          <Zap className="w-5 h-5 text-yellow-400" />
        </div>
      </div>

      {/* Main Content */}
      <div className="text-center z-10 px-4 max-w-4xl mx-auto">
        {/* Professional Photo with Enhanced Styling */}
        <div className="mb-12">
          <div className="relative mx-auto w-48 h-48 group">
            {/* Outer Glow Ring */}
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 via-purple-500 to-green-400 rounded-full animate-pulse-glow opacity-60 blur-lg"></div>
            
            {/* Main Photo Container */}
            <div className="relative w-full h-full rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 p-1.5 animate-pulse-glow">
              <div className="w-full h-full rounded-full overflow-hidden bg-gray-800 border-2 border-gray-700">
                <img
  src="/profile.jpg"
  alt="Tushar Bhardwaj- Profile"
  className="w-full h-full object-cover rounded-full transform group-hover:scale-110 transition-transform duration-500"
/>

              </div>
            </div>
            
            {/* Floating Tech Badges */}
            <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center animate-bounce shadow-lg shadow-cyan-500/50">
              <Code className="w-4 h-4 text-white" />
            </div>
            <div className="absolute -bottom-3 -left-3 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center animate-bounce shadow-lg shadow-purple-500/50" style={{ animationDelay: '0.5s' }}>
              <Cloud className="w-4 h-4 text-white" />
            </div>
            <div className="absolute top-1/2 -right-6 w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center animate-bounce shadow-lg shadow-green-500/50" style={{ animationDelay: '1s' }}>
              <Zap className="w-3 h-3 text-white" />
            </div>
          </div>
        </div>

        {/* Animated Heading */}
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-green-400 bg-clip-text text-transparent animate-gradient-xy">
  Tushar Bhardwaj
</span>

          </h1>

         <h2 className="text-3xl md:text-5xl text-gray-300 mb-6 font-light">
  Aspiring{' '}
  <span className="text-cyan-400 font-semibold relative">
    Full Stack Developer
    <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-transparent"></div>
  </span>
  {' '}&{' '}
  <span className="text-purple-400 font-semibold relative">
    Cloud Enthusiast
    <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-transparent"></div>
  </span>
</h2>

          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            Exploring the edge of{' '}
            <span className="text-cyan-300">decentralized</span> and{' '}
            <span className="text-purple-300">cloud-native</span> technologies.
            <br />
            Building the future, one smart contract at a time.
          </p>
        </div>

        {/* Enhanced CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <button 
            onClick={() => scrollToSection('projects')}
            className="group px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-cyan-500/50 relative overflow-hidden"
          >
            <span className="relative z-10">Explore My Work</span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          
          <button 
            onClick={() => scrollToSection('contact')}
            className="group px-10 py-4 border-2 border-purple-500 text-purple-400 rounded-xl font-semibold hover:bg-purple-500 hover:text-white transform hover:scale-105 transition-all duration-300 backdrop-blur-sm bg-purple-500/10 relative overflow-hidden"
          >
            <span className="relative z-10">Let's Connect</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-16">
          {[
            { icon: Github, href: 'https://github.com/0Tusharbhardwaj/', color: 'hover:text-gray-300' },
            { icon: Linkedin, href: 'www.linkedin.com/in/tushar0bhrardwaj', color: 'hover:text-blue-400' },
            { icon: Mail, href: 'mailto:redburg035@gmail.com', color: 'hover:text-green-400' },
          ].map((social, index) => {
            const IconComponent = social.icon;
            return (
              <a
                key={index}
                href={social.href}
                className={`w-14 h-14 bg-gray-800/50 backdrop-blur-sm rounded-xl flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300 hover:scale-110 hover:bg-gray-700/50 border border-gray-700 hover:border-gray-600 shadow-lg hover:shadow-xl`}
              >
                <IconComponent className="w-6 h-6" />
              </a>
            );
          })}
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="animate-bounce cursor-pointer" onClick={() => scrollToSection('about')}>
          <div className="mx-auto w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm border border-cyan-500/30 flex items-center justify-center hover:from-cyan-500/40 hover:to-purple-500/40 transition-all duration-300">
            <ChevronDown className="w-6 h-6 text-cyan-400" />
          </div>
        </div>
      </div>

      {/* Enhanced Glowing Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl opacity-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[32rem] h-[32rem] bg-purple-600 rounded-full filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-green-500 rounded-full filter blur-3xl opacity-5 animate-pulse" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default Hero;
