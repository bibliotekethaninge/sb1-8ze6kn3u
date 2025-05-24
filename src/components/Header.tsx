import React, { useState } from 'react';
import { ChevronDown, Menu, Search, MonitorSmartphone } from 'lucide-react';
import LoginModal from './LoginModal';

interface HeaderProps {
  onBankIDLogin: () => void;
}

const Header: React.FC<HeaderProps> = ({ onBankIDLogin }) => {
  const [bannerOpen, setBannerOpen] = useState(true);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Announcement banner */}
      {bannerOpen && (
        <div className="bg-blue-100 py-3 px-4 flex justify-between items-center animate-fade-in">
          <p className="text-sm font-medium text-ts-gray-800">Frågor och svar om PEth-tester</p>
          <button 
            onClick={() => setBannerOpen(false)}
            className="text-ts-gray-700 hover:text-ts-gray-900 transition-colors"
            aria-label="Stäng meddelande"
          >
            <ChevronDown size={20} />
          </button>
        </div>
      )}
      
      {/* Main header */}
      <div className="py-4 px-4 md:px-8 flex justify-between items-center border-b">
        <div className="flex items-center">
          <a href="/" className="block">
            <img 
              src="https://www.transportstyrelsen.se/Static/images/TS_Sv_2V_RGB.svg?rev=222" 
              alt="Transportstyrelsen" 
              className="h-10 md:h-12"
            />
          </a>
        </div>
        
        <div className="flex items-center gap-4">
          <button 
            className="hidden md:flex items-center gap-2 text-ts-gray-800 hover:text-ts-blue-700 transition-colors"
            onClick={() => setLoginModalOpen(true)}
            aria-label="E-tjänster"
          >
            <MonitorSmartphone size={20} />
            <span className="font-medium">E-tjänster</span>
          </button>
          
          <button 
            className="hidden md:flex items-center gap-2 text-ts-gray-800 hover:text-ts-blue-700 transition-colors"
            aria-label="Sök"
          >
            <Search size={20} />
            <span className="font-medium">Sök</span>
          </button>
          
          <button 
            className="flex items-center gap-2 text-ts-gray-800 hover:text-ts-blue-700 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Meny"
          >
            <Menu size={24} />
            <span className="font-medium">Meny</span>
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b animate-slide-down">
          <div className="flex flex-col p-4">
            <button 
              onClick={() => setLoginModalOpen(true)}
              className="py-3 flex items-center gap-2 text-ts-gray-800 hover:text-ts-blue-700 transition-colors"
            >
              <MonitorSmartphone size={20} />
              <span className="font-medium">E-tjänster</span>
            </button>
            <button 
              className="py-3 flex items-center gap-2 text-ts-gray-800 hover:text-ts-blue-700 transition-colors"
            >
              <Search size={20} />
              <span className="font-medium">Sök</span>
            </button>
          </div>
        </div>
      )}

      {loginModalOpen && (
        <LoginModal onClose={() => setLoginModalOpen(false)} onBankIDLogin={onBankIDLogin} />
      )}
    </header>
  );
};

export default Header;