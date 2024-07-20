// src/components/TextInput.js
import React from 'react';
import PropTypes from 'prop-types';

const TextInput = ({ inputText, setInputText, handleRemoveInputText }) => {
  return (
    <div className="relative w-1/2 mr-4">
      <svg
        className={`w-6 absolute top-1 right-1 opacity-50 cursor-pointer ${inputText.length ? 'block' : 'hidden'}`}
        onClick={handleRemoveInputText}
        focusable="false"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
      </svg>
      <textarea
        type="text"
        value={inputText}
        placeholder="Enter Text"
        onChange={(e) => setInputText(e.target.value)}
        className="w-full h-48 resize-none box-border pl-4 pr-10 pb-2 pt-2 border border-gray-300 text-xl overflow-auto text-gray-900 outline-none bg-white rounded-lg shadow"
      />
    </div>
  );
};

TextInput.propTypes = {
  inputText: PropTypes.string.isRequired,
  setInputText: PropTypes.func.isRequired,
  handleRemoveInputText: PropTypes.func.isRequired
};

export default TextInput;
