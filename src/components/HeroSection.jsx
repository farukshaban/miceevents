// src/components/HeroSection.jsx
import { useTranslation } from 'react-i18next';
import Button from './Button';

export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <section className="relative flex flex-col items-center justify-center h-screen text-center text-white bg-hero-gradient px-4 md:px-8 lg:px-16">
      <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-wide">
        {t('hero.title')}
      </h1>
      <p className="mb-8 text-base md:text-lg text-gray-300 max-w-lg mx-auto">
        {t('hero.description')}
      </p>
      <Button targetId="contact">{t('hero.button')}</Button>
    </section>
  );
}
