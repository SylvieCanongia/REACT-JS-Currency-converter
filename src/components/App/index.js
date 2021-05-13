// == Import npm
import React from 'react';
import Header from 'src/components/Header';
import Currencies from 'src/components/Currencies';

// == Import
import './styles.scss';

// == Component
const App = () => (
  <div className="app">
    <Header />
    <Currencies />
    <div>Footer</div>

  </div>
);

// == Export
export default App;
