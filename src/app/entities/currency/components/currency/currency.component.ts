import { Component, Input, OnInit } from '@angular/core';
import { Currency } from '../../models/currency';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss']
})
export class CurrencyComponent implements OnInit {

  @Input() currency!: Currency;

  constructor() { }

  ngOnInit(): void {
  }

}
