import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss']
})
export class CustomInputComponent<T> implements OnInit {

  @Input() value: number = 0;
  @Output() onKeyUp: EventEmitter<T> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  emitKeyUpEvent($event): void{
    this.onKeyUp.emit($event)
  }

}
