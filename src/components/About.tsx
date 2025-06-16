import React, { useState, useEffect, useRef } from 'react';
import { PenTool, FileText, User, Lightbulb, Target } from 'lucide-react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const textLines = [
    "I'm a 25-year-old tech enthusiast deeply passionate about Web Development, Artificial Intelligence, Cloud Computing, and Blockchain.",
    "With 2 years of hands-on coding experience and a sharp eye as a bug hunter, I've built over 25 projects that reflect my drive and dedication.",
    "I'm always curious to learn and explore new frontiers in technology, be it smart contracts, scalable cloud systems, or AI-driven tools.",
    "My journey is driven by a mission: to build innovative tools that help others, contribute meaningfully to open-source projects, and make a real impact through AI and emerging technologies."
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let lineIndex = 0;
    let charIndex = 0;

    const type = () => {
      if (lineIndex < textLines.length) {
        const currentLine = textLines[lineIndex];
        if (charIndex < currentLine.length) {
          setDisplayedText(prev => prev + currentLine[charIndex]);
          charIndex++;
          setTimeout(type, 20);
        } else {
          setDisplayedText(prev => prev + ' ');
          lineIndex++;
          charIndex = 0;
          setTimeout(type, 400);
        }
      }
    };

    type();
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-24 bg-gradient-to-b from-gray-900 via-black to-gray-800 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none'%3E%3Cg fill='%2306b6d4' fill-opacity='0.1'%3E%3Cpath d='M40 40c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm20-20c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
      </div>

      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400 rounded-full animate-float opacity-20"
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
              <User className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">About Me</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
              Developer | Cloud Enthusiast | AI Explorer | Bug Hunter
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-green-400 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Card */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border border-gray-700/50 relative overflow-hidden gradient-border">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-green-500/5 animate-pulse"></div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 transform hover:scale-105 transition-all duration-500 border border-white/20 shadow-xl relative overflow-hidden">
                  <div className="space-y-3 mb-6">
                    <div className="h-2 bg-gray-600/50 rounded animate-pulse"></div>
                    <div className="h-2 bg-gray-700/50 rounded w-3/4 animate-pulse"></div>
                    <div className="h-2 bg-gray-600/50 rounded w-1/2 animate-pulse"></div>
                    <div className="h-2 bg-gray-700/50 rounded w-5/6 animate-pulse"></div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <FileText className="w-8 h-8 text-cyan-400 animate-float" />
                  </div>
                </div>
                <div className="flex items-center justify-center relative">
                  <div className="relative group">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center animate-bounce shadow-lg">
                      <PenTool className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Text */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 animate-pulse"></div>
                <div className="relative z-10">
                  <div className="text-gray-300 text-lg leading-relaxed font-light">
                    {displayedText}
                    {isVisible && displayedText.length > 0 && displayedText.length < textLines.join(' ').length && (
                      <span className="animate-cursor text-cyan-400 ml-1">|</span>
                    )}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {[{ value: '2+', label: 'Years Coding', icon: Target }, { value: '25+', label: 'Projects Built', icon: FileText }, { value: 'Always', label: 'Learning & Growing', icon: Lightbulb }].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.2 }}
                    className="text-center p-6 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:scale-105 transition-all duration-300 group"
                  >
                    <stat.icon className="w-6 h-6 mx-auto text-gray-400 group-hover:text-white" />
                    <div className="text-2xl font-bold text-white mt-2">{stat.value}</div>
                    <div className="text-sm text-gray-400 group-hover:text-gray-300">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/20">
                <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
                  <Lightbulb className="w-5 h-5 mr-2 text-cyan-400" />
                  My Mission
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  To build innovative tools that help others, contribute meaningfully to open-source projects,
                  and make a real impact through AI and emerging technologies.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
