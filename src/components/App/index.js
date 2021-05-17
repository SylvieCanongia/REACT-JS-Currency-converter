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
class App extends React.Component {
  state = {
    open: true,
    baseAmount: 1,
    currency: 'United States Dollar',
    // search content
    inputSearch: '',
  };

  componentDidMount() {
    this.updateTitle();
  }

  componentDidUpdate(prevProps, prevState) {
    const { currency } = this.state;
    // console.log('[App] componentDidUpdate');
    if (prevState.currency !== currency) {
      this.updateTitle();
    }
  }

  updateTitle = () => {
    const { currency } = this.state;
    document.title = `Converter - ${currency}`;
  }

  handleClick = () => {
    const { open } = this.state;

    this.setState({
      open: !open,
    });
  }

  // compute the amount based on selected currency, its rate and the baseAmount
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

  setSearch = (newValue) => {
    this.setState({
      inputSearch: newValue,
    });
  }

  getFilteredCurrencies = () => {
    const { inputSearch } = this.state;

    let filteredCurrencies = currenciesList;
    // currencies filter if search field is not empty
    if (inputSearch.trim().length > 0) {
      const loweredInputSearch = inputSearch.trim().toLowerCase();
      filteredCurrencies = currenciesList.filter((currency) => {
        const loweredCurrencyName = currency.currencyName.toLowerCase();
        return loweredCurrencyName.includes(loweredInputSearch);
      });
    }
    return filteredCurrencies;
  }

  render() {
    const {
      open,
      baseAmount,
      currency,
      inputSearch,
    } = this.state;
    const result = this.computeAmount();

    const filteredCurrencies = this.getFilteredCurrencies();

    return (
      <div className="app">
        <Header baseAmount={baseAmount} />
        <CustomButton isOpen={open} manageClick={this.handleClick} />
        {open && (
          <Currencies
            currencies={filteredCurrencies}
            handleClickOnCurrency={this.setCurrency}
            search={inputSearch}
            setSearch={this.setSearch}
          />
        )}
        <Amount currency={currency} value={result} />
      </div>
    );
  }
}

// == Export
export default App;
