import React, { useEffect, useRef, useState } from 'react';
import { 
  SiJavascript, 
  SiTypescript, 
  SiHtml5, 
  SiCss3, 
  SiPython,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiNextdotjs,
  SiVuedotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiWebpack,
  SiJest,
  SiFigma,
  SiGithubactions,
} from 'react-icons/si';
import { TbApi } from 'react-icons/tb';
import { FaCode, FaServer, FaTools } from 'react-icons/fa';
import { ArrowRight } from 'lucide-react';
import { Code, Sparkles} from 'lucide-react';

interface SkillItemProps {
  name: string;
  level: number;
  icon: React.ReactNode;
}

const SkillItem: React.FC<SkillItemProps> = ({ name, level, icon }) => {
  const progressRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              if (progressRef.current) {
                progressRef.current.style.width = `${level}%`;
                progressRef.current.style.opacity = '1';
              }
            }, 200);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (progressRef.current) {
      observer.observe(progressRef.current);
    }
    
    return () => {
      if (progressRef.current) {
        observer.unobserve(progressRef.current);
      }
    };
  }, [level]);
  
  return (
    <div 
      className="mb-6 group relative"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/10 dark:to-purple-900/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="relative">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center">
            <div className="mr-3 text-indigo-600 dark:text-indigo-400 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
              {icon}
            </div>
            <span className="text-gray-700 dark:text-gray-300 font-medium group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
              {name}
            </span>
          </div>
          <span className="text-gray-700 dark:text-gray-300 font-medium group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
            {level}%
          </span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
          <div 
            ref={progressRef}
            className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 h-2.5 rounded-full transition-all duration-1000 ease-out opacity-0 group-hover:shadow-lg group-hover:shadow-indigo-500/50"
            style={{ width: '0%' }}
          ></div>
        </div>
      </div>
    </div>
  );
};

const SkillCategory: React.FC<{ title: string; icon: React.ReactNode; skills: { name: string; level: number; icon: React.ReactNode }[] }> = ({ 
  title, 
  icon,
  skills 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transform transition-all duration-500 hover:shadow-xl hover:-translate-y-1 relative overflow-hidden group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated border gradient */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute inset-[1px] rounded-lg bg-white dark:bg-gray-800"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-indigo-400 dark:bg-indigo-500 rounded-full animate-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
      
      <div className="relative">
        <div className="flex items-center mb-6">
          <div className="p-3 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 rounded-full text-indigo-600 dark:text-indigo-400 mr-3 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
            {icon}
          </div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:via-purple-600 group-hover:to-pink-600 transition-all duration-300">
            {title}
          </h3>
        </div>
        <div>
          {skills.map((skill) => (
            <SkillItem 
              key={skill.name} 
              name={skill.name} 
              level={skill.level} 
              icon={skill.icon} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  const languageSkills = [
    { name: 'JavaScript', level: 95, icon: <SiJavascript size={18} /> },
    { name: 'TypeScript', level: 85, icon: <SiTypescript size={18} /> },
    { name: 'HTML', level: 99, icon: <SiHtml5 size={18} /> },
    { name: 'CSS/SCSS', level: 98, icon: <SiCss3 size={18} /> },
    { name: 'Python', level: 70, icon: <SiPython size={18} /> },
  ];

  const frameworkSkills = [
    { name: 'React', level: 99, icon: <SiReact size={18} /> },
    { name: 'Redux', level: 98, icon: <SiRedux size={18} /> },
    { name: 'Tailwind CSS', level: 98, icon: <SiTailwindcss size={18} /> },
    { name: 'Next.js', level: 97, icon: <SiNextdotjs size={18} /> },
    { name: 'Vue.js', level: 99, icon: <SiVuedotjs size={18} /> },
  ];

  const backendSkills = [
    { name: 'Node.js', level: 84, icon: <SiNodedotjs size={18} /> },
    { name: 'Express.js', level: 87, icon: <SiExpress size={18} /> },
    { name: 'MongoDB', level: 85, icon: <SiMongodb size={18} /> },
    { name: 'REST APIs', level: 80, icon: <TbApi size={18} /> },
    { name: 'PostgreSQL', level: 85, icon: <SiPostgresql size={18} /> },
  ];

  const toolsSkills = [
    { name: 'Git', level: 96, icon: <SiGit size={18} /> },
    { name: 'Webpack/Vite', level: 99, icon: <SiWebpack size={18} /> },
    { name: 'Jest/Testing Library', level: 90, icon: <SiJest size={18} /> },
    { name: 'Figma/Adobe XD', level: 97, icon: <SiFigma size={18} /> },
    { name: 'CI/CD', level: 90, icon: <SiGithubactions size={18} /> },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
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
        {[...Array(20)].map((_, i) => (
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
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 rounded-full blur-xl opacity-50 animate-pulse"></div>
            <Code className="w-8 h-8 text-indigo-600 dark:text-indigo-400 animate-spin-slow relative z-10" />
            <Sparkles className="absolute -top-2 -right-2 w-4 h-4 text-indigo-400 animate-pulse z-10" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Skills
            <span className="text-indigo-600 dark:text-indigo-400 animate-pulse">.</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 mx-auto"></div>
          <p className="mt-4 text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Here are the technologies and tools I work with on a daily basis.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <SkillCategory 
            title="Languages" 
            icon={<FaCode size={24} />}
            skills={languageSkills} 
          />
          
          <SkillCategory 
            title="Frontend Frameworks" 
            icon={<SiReact size={24} />}
            skills={frameworkSkills} 
          />
          
          <SkillCategory 
            title="Backend Development" 
            icon={<FaServer size={24} />}
            skills={backendSkills} 
          />
          
          <SkillCategory 
            title="Tools & Workflow" 
            icon={<FaTools size={24} />}
            skills={toolsSkills} 
          />
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            I'm constantly learning and expanding my skill set to stay current with the latest technologies and best practices.
          </p>
          <a 
            href="#projects" 
            className="inline-flex items-center text-indigo-600 dark:text-indigo-400 font-medium hover:underline group"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            See My Projects
            <ArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Skills;