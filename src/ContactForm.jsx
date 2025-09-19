import React from 'react';

// This is a reusable component that renders a button to open the form.
// It receives a function as a prop to handle the click event.
const FormButton = ({ onSignUpClick }) => {
  return (
    <div className="flex items-center justify-center p-8 bg-white shadow-lg rounded-xl mt-8">
      <button
        onClick={onSignUpClick}
        className="bg-blue-600 text-white text-lg px-8 py-4 rounded-full font-bold shadow-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105"
      >
        Open Sign-Up Form
      </button>
    </div>
  );
};

export default FormButton;
