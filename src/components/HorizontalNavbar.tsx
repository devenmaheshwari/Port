
import React from 'react';
import { User, FileText, Briefcase, Folder } from 'lucide-react';

const HorizontalNavbar = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const menuItems = [
    { id: 'about', label: 'About Me', icon: User },
    { id: 'resume', label: 'Resume', icon: FileText },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'misc', label: 'Miscellaneous', icon: Folder },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md border-b border-cream-200">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Deven Maheshwari</h1>
            <p className="text-gray-600 text-sm">Computer Science & Sustainability</p>
          </div>
          
          <div className="flex space-x-8">
            {menuItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-cream-100 rounded-lg transition-colors duration-200"
                >
                  <IconComponent size={18} />
                  <span className="font-medium">{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export { HorizontalNavbar };
