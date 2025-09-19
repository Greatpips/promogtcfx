import React, { useState } from 'react';
import FadeIn from './FadeIn';
const faqData = [
  {
    question: "Who should attend this seminar?",
    answer: "Anyone ready to level up their trading game! Whether you're just getting started or looking to sharpen your skills, this seminar is for you. If you're curious, driven, and eager to learn from the pros. Don't miss it",
  },
  {
    question: "What topics will be covered in the seminar?",
    answer: "We're packing a lot into this power hour! Expect expert tips from Temitope Ijibadejo, live market insights, mindset training for discipline and accountability, and ways to stay plugged into a strong trading community.",
  },
  {
    question: "How long is the seminar?",
    answer: "Just one hour. Short, sharp, and full of value. You'll walk away with real insights you can use right away.",
  },
  {
    question: "Is there a fee to attend?",
    answer: "Nope! It's 100% free. All you need is your time and your drive to learn.",
  },
  {
    question: "Gifts you stand a chance of winning by attending",
    answer: "1. Powerbank, 2. Note pad, 3. Branded imported items, 4. Solar fans, 5. Smart watches",
  },
];

const AccordionItem = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className="border-b border-[rgb(182,135,86)]">
      <h2 id={`accordion-heading-${question}`} className="text-base sm:text-lg font-semibold">
        <button
          onClick={onToggle}
          type="button"
          className="flex items-center justify-between w-full px-4 py-3 sm:px-5 sm:py-4 font-medium text-left text-[rgb(182,135,86)] focus:outline-none"
          aria-expanded={isOpen}
          aria-controls={`accordion-body-${question}`}
        >
          <span className="flex items-center text-sm sm:text-base">{question}</span>
          <svg
            className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </h2>
      <div
        id={`accordion-body-${question}`}
        role="region"
        aria-labelledby={`accordion-heading-${question}`}
        className={`overflow-hidden transition-all duration-700 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}
      >
        <div className="px-4 py-3 sm:px-5 sm:pb-5 sm:pt-0 text-sm sm:text-base text-white">{answer}</div>
      </div>
    </div>
  );
};

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <FadeIn>
        <div className="max-w-screen-xl mx-auto">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-left text-transparent bg-clip-text bg-gradient-to-r from-[rgb(182,135,86)] via-[rgb(238,190,138)] to-[rgb(182,135,86)] mb-6 sm:mb-8">
          FAQs
        </h1>
        <div className="w-full bg-[rgb(2,0,47)] shadow-lg rounded-xl overflow-hidden">
          {faqData.map((item, index) => (
            <AccordionItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
      </FadeIn>
    </section>
  );
};

export default FAQAccordion;