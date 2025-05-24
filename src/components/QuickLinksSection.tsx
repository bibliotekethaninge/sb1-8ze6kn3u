import React from 'react';
import { ChevronRight } from 'lucide-react';

const QuickLinksSection: React.FC = () => {
  const quickLinks = [
    { name: "Frågor och svar om PEth-tester", href: "#" },
    { name: "Fordons- och ägaruppgifter", href: "#" },
    { name: "Fordonsskatt", href: "#" },
    { name: "Förnya körkortet", href: "#" },
  ];

  return (
    <section className="bg-blue-50 pt-4 pb-16 px-4 md:px-8">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-2xl font-bold text-ts-gray-800 mb-6">Hitta direkt</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="quick-link group"
            >
              <span className="font-medium">{link.name}</span>
              <ChevronRight size={20} className="transform group-hover:translate-x-1 transition-transform duration-200" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickLinksSection;