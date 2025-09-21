import React, { useState, useEffect } from 'react';

// The main App component that renders the Testimonial
const App = () => {
  return (
    <div className="">
      <h1 className=""></h1>
      <Testimonial />
    </div>
  );
};

// The Testimonial component handles the pop-up logic and display
const Testimonial = () => {
  const [currentMessage, setCurrentMessage] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  // A list of message templates to cycle through
  const messages = [
    " more Just reserved their seat now.",
    " more Just reserved their seat now.",
    " more Just reserved their seat now.",
    " more Just reserved their seat now.",
    " more Just reserved their seat now.",
    " more Just reserved their seat now.",
    " more Just reserved their seat now.",
    " more Just reserved their seat now.",
    " more Just reserved their seat now.",
    " more Just reserved their seat now.",
    " more Just reserved their seat now.",
    " more Just reserved their seat now."
  ];

  useEffect(() => {
    let messageIndex = 0;

    const showNextMessage = () => {
      // Pick a random number of people (between 1 and 20)
      const numPeople = Math.floor(Math.random() * 20) + 1;
      const message = `${numPeople} people ` + messages[messageIndex];
      setCurrentMessage(message);

      // Make the pop-up visible
      setIsVisible(true);

      // Cycle to the next message
      messageIndex = (messageIndex + 1) % messages.length;

      // Set a timer to hide the pop-up after a few seconds
      setTimeout(() => {
        setIsVisible(false);
      }, 5000); // Wait 5 seconds before sliding out
    };

    // Show the first message immediately
    showNextMessage();

    // Set an interval to show a new message every 10 seconds
    const interval = setInterval(showNextMessage, 10000);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <section>
      <div
        className={`fixed bottom-4 left-4 z-50 p-4 transition-all duration-700 ease-in-out transform
          ${isVisible ? 'translate-x-0' : '-translate-x-full'}
          bg-[whitesmoke] shadow-xl rounded-lg border border-gray-200 w-full max-w-xs sm:max-w-md
          flex items-center space-x-4`}
      >
        {/* User icon (SVG) */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-8 h-8 text-[rgb(182,135,86)] flex-shrink-0"
        >
          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>

        {/* Testimonial message */}
        <div className="flex flex-col">
          <p className="text-sm font-bold text-[1.2rem] text-transparent bg-clip-text bg-gradient-to-r from-[rgb(182,135,86)] via-[rgb(247,174,97)] to-[rgb(182,135,86)]   leading-tight">{currentMessage}</p>
        </div>
      </div>
    </section>
  );
};

export default App;