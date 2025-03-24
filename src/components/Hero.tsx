import React, { useState, useEffect } from 'react';
import { Github as GitHub, Linkedin, Mail, ArrowDown,Zap } from 'lucide-react';

const TypewriterText: React.FC = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const titles = [
    'Full Stack AI Developer',
    'React Specialist',
    'UI/UX Enthusiast',
    'AI Chatbot Developer',
    'AI Agent Developer',
    'AI Automation Developer',
    'No-Code AI Solutions Developer',
  ];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % titles.length;
      const fullText = titles[i];

      if (isDeleting) {
        setText(fullText.substring(0, text.length - 1));
        setTypingSpeed(75);
      } else {
        setText(fullText.substring(0, text.length + 1));
        setTypingSpeed(150);
      }

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <span className="block relative">
      {text}
      <span className="absolute -right-1 top-0 border-r-2 border-indigo-600 dark:border-indigo-400 h-full animate-blink" />
    </span>
  );
};

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Textured background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/80 to-white/80 dark:from-gray-900/80 dark:to-gray-800/80 backdrop-blur-sm"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-indigo-300 dark:bg-indigo-700 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-pink-300 dark:bg-pink-700 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-purple-300 dark:bg-purple-700 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-indigo-400 dark:bg-indigo-500 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Animated shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute w-4 h-4 border-2 border-indigo-400 dark:border-indigo-500 rounded-full animate-shape"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Animated icons */}

          <div className="text-5xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 flex justify-around">
            <div className="ml-5 mr-5 text-indigo-600 dark:text-indigo-400">[</div>
            <TypewriterText />
            <div className="ml-5 mr-5 text-indigo-600 dark:text-indigo-400">]</div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 relative group">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400">
              Dark&Moon
            </span>
            <Zap className="absolute -right-8 top-0 w-6 h-6 text-yellow-400 animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mb-10 relative">
            Crafting beautiful, responsive, and user-friendly web experiences with modern technologies and implementing AI solutions to automate tasks and improve operations and chatbots.
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"></div>
          </p>

          <div className="flex space-x-6 mb-12">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 transform hover:scale-110 hover:rotate-12"
            >
              <GitHub size={24} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 transform hover:scale-110 hover:rotate-12"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:your.email@example.com" 
              className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 transform hover:scale-110 hover:rotate-12"
            >
              <Mail size={24} />
            </a>
          </div>

          <button
            onClick={scrollToAbout}
            className="group relative animate-bounce bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-3 rounded-full shadow-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-110"
            aria-label="Scroll down"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <ArrowDown className="relative z-10 transform group-hover:translate-y-1 transition-transform duration-300" size={20} />
          </button>
          <div className="mt-4 text-sm text-gray-600 dark:text-gray-400 animate-pulse">
            Scroll to explore
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;