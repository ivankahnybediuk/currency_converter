import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-arrow-button',
  templateUrl: './arrow-button.component.html',
  styleUrls: ['./arrow-button.component.scss']
})
export class ArrowButtonComponent implements OnInit {

  @Input() direction: 'top' | 'bottom' = 'bottom';

  @Output() arrowClick = new EventEmitter;
  

  constructor() { }

  ngOnInit(): void {
  }

  arrowClickEmit(): void{
    this.arrowClick.emit();
  }

}
