import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { AddPlayerModalComponent } from "./main-page/add-player-modal/add-player-modal.component";
import { BigCardModalComponent } from "./main-page/big-card-modal/big-card-modal.component";
import { BoardComponent } from "./main-page/board/board.component";
import { EndGameModalComponent } from "./main-page/end-game-modal/end-game-modal.component";
import { GeneralModalComponent } from "./main-page/general-modal/general-modal.component";
import { NewGameModalComponent } from "./main-page/new-game-modal/new-game-modal.component";
import { PlayersComponent } from "./main-page/players/players.component";
import { MainPageThinkItUpComponent } from "./main-page/main-page.component";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MainModule } from "../main/main.module";

@NgModule({
  declarations: [
    MenuComponent,
    AddPlayerModalComponent,
    BigCardModalComponent,
    BoardComponent,
    EndGameModalComponent,
    GeneralModalComponent,
    NewGameModalComponent,
    PlayersComponent,
    MainPageThinkItUpComponent
  ],
  exports: [
    MainPageThinkItUpComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    MainModule
  ]
})
export class ThinkItUpModule { }
