import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Currency } from '../../../entities/exchange_rate/model/exchange_rate';
import { ExchangeRateService } from '../../../entities/exchange_rate/services/exchange-rate.service';

@Injectable({
  providedIn: 'root'
})
export class ConverterService {


  private _selectedInputCurrency$: BehaviorSubject<Currency>= new BehaviorSubject(null);
  private _selectedOutputCurrency$: BehaviorSubject<Currency> = new BehaviorSubject(null);

  constructor(
    private exchangeRateService: ExchangeRateService
  ) { 
    this._subscribeToCurrenciesRates()
  }

  currenciesRates: Currency[] = [];

  get selectedInputCurrency$(): Observable<Currency>{
    return this._selectedInputCurrency$.asObservable()
  }

  get selectedOutputCurrency$(): Observable<Currency>{
    return this._selectedOutputCurrency$.asObservable()
  }

  selectInputCurrency(currency: Currency) {
    this._selectedInputCurrency$.next(currency)
  }

  selectOutputCurrency(currency: Currency) {
    this._selectedOutputCurrency$.next(currency)
  }

  selectDefaultsCurrencies(): void{
    this.selectInputCurrency(this.currenciesRates.find(currency => currency.cc == 'USD'));
    this.selectOutputCurrency(this.currenciesRates.find(currency => currency.cc == 'UAH'));
  }

  convertCurrency(inputCurrency: Currency, outputCurrency: Currency, amount: number) {
    return inputCurrency?.rate * amount / outputCurrency?.rate
  }

  private _subscribeToCurrenciesRates(): void{
    this.exchangeRateService.currencyRates$.subscribe(
      rates => {
        if (rates.length > 1) {
          this.currenciesRates = rates;
          this.selectDefaultsCurrencies();
        }
      }
    )
  }

}
