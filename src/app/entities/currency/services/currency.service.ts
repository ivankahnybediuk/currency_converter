import { Injectable } from '@angular/core';
import { Currency, ICurrency } from '../models/currency';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {


  private _currenciesLibrary: ICurrency[] = [
    Object.freeze({
      symbol: '$',
      name: 'USD',
      image: '../../../../../assets/img/usd.svg'
    }),
    Object.freeze({
      symbol: '₴',
      name: 'UAH',
      image: '../../../../../assets/img/uah.svg'
    }),
    Object.freeze({
      symbol: '€',
      name: 'EUR',
      image: '../../../../../assets/img/eur.svg'
    })
  ]
  currenciesDefault: Currency[] = this._currenciesLibrary.map(currency => new Currency(currency));

  constructor() { }
}
