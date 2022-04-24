import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../../../../entities/currency/services/currency.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    public currencyService: CurrencyService
  ) { }

  ngOnInit(): void {
  }

}
