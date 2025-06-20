
import React from 'react';
import { User, FileText, Briefcase, Folder } from 'lucide-react';

const Sidebar = () => {
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
    <aside className="fixed left-0 top-0 h-full w-64 bg-white shadow-lg border-r border-cream-200">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Your Name</h1>
        <p className="text-gray-600 text-sm mb-8">Computer Science Student</p>
        
        <nav>
          <ul className="space-y-2">
            {menuItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="w-full flex items-center space-x-3 px-4 py-3 text-left text-gray-700 hover:bg-cream-100 rounded-lg transition-colors duration-200"
                  >
                    <IconComponent size={18} />
                    <span>{item.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export { Sidebar };
