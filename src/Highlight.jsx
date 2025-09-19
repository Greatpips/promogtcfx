import React, { useState, useEffect } from 'react';
import FadeIn from './FadeIn';
import { useForm, ValidationError } from '@formspree/react';
import long from './img/long.jpg';
import long2 from './img/long2.jpg';
import short1 from './img/short1.jpg';
import short2 from './img/short2.jpg';
import short3 from './img/short3.jpg';
import short4 from './img/short4.jpg';
import short5 from './img/short5.jpg';

function Highlight() {
  const [showForm, setShowForm] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [state, handleSubmit] = useForm('xwpndgbd');

  const handleSignUpClick = () => {
    setShowForm(true);
    setTimeout(() => {
      setIsTransitioning(true);
    }, 10);
  };

  const closeForm = () => {
    setIsTransitioning(false);
    setTimeout(() => {
      setShowForm(false);
    }, 300);
  };

  useEffect(() => {
    if (state.succeeded) {
      const whatsappLink = "https://wa.me/1234567890?text=I've%20successfully%20signed%20up%20with%20FXGTC!";
      alert(`Successfully signed up!\n\nClick OK to chat with us on WhatsApp.\n\n${whatsappLink}`);
      closeForm();
    }
  }, [state.succeeded]);

  return (
    <section className="bg-white  sm:py-4 md:py-[5rem] px-4 sm:px-6 md:px-[2rem]">
      <div className="mx-0 max-w-7xl[">
        <h2
          className="text-[1.5rem] xs:text-[1.8rem] sm:text-[2rem] font-bold text-center mb-6 sm:mb-8 md:mb-12 text-transparent bg-clip-text bg-gradient-to-r from-[rgb(182,135,86)] via-[rgb(238,190,138)] to-[rgb(182,135,86)]"
        >
          HIGHLIGHTS FROM OUR RECENT SEMINARS
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 min-h-[300px] sm:min-h-[400px] md:min-h-[560px]">
          {/* Featured long video highlights */}
          <FadeIn delay={0}>
          <div className="rounded-3xl overflow-hidden shadow-xl transform transition-transform duration-300 hover:scale-105 bg-gray-300 h-[200px] sm:h-[300px] md:h-[400px]">
           
             <img
              src={long}
              alt="Featured seminar highlight 1"
              className="w-full h-full object-cover"
            />
          </div>
          </FadeIn>
          <FadeIn delay={50}>
            <div className="rounded-3xl overflow-hidden shadow-xl transform transition-transform duration-300 hover:scale-105 bg-gray-300 h-[200px] sm:h-[300px] md:h-[400px]">
            <img
              src={long2}
              alt="Featured seminar highlight 2"
              className="w-full h-full object-cover"
            />
          </div>
          </FadeIn>

          {/* Shorter video highlights */}
        
            <FadeIn delay={100}>
              <div className="rounded-3xl overflow-hidden shadow-xl transform transition-transform duration-300 hover:scale-105 bg-gray-200 h-[300px] sm:h-[200px] md:h-[400px]">
              <img
                src={short1}
                alt="Short seminar highlight 1"
                className="w-full h-full object-cover"
              />
            </div>
            </FadeIn>
           <FadeIn delay={150}>
             <div className="rounded-3xl overflow-hidden shadow-xl transform transition-transform duration-300 hover:scale-105 bg-gray-200 h-[300px] sm:h-[200px] md:h-[250px]">
              <img
                src={short2}
                alt="Short seminar highlight 2"
                className="w-full h-full object-cover"
              />
            </div>
           </FadeIn>
           <FadeIn delay={200}>
             <div className="rounded-3xl overflow-hidden shadow-xl transform transition-transform duration-300 hover:scale-105 bg-gray-200 h-[150px] sm:h-[200px] md:h-[250px]">
              <img
                src={short3}
                alt="Short seminar highlight 3"
                className="w-full h-full object-cover"
              />
            </div>
           </FadeIn>
           <FadeIn delay={250}>
             <div className="rounded-3xl overflow-hidden shadow-xl transform transition-transform duration-300 hover:scale-105 bg-gray-200 h-[150px] sm:h-[200px] md:h-[250px]">
              <img
                src={short5}
                alt="Short seminar highlight 4"
                className="w-full h-full object-cover"
              />
            </div>
           </FadeIn >
            <div className="col-span-1 sm:col-span-2 md:col-span-3 rounded-3xl overflow-hidden shadow-xl transform transition-transform duration-300 hover:scale-105 bg-gray-200 h-[200px] sm:h-[300px] md:h-[400px]">
            <img
              src={short4}
              alt="Wide seminar highlight"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="flex justify-start md:justify-start mt-6 sm:mt-8 md:mt-12">
          <FadeIn >
            <button
              onClick={handleSignUpClick}
              className="bg-[rgb(182,135,86)] z-10 text-[0.9rem] xs:text-[1rem] sm:text-[1.1rem] md:text-[1.2rem] text-white px-4 xs:px-6 sm:px-8 md:px-10 py-2 xs:py-3 sm:py-4 rounded-2xl hover:bg-[rgb(2,0,47)] focus:ring-2 focus:ring-[rgb(182,135,86)] focus:outline-none active:bg-[rgb(2,0,47)] transition duration-300 mt-4 sm:mt-[2em] mx-auto md:ml-[6rem] md:mx-0"
              aria-label="Reserve your seat now"
            >
              Reserve Your Seat Now
            </button>
          </FadeIn>
        </div>
      </div>

      {/* Form Pop-up */}
      {showForm && (
        <div
          className={`fixed inset-0 bg-gray-900/50 flex items-center justify-center z-50 transition-opacity duration-300 ease-in-out ${
            isTransitioning ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className={`bg-white p-6 xs:p-8 rounded-lg shadow-lg w-full max-w-[90%] sm:max-w-md mx-4 transform transition-all duration-300 ease-in-out ${
              isTransitioning ? 'scale-100' : 'scale-95'
            }`}
          >
            <h2 className="text-lg xs:text-xl sm:text-2xl font-bold mb-4 text-gray-800">Sign Up</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                name="Name"
                required
                className="w-full p-2 xs:p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-sm xs:text-base"
                aria-describedby="name-error"
              />
              <ValidationError prefix="Name" field="Name" errors={state.errors} id="name-error" />
              <input
                type="email"
                placeholder="Email"
                name="Email"
                required
                className="w-full p-2 xs:p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-sm xs:text-base"
                aria-describedby="email-error"
              />
              <ValidationError prefix="Email" field="Email" errors={state.errors} id="email-error" />
              <input
                type="tel"
                placeholder="Phone Number"
                name="Phone Number"
                required
                className="w-full p-2 xs:p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-sm xs:text-base"
                aria-describedby="phone-error"
              />
              <ValidationError
                prefix="Phone Number"
                field="Phone Number"
                errors={state.errors}
                id="phone-error"
              />
              <input
                type="text"
                placeholder="TikTok Handle"
                name="TikTok Handle"
                className="w-full p-2 xs:p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-sm xs:text-base"
              />
              <input
                type="text"
                placeholder="Instagram Handle"
                name="Instagram Handle"
                className="w-full p-2 xs:p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-sm xs:text-base"
              />
              <input
                type="text"
                placeholder="Telegram Handle"
                name="Telegram Handle"
                className="w-full p-2 xs:p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-sm xs:text-base"
              />
              <div className="flex justify-end space-x-2 xs:space-x-3 sm:space-x-4">
                <button
                  type="button"
                  onClick={closeForm}
                  className="px-3 xs:px-4 sm:px-6 py-2 bg-gray-300 text-gray-800 rounded-full hover:bg-gray-400 focus:ring-2 focus:ring-gray-400 focus:outline-none text-sm xs:text-base transition duration-300"
                  aria-label="Cancel form"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="px-3 xs:px-4 sm:px-6 py-2 bg-blue-900 text-white rounded-full hover:bg-blue-800 focus:ring-2 focus:ring-blue-900 focus:outline-none text-sm xs:text-base transition duration-300"
                  aria-label={state.submitting ? 'Submitting form' : 'Submit form'}
                >
                  {state.submitting ? 'Submitting...' : 'Submit'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}

export default Highlight;