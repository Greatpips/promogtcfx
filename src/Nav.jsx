import React, { useState, useEffect } from 'react';
import darkLogo from './img/dark-logo.webp';
import { HiOutlineMenuAlt3, HiOutlineX } from 'react-icons/hi';
import FadeIn from './FadeIn';
import { useForm, ValidationError } from '@formspree/react';

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [state, handleSubmit] = useForm('xwpndgbd');

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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

  useEffect(() => {
    if (state.succeeded) {
      const whatsappLink = "https://wa.me/1234567890?text=I've%20successfully%20signed%20up%20with%20FXGTC!";
      alert(`Successfully signed up!\n\nClick OK to chat with us on WhatsApp.\n\n${whatsappLink}`);
      closeForm(); // Close the form pop-up after a successful submission
    }
  }, [state.succeeded]);

  const menuItems = [
    { id: 1, text: 'Home', href: '#' },
    { id: 2, text: 'About', href: '#' },
    { id: 3, text: 'Contact', href: '#' },
    { id: 4, text: 'Features', href: '#' },
  ];

  return (
    <nav
      role="navigation"
      className="flex justify-between items-center p-4 sm:px-6 md:px-10 bg-white shadow-md relative"
    >
      {/* Logo */}
      <div>
        <FadeIn delay={0}>
          <img
            className="w-[120px] sm:w-[130px] md:w-[150px] transition-all ease-in-out duration-300 hover:scale-[1.1]"
            src={darkLogo}
            alt="Dark Logo"
          />
        </FadeIn>
      </div>

      {/* Hamburger Menu */}
      <div className="md:hidden flex items-center">
        <button
          onClick={handleMenu}
          className="text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <HiOutlineX className="w-6 h-6" /> : <HiOutlineMenuAlt3 className="w-6 h-6" />}
        </button>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex md:items-center">
        <FadeIn delay={200}>
          <ul className="flex gap-4 cursor-pointer">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className="text-[1.1rem] md:text-[1.2rem] transition-all ease-in-out duration-300 hover:-translate-y-0.5"
              >
                <a href={item.href} className="text-[rgb(2,0,47)] hover:text-[rgb(182,135,86)]">
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-full bg-[rgb(2,0,47)] z-50 transition-all duration-300 ease-in-out transform ${
          isMenuOpen ? 'translate-y-0' : 'translate-y-[-100%]'
        }`}
      >
        <div className="flex flex-col items-center justify-start p-6 h-full">
          <button
            onClick={handleMenu}
            className="self-end text-white focus:outline-none focus:ring-2 focus:ring-white rounded mb-4"
            aria-label="Close menu"
          >
            <HiOutlineX className="w-6 h-6" />
          </button>
          <ul className="flex flex-col items-center space-y-6">
            {menuItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className="text-white text-[1.3rem] sm:text-[1.5rem] font-bold hover:bg-gray-800 px-4 py-2 rounded block"
                  onClick={handleMenu}
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex items-center">
        <FadeIn>
          <button
            onClick={handleSignUpClick}
            className="bg-[rgb(182,135,86)] text-[0.9rem] xs:text-[1rem] sm:text-[1.1rem] md:text-[1.2rem] text-white px-4 xs:px-6 sm:px-8 md:px-10 py-2 xs:py-3 sm:py-4 rounded-2xl hover:bg-[rgb(2,0,47)] focus:ring-2 focus:ring-[rgb(182,135,86)] focus:outline-none active:bg-[rgb(2,0,47)] transition duration-300"
            aria-label="Reserve your seat now"
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
              <ValidationError prefix="Phone Number" field="Phone Number" errors={state.errors} id="phone-error" />
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
    </nav>
  );
}

export default Nav;