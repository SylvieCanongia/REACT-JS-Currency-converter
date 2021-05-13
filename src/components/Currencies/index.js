import React from 'react';

import './currencies.scss';

const Currencies = () => (
  <>
    <section className="currencies">
      <h2 className="currencies__title">Currencies</h2>
      <ul className="currencies__list">
        <li className="currencies__list__item"><a href="">Australian Dollar</a></li>
        <li className="currencies__list__item"><a href="">Bulgarian Lev </a></li>
        <li className="currencies__list__item"><a href="">Brazilian Real</a></li>
        <li className="currencies__list__item"><a href="">Canadian Dollar</a></li>
        <li className="currencies__list__item"><a href="">Swiss Franc</a></li>
        <li className="currencies__list__item"><a href="">Chinese Yuan Renminbi</a></li>
        <li className="currencies__list__item"><a href="">Czech Koruna</a></li>
        <li className="currencies__list__item"><a href="">Hong Kong Dollar</a></li>
        <li className="currencies__list__item"><a href="">Croatian Kuna</a></li>
        <li className="currencies__list__item"><a href="">Hungarian Forint</a></li>
        <li className="currencies__list__item"><a href="">Indonesian Rupiah</a></li>
      </ul>
    </section>
  </>
);

export default Currencies;
