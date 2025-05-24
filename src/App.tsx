import React from 'react';
import Header from './components/Header';
import MainNavigation from './components/MainNavigation';
import WelcomeSection from './components/WelcomeSection';
import QuickLinksSection from './components/QuickLinksSection';
import Footer from './components/Footer';
import TwitchStream from './components/TwitchStream';

function App() {
  const [showTwitch, setShowTwitch] = React.useState(false);

  if (showTwitch) {
    return <TwitchStream />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header onBankIDLogin={() => setShowTwitch(true)} />
      <MainNavigation />
      <main className="flex-grow">
        <WelcomeSection />
        <QuickLinksSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;