import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainModule } from "./main/main.module";
import { ThinkItUpModule } from "./think-it-up/think-it-up.module";
import { HttpClientModule } from "@angular/common/http";
import { GuessWordModule } from "./guess-word/guess-word.module";
import { NewYearClubsModule } from "./new-year-clubs/new-year-clubs.module";
import { NewYearMathModule } from "./new-year-math/new-year-math.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainModule,
    ThinkItUpModule,
    HttpClientModule,
    GuessWordModule,
    NewYearClubsModule,
    NewYearMathModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
