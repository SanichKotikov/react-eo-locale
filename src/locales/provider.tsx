import {memo, useCallback} from 'react';
import {Locale} from '@eo-locale/core';
import {TranslationsProvider} from '@eo-locale/react';

// TODO questions:
// load messages from json
// use render tags in messages
// extract all en messages?

// TODO readonly
const locales: Locale[] = [
  {
    language: 'en',
    messages: {}
  },
  {
    language: 'fr',
    messages: {
      hello: 'Bonjour {name}!',
    }
  }
];

export const LocalesProvider = memo(function LocalesProvider({children}) {
  const errorHandler = useCallback((error: Error) => {
    if (error.message.includes('id missing')) return;
    console.log({ error });
  }, []);

  return (
    <TranslationsProvider language='en' locales={locales} onError={errorHandler}>
      {children}
    </TranslationsProvider>
  );
});
