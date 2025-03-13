import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
}

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Dashboard",
      description: "A comprehensive dashboard for e-commerce businesses with analytics, inventory management, and order processing.",
      // image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      image: "/images/ecommerce-haru-fashion.png",
      tags: ["React", "TypeScript", "Redux"],
      // liveUrl: "https://kachabazar-store-nine.vercel.app/",
      liveUrl: "https://haru-fashion.vercel.app/",
      githubUrl: "https://github.com/darkmoon810/haru-fashion"
    },
    {
      id: 2,
      title: "Portfolio Website Builder",
      description: "A dynamic portfolio website builder that allows developers to create and customize their professional portfolios with ease. Features theme customization, project showcasing, and real-time preview.",
      // image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
      image: "/images/portfolio-website.png",
      tags: ["React", "TypeScript", "TailwindCSS"],
      liveUrl: "https://darkmoonportfolio.vercel.app/",
      githubUrl: "https://github.com/darkmoon810/darkmoon_portfolio"
    },
    {
      id: 3,
      title: "Blog Platform",
      description: "A modern blog platform with markdown support, categories, search functionality, and a clean reading experience.",
      // image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      image: "/images/blog-platform.png",
      tags: ["Next.js", "TypeScript", "MongoDB", "TailwindCSS"],
      liveUrl: "https://ten-blog.vercel.app/",
      githubUrl: "https://github.com/darkmoon810/nextjs-blog"
    },
    {
      id: 4,
      title: "Task Management System",
      description: "A productivity tool for managing tasks, projects, and team collaboration with drag-and-drop functionality.",
      // image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
      image: "/images/task-management.png",
      tags: ["React", "Javascript", "Redux"],
      liveUrl: "https:/dk-task-management.com",
      githubUrl: "https://github.com/darkmoon810/Task-Management-Dashboard"
    },
    {
      id: 5,
      title: "Real-time Chat Application",
      description: "A modern chat application with real-time messaging, file sharing, and group chat capabilities. Features end-to-end encryption and message persistence.",
      image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      tags: ["React", "Node.js", "Socket.io"],
      liveUrl: "https://dk-realtimechat.app",
      githubUrl: "https://github.com/darkmoon810/Real-Time-Chat-Application"
    },
    {
      id: 6,
      title: "Auto Media TweetTelegram",
      description: "Make.com scenario where given a drive folder of media (images & videos), it will randomly grab one. GPT-Vision will analyze the media, then GPT-4 will create a tweet from a fine-tuned model. Dependent on if the media is an image or video, it will upload that media to X/Twitter and Telegram. The scenario was designed to randomly reschedule itself during day-time hours for the next day.",
      image: "/images/Auto Media TweetTelegram  Make.com  ChatGPT.png",
      tags: ["Telegram","ChatGPT","AI Builder","API","Automation","Make.com","Twitter/X","System Automation"],
      liveUrl: "https://darkmoonportfolio.vercel.app",
      githubUrl: "https://darkmoonportfolio.vercel.app"
    },
    {
      id: 7,
      title: "Auto Transaction Matcher",
      description: "Make.com solution to automatically create a sheet from a bank statement, and given a folder of invoices, attach each invoice with AI to their specific transaction in the sheet.",
      image: "/images/Auto Transaction Matcher  Make.com  OpenAI  Sheets.png",
      tags: ["Make.com","Automation","Google Sheets","System Automation","ChatGPT","OpenAI API","AI Data Analytics"],
      liveUrl: "https://darkmoonportfolio.vercel.app",
      githubUrl: "https://darkmoonportfolio.vercel.app"
    }
  ];

  const filters = ['all', 'React', 'TypeScript', 'JavaScript', 'Node.js', 'MongoDB', 'Redux', 'Next.js', 'TailwindCSS', 'Socket.io'];
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.tags.includes(activeFilter));

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">My Projects</h2>
          <div className="w-16 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto"></div>
          <p className="mt-4 text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Check out some of my recent work. These projects showcase my skills and experience.
          </p>
        </div>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === filter
                  ? 'bg-indigo-600 dark:bg-indigo-500 text-white'
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
              }`}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 w-full">
                    <div className="flex justify-between items-center">
                      <h3 className="text-xl font-bold text-white">{project.title}</h3>
                      <div className="flex space-x-3">
                        <a 
                          href={project.githubUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-white hover:text-indigo-300 transition-colors"
                        >
                          <Github size={20} />
                        </a>
                        <a 
                          href={project.liveUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-white hover:text-indigo-300 transition-colors"
                        >
                          <ExternalLink size={20} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300 text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
