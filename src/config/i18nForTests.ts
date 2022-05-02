import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    lng: 'cimode',
    fallbackLng: 'cimode',

    // have a common namespace used around the full app
    ns: ['common'],
    defaultNS: 'common',

    debug: true,

    interpolation: {
      escapeValue: false, // not needed for react!!
    },

    resources: { en: { common: {} } },
  });

export default i18n;
