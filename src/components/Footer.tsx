import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    { name: "Kontakta oss", href: "#" },
    { name: "Om webbplatsen", href: "#" },
    { name: "Personuppgifter", href: "#" },
    { name: "Tillgänglighet", href: "#" },
    { name: "Kakor (cookies)", href: "#" },
  ];

  return (
    <footer className="bg-ts-gray-100 py-8 px-4 md:px-8 mt-auto">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div>
              <h3 className="font-semibold text-lg mb-3 text-ts-gray-800">Kontakt</h3>
              <p className="text-ts-gray-600 mb-2">Telefon: 0771-503 503</p>
              <p className="text-ts-gray-600">E-post: kontakt@transportstyrelsen.se</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-3 text-ts-gray-800">Öppettider</h3>
              <p className="text-ts-gray-600 mb-2">Måndag-fredag: 08:00-16:30</p>
              <p className="text-ts-gray-600">Helgdagar: Stängt</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-3 text-ts-gray-800">Följ oss</h3>
              <div className="flex gap-4">
                <a href="#" className="text-ts-blue-700 hover:text-ts-blue-800 transition-colors">Facebook</a>
                <a href="#" className="text-ts-blue-700 hover:text-ts-blue-800 transition-colors">Twitter</a>
                <a href="#" className="text-ts-blue-700 hover:text-ts-blue-800 transition-colors">LinkedIn</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-ts-gray-200 pt-6">
            <ul className="flex flex-wrap gap-6 mb-4">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-ts-blue-700 hover:text-ts-blue-800 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            
            <p className="text-ts-gray-500 text-sm">
              © {currentYear} Transportstyrelsen. Alla rättigheter förbehållna.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;