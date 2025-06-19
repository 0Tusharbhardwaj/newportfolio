import React, { useState, useEffect, useRef } from 'react';
import { Send, Mail, MapPin, Phone, Github, Linkedin, MessageSquare, CheckCircle, User } from 'lucide-react';

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
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.2 });

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setPaperPlanePosition({ x: 100, y: -50 });

    await new Promise(resolve => setTimeout(resolve, 2500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setPaperPlanePosition({ x: 0, y: 0 });
    }, 4000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section ref={sectionRef} id="contact" className="py-24 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      
      {/* Background Pattern */}
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

      {/* Header */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mb-6 animate-pulse-glow">
            <MessageSquare className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">Let's Build Something Amazing</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Have a project, idea, or just want to connect? Feel free to drop a message!
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-green-400 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Contact Info */}
          <div className={`space-y-8 transform transition-all duration-700 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div>
              <h3 className="text-3xl font-bold text-white mb-6 flex items-center">
                <User className="w-8 h-8 mr-3 text-cyan-400" />
                Get In Touch
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                I’m always open to discussing new ideas, creative work or opportunities to be part of your vision.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {[
                { icon: Mail, label: 'Email', value: 'redburg035@gmail.com' },
                { icon: Phone, label: 'Phone', value: '+91 6395219997' },
                { icon: MapPin, label: 'Location', value: 'India' }
              ].map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <div key={index} className="flex items-center space-x-6 p-6 bg-gray-800/50 rounded-2xl border border-gray-700/50 hover:scale-105 transition-all duration-300 group">
                    <div className="w-14 h-14 rounded-full bg-gray-700/60 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7" />
                    </div>
                    <div>
                      <div className="text-gray-400 text-sm font-medium">{contact.label}</div>
                      <div className="text-white font-semibold text-lg">{contact.value}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Social Media Links */}
            <div className="pt-8">
              <h4 className="text-white font-semibold mb-6 text-xl">Connect With Me</h4>
              <div className="flex space-x-4">
                {[
                  { icon: Github, href: 'https://github.com/0Tusharbhardwaj/' },
                  { icon: Linkedin, href: 'https://www.linkedin.com/in/tushar0bhrardwaj/' },
                ].map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-14 h-14 bg-gray-800/50 rounded-xl flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:scale-110 border border-gray-700 transition-all duration-300"
                    >
                      <Icon className="w-6 h-6" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className={`bg-gray-800/30 backdrop-blur-sm rounded-3xl p-10 border border-gray-700/50 relative overflow-hidden transform transition-all duration-700 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-green-500/5 animate-pulse"></div>

            {isSubmitted ? (
              <div className="text-center py-16 relative z-10">
                <CheckCircle className="w-20 h-20 text-green-400 mx-auto mb-6 animate-bounce" />
                <h3 className="text-3xl font-bold text-white mb-4">Message Sent!</h3>
                <p className="text-gray-400 text-lg">Thanks for reaching out. I'll respond soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your Name"
                    className="w-full px-6 py-4 bg-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-400"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Your Email"
                    className="w-full px-6 py-4 bg-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-400"
                  />
                </div>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Subject"
                  className="w-full px-6 py-4 bg-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-400"
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Your Message"
                  className="w-full px-6 py-4 bg-gray-700/50 rounded-xl text-white placeholder-gray-400 resize-none focus:ring-2 focus:ring-cyan-400"
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-10 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl flex items-center justify-center space-x-3 hover:scale-105 transition-all"
                >
                  {isSubmitting ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Sending...</span>
                    </div>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
