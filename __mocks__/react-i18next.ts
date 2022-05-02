const reactI18Next: any = jest.createMockFromModule('react-i18next');

reactI18Next.useTranslation = () => {
  return {
    t: (key: string) => key,
    i18n: {
      changeLanguage: () => new Promise(() => {}),
    },
  };
};

reactI18Next.initReactI18next = { type: "3rdParty", init: jest.fn() };

module.exports = reactI18Next;

export default {};

// module.exports = {
//   useTranslation: () => ({
//     t: (key: string) => key,
//   }),
// }

// module.exports = {t: (key: string) => key};
