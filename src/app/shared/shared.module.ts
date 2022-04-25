import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/components/header/header.component';
import { EntitiesModule } from '../entities/entities.module';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    EntitiesModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class SharedModule { }
