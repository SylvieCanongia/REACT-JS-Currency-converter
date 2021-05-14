// == Import npm
import React from 'react';
import Header from 'src/components/Header';
import Currencies from 'src/components/Currencies';
import Amount from 'src/components/Amount';

import currencies from 'src/data/currencies';

// == Import
import './styles.scss';

// == Component
const App = () => (
  <div className="app">
    <Header />
    <Currencies currenciesList={currencies.currencies} />
    <Amount />

  </div>
);

// == Export
export default App;
