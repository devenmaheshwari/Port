
import React from 'react';

const MiscSection = () => {
  const hobbies = [
    { name: "UW D1 Basketball Scout Team", color: "from-blue-500 to-cyan-500", bgColor: "bg-blue-50" },
    { name: "Guitar and Double Bass", color: "from-green-500 to-emerald-500", bgColor: "bg-green-50" },
    { name: "Surfing", color: "from-purple-500 to-violet-500", bgColor: "bg-purple-50" },
    { name: "Nature-Integrated Computing", color: "from-red-500 to-pink-500", bgColor: "bg-red-50" },
    { name: "AI, ML, LLMs, Computer Vision, Quantum Computing", color: "from-indigo-500 to-blue-500", bgColor: "bg-indigo-50" },
    { name: "Cooking", color: "from-orange-500 to-yellow-500", bgColor: "bg-orange-50" }
  ];

  const achievements = [
    { 
      title: "Phi Beta Kappa", 
      description: "Inducted into the prestigious Phi Beta Kappa honor society (top 6% of college upperclassmen)",
      color: "from-yellow-500 to-orange-500", 
      bgColor: "bg-yellow-50",
      year: "2025"
    },
    { 
      title: "Honors Achievement Award", 
      description: "Awarded to an incoming UW student for outstanding academic achievement. $40,000 scholarship",
      color: "from-green-500 to-teal-500", 
      bgColor: "bg-green-50",
      year: "2023"
    },
    { 
      title: "National Merit Scholarship Finalist", 
      description: "",
      color: "from-orange-500 to-red-500", 
      bgColor: "bg-orange-50",
      year: "2022"
    },
    { 
      title: "Eagle Scout", 
      description: "Led a two-day restoration and erosion mitigation project in Riverside Park, NYC",
      color: "from-pink-500 to-purple-500", 
      bgColor: "bg-pink-50",
      year: "2022"
    },
  ];

  return (
    <section id="misc" className="mb-16 scroll-mt-24">
      <div className="bg-white rounded-lg shadow-sm p-8 border border-cream-200">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Miscellaneous</h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Interests & Hobbies</h3>
            <div className="grid grid-cols-1 gap-4">
              {hobbies.map((interest, index) => (
                <div key={index} className={`${interest.bgColor} border-2 border-opacity-20 rounded-lg p-4 hover:shadow-md transition-all duration-300 hover:scale-105`}>
                  <div className="flex items-center space-x-3">
                    <div className={`w-3 h-3 bg-gradient-to-r ${interest.color} rounded-full`}></div>
                    <span className="font-medium text-gray-800">{interest.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Achievements</h3>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div key={index} className={`${achievement.bgColor} border-2 border-opacity-20 rounded-lg p-4 hover:shadow-md transition-all duration-300 hover:scale-105`}>
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 bg-gradient-to-r ${achievement.color} rounded-full flex-shrink-0 mt-1`}></div>
                      <div>
                        <h4 className="font-semibold text-gray-800">{achievement.title}</h4>
                        <p className="text-sm text-gray-600">{achievement.description}</p>
                      </div>
                    </div>
                    <span className="text-xs text-gray-500 bg-white px-2 py-1 rounded-full">
                      {achievement.year}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="pt-6 border-t border-cream-200">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">Get In Touch</h3>
          <div className="flex flex-wrap gap-4">
            <a href="mailto:your.email@example.com" 
               className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 transform hover:scale-105 shadow-md">
              Email Me
            </a>
            <a href="https://linkedin.com/in/yourprofile" 
               className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105 shadow-md">
              LinkedIn
            </a>
            <a href="https://github.com/yourusername" 
               className="px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-lg hover:from-gray-900 hover:to-black transition-all duration-200 transform hover:scale-105 shadow-md">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export { MiscSection };
