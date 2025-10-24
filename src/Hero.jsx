import React, { useState, useEffect } from 'react';
import DesktopImg from './img/background-img.png'; // Replace with actual desktop image path
import MobileImg from './img/mobile-img.png'; // Replace with actual mobile image path
import FadeIn from './FadeIn';

function Hero() {
  const [showForm, setShowForm] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [status, setStatus] = useState(null);

  const [formData, setFormData] = useState({
    Name: '',
    Email: '',
    Phone: '',
    Whatsapp: '',
  });

  const scriptUrl =
    'https://script.google.com/macros/s/AKfycbxo_SvuggiuzOcUumNKXKzmz8rrvE3Zp-8Y_xGYLGsLE3NnsSxvvpzfOkkN6NS6sakZRw/exec';

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
      setStatus(null);
      setFormData({ Name: '', Email: '', Phone: '', Whatsapp: '' });
    }, 300);
  };

  const handleWhatsAppRedirect = () => {
    const whatsappLink = 'https://wa.me/message/3G2UIJH6XRPVI1';
    window.location.href = whatsappLink;
    setShowSuccessModal(false);
  };

  const closeSuccessModal = () => {
    setShowSuccessModal(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    const urlEncodedData = new URLSearchParams(formData).toString();

    try {
      const response = await fetch(scriptUrl, {
        method: 'POST',
        body: urlEncodedData,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });

      if (response.ok) {
        setStatus('succeeded');
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
    }
  };

  useEffect(() => {
    if (status === 'succeeded') {
      if (typeof fbq !== 'undefined') {
        fbq('track', 'CompleteRegistration');
      }
      setShowSuccessModal(true);
      closeForm();
    }
  }, [status]);

  return (
    <section className="relative w-full h-fit overflow-hidden">
      {/* Background images */}
      <div>
        <div className="hidden sm:block h-full">
          <img
            src={DesktopImg}
            alt="Desktop Hero Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="sm:hidden h-full">
          <img
            src={MobileImg}
            alt="Mobile Hero Background"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Buttons Overlay */}
      <div className="absolute inset-0">
  <div className="absolute left-[35%] sm:left-[33%] bottom-[10%] sm:bottom-[30%] flex flex-col gap-4">
    <FadeIn>
      {/* ✅ Visible on all sizes */}
      <button
        onClick={handleSignUpClick}
        className="block bg-[rgb(182,135,86)] 
                   text-[clamp(0.8rem,1.5vw,1.2rem)] 
                   text-white 
                   px-[clamp(0.8rem,2vw,2.5rem)] 
                   py-[clamp(0.5rem,1.2vw,1rem)] 
                   rounded-2xl 
                   hover:bg-[rgb(2,0,47)] 
                   focus:ring-2 focus:ring-[rgb(182,135,86)] 
                   focus:outline-none 
                   active:bg-[rgb(2,0,47)] 
                   transition duration-300 max-w-fit"
      >
        Reserve Your Seat Now
      </button>
    </FadeIn>

    <FadeIn>
      {/* ❌ Hidden on mobile, visible on sm+ */}
      <button
        className="hidden bg-[rgb(182,135,86)] 
                   text-[clamp(0.8rem,1.5vw,1.2rem)] 
                   text-white 
                   px-[clamp(0.8rem,2vw,2.5rem)] 
                   py-[clamp(0.5rem,1.2vw,1rem)] 
                   rounded-2xl 
                   hover:bg-[rgb(2,0,47)] 
                   focus:ring-2 focus:ring-[rgb(182,135,86)] 
                   focus:outline-none 
                   active:bg-[rgb(2,0,47)] 
                   transition duration-300 max-w-fit"
      >
        Venue: 25 Citc House, Wemco Road, Ikeja, Lagos
      </button>
    </FadeIn>
  </div>
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
            <h2 className="text-lg xs:text-xl sm:text-2xl font-bold mb-4 text-gray-800">
              Sign Up
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                name="Name"
                required
                value={formData.Name}
                onChange={handleChange}
                className="w-full p-2 xs:p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-sm xs:text-base"
              />
              <input
                type="email"
                placeholder="Email"
                name="Email"
                required
                value={formData.Email}
                onChange={handleChange}
                className="w-full p-2 xs:p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-sm xs:text-base"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                name="Phone"
                required
                value={formData.Phone}
                onChange={handleChange}
                className="w-full p-2 xs:p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-sm xs:text-base"
              />
              <input
                type="tel"
                placeholder="Whatsapp Number"
                name="Whatsapp"
                value={formData.Whatsapp}
                onChange={handleChange}
                className="w-full p-2 xs:p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-sm xs:text-base"
              />

              <div className="flex justify-end space-x-2 xs:space-x-3 sm:space-x-4">
                <button
                  type="button"
                  onClick={closeForm}
                  className="px-3 xs:px-4 sm:px-6 py-2 bg-gray-300 text-gray-800 rounded-full hover:bg-gray-400 focus:ring-2 focus:ring-gray-400 focus:outline-none text-sm xs:text-base transition duration-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="px-3 xs:px-4 sm:px-6 py-2 bg-blue-900 text-white rounded-full hover:bg-blue-800 focus:ring-2 focus:ring-blue-900 focus:outline-none text-sm xs:text-base transition duration-300"
                >
                  {status === 'submitting' ? 'Submitting...' : 'Submit'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {showSuccessModal && (
        <div
          className={`fixed inset-0 bg-gray-900/50 flex items-center justify-center z-50 transition-opacity duration-300 ease-in-out ${
            showSuccessModal ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-sm mx-4 text-center transform transition-all duration-300 ease-in-out scale-100">
            <h3 className="text-xl font-bold mb-4 text-gray-800">
              Registration Complete!
            </h3>
            <p className="text-gray-600 mb-6">
              Congratulations! Your registration is successfully completed. Do
              you well to chat with us via WhatsApp, Thank you
            </p>
            <div className="flex justify-center space-x-4">
              <button
                onClick={closeSuccessModal}
                className="px-6 py-2 bg-gray-300 text-gray-800 rounded-full hover:bg-gray-400 transition duration-300"
              >
                Close
              </button>
              <button
                onClick={handleWhatsAppRedirect}
                className="px-6 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition duration-300"
              >
                Chat on WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Hero;
