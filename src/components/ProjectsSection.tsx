
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
        "AI agents development with Vercel backend. Model context protocol (MCP) implementation for accurate tool calling",
        "Advanced LLM infrastructure including tokenization optimization and context management",
        "Product design and iteration to solidify a go-to-market strategy"
      ],
      challenges: [
        "Achieving less than 10% error rate in AI tool failiures",
        "Diagnosing model issues using unit testing and log tracing with Adaline and Heroku",
        "Streamlining deployment workflows for user feedback and model iteration"
      ],
      liveUrl: "https://rodeorodeorodeo.com/",
      githubUrl: "https://github.com/LetsRodeo"
    },
    {
      title: "Neurophys",
      description: "Founding Member, Software Engineer 1; AI-based Physical Therapy for Neurological Disorders -- August 2024 – Present",
      technologies: ["TensorFlow", "Computer Vision", "Google MediaPipe API", "CI/CD", "Python"],
      status: "In Progress",
      image: "/src/components/imgs/neuro.png",
      fullDescription: "Developing an AI-based neurological therapist for stroke and traumatic brain injury patients. Made for patients with little access to traditional physical therapy. Teamed up with UW Medical specialists and engineers in the Pacific NorthWest",
      features: [
        "AI-based neurological therapist for those living with neurological conditions",
        "Unsupervised learning for facial droop detection and live exercise feedback",
        "Recovery process tracking over time with k-means clustering",
        "Won the Best Digital Health Idea at the Holloman Health Innovation Competition in Seattle. $5000 award"
      ],
      challenges: [
        "Training model to correctly assess facial droop on 4,000+ photos",
        "Emphasizing scalability and efficiency",
        "Creating CI/CD pipelines for deployment and system monitoring"
      ],
      githubUrl: "https://github.com/Neurophys-Co",
      liveUrl: "https://neurophys.co/"
    },
    {
      title: "Computer Science 4 Environment Lab",
      description: "Undergraduate Research; Winter 2025 - Summer 2025",
      technologies: ["Python", "Firmware", "Biophotovalic Cells"],
      status: "Completed",
      image: "/src/components/imgs/cse4env.png",
      fullDescription: "Constructing a self-powered and biodegradable soil sensor for farmers to maximize yield.",
      features: [
        "Leverages existing nitrogen and phosphorus reactinos in soil to store power",
        "Uses backscattering to send signals about soil health to a server",
        "Involved research in the bio-energy space as well as experimentation on optimal chemical concentrations",
      ],
      challenges: [
        "Designing a small enough sensing system to be biodegradable",
        "Testing in a variety of concentrations from saturation to fertilizer levels",
      ],
      liveUrl: "https://cs4env.uw.edu/"
    },
    {
      title: "Big Hero 7: A Physical Therapy Stretch Robot",
      description: "Robotcs Capstone; Spring 2025",
      technologies: ["ROS2", "Python", "Remote Sensing"],
      status: "Completed",
      image: "/src/components/imgs/bighero.png",
      fullDescription: "As a senior thesis, we altered the Hello Robot Stretch Mobile Manipulator to act as a physical therapy manager for patients with limited mobility",
      features: [
        "Multi-sensor system including sonar, visual, pressure, and joint angle sensors",
        "Autonomous movement and localization around a patient to find optimal angles to practice",
        "Live feedback and improvement over time metrics",
        "Real-time monitoring dashboard and interface for a user to change controls manually"
      ],
      challenges: [
        "Integrating an external sensor onto a mobile manipulator",
        "Understanding the limitations of perception and vision as well as navigation range for a robot",
        "Creating a user interface for a physical therapist to control the robot"
      ],
      githubUrl: "https://github.com/devenmaheshwari/bighero7",
      liveUrl: "https://sites.google.com/view/big-hero-7-group-1/home?authuser=1"
    },
    {
      title: "Trew Media",
      description: "Software Engineering Internship; Summer 2024",
      technologies: ["Python", "REST APIs", "NVIDIA GPU/SDK", "Docker"],
      status: "Completed",
      image: "/src/components/imgs/trew.png",
      fullDescription: "Creating an AI algorithm for product identification and analysis for virality, then upscaling these brands online",
      features: [
        "OCR analysis of TikTok videos and Instagram reels for product identification",
        "Scaling of under utilized products",
        "Utlilizing the NVIDIA SDK Manager for unique development",
        "Grading video virality and identifying audience and fit using AI"
      ],
      challenges: [
        "Configuring an NVIDIA Jetson Orin Chip for ML optimization",
        "Utilizing TikTok and social media APIs for determining video virality",
      ],
      liveUrl: "https://trewmedia.xyz/",
    },
    {
      title: "Microsoft University Shadowship",
      description: "Paired with Senior Microsoft Engineer; Spring 2024",
      technologies: ["Python", "Java"],
      status: "Completed",
      image: "/src/components/imgs/microsoft.png",
      fullDescription: "Tracked the daily life of a senior Microsoft engineer to understand the day-to-day tasks and challenges in SWE",
      features: [
        "Daily tasks and challenges of a senior Microsoft engineer",
        "Selected through the Allen School of Computer Science and Engineering"
      ],
      challenges: [
        "Understanding what working on a global scale tech company involves"
      ],
    },
    {
      title: "Oceans Ventures",
      description: "AI/ML Scout; 2023 - 2024",
      technologies: ["Python", "AI/ML", "Finance", "Data Analysis"],
      status: "Completed",
      image: "/src/components/imgs/oceans.png",
      fullDescription: "Oceans is a VC focused on early stage AI/ML companies. As a scout, I sourced companies all over the Pacific NorthWest and met with founders, funds, and investors to find out where this work is growing the most",
      features: [
        "Founding and sourcing companies and engineers in the Pacific NorthWest",
        "Meeting with founders, funds, and investors to talk about how the Seattle entreprenurial atmosphere is growing",
        "Establishing Oceans presence in the PNW",
        "Assisting in closing the second fund for Oceans estimated at $26 million"
      ],
      challenges: [
        "Analyzing companies and their growth potential based on AI/ML trends and market size",
      ],
      liveUrl: "https://oceans.ventures/"
    },
    {
      title: "Applied Physics Laboratory",
      description: "Student Researcher; Ocean Engineering Department -- June 2023 – September 2023",
      technologies: ["Python", "Computer Vision", "Autonomous Navigation", "Sensors", "MATLAB"],
      status: "Completed",
      image: "/src/components/imgs/apl.png",
      fullDescription: "Modeled a real-time navigation system for autonomous vehicles used to deploy and retrieve oceanographic sensors using computer vision with Python and Linux based scripts.",
      features: [
        "Real-time navigation system for autonomous vehicles",
        "Achieving 91% accuracy in identifying microFloat sensors in water",
        "Collected thousands of acoustic and visual samples of floats in Lake Washington",
        "Designed an efficient database for storing and analyzing oceanographic and navigation input"
      ],
      challenges: [
        "Computer vision for oceanographic microFloat sensor identification",
        "Processing thousands of visual samples of floats",
      ],
      liveUrl: "https://ieeexplore.ieee.org/document/10754147"
    },
    {
      title: "Ocean Data Lab @ UW Oceanography",
      description: "Undergraduate Research Assistant; 2022-2023",
      technologies: ["Python", "Video/Audio Processing", "Power Spectral Density (PSD) Analysis"],
      status: "Completed",
      image: "/src/components/imgs/odl.png",
      fullDescription: "Conducted Data Analysis for the Ocean Data Lab at UW under Professsor Shima Abadi. Projects were focused on determining the source of methane plumes scattered throughout the Puget Sound and advancing distributed acoustic sensing technology.",
      features: [
        "Methane Bubble Sound for identifying methane release from underwater methane plumes",
        "Distributed Acoustic Sensing for sending oceanographic signals using backscattering",
        "Field research in the Puget Sound aboard the R/V Rachel Carson",
        "Integration with sonar, hydrophone, visual, concentation, temperature, depth, and biological sensors"
      ],
      challenges: [
        "Handling tool failiures on board the R/V Rachel Carson for data collection",
        "Gaining knowledge of basic oceanography concepts and how they apply in real life",
        "Reviewing the work of 30+ students for accurate Matlab use and graphing tecnniques"
      ],
      liveUrl: "https://sites.uw.edu/abadi/",
      githubUrl: "https://github.com/Ocean-Data-Lab"
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
        "Financial statement analysis and market research for credit evaluation",
      ],
      challenges: [
        "Manually tagging 900+ internal transactions",
        "Gaining a background in leveraged finance",
      ]
    },
    {
      title: "Google Mentorship Program",
      description: "AI Exercise Feedback -- Winter 2022 to Spring 2022",
      technologies: ["Python", "TensorFlow", "APIs"],
      status: "Completed",
      image: "/src/components/imgs/google.jpg",
      fullDescription: "Under the supervision of a senior Google engineer, led a team of three in creating an AI and computer vision based feedback system to promote exercise efficacy and mitigate injuries",
      features: [
        "Binary system for evaluating good or bad form for push-ups, squats, and sit ups",
        "Airduino and Vex robotics and navigation",
        "Flask based UI and integration with REST APIs for model predictions",
      ],
      challenges: [
        "Overseeing deadlines and managing this team of students asynchronously",
        "Access to limited hardware but creating a web app to deploy app"
      ],
      githubUrl: "https://github.com/devenmaheshwari/Stuyvensant"
    },
    {
      title: "MIT Lincoln Laboratory",
      description: "Beaverworks Summer Institute (MIT BWSI); Summer 2021",
      technologies: ["Remote Sensing", "Radar Image Processing", "Python", "Automation"],
      status: "Completed",
      image: "/src/components/imgs/mit.png",
      fullDescription: "Took a course on Unmanned Aerial System (UAS) SAR (Synthetic Aperture Radar) and worked on a project to develop a SAR system for a radar emulator. Created an efficient imaging system",
      features: [
        "Real-time TCP connection for data transfer",
        "Enhanced imaging system using data interpolation and compression for faster image generation",
        "Image classification and object detection using Yolo",
        "Won 3rd place for our combined radar communication process and image analysis"
      ],
      challenges: [
        "Collaborating on a shared codebase asynchronously",
        "Understanding the physics of radar systems and their different application in the world",
      ],
      githubUrl: "https://github.com/",
      liveUrl: "https://bwsi.mit.edu/bwsi-course-listing/uas-sar/"
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
