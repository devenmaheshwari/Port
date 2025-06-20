
import React from 'react';
import { HorizontalNavbar } from './HorizontalNavbar';
import { AboutSection } from './AboutSection';
import { ResumeSection } from './ResumeSection';
import { ProjectsSection } from './ProjectsSection';
import { MiscSection } from './MiscSection';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-cream-50">
      <HorizontalNavbar />
      <main className="pt-20">
        <div className="max-w-6xl mx-auto py-8 px-6">
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
