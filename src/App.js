// src/App.js
import React from 'react';
import HeroSection from './components/HeroSection';
import ContactForm from './components/ContactForm';
import LanguageSwitcher from './components/LanguageSwitcher';
import i18n from './i18n';  // Ensure i18n is imported here

function App() {
  const handleLanguageChange = (languageCode) => {
    i18n.changeLanguage(languageCode); // This should switch the language
  };

  return (
    <div className="bg-gray-900 text-white font-sans min-h-screen">
      {/* Fixed position for Language Switcher */}
      <div className="fixed top-4 right-4 md:top-6 md:right-8 z-50">
        <LanguageSwitcher onLanguageChange={handleLanguageChange} />
      </div>

      <HeroSection />
      <ContactForm />
    </div>
  );
}

export default App;
