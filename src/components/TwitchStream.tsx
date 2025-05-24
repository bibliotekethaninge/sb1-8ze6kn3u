import React, { useEffect } from 'react';

const TwitchStream: React.FC = () => {
  useEffect(() => {
    // Set body to full height and remove margins/padding
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.height = '100vh';
    
    return () => {
      // Cleanup styles when component unmounts
      document.body.style.margin = '';
      document.body.style.padding = '';
      document.body.style.height = '';
    };
  }, []);

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <iframe
        src="https://player.twitch.tv/?channel=twitchdev&parent=https://transportstyrelsen.netlify.app"
        frameBorder="0"
        allowFullScreen
        scrolling="no"
        height="100%"
        width="100%"
        title="Twitch Stream"
      />
    </div>
  );
};

export default TwitchStream;
