import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    HomeComponent,
    LayoutComponent,
    ModalComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MainModule { }
