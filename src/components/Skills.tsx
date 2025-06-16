import React, { useState, useEffect, useRef } from 'react';
import { Code, Cloud, Zap, Cpu } from 'lucide-react';

const Skills: React.FC = () => {
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);
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

  const skills = [
    {
      category: 'Web Development',
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
      technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS'],
      description: 'Building responsive and interactive websites.',
      proficiency: 75,
    },
    {
      category: 'Cloud & Deployment',
      icon: Cloud,
      color: 'from-purple-500 to-indigo-500',
      technologies: ['GitHub Pages', 'Netlify', 'Firebase (basic)'],
      description: 'Deploying websites and managing projects online.',
      proficiency: 60,
    },
    {
      category: 'AI & Machine Learning (Learning)',
      icon: Cpu,
      color: 'from-pink-500 to-red-500',
      technologies: ['Python', 'Scikit-learn', 'Colab', 'Pandas'],
      description: 'Exploring AI/ML fundamentals and mini projects.',
      proficiency: 50,
    },
    {
      category: 'Blockchain (Exploring)',
      icon: Zap,
      color: 'from-yellow-500 to-orange-500',
      technologies: ['Web3 (basic)', 'Smart Contract concepts', 'Metamask'],
      description: 'Learning how decentralized apps work.',
      proficiency: 40,
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-black text-white relative overflow-hidden">
      <div className="container mx-auto px-6 z-10 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mb-6 animate-pulse-glow">
            <Code className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl font-bold">My Growing Skills</h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            I'm always curious to learn and improve. Here's a glimpse of what I'm currently exploring and building with.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredSkill(index)}
                onMouseLeave={() => setHoveredSkill(null)}
                className={`bg-gray-800/50 backdrop-blur-md border border-gray-700/30 rounded-xl p-6 transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 p-3 rounded-full bg-gradient-to-r ${skill.color} mr-4`}>
                    <Icon className="w-full h-full text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{skill.category}</h3>
                    <p className="text-sm text-gray-400">{skill.proficiency}% Proficiency</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm mb-4">{skill.description}</p>
                <ul className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech, i) => (
                    <li
                      key={i}
                      className="text-xs text-gray-300 px-2 py-1 bg-gray-700/30 border border-gray-600/30 rounded-md hover:border-cyan-400/50"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400 max-w-2xl mx-auto text-sm">
            I'm still exploring and building — one bug, one feature, one lesson at a time 🚀
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
