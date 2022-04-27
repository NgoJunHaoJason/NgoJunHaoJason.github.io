import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import commonEN from 'assets/translations/en/common.json';
import commonZH from 'assets/translations/zh/common.json';

import aboutEN from 'assets/translations/en/about.json';
import aboutZH from 'assets/translations/zh/about.json';

import educationEN from 'assets/translations/en/education.json';
import educationZH from 'assets/translations/zh/education.json';

import experienceEN from 'assets/translations/en/experience.json';
import experienceZH from 'assets/translations/zh/experience.json';

import projectsEN from 'assets/translations/en/projects.json';
import projectsZH from 'assets/translations/zh/projects.json';

import skillsEN from 'assets/translations/en/skills.json';
import skillsZH from 'assets/translations/zh/skills.json';

export const defaultNS = 'common';

export const resources = {
  en: {
    common: commonEN,
    about: aboutEN,
    education: educationEN,
    experience: experienceEN,
    projects: projectsEN,
    skills: skillsEN,
  },
  zh: {
    common: commonZH,
    about: aboutZH,
    education: educationZH,
    experience: experienceZH,
    projects: projectsZH,
    skills: skillsZH,
  },
} as const;

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    interpolation: { escapeValue: false },
    fallbackLng: 'en',
    ns: Object.keys(resources.en),
    defaultNS,
    resources,
  });

export default i18n;
