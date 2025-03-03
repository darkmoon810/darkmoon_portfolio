import React, { useEffect, useRef } from 'react';
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
    <div className="mb-6">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center">
          <div className="mr-3 text-indigo-600 dark:text-indigo-400">
            {icon}
          </div>
          <span className="text-gray-700 dark:text-gray-300 font-medium">{name}</span>
        </div>
        <span className="text-gray-700 dark:text-gray-300">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
        <div 
          ref={progressRef}
          className="bg-indigo-600 dark:bg-indigo-400 h-2.5 rounded-full transition-all duration-1000 ease-out opacity-0"
          style={{ width: '0%' }}
        ></div>
      </div>
    </div>
  );
};

const SkillCategory: React.FC<{ title: string; icon: React.ReactNode; skills: { name: string; level: number; icon: React.ReactNode }[] }> = ({ 
  title, 
  icon,
  skills 
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="flex items-center mb-6">
        <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-full text-indigo-600 dark:text-indigo-400 mr-3">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
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
    { name: 'React', level: 90, icon: <SiReact size={18} /> },
    { name: 'Redux', level: 80, icon: <SiRedux size={18} /> },
    { name: 'Tailwind CSS', level: 85, icon: <SiTailwindcss size={18} /> },
    { name: 'Next.js', level: 75, icon: <SiNextdotjs size={18} /> },
    { name: 'Vue.js', level: 65, icon: <SiVuedotjs size={18} /> },
  ];

  const backendSkills = [
    { name: 'Node.js', level: 65, icon: <SiNodedotjs size={18} /> },
    { name: 'Express.js', level: 60, icon: <SiExpress size={18} /> },
    { name: 'MongoDB', level: 55, icon: <SiMongodb size={18} /> },
    { name: 'REST APIs', level: 70, icon: <TbApi size={18} /> },
    { name: 'PostgreSQL', level: 55, icon: <SiPostgresql size={18} /> },
  ];

  const toolsSkills = [
    { name: 'Git', level: 85, icon: <SiGit size={18} /> },
    { name: 'Webpack/Vite', level: 80, icon: <SiWebpack size={18} /> },
    { name: 'Jest/Testing Library', level: 70, icon: <SiJest size={18} /> },
    { name: 'Figma/Adobe XD', level: 65, icon: <SiFigma size={18} /> },
    { name: 'CI/CD', level: 70, icon: <SiGithubactions size={18} /> },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">My Skills</h2>
          <div className="w-16 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto"></div>
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
            className="inline-flex items-center text-indigo-600 dark:text-indigo-400 font-medium hover:underline"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            See My Projects
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Skills;