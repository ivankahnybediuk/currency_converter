import { Component, OnInit, Input, TemplateRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent<T> implements OnInit {

  @Input() renderItemTemplate: TemplateRef<{ item: T }>
  @Input() listItem: T[];
  @Input() selectedItem: T;

  @Output() clickOnItem: EventEmitter<T> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }


  emitClickOnItem(item: T): void{
    this.clickOnItem.emit(item)
  }

}
