import React, { useState, useEffect } from 'react';
import FadeIn from './FadeIn';
import star from './img/stars.png';

const Testi = () => {
  const allMessages = [
    {
      text: "I joined GTCFX in 2022 and their support and education completely transformed my trading journey. For the first time, I felt like I wasn't trading alone — their webinars and personal guidance made me confident in the markets. – Blessing A., Lagos",
    },
    {
      text: "What impressed me most about GTCFX is the speed of withdrawals. I never have to worry — my funds reflect in hours, not days. That level of reliability keeps me loyal to them. – Chinedu O., Abuja",
    },
    {
      text: "Before GTCFX, I had blown multiple accounts with other brokers. Their risk management tools and coaching helped me finally trade profitably. I can boldly say GTCFX changed my financial story. – Maryam Y., Kano",
    },
    {
      text: "The platform is super fast and user-friendly. No freezing, no slippage issues. I execute trades in real time and that gives me confidence, especially when trading gold. – David P., Port Harcourt",
    },
    {
      text: "I love how GTCFX focuses on Nigerians. Their local team is always available and the education is practical, not just theory. It feels like they genuinely want me to succeed. – Samuel E., Ibadan",
    },
    {
      text: "From my first deposit to now, I've seen transparency and professionalism. With GTCFX, I know my money is safe and my trading has direction. I always recommend them to my friends. – Ngozi K., Enugu",
    },
  ];

  const [displayedMessages, setDisplayedMessages] = useState([]);
  const [itemVisible, setItemVisible] = useState([false, false, false]);
  const [showForm, setShowForm] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [status, setStatus] = useState(null);

  // Added formData state for inputs
  const [formData, setFormData] = useState({
    Name: '',
    Email: '',
    Phone: '',
    Whatsapp: '',
  });

  // Added your working Google Apps Script URL
  const scriptUrl = 'https://script.google.com/macros/s/AKfycbxo_SvuggiuzOcUumNKXKzmz8rrvE3Zp-8Y_xGYLGsLE3NnsSxvvpzfOkkN6NS6sakZRw/exec';

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
      setStatus(null); // Reset status
      setFormData({ Name: '', Email: '', Phone: '', Whatsapp: '' }); // Reset form data
    }, 300);
  };

  const handleWhatsAppRedirect = () => {
    const whatsappLink = "https://wa.me/2347076560970";
    window.location.href = whatsappLink;
    setShowSuccessModal(false);
  };

  const closeSuccessModal = () => {
    setShowSuccessModal(false);
  };

  useEffect(() => {
    let currentPage = 0;

    const switchMessages = () => {
      currentPage = currentPage === 0 ? 1 : 0;
      setDisplayedMessages(allMessages.slice(currentPage * 3, currentPage * 3 + 3));
      setItemVisible([false, false, false]);
      setTimeout(() => setItemVisible([true, false, false]), 200);
      setTimeout(() => setItemVisible([true, true, false]), 500);
      setTimeout(() => setItemVisible([true, true, true]), 900);
    };

    setDisplayedMessages(allMessages.slice(0, 3));
    setTimeout(() => setItemVisible([true, false, false]), 100);
    setTimeout(() => setItemVisible([true, true, false]), 500);
    setTimeout(() => setItemVisible([true, true, true]), 900);

    const interval = setInterval(switchMessages, 6000);

    return () => clearInterval(interval);
  }, []);
  
  // New useEffect hook to handle form success and trigger the Facebook Pixel event
  useEffect(() => {
    if (status === 'succeeded') {
      if (typeof fbq !== 'undefined') {
        fbq('track', 'CompleteRegistration');
      }
      setShowSuccessModal(true);
      closeForm();
    }
  }, [status]);

  // Added handleChange function to update form state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // Updated handleSubmit function to use fetch
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

  return (
    <section id="contacts" className="py-6 sm:py-8 md:py-12 px-4 sm:px-6 md:px-8">
      <div className="w-full max-w-[90%] sm:max-w-4xl mx-auto">
        <h2
          className="capitalize text-[1.5rem] xs:text-[2rem] sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[rgb(182,135,86)] via-[rgb(238,190,138)] to-[rgb(182,135,86)] text-center mb-6 sm:mb-8 md:mb-12"
        >
          Proven by Trader Success Stories
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-4 xs:gap-6" aria-live="polite">
          {displayedMessages.map((testimonial, index) => (
            <div
              key={index}
              className={`p-4 xs:p-6 bg-white rounded-xl shadow-lg border border-gray-100 flex flex-col transition-opacity duration-500 ease-in-out
                ${itemVisible[index] ? 'opacity-100' : 'opacity-0'}`}
            >
              <img
                src={star}
                alt="Five-star rating"
                className="w-25 xs:w-8 h-6 xs:h-8 mb-2"
              />
              <p
                className="text-gray-600 text-[0.9rem] xs:text-[1rem] sm:text-[1.1rem] font-medium leading-relaxed flex-grow"
              >
                {testimonial.text}
              </p>
            </div>
          ))}
        </div>

        <div className="flex  justify-start md:justify-center mt-6 sm:mt-8 md:mt-12">
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
                  aria-label="Cancel form"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="px-3 xs:px-4 sm:px-6 py-2 bg-blue-900 text-white rounded-full hover:bg-blue-800 focus:ring-2 focus:ring-blue-900 focus:outline-none text-sm xs:text-base transition duration-300"
                  aria-label={status === 'submitting' ? 'Submitting form' : 'Submit form'}
                >
                  {status === 'submitting' ? 'Submitting...' : 'Submit'}
                </button>
              </div>
            </form>
          </div>
        </div>
        
      )}

      {/* Custom Success Modal */}
      {showSuccessModal && (
        <div
          className={`fixed inset-0 bg-gray-900/50 flex items-center justify-center z-50 transition-opacity duration-300 ease-in-out ${
            showSuccessModal ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-sm mx-4 text-center transform transition-all duration-300 ease-in-out scale-100">
            <h3 className="text-xl font-bold mb-4 text-gray-800">Registration Complete!</h3>
            <p className="text-gray-600 mb-6">
              Congratulations! Your registration is successfully completed.
              Do you well to chat with us via WhatsApp, Thank you
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
};

export default Testi;