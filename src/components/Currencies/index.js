import React from 'react';

import './currencies.scss';

const Currencies = () => (
  <>
    <section className="currencies">
      <h2 className="currencies__title">Currencies - Devises</h2>
      <ul className="currencies__list">
        <li className="currencies__list__item"><a href="">Australian Dollar - <span>AUD -IMG-</span></a></li>
        <li className="currencies__list__item"><a href="">Bulgarian Lev - <span>BGN -IMG-</span></a></li>
        <li className="currencies__list__item"><a href="">Brazilian Real - <span>BRL -IMG-</span></a></li>
        <li className="currencies__list__item"><a href="">Canadian Dollar - <span>CAD -IMG-</span></a></li>
        <li className="currencies__list__item"><a href="">Swiss Franc - <span>CHF -IMG-</span></a></li>
        <li className="currencies__list__item"><a href="">Chinese Yuan Renminbi - <span>CNY -IMG-</span></a></li>
        <li className="currencies__list__item"><a href="">Czech Koruna - <span>CZK -IMG-</span></a></li>
        <li className="currencies__list__item"><a href="">Hong Kong Dollar - <span>DKK -IMG-</span></a></li>
        <li className="currencies__list__item"><a href="">Croatian Kuna - <span>HKD -IMG-</span></a></li>
        <li className="currencies__list__item"><a href="">Hungarian Forint - <span>HRK -IMG-</span></a></li>
        <li className="currencies__list__item"><a href="">Indonesian Rupiah - <span>HUF -IMG-</span></a></li>
      </ul>
    </section>
  </>
);

export default Currencies;
