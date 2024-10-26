// src/components/LanguageSwitcher.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher({ onLanguageChange }) {
  const { i18n } = useTranslation();
  const languages = [
    { code: 'en', label: 'EN' },
    { code: 'tr', label: 'TR' },
    { code: 'mk', label: 'MK' },
    { code: 'fr', label: 'FR' },
  ];

  return (
    <div className="flex space-x-4 text-sm text-white">
      {languages.map((language) => (
        <button
          key={language.code}
          onClick={() => onLanguageChange(language.code)}
          className={`${
            i18n.language === language.code ? 'underline text-indigo-400' : 'text-gray-300'
          } hover:text-indigo-400 transition-colors`}
        >
          {language.label}
        </button>
      ))}
    </div>
  );
}
