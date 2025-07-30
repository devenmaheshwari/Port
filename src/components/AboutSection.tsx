
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="mb-16 scroll-mt-8">
      <div className="bg-white rounded-lg shadow-sm p-8 border border-cream-200">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">About Me</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <p className="text-gray-700 leading-relaxed mb-4">
              Hi, my name's Deven Maheshwari. I'm a senior at the University of Washington
              where I study computer science and environmental studies. I'm excited about 
              building sustainable technology and learning about quantam and machine learning 
              advancements. I'm from New York originally and I love playing basketball. Feel 
              free to reach out at devenm@uw.edu. 
              
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              
            </p>
            <p className="text-gray-700 leading-relaxed">
               
            </p>
          </div>
          <div className="flex justify-center">
            <div className="w-48 h-48 bg-cream-200 rounded-full overflow-hidden">
              <img
                src="src/pro.JPG"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { AboutSection };
