import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainModule } from "./main/main.module";
import { ThinkItUpModule } from "./think-it-up/think-it-up.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainModule,
    ThinkItUpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
