import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import commonCN from './assets/translations/cn/common.json';
import commonEN from './assets/translations/en/common.json';

import aboutCN from './assets/translations/cn/about.json';
import aboutEN from './assets/translations/en/about.json';

import educationCN from './assets/translations/cn/education.json';
import educationEN from './assets/translations/en/education.json';

import experienceCN from './assets/translations/cn/experience.json';
import experienceEN from './assets/translations/en/experience.json';

import projectsCN from './assets/translations/cn/projects.json';
import projectsEN from './assets/translations/en/projects.json';

export const defaultNS = 'common';

export const resources = {
    cn: {
        common: commonCN,
        about: aboutCN,
        education: educationCN,
        experience: experienceCN,
        projects: projectsCN,
    },
    en: {
        common: commonEN,
        about: aboutEN,
        education: educationEN,
        experience: experienceEN,
        projects: projectsEN,
    },
} as const;

i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        interpolation: { escapeValue: false },
        lng: 'en',
        fallbackLng: 'en',
        ns: Object.keys(resources.en),
        defaultNS,
        resources,
    });

export default i18n;
