// == Import npm
import React from 'react';
import Header from 'src/components/Header';
import Currencies from 'src/components/Currencies';
import Amount from 'src/components/Amount';
import CustomButton from 'src/components/CustomButton';

import currenciesList from 'src/data/currencies';

// == Import
import './styles.scss';

// == Component
// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  state = {
    open: true,
    baseAmount: 1,
    currency: 'United States Dollar',
  };

  handleClick = () => {
    const { open } = this.state;

    this.setState({
      open: !open,
    });
  }

  //  comppute the amount based on selected currency, its rate and the baseAmount
  computeAmount = () => {
    const { baseAmount, currency } = this.state;
    const currencyData = currenciesList.find((data) => data.currencyName === currency);
    const result = currencyData.rate * baseAmount;
    const roundedResult = result.toFixed(2);

    return roundedResult;
  }

  setCurrency = (newCurrencyName) => {
    this.setState({
      currency: newCurrencyName,
    });
  }

  render() {
    const { open, baseAmount, currency } = this.state;
    const result = this.computeAmount();

    return (
      <div className="app">
        <Header baseAmount={baseAmount} />
        <CustomButton isOpen={open} manageClick={this.handleClick} />
        {open && (
          <Currencies
            currencies={currenciesList}
            handleClickOnCurrency={this.setCurrency}
          />
        )}
        <Amount currency={currency} value={result} />
      </div>
    );
  }
}

// == Export
export default App;
