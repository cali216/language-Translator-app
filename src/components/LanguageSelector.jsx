// src/components/LanguageSelector.js
import React from 'react';
import PropTypes from 'prop-types';
import languageList from '../language.json';

const LanguageSelector = ({ format, setFormat, position }) => {
  return (
    <select
      value={format}
      onChange={(e) => setFormat(e.target.value)}
      className={`w-1/2 h-12 text-lg border border-gray-300 rounded-lg pl-4 text-blue-700 cursor-pointer outline-none ${position === 'left' ? 'mr-4' : 'ml-4'}`}
    >
      {Object.keys(languageList).map((key, index) => {
        const language = languageList[key];
        return (
          <option key={index} value={key} className="text-gray-900">
            {language.name}
          </option>
        );
      })}
    </select>
  );
};

LanguageSelector.propTypes = {
  format: PropTypes.string.isRequired,
  setFormat: PropTypes.func.isRequired,
  position: PropTypes.oneOf(['left', 'right']).isRequired
};

export default LanguageSelector;
