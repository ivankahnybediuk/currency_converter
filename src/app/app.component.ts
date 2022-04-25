import { Component, OnInit } from '@angular/core';
import { ExchangeRateService } from './entities/exchange_rate/services/exchange-rate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  constructor(
    private rateService: ExchangeRateService
  ) {
    
  }

  ngOnInit() {
    this.rateService.fetchCurrenciesRate()
  }
}
