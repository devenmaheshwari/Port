
import React from 'react';
import { Sidebar } from './Sidebar';
import { AboutSection } from './AboutSection';
import { ResumeSection } from './ResumeSection';
import { ProjectsSection } from './ProjectsSection';
import { MiscSection } from './MiscSection';

const Portfolio = () => {
  return (
    <div className="flex min-h-screen bg-cream-50">
      <Sidebar />
      <main className="flex-1 ml-64">
        <div className="max-w-4xl mx-auto py-8 px-6">
          <AboutSection />
          <ResumeSection />
          <ProjectsSection />
          <MiscSection />
        </div>
      </main>
    </div>
  );
};

export default Portfolio;
