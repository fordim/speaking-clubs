import { Component } from '@angular/core';
import { GameService } from "../../services/game.service";

@Component({
  selector: 'guess-word-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.scss']
})
export class WordComponent {

  rectangle = '/assets/guess-word/images/rectangle.png';

  letters$ = this._game.letters$;
  word$ = this._game.word$;

  constructor(private _game: GameService) {}

  public chooseLetter(letter: string, type: string): void {
    this._game.chooseLetter(letter, type);
  }
}
