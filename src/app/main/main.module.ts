import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { ModalComponent } from './modal/modal.component';
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "../app-routing.module";

@NgModule({
  declarations: [
    HomeComponent,
    LayoutComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ]
})
export class MainModule { }
