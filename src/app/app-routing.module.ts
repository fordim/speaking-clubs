import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./main/home/home.component";
import { MainPageThinkItUpComponent } from "./think-it-up/main-page/main-page.component";
import { MainPageGuessWordComponent } from "./guess-word/main-page/main-page.component";
import { MainPageKidsNewYearMathComponent } from "./new-year-math/main-page-kids/main-page-kids.component";
import { MainPageJuniorNewYearMathComponent } from "./new-year-math/main-page-junior/main-page-junior.component";
import { MainPageNewYearClubsComponent } from "./new-year-clubs/main-page/main-page.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'think-it-up', component: MainPageThinkItUpComponent},
  { path: 'guess-word', component: MainPageGuessWordComponent},
  { path: 'new-year-math-kids', component: MainPageKidsNewYearMathComponent},
  { path: 'new-year-math-junior', component: MainPageJuniorNewYearMathComponent},
  { path: 'new-year-clubs', component: MainPageNewYearClubsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
