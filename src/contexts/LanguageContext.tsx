import { useState, useEffect } from "react";
import i18n from "../modules/i18/config"; // Assuming this is your i18n configuration

interface LanguageHook {
  currentLang: string;
  direction: string;
  setLanguage: (langCode: string) => void;
  getAvailableLanguages: () => string[];
}

function useLanguage(): LanguageHook {
  const [currentLang, setCurrentLang] = useState<string>(i18n.language);
  const [direction, setDirection] = useState<string>(
    i18n.language === "ar" ? "rtl" : "ltr"
  );

  // Listen for changes in the language and update the state accordingly
  const languageChangeHandler = () => {
    setCurrentLang(i18n.language);
    setDirection(i18n.language === "ar" ? "rtl" : "ltr");
  };

  useEffect(() => {
    i18n.on("languageChanged", languageChangeHandler);

    return () => {
      i18n.off("languageChanged", languageChangeHandler);
    };
  }, []);

  const setLanguage = (langCode: string) => {
    i18n.changeLanguage(langCode);
  };

  const getAvailableLanguages = (): string[] => {
    return i18n.languages as string[];
  };

  return { direction, currentLang, setLanguage, getAvailableLanguages };
}

export default useLanguage;
