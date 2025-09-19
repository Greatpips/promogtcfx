import React, { useEffect, useState } from 'react';

const GoogleMapApp = () => {
  const [isApiLoaded, setIsApiLoaded] = useState(false);
  const [map, setMap] = useState(null);

  // Updated coordinates for Wemco Road, Ikeja, Lagos
  const location = { lat: 6.6343, lng: 3.3510 }; 

  useEffect(() => {
    // This effect handles loading the Google Maps API script.
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
    script.async = true;
    script.defer = true;
    
    window.initMap = () => {
      setIsApiLoaded(true);
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
      delete window.initMap;
    };
  }, []);

  useEffect(() => {
    // This effect runs once the API script is loaded.
    if (isApiLoaded) {
      const mapOptions = {
        center: location,
        zoom: 17, // Increased zoom to match the image
        mapId: 'DEMO_MAP_ID', // Replace with your own Map ID for custom styles if needed
      };

      const newMap = new google.maps.Map(document.getElementById('map'), mapOptions);
      setMap(newMap);

      new google.maps.Marker({
        position: location,
        map: newMap,
        title: '25 Citc House',
      });
    }
  }, [isApiLoaded]);

  const handleDirectionsClick = () => {
    const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=25%20Citc%20House,%20Wemco%20Road,%20Ikeja,%20Lagos`;
    window.open(directionsUrl, '_blank');
  };

  return (
    <div className="">
      <div id="map" className=""></div>

      {/* Info Card positioned at the top-left */}
      <div className=" z-10 bg-white shadow-lg rounded-xl p-4 md:p-6 max-w-sm">
        <div className="flex justify-between items-center mb-2">
          <div className="flex flex-col">
            <h2 className="text-xl font-bold text-gray-900">25 Citc House</h2>
            <p className="text-sm text-gray-600">25 Citc House, Wemco Road, Ikeja, Lagos</p>
          </div>
          <button 
            onClick={handleDirectionsClick}
            className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
            aria-label="Get directions"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-1" viewBox="0 0 24 24" fill="currentColor">
              <path d="M21.75 6.75l-4.25-4.25c-.3-.3-.75-.4-1.15-.1l-14.75 6.75c-.5.2-.6.9-.2 1.3l.75.75c.4.4.9.4 1.3 0l1.75-1.75v10.5c0 .5.4.9.9.9h7.5c.5 0 .9-.4.9-.9V9.5l2-2c.4-.4.4-.9 0-1.3l-.75-.75c-.4-.4-.9-.5-1.3-.1zM11.25 10.5v-2l-1.5 1.5-1.5-1.5v-2l3.5 3.5zm-5 4.5h2v-2h-2v2zm-2-2h-2v-2h2v2zm5-2h-2v-2h2v2zm-2-2h-2v-2h2v2zm5 2h-2v-2h2v2zm-2-2h-2v-2h2v2zm5 2h-2v-2h2v2zm-2-2h-2v-2h2v2z"/>
            </svg>
            <span>Directions</span>
          </button>
        </div>
        <a href="https://maps.google.com/maps?q=25%20Citc%20House,%20Wemco%20Road,%20Ikeja,%20Lagos" target="_blank" rel="noopener noreferrer" className="block text-blue-600 text-sm hover:underline">
          View larger map
        </a>
      </div>
    </div>
  );
};

export default GoogleMapApp;