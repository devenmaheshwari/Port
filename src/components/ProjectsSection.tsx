
import React from 'react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Project 1",
      description: "A brief description of your first project and what technologies you used to build it.",
      technologies: ["React", "JavaScript", "CSS"],
      status: "Completed"
    },
    {
      title: "Project 2", 
      description: "Another project showcasing your skills in backend development and database management.",
      technologies: ["Python", "MySQL", "Flask"],
      status: "In Progress"
    },
    {
      title: "Project 3",
      description: "A mobile application or web service that demonstrates your full-stack capabilities.",
      technologies: ["Node.js", "MongoDB", "Express"],
      status: "Completed"
    }
  ];

  return (
    <section id="projects" className="mb-16 scroll-mt-8">
      <div className="bg-white rounded-lg shadow-sm p-8 border border-cream-200">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Projects & Journey</h2>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">My Learning Journey</h3>
          <p className="text-gray-700 leading-relaxed">
            My computer science journey began with curiosity about how software works. 
            Through coursework and personal projects, I've developed skills in various 
            programming languages and frameworks. Each project has taught me something 
            new and challenged me to grow as a developer.
          </p>
        </div>
        
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Featured Projects</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="border border-cream-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
              <div className="flex justify-between items-start mb-3">
                <h4 className="text-lg font-semibold text-gray-800">{project.title}</h4>
                <span className={`px-2 py-1 text-xs rounded-full ${
                  project.status === 'Completed' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {project.status}
                </span>
              </div>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { ProjectsSection };
