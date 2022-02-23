import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import chinese from './assets/translations/chinese.json';
import english from './assets/translations/english.json';

import aboutCN from './assets/translations/cn/about.json';
import aboutEN from './assets/translations/en/about.json';

import educationCN from './assets/translations/cn/education.json';
import educationEN from './assets/translations/en/education.json';

import experienceCN from './assets/translations/cn/experience.json';
import experienceEN from './assets/translations/en/experience.json';

const resources = {
    cn: {
        translation: chinese,
        about: aboutCN,
        education: educationCN,
        experience: experienceCN,
    },
    en: {
        translation: english,
        about: aboutEN,
        education: educationEN,
        experience: experienceEN,
    },
};

i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        interpolation: { escapeValue: false },
        lng: 'en',
        fallbackLng: 'en',
        ns: ['translation', 'about'],
        defaultNS: 'translation',
        resources,
    });

export default i18n;
