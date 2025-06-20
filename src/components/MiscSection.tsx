
import React from 'react';

const MiscSection = () => {
  return (
    <section id="misc" className="mb-16 scroll-mt-8">
      <div className="bg-white rounded-lg shadow-sm p-8 border border-cream-200">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Miscellaneous</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Interests & Hobbies</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <span>Open Source Contributions</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>Competitive Programming</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                <span>Tech Meetups & Conferences</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                <span>Reading Tech Blogs</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Achievements</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                <span>Dean's List (Semester/Year)</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                <span>Hackathon Participant</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                <span>Programming Contest Awards</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-cream-200">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Get In Touch</h3>
          <div className="flex flex-wrap gap-4">
            <a href="mailto:your.email@example.com" 
               className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
              Email Me
            </a>
            <a href="https://linkedin.com/in/yourprofile" 
               className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200">
              LinkedIn
            </a>
            <a href="https://github.com/yourusername" 
               className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors duration-200">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export { MiscSection };
