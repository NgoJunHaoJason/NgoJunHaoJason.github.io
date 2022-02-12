import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import english from './assets/translations/english.json';
import chinese from './assets/translations/chinese.json';

i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        interpolation: { escapeValue: false },
        lng: 'en',
        fallbackLng: 'en',
        resources: {
            en: {
                translation: english,
            },
            cn: {
                translation: chinese,
            },
        },
    });

export default i18n;
