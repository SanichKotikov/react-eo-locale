import React, { useContext } from 'react';
import { Text, DateTime, Numeric, useTranslator, TranslationsContext } from '@eo-locale/react';

import { Select } from './components/Select/Select';

import css from './App.module.css';

function App() {
  const translations = useContext(TranslationsContext);
  // console.log(translations);

  const translator = useTranslator();
  // console.log(translator);

  const data = { name: 'World', count: 4 };

  return (
    <div>
      <div>
        <Select
          value={translations.language}
          options={translations.locales.map(locale => locale.language)}
          onChange={translations.setLanguage}
        />
      </div>
      <h3>Usage:</h3>
      <div className={css.list}>
        <span>
          <Text
            id='hello'
            defaultMessage={'Hello {name}!'}
            name={data.name}
          />
        </span>
        <Text
          html
          tagName='em'
          id='hello_tag'
          defaultMessage={'Hello {name}!'}
          name={data.name}
        />
        <Text
          html
          id='hello_html'
          defaultMessage={'<strong>Hello {name}!</strong>'}
          name={data.name}
        />
        <Text
          id='counting'
          count={data.count}
          defaultMessage='{count, plural, one {You have one item.} other {You have {count} items.}}'
        />
        <span>
          <DateTime
            value={new Date()}
            day="numeric"
            month="long"
            weekday="long"
            year="numeric"
          />
        </span>
        <span>
          <Numeric value={123456789.321}/>
        </span>
        <span>{translator.formatNumber(123456789.321)}</span>
        <span>{translator.formatDate(new Date())}</span>
        <span>
          <Text
            id='test'
            defaultMessage='Some message with {link} in the middle.'
            link={<a href="#">link</a>}
          />
        </span>
        {/* doesn't work! */}
        {/*<span>*/}
        {/*  <Text*/}
        {/*    id='test_2'*/}
        {/*    defaultMessage='Some message with {link} in the middle.'*/}
        {/*    link={() => <a href="#">link</a>}*/}
        {/*  />*/}
        {/*</span>*/}
      </div>
    </div>
  );
}

export default App;
