import { Component, OnInit, OnDestroy } from '@angular/core';
import { ExchangeRateService } from '../../../../entities/exchange_rate/services/exchange-rate.service';
import { Currency } from '../../../../entities/exchange_rate/model/exchange_rate';
import { takeUntil } from 'rxjs';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  private readonly _destroy$ = new Subject<void>();
  
  constructor(
    private exchangeService: ExchangeRateService
  ) { }

  mainCurrencies: Currency[];

  ngOnInit(): void {
    this._subscribeToCurrencyRate();
  }

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }

  private _subscribeToCurrencyRate(): void{
    this.exchangeService.currencyRates$
      .pipe(takeUntil(this._destroy$))
      .subscribe(_ => this.mainCurrencies = _.filter(rate => rate.cc === 'USD' || rate.cc === 'EUR'))
  }
}
