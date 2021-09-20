import { useRouter } from 'next/router';

import * as langs from 'i18n';

const useLocale = () => {
  const { locale, locales } = useRouter();

  const t = (phrase: string): string => {
    try {
      const i18nPhrase = langs[locale][phrase];

      if (!i18nPhrase) {
        console.error(`Localized text can not be found: ${phrase}`);

        return phrase;
      }

      return i18nPhrase;
    } catch (error) {
      console.error(`Localized text can not be found: ${phrase}`);
      return phrase;
    }
  };

  return {
    t,
    locale,
    locales,
  };
};

export default useLocale;
