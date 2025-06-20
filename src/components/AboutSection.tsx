
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="mb-16 scroll-mt-8">
      <div className="bg-white rounded-lg shadow-sm p-8 border border-cream-200">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">About Me</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <p className="text-gray-700 leading-relaxed mb-4">
              Hello! I'm a passionate computer science undergraduate with a deep interest in 
              software development and problem-solving. Currently pursuing my degree, I'm 
              constantly learning new technologies and working on exciting projects.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              My journey in computer science has been driven by curiosity and a desire to 
              create meaningful solutions. I enjoy working on both front-end and back-end 
              development, and I'm always eager to take on new challenges.
            </p>
            <p className="text-gray-700 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing 
              to open source projects, or working on personal projects that challenge my 
              skills and creativity.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="w-48 h-48 bg-cream-200 rounded-full flex items-center justify-center">
              <span className="text-gray-500 text-sm">Your Photo Here</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { AboutSection };
