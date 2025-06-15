import React, { useState, useEffect } from 'react';
import { Terminal, Code, Cloud, Zap } from 'lucide-react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [text, setText] = useState('');
  const [currentPhase, setCurrentPhase] = useState(0);
  
  const phases = [
    'Initializing quantum processors...',
    'Loading blockchain protocols...',
    'Connecting to cloud infrastructure...',
    'Deploying smart contracts...',
    'Portfolio systems online!'
  ];

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(onLoadingComplete, 800);
          return 100;
        }
        return prev + 1.5;
      });
    }, 40);

    return () => clearInterval(progressInterval);
  }, [onLoadingComplete]);

  useEffect(() => {
    const phaseInterval = setInterval(() => {
      setCurrentPhase(prev => {
        if (prev < phases.length - 1) {
          return prev + 1;
        }
        return prev;
      });
    }, 1200);

    return () => clearInterval(phaseInterval);
  }, []);

  useEffect(() => {
    let index = 0;
    const currentText = phases[currentPhase];
    setText('');
    
    const textInterval = setInterval(() => {
      if (index <= currentText.length) {
        setText(currentText.slice(0, index));
        index++;
      } else {
        clearInterval(textInterval);
      }
    }, 50);

    return () => clearInterval(textInterval);
  }, [currentPhase]);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900 z-50 flex items-center justify-center overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'float 4s ease-in-out infinite'
        }}></div>
      </div>

      {/* Floating Tech Icons */}
      <div className="absolute inset-0">
        <Terminal className="absolute top-20 left-20 w-8 h-8 text-cyan-400 animate-float opacity-40" style={{ animationDelay: '0s' }} />
        <Code className="absolute top-40 right-32 w-6 h-6 text-purple-400 animate-float opacity-40" style={{ animationDelay: '1s' }} />
        <Cloud className="absolute bottom-40 left-32 w-7 h-7 text-green-400 animate-float opacity-40" style={{ animationDelay: '2s' }} />
        <Zap className="absolute top-32 right-20 w-5 h-5 text-yellow-400 animate-float opacity-40" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="text-center relative z-10">
        {/* Central Loading Animation */}
        <div className="mb-8">
          <div className="relative">
            {/* Outer Ring */}
            <div className="w-32 h-32 border-4 border-gray-700 rounded-full animate-spin mx-auto mb-6 relative">
              <div className="absolute inset-0 border-4 border-transparent border-t-cyan-400 border-r-purple-500 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '3s' }}></div>
            </div>
            
            {/* Inner Glow */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full animate-pulse opacity-60"></div>
            </div>
            
            {/* Center Icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Terminal className="w-8 h-8 text-white animate-pulse" />
            </div>
          </div>
          
          {/* Terminal Text */}
          <div className="bg-gray-900/80 backdrop-blur-sm rounded-lg p-4 border border-gray-700 max-w-md mx-auto">
            <div className="text-cyan-400 text-lg font-mono mb-2 flex items-center">
              <span className="text-green-400 mr-2">$</span>
              {text}
              <span className="animate-pulse ml-1 text-cyan-400">|</span>
            </div>
            
            {/* Progress Bar */}
            <div className="w-full bg-gray-800 rounded-full h-2 mb-2">
              <div 
                className="bg-gradient-to-r from-cyan-500 via-purple-500 to-green-400 h-2 rounded-full transition-all duration-300 relative overflow-hidden"
                style={{ width: `${progress}%` }}
              >
                <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
              </div>
            </div>
            
            <div className="text-gray-400 text-sm font-mono flex justify-between">
              <span>{progress.toFixed(0)}%</span>
              <span className="text-cyan-400">LOADING...</span>
            </div>
          </div>
        </div>

        {/* Glowing Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;