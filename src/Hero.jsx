import React, { useState, useEffect } from 'react';
import backGroundImg from './img/background-img.png';
import FadeIn from './FadeIn';
import { useForm, ValidationError } from '@formspree/react';

function Hero() {
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
    <section className="relative w-full h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-contain bg-repeat md:bg-no-repeat md:bg-cover"
        style={{ backgroundImage: `url(${backGroundImg})` }}
      ></div>

      <div className="absolute inset-0 flex items-start justify-start md:justify-start px-4 sm:px-6">
        <FadeIn>
          <button
            onClick={handleSignUpClick}
            className="bg-[rgb(182,135,86)] text-[0.9rem] xs:text-[1rem] sm:text-[1.1rem] md:text-[1.2rem] text-white px-4 xs:px-6 sm:px-8 md:px-10 py-2 xs:py-3 sm:py-4 rounded-2xl hover:bg-[rgb(2,0,47)] focus:ring-2 focus:ring-[rgb(182,135,86)] focus:outline-none active:bg-[rgb(2,0,47)] transition duration-300 mt-[clamp(26rem,55vh,20rem)] mx-auto md:ml-[8rem] md:mx-0"
            aria-label="Reserve your seat now"
          >
            Reserve Your Seat Now
          </button>
        </FadeIn>
      </div>

      {/* Pop-up Sign-up Form */}
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

export default Hero;