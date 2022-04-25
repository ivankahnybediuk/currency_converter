import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICurrency, Currency } from '../model/exchange_rate';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExchangeRateService {

  private _UAH_Info: ICurrency = {
    txt: 'Українська гривня',
    rate: 1,
    cc: 'UAH'
  }

  private _baseApiUrl: string = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchangenew?json';
  currencyRates: Currency[] = [new Currency(this._UAH_Info)];
  private _currencyRates$: BehaviorSubject<Currency[]> = new BehaviorSubject([new Currency(this._UAH_Info)])


  constructor(
    private http: HttpClient
  ) { }

  get currencyRates$(): Observable<Currency[]>{
    return this._currencyRates$.asObservable()
  }

  updateCurrencyRates(ratesList: Currency[]): void{
    let currencyRates = this._currencyRates$.value;
    currencyRates  = currencyRates.concat(ratesList);
    this._currencyRates$.next(currencyRates);
  }

  fetchCurrenciesRate() {
    this.http.get(this._baseApiUrl).subscribe(
      (data) => {
        let currencyList = [];
        (data as ICurrency[]).map(rateInfo => currencyList.push(new Currency(rateInfo)));
        this.updateCurrencyRates(currencyList)
      }
    )
  }



 


}
