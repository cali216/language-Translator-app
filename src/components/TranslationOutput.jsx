// src/components/TranslationOutput.js
import React from 'react';
import PropTypes from 'prop-types';

const TranslationOutput = ({ translatedText }) => {
  return (
    <div className="w-1/2 h-48 font-mono box-border p-4 text-xl rounded-lg overflow-auto bg-gray-200 text-left">
      {translatedText}
    </div>
  );
};

TranslationOutput.propTypes = {
  translatedText: PropTypes.string.isRequired
};

export default TranslationOutput;
