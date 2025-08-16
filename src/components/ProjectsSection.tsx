
import React, { useState } from 'react';
import { ProjectModal } from './ProjectModal';

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    {
      title: "Rodeo",
      description: "AI Engineering Intern; June 2025 – Present",
      technologies: ["Vercel", "Node.js", "Prisma", "Heroku", "Typescript", "GraphQL"],
      status: "In Progress",
      image: "/src/components/imgs/rodeo.png",
      fullDescription: "Building and integrating a suite of AI tools – including calendar analysis, user intention classification, and retrieval augmented generation – to deliver personalized recommendations for social connections with less than 10% error rate. Developing AI agents using Vercel and a backend powered by Node.js, Prisma ORM, GraphQL, and Heroku.",
      features: [
        "Calendar analysis and user intention classification",
        "Retrieval augmented generation for personalized recommendations",
        "AI agents development with Vercel backend",
        "Advanced LLM infrastructure including tokenization and context management",
        "Model context protocol (MCP) implementation"
      ],
      challenges: [
        "Achieving less than 10% error rate in recommendations",
        "Diagnosing model issues using unit testing and log tracing",
        "Streamlining deployment workflows for user feedback"
      ],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/yourusername/ecommerce"
    },
    {
      title: "Neurophys",
      description: "Founding Member, Software Engineer 1; AI-based Physical Therapy for Neurological Disorders -- August 2024 – Present",
      technologies: ["TensorFlow", "Computer Vision", "Google MediaPipe API", "CI/CD", "Python"],
      status: "In Progress",
      image: "/src/components/imgs/neuro.png",
      fullDescription: "Developing an AI-based facial recognition system using unsupervised learning to detect facial droop in stroke and traumatic brain injury patients and track recovery process over time. Training a TensorFlow-backed model with the Google MediaPipe API.",
      features: [
        "AI-based facial recognition system for stroke patients",
        "Unsupervised learning for facial droop detection",
        "Recovery process tracking over time",
        "TensorFlow model with Google MediaPipe API integration"
      ],
      challenges: [
        "Training model to correctly assess facial droop on 2,000+ photos",
        "Emphasizing scalability and efficiency",
        "Creating CI/CD pipelines for deployment and system monitoring"
      ],
      githubUrl: "https://github.com/yourusername/taskapp"
    },
    {
      title: "Computer Science 4 Environment Lab",
      description: "Undergraduate Research; Winter 2025 - Summer 2025",
      technologies: ["Python", "Firmware", "Biophotovalic Cells"],
      status: "Completed",
      image: "/src/components/imgs/apl.png",
      fullDescription: "A comprehensive weather dashboard that aggregates data from multiple APIs to provide detailed weather information, forecasts, and historical data visualization.",
      features: [
        "Real-time weather data from multiple sources",
        "Interactive charts and graphs",
        "Location-based weather alerts",
        "Historical weather data analysis"
      ],
      challenges: [
        "Handling multiple API rate limits",
        "Creating responsive data visualizations",
        "Implementing efficient data caching"
      ],
      liveUrl: "https://weather-dashboard.example.com"
    },
    {
      title: "Big Hero 7: A Physical Therapy Stretch Robot",
      description: "Robotcs Capstone; Spring 2025",
      technologies: ["ROS2", "Python", "Remote Sensing"],
      status: "Completed",
      image: "/src/components/imgs/bighero.png",
      fullDescription: "An analytics platform that provides insights into social media performance across multiple platforms with interactive visualizations and automated reporting.",
      features: [
        "Multi-platform data integration",
        "Interactive data visualizations",
        "Automated report generation",
        "Real-time monitoring dashboard"
      ],
      challenges: [
        "Integrating multiple social media APIs",
        "Creating meaningful data visualizations",
        "Optimizing real-time data processing"
      ]
    },
    {
      title: "Trew Media",
      description: "Software Engineering Internship; Summer 2024",
      technologies: ["Python", "REST APIs", "GPUs", "Docker"],
      status: "Completed",
      image: "/src/components/imgs/trew.png",
      fullDescription: "A comprehensive learning management system designed for educational institutions to manage courses, students, and assessments online.",
      features: [
        "Course creation and management",
        "Student enrollment and progress tracking",
        "Interactive quizzes and assignments",
        "Grade book and reporting system"
      ],
      challenges: [
        "Designing scalable database architecture",
        "Implementing real-time collaboration features",
        "Creating accessible user interfaces"
      ]
    },
    {
      title: "Microsoft University Shadowship",
      description: "Paired with Senior Microsoft Engineer; Spring 2024",
      technologies: ["Python", "Java"],
      status: "Completed",
      image: "/src/components/imgs/microsoft.png",
      fullDescription: "A modern, responsive portfolio website showcasing projects and technical blog posts with optimized performance and SEO.",
      features: [
        "Responsive design with Tailwind CSS",
        "Static site generation with Next.js",
        "Blog with MDX support",
        "Contact form integration"
      ],
      challenges: [
        "Optimizing for performance and SEO",
        "Creating engaging animations",
        "Implementing dark mode toggle"
      ],
      liveUrl: "https://yourportfolio.com"
    },
    {
      title: "Oceans Ventures",
      description: "AI/ML Scout; 2023 - 2024",
      technologies: ["Python", "AI/ML", "Finance", "Data Analysis"],
      status: "Completed",
      image: "/src/components/imgs/oceans.png",
      fullDescription: "A robust inventory management system for small to medium businesses to track products, manage suppliers, and optimize stock levels.",
      features: [
        "Real-time inventory tracking",
        "Supplier management",
        "Automated reorder notifications",
        "Sales and inventory reports"
      ],
      challenges: [
        "Implementing real-time updates across users",
        "Optimizing for high-volume transactions",
        "Creating intuitive reporting interfaces"
      ]
    },
    {
      title: "Applied Physics Laboratory",
      description: "Student Researcher; Ocean Engineering Department -- June 2023 – September 2023",
      technologies: ["Python", "Computer Vision", "Autonomous Navigation", "Sensors", "MATLAB"],
      status: "Completed",
      image: "/src/components/imgs/apl.png",
      fullDescription: "Modeled a real-time navigation system for autonomous vehicles used to deploy and retrieve oceanographic sensors using computer vision with Python and Linux based scripts. Collected thousands of acoustic and visual samples of underwater methane plumes in the Puget Sound.",
      features: [
        "Real-time navigation system for autonomous vehicles",
        "Computer vision for oceanographic sensor identification",
        "Acoustic and visual sample collection",
        "Power spectral density analysis in MATLAB"
      ],
      challenges: [
        "Achieving 91% accuracy in identifying microFloat sensors in water",
        "Processing thousands of underwater methane plume samples",
        "Estimating release intensity using power spectra density graphs"
      ]
    },
    {
      title: "Ocean Data Lab @ UW Oceanography",
      description: "Undergraduate Research Assistant; 2022-2023",
      technologies: ["Python", "Video/Audio Processing", "Power Spectral Density (PSD) Analysis"],
      status: "Completed",
      image: "/src/components/imgs/odl.png",
      fullDescription: "A powerful data visualization tool that allows users to upload datasets and create interactive charts and dashboards without coding.",
      features: [
        "Drag-and-drop data upload",
        "Interactive chart generation",
        "Statistical analysis tools",
        "Export and sharing capabilities"
      ],
      challenges: [
        "Handling large datasets efficiently",
        "Creating intuitive data manipulation interface",
        "Implementing advanced statistical functions"
      ]
    },
    {
      title: "J.P. Morgan Chase",
      description: "Investment Banking Summer Analyst Intern; Leveraged Finance Group -- June 2022 – August 2022",
      technologies: ["SQL", "Finance", "Data Visualization"],
      status: "Completed",
      image: "/src/components/imgs/jpmc.png",
      fullDescription: "Constructed a credit pricing database to generate transaction comps for new deals and streamline market data queries by examining and manually tagging 900+ internal transactions. Conducted financial statement analysis and market research to support credit evaluations for pitch books.",
      features: [
        "Credit pricing database construction",
        "Transaction comparison generation for new deals",
        "Financial statement analysis",
        "Market research for credit evaluations"
      ],
      challenges: [
        "Manually tagging 900+ internal transactions",
        "Streamlining market data queries",
        "Supporting pitch book development with accurate data"
      ]
    },
    {
      title: "Google Mentorship Program",
      description: "AI Exercise Feedback -- Winter 2022 to Spring 2022",
      technologies: ["Python", "TensorFlow", "APIs"],
      status: "Completed",
      image: "/src/components/imgs/google.jpg",
      fullDescription: "An automated machine learning pipeline that streamlines the process of data preprocessing, model training, and deployment.",
      features: [
        "Automated data preprocessing",
        "Model training and validation",
        "Hyperparameter optimization",
        "Model deployment automation"
      ],
      challenges: [
        "Optimizing training performance",
        "Implementing model versioning",
        "Creating automated testing pipelines"
      ]
    },
    {
      title: "MIT Lincoln Laboratory",
      description: "Beaverworks Summer Institute (MIT BWSI); Summer 2021",
      technologies: ["Remote Sensing", "Radar Image Processing", "Python", "Automation"],
      status: "Completed",
      image: "/src/components/imgs/mit.png",
      fullDescription: "A secure, transparent voting system built on blockchain technology to ensure election integrity and voter privacy.",
      features: [
        "Blockchain-based vote recording",
        "Smart contract validation",
        "Anonymous voting mechanism",
        "Real-time result tracking"
      ],
      challenges: [
        "Ensuring voter privacy and security",
        "Optimizing gas costs for transactions",
        "Creating user-friendly Web3 interface"
      ]
    }
  ];

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="mb-16 scroll-mt-24">
      <div className="bg-white rounded-lg shadow-sm p-8 border border-cream-200">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Projects & Journey</h2>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">My Path</h3>
          <p className="text-gray-700 leading-relaxed">
            Here are some of my projects from the past few years. I've using computer science in a variety of fields,
            from robotics to finance to healthcare and environmental science. I gained valuable experience as a backend 
            and now AI/ML engineer and as a student as we experimented with novel technology.  
          </p>
        </div>
        
        <h3 className="text-xl font-semibold text-gray-800 mb-6">Featured Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index} 
              onClick={() => openModal(project)}
              className="bg-gradient-to-br from-blue-50 to-indigo-100 border border-blue-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer group hover:scale-105"
            >
              <div className="w-full h-32 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="text-lg font-semibold text-gray-800 group-hover:text-blue-700 transition-colors">
                    {project.title}
                  </h4>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    project.status === 'Completed' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <p className="text-gray-600 mb-4 text-sm line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-1">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-white bg-opacity-70 text-blue-700 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-white bg-opacity-70 text-blue-700 rounded text-xs">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <ProjectModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  );
};

export { ProjectsSection };
