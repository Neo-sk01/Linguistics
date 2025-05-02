"use client";
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

// Define types for Google Maps API
declare global {
  interface Window {
    initMap: (() => void) | undefined;
    google: any;
  }
}

export const MapSection = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // This will only run on client-side after the component mounts
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
    script.async = true;
    script.defer = true;
    
    // Define the initMap function that Google Maps will call back
    window.initMap = () => {
      if (mapRef.current && window.google) {
        // Map coordinates for Johannesburg (as example - adjust as needed)
        const location = { lat: -26.204, lng: 28.047 };
        
        const map = new window.google.maps.Map(mapRef.current, {
          center: location,
          zoom: 15,
          styles: [
            {
              featureType: "all",
              elementType: "labels.text.fill",
              stylers: [{ color: "#6c7b88" }],
            },
            {
              featureType: "administrative",
              elementType: "geometry.fill",
              stylers: [{ color: "#d6e2e6" }],
            },
            {
              featureType: "administrative",
              elementType: "geometry.stroke",
              stylers: [{ color: "#cfd4d7" }],
            },
            {
              featureType: "administrative",
              elementType: "labels.text.fill",
              stylers: [{ color: "#7492a8" }],
            },
            {
              featureType: "administrative.neighborhood",
              elementType: "labels.text.fill",
              stylers: [{ lightness: 25 }],
            },
            {
              featureType: "poi",
              elementType: "geometry.fill",
              stylers: [{ color: "#e0f1f2" }],
            },
            {
              featureType: "poi",
              elementType: "labels.text.fill",
              stylers: [{ color: "#588ca4" }],
            },
            {
              featureType: "poi.park",
              elementType: "geometry.fill",
              stylers: [{ color: "#cae7a8" }],
            },
            {
              featureType: "poi.park",
              elementType: "geometry.stroke",
              stylers: [{ color: "#bae6a1" }],
            },
            {
              featureType: "road",
              elementType: "geometry.fill",
              stylers: [{ color: "#f7f7f7" }],
            },
            {
              featureType: "road",
              elementType: "geometry.stroke",
              stylers: [{ color: "#e7e7e7" }],
            },
            {
              featureType: "road",
              elementType: "labels.icon",
              stylers: [{ visibility: "off" }],
            },
            {
              featureType: "road.arterial",
              elementType: "labels.text.fill",
              stylers: [{ color: "#787878" }],
            },
            {
              featureType: "road.highway",
              elementType: "geometry.fill",
              stylers: [{ color: "#e5e5e5" }],
            },
            {
              featureType: "road.highway",
              elementType: "geometry.stroke",
              stylers: [{ color: "#d9d9d9" }],
            },
            {
              featureType: "road.highway",
              elementType: "labels.icon",
              stylers: [{ visibility: "on" }],
            },
            {
              featureType: "road.highway",
              elementType: "labels.text.fill",
              stylers: [{ color: "#606060" }],
            },
            {
              featureType: "transit",
              stylers: [{ visibility: "off" }],
            },
            {
              featureType: "water",
              elementType: "geometry.fill",
              stylers: [{ color: "#a6cbe3" }],
            },
          ],
        });

        // Add a marker
        const marker = new window.google.maps.Marker({
          position: location,
          map: map,
          title: "Imperium Linguistics",
          animation: window.google.maps.Animation.DROP,
        });

        // Add info window
        const infoWindow = new window.google.maps.InfoWindow({
          content: `
            <div style="padding: 8px;">
              <h3 style="margin: 0 0 8px; font-weight: bold;">Imperium Linguistics</h3>
              <p style="margin: 0 0 4px;">Professional language services</p>
              <p style="margin: 0;">Visit us today!</p>
            </div>
          `,
        });

        marker.addListener("click", () => {
          infoWindow.open(map, marker);
        });
      }
    };

    // Append the script to document
    document.head.appendChild(script);

    // Clean up function
    return () => {
      // Set to undefined instead of null to avoid type errors
      window.initMap = undefined;
      // Make sure the script is still in the document before removing
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <section className="py-16 sm:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium rounded-full bg-blue-500/10 text-blue-600 tracking-wider">OUR LOCATION</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Visit Our Office</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find us at our convenient location where our team of language professionals is ready to assist you.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full h-[500px] rounded-xl overflow-hidden shadow-xl"
        >
          <div 
            ref={mapRef} 
            className="w-full h-full"
            style={{ background: '#e5e7eb' }}
          >
            <div className="flex items-center justify-center h-full">
              <p className="text-muted-foreground">Loading map...</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-8 flex justify-center"
        >
          <a 
            href="https://maps.google.com/maps?q=Imperium+Linguistics" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
          >
            Get Directions
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
