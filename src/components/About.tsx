import React, { useEffect, useRef, useState } from 'react';
import { Code, Globe, Zap, ArrowRight, Star, Award, Sparkles, Heart, Brain } from 'lucide-react';

const About: React.FC = () => {
  const imageRef = useRef<HTMLImageElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skills = [
    { icon: <Code size={28} />, title: "Clean Code", description: "Writing maintainable, efficient code" },
    { icon: <Globe size={28} />, title: "Responsive", description: "Mobile-first, responsive designs" },
    { icon: <Zap size={28} />, title: "Performance", description: "Optimized for speed and efficiency" },
    { icon: <Brain size={28} />, title: "Problem Solving", description: "Creative solutions to complex challenges" },
    { icon: <Heart size={28} />, title: "User Experience", description: "Creating delightful user interactions" },
    { icon: <Sparkles size={28} />, title: "Innovation", description: "Staying ahead with latest technologies" }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-300 dark:bg-indigo-700 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-300 dark:bg-purple-700 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-pink-300 dark:bg-pink-700 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      
      {/* Floating stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-indigo-400 dark:bg-indigo-500 rounded-full animate-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 relative">
            <Star className="w-8 h-8 text-yellow-400 animate-spin-slow" />
            <Sparkles className="absolute -top-2 -right-2 w-4 h-4 text-yellow-400 animate-pulse" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
            <span className="text-indigo-600 dark:text-indigo-400 animate-pulse">.</span>
          </h2>
          <div className="w-16 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto"></div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div 
            className="md:w-1/2 transform hover:scale-105 transition-all duration-500"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-gradient"></div>
              <div className="relative">
                <img 
                  ref={imageRef}
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80" 
                  alt="Professional workspace" 
                  className="rounded-lg shadow-xl w-full h-auto object-cover opacity-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-600/20 to-transparent rounded-lg"></div>
              </div>
              {isHovered && (
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg blur opacity-25 animate-pulse"></div>
              )}
            </div>
          </div>
          
          <div className="md:w-1/2 space-y-6">
            <div className="transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center gap-2 mb-4">
                <Award className="w-6 h-6 text-yellow-400 animate-bounce" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Full Stack AI Developer with 8+ Years Experience
                  <span className="text-indigo-600 dark:text-indigo-400">.</span>
                </h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                I'm a passionate Full Stack AI developer with over 8 years of professional experience building modern, 
                responsive web applications, AI Chatbots, and AI Agents and AI Automation and No-Code AI Solutions. I specialize in React, TypeScript, and modern CSS frameworks to create 
                beautiful and functional user interfaces. And I am a AI Developer with a passion for creating innovative solutions that help businesses grow and improve their operations and customer engagement.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className={`bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden cursor-pointer
                    ${activeCard === index ? 'ring-2 ring-indigo-500 dark:ring-indigo-400' : ''}`}
                  onMouseEnter={() => setActiveCard(index)}
                  onMouseLeave={() => setActiveCard(null)}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/0 to-purple-600/0 group-hover:from-indigo-600/10 group-hover:to-purple-600/10 transition-all duration-500"></div>
                  <div className="relative">
                    <div className="text-indigo-600 dark:text-indigo-400 mb-4 transform group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2">{skill.title}</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">{skill.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <a 
              href="#contact" 
              className="inline-flex items-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 group relative overflow-hidden"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span className="relative z-10">Get In Touch</span>
              <ArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300 relative z-10" size={20} />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;