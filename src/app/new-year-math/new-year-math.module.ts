import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageKidsNewYearMathComponent} from './main-page-kids/main-page-kids.component';
import { MainPageJuniorNewYearMathComponent } from './main-page-junior/main-page-junior.component';

@NgModule({
  declarations: [
    MainPageKidsNewYearMathComponent,
    MainPageJuniorNewYearMathComponent
  ],
  imports: [
    CommonModule
  ]
})
export class NewYearMathModule { }
