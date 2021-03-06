import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import english from './translations/english.json';
import chinese from './translations/chinese.json';

i18n
    .use(initReactI18next)
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
