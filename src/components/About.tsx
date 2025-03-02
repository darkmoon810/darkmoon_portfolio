import React from 'react';
import { Code, Globe, Zap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <div className="w-16 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto"></div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1544256718-3bcf237f3974?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80" 
              alt="Professional developer" 
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
          
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Frontend Developer with 4+ Years Experience</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              I'm a passionate frontend developer with over 4 years of professional experience building modern, 
              responsive web applications. I specialize in React, TypeScript, and modern CSS frameworks to create 
              beautiful and functional user interfaces.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md">
                <div className="text-indigo-600 dark:text-indigo-400 mb-2">
                  <Code size={24} />
                </div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-1">Clean Code</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">Writing maintainable, efficient code</p>
              </div>
              
              <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md">
                <div className="text-indigo-600 dark:text-indigo-400 mb-2">
                  <Globe size={24} />
                </div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-1">Responsive</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">Mobile-first, responsive designs</p>
              </div>
              
              <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md">
                <div className="text-indigo-600 dark:text-indigo-400 mb-2">
                  <Zap size={24} />
                </div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-1">Performance</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">Optimized for speed and efficiency</p>
              </div>
            </div>
            
            <a 
              href="#contact" 
              className="inline-block bg-indigo-600 dark:bg-indigo-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;