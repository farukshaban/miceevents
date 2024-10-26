// src/components/ContactForm.jsx
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function ContactForm() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappMessage = `Hello, my name is ${formData.name}. My email is ${formData.email}. Message: ${formData.message}`;
    const whatsappLink = `https://wa.me/+38977596300?text=${encodeURIComponent(whatsappMessage)}`;

    // Redirect to WhatsApp
    window.open(whatsappLink, '_blank');
  };

  return (
    <section id="contact" className="flex flex-col items-center justify-center h-screen bg-gray-800 text-white px-4 md:px-8 lg:px-16">
      <h2 className="text-2xl md:text-3xl font-semibold mb-4">{t('contact.title')}</h2>
      <form onSubmit={handleSubmit} className="flex flex-col w-full max-w-md space-y-4">
        <input
          type="text"
          name="name"
          placeholder={t('contact.namePlaceholder')}
          value={formData.name}
          onChange={handleChange}
          className="p-2 md:p-3 rounded bg-gray-700 text-white"
        />
        <input
          type="email"
          name="email"
          placeholder={t('contact.emailPlaceholder')}
          value={formData.email}
          onChange={handleChange}
          className="p-2 md:p-3 rounded bg-gray-700 text-white"
        />
        <textarea
          name="message"
          placeholder={t('contact.messagePlaceholder')}
          value={formData.message}
          onChange={handleChange}
          className="p-2 md:p-3 rounded bg-gray-700 text-white h-32"
        ></textarea>
        <button type="submit" className="px-4 py-2 md:px-6 md:py-3 bg-indigo-500 rounded-lg text-base md:text-lg font-semibold hover:bg-indigo-400 transition">
          {t('contact.submitButton')}
        </button>
      </form>
    </section>
  );
}
