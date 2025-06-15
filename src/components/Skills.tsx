import React, { useState, useEffect, useRef } from 'react';
import { Code, Cloud, Zap, Database, Globe, Shield, Cpu, Layers } from 'lucide-react';

const Skills: React.FC = () => {
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);
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

  const skills = [
    {
      category: 'Frontend Development',
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
      technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Web3.js'],
      description: 'Modern web interfaces with cutting-edge frameworks',
      proficiency: 90
    },
    {
      category: 'Cloud & DevOps',
      icon: Cloud,
      color: 'from-purple-500 to-pink-500',
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD'],
      description: 'Scalable infrastructure and deployment automation',
      proficiency: 85
    },
    {
      category: 'Blockchain & Web3',
      icon: Zap,
      color: 'from-yellow-500 to-orange-500',
      technologies: ['Solidity', 'Ethereum', 'DeFi', 'Smart Contracts', 'IPFS'],
      description: 'Decentralized applications and smart contracts',
      proficiency: 80
    },
    {
      category: 'Backend Systems',
      icon: Database,
      color: 'from-green-500 to-emerald-500',
      technologies: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'GraphQL'],
      description: 'Robust server-side architecture and databases',
      proficiency: 88
    },
    {
      category: 'Web3 Ecosystem',
      icon: Globe,
      color: 'from-indigo-500 to-purple-500',
      technologies: ['MetaMask', 'Hardhat', 'Truffle', 'OpenZeppelin', 'Chainlink'],
      description: 'Complete Web3 development ecosystem',
      proficiency: 75
    },
    {
      category: 'Security & Auditing',
      icon: Shield,
      color: 'from-red-500 to-pink-500',
      technologies: ['Smart Contract Auditing', 'Penetration Testing', 'OAuth', 'JWT', 'SSL/TLS'],
      description: 'Security-first development practices',
      proficiency: 82
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-gray-950 via-black to-gray-900 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="circuit" x="0" y="0" width="25" height="25" patternUnits="userSpaceOnUse">
              <path d="M 12.5,0 L 12.5,12.5 M 0,12.5 L 25,12.5" stroke="currentColor" strokeWidth="0.5" fill="none"/>
              <circle cx="12.5" cy="12.5" r="1.5" fill="currentColor">
                <animate attributeName="r" values="1.5;2.5;1.5" dur="3s" repeatCount="indefinite" />
              </circle>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" className="text-cyan-400"/>
        </svg>
      </div>

      <div className="absolute inset-0">
        <Cpu className="absolute top-20 right-20 w-16 h-16 text-cyan-400/30 animate-float" />
        <Layers className="absolute bottom-20 left-20 w-20 h-20 text-purple-400/30 animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mb-6 animate-pulse-glow">
              <Code className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              My Technical Arsenal
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              A deep, ever-evolving toolkit to engineer innovative, reliable, and scalable systems
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-green-400 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {skills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <div
                  key={index}
                  className={`group relative transform transition-all duration-500 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                  onMouseEnter={() => setHoveredSkill(index)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <div className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-8 border border-gray-700/50 h-full group-hover:scale-[1.02] transition-all duration-300 hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/10 relative overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

                    <div className="flex items-center mb-6 relative z-10">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${skill.color} p-3 mr-4 group-hover:rotate-12 transition-transform duration-300 shadow-lg`}>
                        <IconComponent className="w-full h-full text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                          {skill.category}
                        </h3>
                        <div className="text-sm text-gray-400">{skill.proficiency}% Proficiency</div>
                      </div>
                    </div>

                    <p className="text-gray-400 text-sm mb-6 leading-relaxed relative z-10">
                      {skill.description}
                    </p>

                    <div className="space-y-3 mb-6 relative z-10">
                      {skill.technologies.map((tech, techIndex) => (
                        <div
                          key={techIndex}
                          className="flex items-center justify-between p-2.5 bg-gray-700/30 backdrop-blur-sm rounded-md border border-gray-600/30 hover:bg-gray-600/30 hover:border-cyan-500/30 transition-all duration-300"
                        >
                          <span className="text-gray-300 text-sm font-medium">
                            {tech}
                          </span>
                          <div className="flex space-x-1">
                            {[...Array(5)].map((_, i) => (
                              <div
                                key={i}
                                className={`w-2 h-2 rounded-full ${
                                  hoveredSkill === index ? 'bg-cyan-400 animate-pulse' : i < 4 ? 'bg-gray-500' : 'bg-gray-600'
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="relative z-10">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs text-gray-400">Proficiency</span>
                        <span className="text-xs text-cyan-400">{skill.proficiency}%</span>
                      </div>
                      <div className="w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
                        <div
                          className={`h-2 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000`}
                          style={{ 
                            width: hoveredSkill === index ? `${skill.proficiency}%` : '0%'
                          }}
                        >
                          <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-20 text-center">
            <div className="bg-gradient-to-r from-gray-800/60 to-gray-900/60 backdrop-blur-md rounded-2xl p-8 border border-gray-700/50 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">My Commitment to Growth</h3>
              <p className="text-gray-400 leading-relaxed">
                The tech world moves fast—and I move faster. With each new challenge, I expand my skillset, adapt to change, and strive to build impactful digital experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
