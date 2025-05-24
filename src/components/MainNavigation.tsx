import React, { useState } from 'react';

const MainNavigation: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  
  const navItems = [
    { name: "Start", href: "#" },
    { name: "Vägtrafik", href: "#" },
    { name: "Luftfart", href: "#" },
    { name: "Sjöfart", href: "#" },
    { name: "Järnväg", href: "#" },
    { name: "Om oss", href: "#" },
  ];

  return (
    <nav className="bg-ts-blue-700 text-white sticky top-0 z-40">
      <div className="container mx-auto">
        <ul className="flex overflow-x-auto scrollbar-hide">
          {navItems.map((item) => (
            <li key={item.name}>
              <a 
                href={item.href}
                className={`nav-link ${activeItem === item.name ? 'bg-ts-blue-800' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveItem(item.name);
                }}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default MainNavigation;