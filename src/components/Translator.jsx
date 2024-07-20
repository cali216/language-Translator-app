// src/components/Translator.js
import React, { useState } from 'react';
import LanguageSelector from './LanguageSelector';
import TextInput from './TextInput';
import TranslationOutput from './TranslationOutput';

export default function Translator() {
  const [inputFormat, setInputFormat] = useState('en');
  const [outputFormat, setOutputFormat] = useState('hi');
  const [translatedText, setTranslatedText] = useState('Translation');
  const [inputText, setInputText] = useState('');

  const handleReverseLanguage = () => {
    const value = inputFormat;
    setInputFormat(outputFormat);
    setOutputFormat(value);
    setInputText('');
    setTranslatedText('Translation');
  };

  const handleRemoveInputText = () => {
    setInputText('');
    setTranslatedText('Translation');
  };

  const handleTranslate = async () => {
    if (!inputText || !inputFormat || !outputFormat) return;
    document.querySelector('.fa-spinner').classList.remove('hidden');
    document.querySelector('.translate').classList.add('hidden');
    
    const url = `https://microsoft-translator-text.p.rapidapi.com/translate?api-version=3.0&from=${inputFormat}&to=${outputFormat}&profanityAction=NoAction&textType=plain`;
    const options = {
      method: 'POST',
      headers: {
        'x-rapidapi-key': '90d552718dmsh6784ad0557c66a2p16a678jsn9be53c8914ba',
        'x-rapidapi-host': 'microsoft-translator-text.p.rapidapi.com',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify([ { Text: inputText } ])
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      const translation = result[0].translations[0].text;
      setTranslatedText(translation);
    } catch (error) {
      console.log(error);
      alert('Please Try Again! Some Error Occurred at your side');
    }
    document.querySelector('.fa-spinner').classList.add('hidden');
    document.querySelector('.translate').classList.remove('hidden');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-2xl px-8 py-12 bg-white rounded-lg shadow-lg">
        <div className="flex items-center justify-between mb-6">
          <LanguageSelector format={inputFormat} setFormat={setInputFormat} position="left" />
          <svg
            className="w-6 text-gray-500 opacity-50 cursor-pointer mx-4"
            onClick={handleReverseLanguage}
            focusable="false"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M6.99 11L3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z"></path>
          </svg>
          <LanguageSelector format={outputFormat} setFormat={setOutputFormat} position="right" />
        </div>
        <div className="flex justify-between items-center mb-6">
          <TextInput inputText={inputText} setInputText={setInputText} handleRemoveInputText={handleRemoveInputText} />
          <TranslationOutput translatedText={translatedText} />
        </div>
        <div className="w-full">
          <button
            className="w-full py-3 bg-blue-500 text-white border-2 border-blue-500 rounded cursor-pointer text-xl tracking-wider"
            onClick={handleTranslate}
          >
            <i className="fa fa-spinner fa-spin hidden"></i>
            <span className="translate">Translate</span>
          </button>
        </div>
      </div>
    </div>
  );
}
