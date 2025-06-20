
import React, { useState } from 'react';
import { ProjectModal } from './ProjectModal';

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack web application for online shopping",
      technologies: ["React", "Node.js", "MongoDB"],
      status: "Completed",
      fullDescription: "A comprehensive e-commerce platform built from scratch with user authentication, product management, shopping cart functionality, and payment integration. The application features a modern, responsive design and includes both customer and admin interfaces.",
      features: [
        "User authentication and authorization",
        "Product catalog with search and filtering",
        "Shopping cart and checkout process",
        "Order management system",
        "Admin dashboard for inventory management"
      ],
      challenges: [
        "Implementing secure payment processing",
        "Optimizing database queries for large product catalogs",
        "Creating responsive design across all device sizes"
      ],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/yourusername/ecommerce"
    },
    {
      title: "Task Management App",
      description: "Mobile-first task tracking application",
      technologies: ["React Native", "Firebase", "Redux"],
      status: "In Progress",
      fullDescription: "A mobile-first task management application that helps users organize their daily activities, set priorities, and track progress. Built with React Native for cross-platform compatibility.",
      features: [
        "Create and organize tasks with categories",
        "Set due dates and priority levels",
        "Progress tracking and analytics",
        "Offline functionality with sync"
      ],
      challenges: [
        "Implementing offline-first architecture",
        "Optimizing performance for older devices",
        "Creating intuitive gesture-based interactions"
      ],
      githubUrl: "https://github.com/yourusername/taskapp"
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather monitoring system",
      technologies: ["Python", "Flask", "Chart.js"],
      status: "Completed",
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
      title: "Social Media Analytics",
      description: "Analytics dashboard for social media insights",
      technologies: ["Vue.js", "D3.js", "Express"],
      status: "Completed",
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
      title: "Learning Management System",
      description: "Educational platform for online courses",
      technologies: ["Angular", "Spring Boot", "PostgreSQL"],
      status: "In Progress",
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
      title: "Inventory Management",
      description: "Supply chain management solution",
      technologies: ["Django", "React", "Redis"],
      status: "Completed",
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
      title: "Chat Application",
      description: "Real-time messaging platform",
      technologies: ["Socket.io", "React", "Node.js"],
      status: "Completed",
      fullDescription: "A real-time chat application with support for group conversations, file sharing, and message encryption.",
      features: [
        "Real-time messaging with Socket.io",
        "Group chat functionality",
        "File and image sharing",
        "Message encryption and security"
      ],
      challenges: [
        "Implementing end-to-end encryption",
        "Optimizing real-time performance",
        "Managing connection stability"
      ]
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio and blog platform",
      technologies: ["Next.js", "Tailwind CSS", "Vercel"],
      status: "Completed",
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
      title: "Data Visualization Tool",
      description: "Interactive data analysis platform",
      technologies: ["Python", "Streamlit", "Pandas"],
      status: "In Progress",
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
      title: "API Gateway Service",
      description: "Microservices API management platform",
      technologies: ["Go", "Docker", "Kubernetes"],
      status: "Completed",
      fullDescription: "A scalable API gateway service for managing microservices architecture with load balancing, authentication, and monitoring capabilities.",
      features: [
        "Request routing and load balancing",
        "Authentication and authorization",
        "Rate limiting and throttling",
        "API monitoring and analytics"
      ],
      challenges: [
        "Implementing efficient load balancing",
        "Managing service discovery",
        "Creating comprehensive monitoring system"
      ]
    },
    {
      title: "Machine Learning Pipeline",
      description: "Automated ML model training system",
      technologies: ["Python", "TensorFlow", "Docker"],
      status: "In Progress",
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
      title: "Blockchain Voting System",
      description: "Secure voting platform using blockchain",
      technologies: ["Solidity", "Web3.js", "Ethereum"],
      status: "Completed",
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
          <h3 className="text-xl font-semibold text-gray-800 mb-4">My Learning Journey</h3>
          <p className="text-gray-700 leading-relaxed">
            My computer science journey began with curiosity about how software works. 
            Through coursework and personal projects, I've developed skills in various 
            programming languages and frameworks. Each project has taught me something 
            new and challenged me to grow as a developer.
          </p>
        </div>
        
        <h3 className="text-xl font-semibold text-gray-800 mb-6">Featured Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index} 
              onClick={() => openModal(project)}
              className="bg-gradient-to-br from-blue-50 to-indigo-100 border border-blue-200 rounded-lg p-6 hover:shadow-lg transition-all duration-300 cursor-pointer group hover:scale-105"
            >
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
              <p className="text-gray-600 mb-4 text-sm line-clamp-3">{project.description}</p>
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
