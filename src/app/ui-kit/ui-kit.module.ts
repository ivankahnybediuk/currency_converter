import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomSelectComponent } from './custom-select/custom-select.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { ArrowButtonComponent } from './arrow-button/arrow-button.component';
import { CustomInputComponent } from './custom-input/custom-input.component';



@NgModule({
  declarations: [
    CustomSelectComponent,
    DropdownComponent,
    ArrowButtonComponent,
    CustomInputComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CustomSelectComponent,
    CustomInputComponent
  ]
})
export class UiKitModule { }
