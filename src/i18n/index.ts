import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { commonTranslations } from "./commonResources";
import { courseTranslations } from "./courseResources";

export const supportedLanguages = ["az", "en", "ru"] as const;
export type SupportedLanguage = (typeof supportedLanguages)[number];

const LANGUAGE_KEY = "code-world.language";
const storedLanguage = localStorage.getItem(LANGUAGE_KEY);
const initialLanguage = supportedLanguages.includes(storedLanguage as SupportedLanguage)
  ? (storedLanguage as SupportedLanguage)
  : "az";

void i18n.use(initReactI18next).init({
  resources: {
    az: { translation: { ...commonTranslations.az, courseCatalog: courseTranslations.az } },
    en: { translation: { ...commonTranslations.en, courseCatalog: courseTranslations.en } },
    ru: { translation: { ...commonTranslations.ru, courseCatalog: courseTranslations.ru } },
  },
  lng: initialLanguage,
  fallbackLng: "az",
  supportedLngs: supportedLanguages,
  interpolation: {
    escapeValue: false,
  },
  returnNull: false,
});

function updateDocumentLanguage(language: string) {
  const normalized = language.split("-")[0] as SupportedLanguage;
  document.documentElement.lang = normalized;
  document.title = i18n.t("meta.title");
  localStorage.setItem(LANGUAGE_KEY, normalized);
}

updateDocumentLanguage(initialLanguage);
i18n.on("languageChanged", updateDocumentLanguage);

export default i18n;
