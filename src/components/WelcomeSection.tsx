import React from 'react';

const WelcomeSection: React.FC = () => {
  return (
    <section className="bg-blue-50 py-12 px-4 md:px-8">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold text-ts-gray-800 mb-4">
          Välkommen till Transportstyrelsen
        </h1>
        <p className="text-lg text-ts-gray-700 leading-relaxed">
          Transportstyrelsen arbetar för att uppnå god tillgänglighet, hög kvalitet, säkra och 
          miljöanpassade transporter inom järnväg, luftfart, sjöfart och väg.
        </p>
      </div>
    </section>
  );
};

export default WelcomeSection;