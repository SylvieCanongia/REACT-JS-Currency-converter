// == Import npm
import React from 'react';
import Header from 'src/components/Header';
import Currencies from 'src/components/Currencies';
import Amount from 'src/components/Amount';

import currenciesList from 'src/data/currencies';

// == Import
import './styles.scss';

// == Component
// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showCurrencies: true,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { showCurrencies } = this.state;

    this.setState({
      showCurrencies: !showCurrencies,
    });
  }

  render() {
    const { showCurrencies } = this.state;
    return (
      <div className="app">
        <Header />
        <button
          type="button"
          className="button"
          onClick={this.handleClick}
        >
          Toggle currencies
         </button>
        {showCurrencies && <Currencies currencies={currenciesList} />}
        <Amount />
      </div>
    );
  }
}

// == Export
export default App;
