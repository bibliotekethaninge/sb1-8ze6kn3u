import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface AnnouncementBannerProps {
  message: string;
  onClose: () => void;
}

const AnnouncementBanner: React.FC<AnnouncementBannerProps> = ({ message, onClose }) => {
  return (
    <div className="bg-blue-100 py-3 px-4 flex justify-between items-center animate-slide-down">
      <p className="text-sm font-medium text-ts-gray-800">{message}</p>
      <button 
        onClick={onClose}
        className="text-ts-gray-700 hover:text-ts-gray-900 transition-colors"
        aria-label="Stäng meddelande"
      >
        <ChevronDown size={20} />
      </button>
    </div>
  );
};

export default AnnouncementBanner;