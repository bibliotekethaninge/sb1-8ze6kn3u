import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface LoginModalProps {
  onClose: () => void;
  onBankIDLogin: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ onClose, onBankIDLogin }) => {
  // Handle keyboard events (ESC to close)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    
    // Prevent scrolling on the body when modal is open
    document.body.style.overflow = 'hidden';
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  // Close when clicking outside the modal
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleBankIDClick = () => {
    onClose();
    onBankIDLogin();
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-start pt-20 animate-fade-in"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md m-4 animate-slide-down">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold text-ts-gray-800">Logga in till E-tjänster</h2>
          <button 
            onClick={onClose}
            className="p-1 rounded-full hover:bg-ts-gray-100 transition-colors"
            aria-label="Stäng"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="p-6">
          <p className="mb-4 text-ts-gray-700">Välj inloggningsmetod:</p>
          
          <button 
            onClick={handleBankIDClick}
            className="w-full py-3 px-4 bg-ts-blue-700 text-white rounded-md mb-3 font-medium hover:bg-ts-blue-800 transition-colors focus:outline-none focus:ring-2 focus:ring-ts-blue-700 focus:ring-opacity-50"
          >
            Logga in med BankID
          </button>
          
          <button className="w-full py-3 px-4 bg-ts-gray-100 text-ts-gray-800 rounded-md mb-3 font-medium hover:bg-ts-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-ts-gray-200 focus:ring-opacity-50">
            Logga in med Freja eID
          </button>
          
          <button className="w-full py-3 px-4 bg-ts-gray-100 text-ts-gray-800 rounded-md font-medium hover:bg-ts-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-ts-gray-200 focus:ring-opacity-50">
            Logga in med användarnamn och lösenord
          </button>
          
          <p className="mt-6 text-sm text-ts-gray-600">
            Genom att logga in godkänner du Transportstyrelsens användarvillkor och datapolicy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;