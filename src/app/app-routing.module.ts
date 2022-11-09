import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./main/home/home.component";
import { MainPageComponent } from "./think-it-up/main-page/main-page.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'think-it-up', component: MainPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
