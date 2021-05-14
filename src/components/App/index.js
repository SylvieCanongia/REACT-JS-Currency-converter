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

  render() {
    const { open, baseAmount, currency } = this.state;
    return (
      <div className="app">
        <Header baseAmount={baseAmount} />
        <CustomButton isOpen={open} manageClick={this.handleClick} />
        {open && <Currencies currencies={currenciesList} />}
        <Amount currency={currency} />
      </div>
    );
  }
}

// == Export
export default App;
