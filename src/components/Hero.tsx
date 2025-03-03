import React, { useState, useEffect } from 'react';
import { Github as GitHub, Linkedin, Mail, ArrowDown } from 'lucide-react';

const TypewriterText: React.FC = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const titles = [
    'Frontend Developer',
    'React Specialist',
    'UI/UX Enthusiast',
    'Web Developer',
    'TypeScript Expert'
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
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-white dark:from-gray-900 dark:to-gray-800 z-0"></div>
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-indigo-300 dark:bg-indigo-700 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-pink-300 dark:bg-pink-700 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-purple-300 dark:bg-purple-700 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="text-5xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 flex justify-around"><div className='ml-5 mr-5'>[ </div><TypewriterText /><div className='ml-5 mr-5'> ]</div></div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">

            <span className="text-indigo-600 dark:text-indigo-400">Dark&Moon</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mb-10">
            Crafting beautiful, responsive, and user-friendly web experiences with modern technologies.
          </p>

          <div className="flex space-x-6 mb-12">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              <GitHub size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:your.email@example.com" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              <Mail size={24} />
            </a>
          </div>

          <button
            onClick={scrollToAbout}
            className="animate-bounce bg-indigo-600 dark:bg-indigo-500 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors"
            aria-label="Scroll down"
          >
            <ArrowDown size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;