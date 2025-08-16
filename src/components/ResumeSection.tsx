
import React from 'react';

const ResumeSection = () => {
  return (
    <section id="resume" className="mb-16 scroll-mt-8">
      <div className="bg-white rounded-lg shadow-sm p-8 border border-cream-200">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Resume</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Education</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-gray-800">Bachelor of Science in Computer Science</h4>
                <p className="text-gray-600">University of Washington</p>
                <p className="text-sm text-gray-500">Expected Graduation: Dec 2025--June 2026</p>
                <p className="text-sm text-gray-600 mt-1">GPA: 3.84/4.0</p>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-4 mt-8">Current Role</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-semibold text-gray-800">AI Engineering Intern</h4>
                <p className="text-gray-600">Rodeo</p>
                <p className="text-sm text-gray-500">June 2025 -- Present</p>
                <ul className="text-sm text-gray-600 mt-1 list-disc list-inside">
                  Building Rodeo, an AI assistant able to manage your social life
                </ul>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Technical Skills</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-800 mb-2">Programming Languages</h4>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'Java', 'JavaScript', 'C++', 'HTML/CSS'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-800 mb-2">Frameworks & Tools</h4>
                <div className="flex flex-wrap gap-2">
                  {['Flask', 'Node.js', 'SQL', 'Heroku', 'Redis', 'AWS'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-800 mb-2">Concepts</h4>
                <div className="flex flex-wrap gap-2">
                  {['Data Structures/Algorithms', 'Quantum Computing', 'Artificial Intelligence', 'Autonomous Robotics'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { ResumeSection };
