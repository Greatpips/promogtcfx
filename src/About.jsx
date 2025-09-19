import React, { useState, useEffect } from 'react';
import MoveFromLeft from './MoveFromLeft';
import MoveFromRight from './MoveFromRight';
import backGround1 from './img/background1.png';
import FadeIn from './FadeIn';
import { useForm, ValidationError } from '@formspree/react';

const slides = [
  {
    content: "THE FUTURE OF WEALTH IS HERE",
  },
  {
    content: "TRADE SMARTER, NOT HARDER",
  },
  {
    content: "UNLOCK THE POWER OF AI IN TRADING",
  },
];

function About() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [state, handleSubmit] = useForm('xwpndgbd');

  // Auto-play functionality for slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Form success handling
  useEffect(() => {
    if (state.succeeded) {
      const whatsappLink = "https://wa.me/1234567890?text=I've%20successfully%20signed%20up%20with%20FXGTC!";
      alert(`Successfully signed up!\n\nClick OK to chat with us on WhatsApp.\n\n${whatsappLink}`);
      closeForm();
    }
  }, [state.succeeded]);

  const goToPrev = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
  };

  const goToNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

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

  return (
    <section className="bg-white border-t-8 border-t-[rgb(182,135,86)]">
      <div className="bg-[rgb(2,0,47)] p-4 sm:p-6 relative overflow-hidden h-[300px] xs:h-[350px] sm:h-[400px] flex justify-center items-center">
        {/* SLIDER CONTAINER */}
        <div
          className="flex w-full h-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="flex-none w-full h-full flex flex-col justify-center items-center text-center box-border p-4 sm:p-6"
            >
              <FadeIn>
                <p className="mt-2 text-[2rem] xs:text-[2.5rem] sm:text-[3rem] md:text-[4rem] text-transparent bg-clip-text bg-gradient-to-r from-[rgb(182,135,86)] via-[rgb(255,214,170)] to-[rgb(182,135,86)] font-bold leading-tight">
                  {slide.content}
                </p>
              </FadeIn>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrev}
          className="absolute left-2 xs:left-4 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-2 xs:p-3 rounded-full shadow-lg z-10 hover:bg-gray-700 focus:ring-2 focus:ring-gray-700 focus:outline-none transition-colors"
          aria-label="Previous slide"
        >
          &lt;
        </button>
        <button
          onClick={goToNext}
          className="absolute right-2 xs:right-4 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-2 xs:p-3 rounded-full shadow-lg z-10 hover:bg-gray-700 focus:ring-2 focus:ring-gray-700 focus:outline-none transition-colors"
          aria-label="Next slide"
        >
          &gt;
        </button>

        {/* Navigation Dots */}
        <div className="absolute bottom-4 flex space-x-2 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 xs:h-3 w-2 xs:w-3 rounded-full ${
                currentSlide === index ? 'bg-white' : 'bg-gray-400'
              } hover:bg-white focus:ring-2 focus:ring-white focus:outline-none transition-colors`}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>

      <div
        className="relative bg-contain bg-repeat md:bg-no-repeat md:bg-cover"
        style={{ backgroundImage: `url(${backGround1})` }}
      >
        <div className="absolute inset-0 opacity-50 w-full bg-[rgb(236,243,253)]"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center p-4 sm:p-6 md:p-[5em]">
            <div className=" hover:shadow-2xl transition-all ease-in-out duration-300  capitalize text-[1.5rem] xs:text-[1.8rem] sm:text-[2rem] px-4 sm:px-[2rem] py-4 sm:py-[4rem] bg-gradient-to-b from-[rgb(2,8,62)] to-[rgb(12,22,114)] z-10 rounded-4xl font-bold">
             <FadeIn delay={0}>
               <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-[rgb(182,135,86)] via-[rgb(255,214,170)] to-[rgb(182,135,86)]">
                LET AI CREATE WEALTH FOR YOU
              </h2>
             </FadeIn>
            </div>


          <div className=" hover:shadow-2xl transition-all ease-in-out duration-300 sm:col-span-2 bg-white z-10 rounded-4xl">
   
             <FadeIn delay={100}>
               <h2 className="capitalize text-[1.5rem] xs:text-[1.5rem] sm:text-[1.8rem] px-4 sm:px-[1.5rem] py-4 sm:py-[4rem] text-transparent bg-clip-text bg-gradient-to-r from-[rgb(182,135,86)] via-[rgb(230,160,87)] to-[rgb(182,135,86)]">
                Discover How Artificial Intelligence Can Turn The Toughest Trading Decisions Into Simple And Profitable Moves While You Sleep
              </h2>
             </FadeIn>
          
          </div>

        
            <div className=" hover:shadow-2xl transition-all ease-in-out duration-300  capitalize text-[1.5rem] xs:text-[1.8rem] sm:text-[2rem] px-4 sm:px-[2rem] py-4 sm:py-[4rem] rounded-4xl font-bold bg-gradient-to-b from-[rgb(2,8,62)] to-[rgb(12,22,114)] z-10">
              <FadeIn delay={0}>
                <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-[rgb(182,135,86)] via-[rgb(255,214,170)] to-[rgb(182,135,86)]">
                LET AI GIVE YOU THE EDGE YOU NEED
              </h2>
              </FadeIn>
            </div>
       

          <div className=" hover:shadow-2xl transition-all ease-in-out duration-300  sm:col-span-2 bg-white z-10 px-4 sm:px-[2rem] py-4 sm:py-[2.5rem] rounded-4xl">
           
             <FadeIn delay={100}>
               <h2 className="capitalize text-[1.5rem] xs:text-[1.5rem] sm:text-[1.5rem] px-4 sm:px-[1.5rem] py-4 sm:py-[1.5rem] text-transparent bg-clip-text bg-gradient-to-r from-[rgb(182,135,86)] via-[rgb(230,160,87)] to-[rgb(182,135,86)]">
                For Years The Smartest Traders Are Those That Know How To Use Technology. Now It's Your Turn. Join The Evolution And Let AI Take Your Trading To The Next Level
              </h2>
             </FadeIn>
           
          </div>

          <FadeIn>
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

export default About;