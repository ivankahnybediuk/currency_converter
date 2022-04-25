import { Component, OnInit, Input, TemplateRef, Output, EventEmitter, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-custom-select',
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.scss']
})
export class CustomSelectComponent<T> implements OnInit {

  isOpenDropdown: boolean = false;

  @Input() itemsList: T[];
  @Input() selectedItem: T;
  @Input() renderItemTemplate: TemplateRef<{ item: T }>;

  @Output() clickOnItem: EventEmitter<T> = new EventEmitter();

  @HostListener("document:click", ['$event']) clickOutsideDropdown($event) {
    if (this.isOpenDropdown && !this.elementRef.nativeElement.contains($event.target)) {
      this.toggleDropdown()
    } 
  }
  
  constructor(
    private elementRef: ElementRef
  ) { }

  ngOnInit(): void {
  }

  toggleDropdown(): void{
    this.isOpenDropdown = !this.isOpenDropdown;
  }

  emitOnClickItem($event) {
    this.clickOnItem.emit($event);
    this.toggleDropdown();
  }

}
