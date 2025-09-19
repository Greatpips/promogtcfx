import React, { useState, useEffect } from 'react';
import FadeIn from './FadeIn';
import { useForm, ValidationError } from '@formspree/react';
import award1 from './img/award1.webp';
import award2 from './img/award2.webp';
import award3 from './img/award3.webp';
import award4 from './img/award4.webp';
import award5 from './img/award5.webp';
import award6 from './img/award6.webp';
import award7 from './img/award7.webp';
import award8 from './img/award8.webp';
import award9 from './img/award9.webp';
import award10 from './img/award10.webp';
import award11 from './img/award11.webp';
import award12 from './img/award12.webp';

const images = [
  award1,
  award2,
  award3,
  award4,
  award5,
  award6,
  award7,
  award8,
  award9,
  award10,
  award11,
  award12,
];

const AwardSlider = () => {
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
      closeForm(); // Close the form pop-up after a successful submission
    }
  }, [state.succeeded]);

  // To create a seamless loop, we double the array
  const duplicatedImages = [...images, ...images];

  return (
    <div className="mt-12 text-center pb-[3em]">
      <h2 className="text-2xl font-bold mb-4">Some Of Our Awards</h2>
      <style jsx>{`
        @keyframes slide {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-100%);
          }
        }

        .animate-slide {
          animation: slide 10s linear infinite;
        }
      `}</style>
      <div className="relative overflow-hidden w-full">
        <FadeIn>
          <div className="flex animate-slide">
            {duplicatedImages.map((src, index) => (
              <div key={index} className="flex-none w-1/3 p-2">
                <img
                  src={src}
                  alt={`Award ${index + 1}`}
                  className="w-[150px] h-auto rounded-lg shadow-lg"
                />
              </div>
            ))}
          </div>
        </FadeIn>
      </div>

      <div className="pt-[4rem]">
        <FadeIn delay={0}>
          <button
            onClick={handleSignUpClick}
            className="bg-[rgb(182,135,86)] text-sm sm:text-base md:text-lg text-white mx-auto px-4 sm:px-6 md:px-8 py-1 sm:py-2 md:py-3 rounded-2xl hover:bg-[rgb(2,0,47)] transition duration-300"
          >
            Reserve Your Seat Now
          </button>
        </FadeIn>
      </div>

      {/* Form Pop-up */}
      {showForm && (
        <div
          className={`fixed inset-0 bg-gray-900/50 flex items-center justify-center z-50 transition-opacity duration-300 ease-in-out ${
            isTransitioning ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className={`bg-white p-8 rounded-lg shadow-lg w-full max-w-md mx-4 transform transition-all duration-300 ease-in-out ${
              isTransitioning ? 'scale-100' : 'scale-95'
            }`}
          >
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Sign Up</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                name="Name"
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                aria-describedby="name-error"
              />
              <ValidationError prefix="Name" field="Name" errors={state.errors} id="name-error" />
              <input
                type="email"
                placeholder="Email"
                name="Email"
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                aria-describedby="email-error"
              />
              <ValidationError prefix="Email" field="Email" errors={state.errors} id="email-error" />
              <input
                type="tel"
                placeholder="Phone Number"
                name="Phone Number"
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
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
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
              <input
                type="text"
                placeholder="Instagram Handle"
                name="Instagram Handle"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
              <input
                type="text"
                placeholder="Telegram Handle"
                name="Telegram Handle"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={closeForm}
                  className="px-6 py-2 bg-gray-300 text-gray-800 rounded-full hover:bg-gray-400 transition duration-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="px-6 py-2 bg-blue-900 text-white rounded-full hover:bg-blue-800 transition duration-300"
                >
                  {state.submitting ? 'Submitting...' : 'Submit'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AwardSlider;