import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageNewYearClubsComponent } from './main-page/main-page.component';
import { AuthComponent } from './main-page/auth/auth.component';
import { CabinetComponent } from './main-page/cabinet/cabinet.component';
import { FormsModule } from "@angular/forms";
import { ErrorModalComponent } from './main-page/error-modal/error-modal.component';
import { PrizeModalComponent } from './main-page/prize-modal/prize-modal.component';


@NgModule({
  declarations: [
    MainPageNewYearClubsComponent,
    AuthComponent,
    CabinetComponent,
    ErrorModalComponent,
    PrizeModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ]
})
export class NewYearClubsModule { }
