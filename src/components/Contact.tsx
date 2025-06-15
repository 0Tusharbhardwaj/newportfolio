import React, { useState, useEffect, useRef } from 'react';
import { Send, Mail, MapPin, Phone, Github, Linkedin, MessageSquare, CheckCircle, Zap, User } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [paperPlanePosition, setPaperPlanePosition] = useState({ x: 0, y: 0 });
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Animate paper plane
    setPaperPlanePosition({ x: 100, y: -50 });
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after success message
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setPaperPlanePosition({ x: 0, y: 0 });
    }, 4000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section 
      ref={sectionRef}
      id="contact"
      className="py-24 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden"
    >
      {/* Enhanced Neural Network Background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <defs>
            <pattern id="neural" patternUnits="userSpaceOnUse" width="25" height="25">
              <circle cx="12.5" cy="12.5" r="1.5" fill="currentColor" className="text-cyan-400">
                <animate attributeName="r" values="1.5;3;1.5" dur="4s" repeatCount="indefinite" />
              </circle>
              <path d="M12.5,0 L12.5,25 M0,12.5 L25,12.5" stroke="currentColor" strokeWidth="0.5" className="text-cyan-400" opacity="0.3" />
              <path d="M0,0 L25,25 M25,0 L0,25" stroke="currentColor" strokeWidth="0.3" className="text-purple-400" opacity="0.2" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#neural)" />
        </svg>
      </div>

      {/* Floating Connection Lines */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={`absolute bg-gradient-to-r ${
              i % 2 === 0 ? 'from-cyan-400 to-transparent' : 'from-purple-400 to-transparent'
            } opacity-20 animate-pulse`}
            style={{
              width: '2px',
              height: `${50 + Math.random() * 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mb-6 animate-pulse-glow">
              <MessageSquare className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Let's Build Something Amazing
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              Ready to discuss your next project? Let's connect and make it happen.
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-green-400 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Enhanced Contact Info */}
            <div className={`space-y-8 transform transition-all duration-700 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}>
              <div>
                <h3 className="text-3xl font-bold text-white mb-6 flex items-center">
                  <User className="w-8 h-8 mr-3 text-cyan-400" />
                  Get In Touch
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                  I'm always interested in hearing about new opportunities, 
                  interesting projects, and innovative ideas. Whether you're looking 
                  to build a DApp, scale your cloud infrastructure, or just want to chat 
                  about the future of tech, I'd love to hear from you.
                </p>
              </div>

              {/* Enhanced Contact Methods */}
              <div className="space-y-6">
                {[
                  { icon: Mail, label: 'Email', value: 'alex.chen@example.com', color: 'text-cyan-400', bg: 'from-cyan-500/20 to-blue-600/20', border: 'border-cyan-500/30' },
                  { icon: MapPin, label: 'Location', value: 'San Francisco, CA', color: 'text-purple-400', bg: 'from-purple-500/20 to-pink-600/20', border: 'border-purple-500/30' },
                  { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567', color: 'text-green-400', bg: 'from-green-500/20 to-emerald-600/20', border: 'border-green-500/30' },
                ].map((contact, index) => {
                  const IconComponent = contact.icon;
                  return (
                    <div key={index} className={`flex items-center space-x-6 p-6 bg-gradient-to-r ${contact.bg} backdrop-blur-sm rounded-2xl border ${contact.border} hover:scale-105 transition-all duration-300 group`}>
                      <div className={`w-14 h-14 rounded-full bg-gray-700/50 flex items-center justify-center ${contact.color} group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-7 h-7" />
                      </div>
                      <div>
                        <div className="text-gray-400 text-sm font-medium">{contact.label}</div>
                        <div className="text-white font-semibold text-lg">{contact.value}</div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Enhanced Social Links */}
              <div className="pt-8">
                <h4 className="text-white font-semibold mb-6 text-xl">Connect With Me</h4>
                <div className="flex space-x-4">
                  {[
                    { icon: Github, href: '#', color: 'hover:text-gray-300', bg: 'hover:bg-gray-700/50' },
                    { icon: Linkedin, href: '#', color: 'hover:text-blue-400', bg: 'hover:bg-blue-500/20' },
                    { icon: MessageSquare, href: '#', color: 'hover:text-green-400', bg: 'hover:bg-green-500/20' },
                  ].map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        className={`w-14 h-14 bg-gray-800/50 backdrop-blur-sm rounded-xl flex items-center justify-center text-gray-400 ${social.color} ${social.bg} transition-all duration-300 hover:scale-110 border border-gray-700 hover:border-gray-600 shadow-lg hover:shadow-xl`}
                      >
                        <IconComponent className="w-6 h-6" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Enhanced Contact Form */}
            <div className={`bg-gray-800/30 backdrop-blur-sm rounded-3xl p-10 border border-gray-700/50 relative overflow-hidden transform transition-all duration-700 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`} style={{ transitionDelay: '200ms' }}>
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-green-500/5 animate-pulse"></div>
              
              {isSubmitted ? (
                <div className="text-center py-16 relative z-10">
                  <div className="relative">
                    <CheckCircle className="w-20 h-20 text-green-400 mx-auto mb-6 animate-bounce" />
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full animate-ping"></div>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">Message Sent!</h3>
                  <p className="text-gray-400 text-lg">Thanks for reaching out. I'll get back to you soon!</p>
                  <div className="mt-6 flex justify-center space-x-2">
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"
                        style={{ animationDelay: `${i * 0.2}s` }}
                      />
                    ))}
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative group">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-4 bg-gray-700/50 backdrop-blur-sm border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 group-hover:border-gray-500"
                        placeholder="Your Name"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                    </div>
                    <div className="relative group">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-4 bg-gray-700/50 backdrop-blur-sm border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 group-hover:border-gray-500"
                        placeholder="Your Email"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                    </div>
                  </div>

                  <div className="relative group">
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 bg-gray-700/50 backdrop-blur-sm border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 group-hover:border-gray-500"
                      placeholder="Subject"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                  </div>

                  <div className="relative group">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-6 py-4 bg-gray-700/50 backdrop-blur-sm border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 resize-none group-hover:border-gray-500"
                      placeholder="Your Message"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-10 py-5 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-3 relative overflow-hidden"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span className="text-lg">Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span className="text-lg">Send Message</span>
                      </>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                </form>
              )}

              {/* Animated Paper Plane */}
              {isSubmitting && (
                <div 
                  className="absolute top-8 right-8 transition-all duration-2000 ease-out"
                  style={{
                    transform: `translate(${paperPlanePosition.x}px, ${paperPlanePosition.y}px) rotate(45deg)`
                  }}
                >
                  <Send className="w-8 h-8 text-cyan-400 animate-bounce" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;