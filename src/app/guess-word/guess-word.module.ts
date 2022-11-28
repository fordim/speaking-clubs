import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageGuessWordComponent } from './main-page/main-page.component';
import { MainModule } from "../main/main.module";
import { CategoryComponent } from './main-page/category/category.component';
import { MenuComponent } from './main-page/menu/menu.component';
import { WordComponent } from './main-page/word/word.component';
import { LevelModalComponent } from './main-page/level-modal/level-modal.component';
import { EndGameModalComponent } from './main-page/end-game-modal/end-game-modal.component';
import { PerformanceComponent } from './main-page/performance/performance.component';

@NgModule({
  declarations: [
    MainPageGuessWordComponent,
    CategoryComponent,
    MenuComponent,
    WordComponent,
    LevelModalComponent,
    EndGameModalComponent,
    PerformanceComponent
  ],
  imports: [
    CommonModule,
    MainModule
  ]
})
export class GuessWordModule { }
