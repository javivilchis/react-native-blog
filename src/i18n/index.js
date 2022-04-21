import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import English from './en.json'
import Spanish from './es.json'
// the translations

const resources = {
     en: { translation: English },
     es: { translation: Spanish }
}
console.log("ESPANOL: ******* : ", Spanish)
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", 
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;