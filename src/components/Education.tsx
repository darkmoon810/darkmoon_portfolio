import React from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Education</h2>
          <div className="w-16 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto"></div>
          <p className="mt-4 text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            My academic background and qualifications that have shaped my professional journey.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
            <div className="p-8">
              <div className="flex items-center mb-6">
                <div className="bg-indigo-100 dark:bg-indigo-900/30 p-3 rounded-full text-indigo-600 dark:text-indigo-400 mr-4">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Dakota State University</h3>
                  <p className="text-indigo-600 dark:text-indigo-400 font-medium">Bachelor of Science in Computer Science</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="flex items-center">
                  <Calendar size={18} className="text-indigo-600 dark:text-indigo-400 mr-2" />
                  <span className="text-gray-700 dark:text-gray-300">2016 - 2020</span>
                </div>
                <div className="flex items-center">
                  <MapPin size={18} className="text-indigo-600 dark:text-indigo-400 mr-2" />
                  <span className="text-gray-700 dark:text-gray-300">Madison, South Dakota</span>
                </div>
                <div className="flex items-center">
                  <Award size={18} className="text-indigo-600 dark:text-indigo-400 mr-2" />
                  <span className="text-gray-700 dark:text-gray-300">GPA: 3.8/4.0</span>
                </div>
              </div>
              
              <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Key Courses</h4>
                <div className="flex flex-wrap gap-2 mb-6">
                  {['Web Development', 'Data Structures & Algorithms', 'Artificial Intelligence', 'Software Engineering', 'Database Systems', 'UI/UX Design', 'Mobile App Development'].map(course => (
                    <span 
                      key={course} 
                      className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300 text-sm font-medium rounded-full"
                    >
                      {course}
                    </span>
                  ))}
                </div>
                
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Achievements</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                  <li>Dean's List for 7 consecutive semesters</li>
                  <li>Graduated with Honors in Computer Science</li>
                  <li>Winner of the Annual Hackathon (2019)</li>
                  <li>Teaching Assistant for Web Development courses</li>
                  <li>Teaching Assistant for Artificial Intelligence courses</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-indigo-50 dark:bg-indigo-900/10 p-6">
              <p className="text-gray-700 dark:text-gray-300 italic">
                "My time at Dakota State University provided me with a strong foundation in computer science and artificial intelligence principles and 
                practical experience that has been invaluable throughout my professional career."
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <a 
              href="#skills" 
              className="inline-flex items-center text-indigo-600 dark:text-indigo-400 font-medium hover:underline"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              View My Skills
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;