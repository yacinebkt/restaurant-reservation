import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import enTranslation from "./translations/en.json";
import frTranslation from "./translations/fr.json";
import arTranslation from "./translations/ar.json";
import { defaultLanguage, languages } from "@/config/global-config";

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: defaultLanguage,
    debug: false,
    resources: {
    
      en: {
        translations: enTranslation,
      },
      fr: {
        translations: frTranslation,
      },

      ar: {
        translations: arTranslation,
      },
    },
    ns: ["translations"],
    defaultNS: "translations",

    detection: {
      // order and from where user language should be detected
      order: ["localStorage"],
      // keys or params to lookup language from
      lookupLocalStorage: "i18nextLng",
      // cache user language on
      caches: ["localStorage"],
      excludeCacheFor: [],
    },
    react: {
      // wait: true,
      bindI18n: "languageChanged loaded",
      // bindStore: 'added removed',
      nsMode: "default",
    },
    // if you see an error like: "Argument of type 'DefaultTFuncReturn' is not assignable to parameter of type xyz"
    // set returnNull to false (and also in the i18next.d.ts options)
    // returnNull: false,
  });

i18next.languages = languages.map((language) => language.code);

export default i18next;
