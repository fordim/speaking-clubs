import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./main/home/home.component";
import { MainPageThinkItUpComponent } from "./think-it-up/main-page/main-page.component";
import { MainPageGuessWordComponent } from "./guess-word/main-page/main-page.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'think-it-up', component: MainPageThinkItUpComponent},
  { path: 'guess-word', component: MainPageGuessWordComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
