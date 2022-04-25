import { Component, OnDestroy, OnInit } from '@angular/core';
import { ExchangeRateService } from '../../../../entities/exchange_rate/services/exchange-rate.service';
import { ConverterService } from '../../services/converter.service';
import { Currency } from '../../../../entities/exchange_rate/model/exchange_rate';
import { Subject, takeUntil, combineLatest } from 'rxjs';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})
export class ConverterComponent implements OnInit, OnDestroy {

  private readonly _destroy$ = new Subject<void>();
  
  selectedInputCurrency: Currency = null;
  selectedOutputCurrency: Currency = null;
  inputCurrencyAmount: number;
  outputCurrencyAmount: number;

  constructor(
    public ExchangeRateService: ExchangeRateService,
    public converterService: ConverterService
  ) { 
    this._subscribeToSelectedCurrencies();
  }

  ngOnInit(): void {
  }

    ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
    }
  
  convertAmountFromInput(amount: number = 1): void {
    this.inputCurrencyAmount = amount;
    this.outputCurrencyAmount = this.converterService.convertCurrency(this.selectedInputCurrency, this.selectedOutputCurrency, amount)
  }

  convertAmountFromOutput(amount: number = 1): void {
    this.outputCurrencyAmount = amount;
    this.inputCurrencyAmount = this.converterService.convertCurrency(this.selectedOutputCurrency, this.selectedInputCurrency, amount)
  } 


  private _subscribeToSelectedCurrencies(): void{
    combineLatest([
      this.converterService.selectedInputCurrency$,
      this.converterService.selectedOutputCurrency$
    ])
      .pipe(takeUntil(this._destroy$))
      .subscribe(
        ([inputCurrency, outputCurrency]) => {
          [this.selectedInputCurrency, this.selectedOutputCurrency] = [inputCurrency, outputCurrency];
          return this.inputCurrencyAmount
            ? this.convertAmountFromInput(this.inputCurrencyAmount)
            : this.outputCurrencyAmount
              ? this.convertAmountFromOutput(this.outputCurrencyAmount)
              : this.convertAmountFromInput()
        }
      )
  }

}
