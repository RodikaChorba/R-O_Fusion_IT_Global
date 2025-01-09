import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translations from "./languages"; // Імпортуємо ваш файл з перекладами

i18n.use(initReactI18next).init({
  resources: translations, // Використовуємо ваші переклади
  lng: "en", // Мова за замовчуванням
  fallbackLng: "en", // Мова, яка використовується, якщо переклад відсутній
  interpolation: {
    escapeValue: false, // Відключаємо екранування HTML (якщо потрібно)
  },
});

export default i18n;
