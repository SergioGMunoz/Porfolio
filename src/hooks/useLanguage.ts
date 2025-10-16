import { useTranslation } from 'react-i18next';

export type Language = 'en' | 'es';

export const useLanguage = () => {
  const { i18n, t } = useTranslation();

  const currentLanguage = i18n.language as Language;

  const changeLanguage = (lng: Language) => {
    i18n.changeLanguage(lng);
  };

  const toggleLanguage = () => {
    const newLanguage = currentLanguage === 'en' ? 'es' : 'en';
    changeLanguage(newLanguage);
    return newLanguage;
  };

  const getLanguageName = (lng?: Language) => {
    const language = lng || currentLanguage;
    return language === 'en' ? 'English' : 'Español';
  };

  const getNextLanguage = (): Language => {
    return currentLanguage === 'en' ? 'es' : 'en';
  };

  const getNextLanguageName = () => {
    return getLanguageName(getNextLanguage());
  };

  return {
    currentLanguage,
    changeLanguage,
    toggleLanguage,
    getLanguageName,
    getNextLanguage,
    getNextLanguageName,
    t,
    isEnglish: currentLanguage === 'en',
    isSpanish: currentLanguage === 'es',
  };
};