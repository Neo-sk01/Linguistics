'use client';

import { useEffect, useRef } from 'react';
import Script from 'next/script';

declare global {
  interface Window {
    botpress: any;
  }
}

export const BotpressChat = () => {
  const botpressLoaded = useRef(false);
  
  useEffect(() => {
    // Only initialize once the script is loaded and component is mounted
    if (typeof window !== 'undefined' && window.botpress && !botpressLoaded.current) {
      botpressLoaded.current = true;
      
      // Initialize the chat with custom styling
      window.botpress.init({
        "botId": "459ed6ec-3073-4c37-aa8e-64a8d5f64956",
        "clientId": "60f420fb-4375-46b3-b126-94104ea1921c",
        "selector": "#webchat",
        "configuration": {
          "website": {},
          "email": {},
          "phone": {},
          "termsOfService": {},
          "privacyPolicy": {},
          "color": "#5eb1ef",
          "variant": "soft",
          "themeMode": "light",
          "fontFamily": "inter",
          "radius": 1,
          "layout": {
            "width": "400px",
            "height": "600px"
          },
          "theme": {
            "primaryColor": "#5eb1ef",
            "secondaryColor": "#ffffff",
            "backgroundColor": "#ffffff",
            "textColor": "#1a1a1a",
            "botMessageColor": "#f8f9fa",
            "botMessageTextColor": "#1a1a1a",
            "userMessageColor": "#5eb1ef",
            "userMessageTextColor": "#ffffff"
          }
        }
      });

      // Open the chat when it's ready
      window.botpress.on("webchat:ready", () => {
        window.botpress.open();
      });
    }
  }, []);

  return (
    <>
      <Script 
        src="https://cdn.botpress.cloud/webchat/v2.4/inject.js"
        strategy="afterInteractive"
        onLoad={() => console.log('Botpress script loaded')}
      />
      
      {/* Webchat container */}
      <div id="webchat" style={{ width: '400px', height: '600px' }}></div>
      
      {/* Custom styling for the chat widget */}
      <style jsx global>{`
        /* Main chat container */
        #webchat .bpw-widget-btn {
          background-color: #5eb1ef !important;
          border-radius: 50% !important;
          bottom: 20px !important;
          right: 20px !important;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1) !important;
        }
        
        /* Chat window */
        #webchat .bpw-chat-container {
          border-radius: 12px !important;
          box-shadow: 0 5px 25px rgba(0, 0, 0, 0.15) !important;
          border: 1px solid #e5e7eb !important;
          overflow: hidden !important;
        }
        
        /* Header */
        #webchat .bpw-header-container {
          background-color: #5eb1ef !important;
          color: white !important;
          padding: 15px 20px !important;
        }
        
        /* Chat messages area */
        #webchat .bpw-chat-container .bpw-message {
          border-radius: 12px !important;
          margin: 8px 0 !important;
          max-width: 85% !important;
        }
        
        /* Bot message */
        #webchat .bpw-chat-container .bpw-from-bot .bpw-message-content {
          background-color: #f8f9fa !important;
          color: #1a1a1a !important;
          border-radius: 12px 12px 12px 4px !important;
        }
        
        /* User message */
        #webchat .bpw-chat-container .bpw-from-user .bpw-message-content {
          background-color: #5eb1ef !important;
          color: white !important;
          border-radius: 12px 12px 4px 12px !important;
        }
        
        /* Input area */
        #webchat .bpw-composer {
          background-color: white !important;
          border-top: 1px solid #e5e7eb !important;
          padding: 10px !important;
        }
        
        /* Input field */
        #webchat .bpw-composer textarea {
          background-color: #f8f9fa !important;
          border-radius: 20px !important;
          padding: 10px 15px !important;
          border: 1px solid #e5e7eb !important;
        }
        
        /* Buttons */
        #webchat .bpw-button {
          background-color: #5eb1ef !important;
          color: white !important;
          border-radius: 20px !important;
          padding: 8px 16px !important;
          margin: 5px !important;
          border: none !important;
        }
        
        #webchat .bpw-button:hover {
          background-color: #4a9cd9 !important;
        }
      `}</style>
    </>
  );
};
