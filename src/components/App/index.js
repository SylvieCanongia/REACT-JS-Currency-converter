// == Import npm
import React from 'react';
import Header from 'src/components/Header';
import Currencies from 'src/components/Currencies';
import Amount from 'src/components/Amount';

import currenciesList from 'src/data/currencies';

// == Import
import './styles.scss';

// == Component
const App = () => (
  <div className="app">
    <Header />
    <Currencies currencies={currenciesList} />
    <Amount />

  </div>
);

// == Export
export default App;
