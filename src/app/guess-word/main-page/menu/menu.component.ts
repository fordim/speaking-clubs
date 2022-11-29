import { Component } from '@angular/core';
import { GameService } from "../../services/game.service";

@Component({
  selector: 'guess-word-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  category$ = this._game.category$;
  level$ = this._game.level$;

  constructor(private _game: GameService) { }

  public newWord(): void {
    this._game.newGame();
  }

  public changeCategory(): void {
    this._game.activateChooseCategory();
  }

  public changeLevel(): void {
    this._game.activateLevelModal();
  }

}
