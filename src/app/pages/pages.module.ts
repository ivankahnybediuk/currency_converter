import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConverterComponent } from './main/components/converter/converter.component';
import { MainComponent } from './main/components/main/main.component';
import { UiKitModule } from '../ui-kit/ui-kit.module';



@NgModule({
  declarations: [
    ConverterComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    UiKitModule
  ],
  exports: [
    MainComponent
  ]
})
export class PagesModule { }
