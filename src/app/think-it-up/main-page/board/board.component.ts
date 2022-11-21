import { Component } from '@angular/core';
import { GameService } from "../../services/game.service";
import { BoardService } from "../../services/board.service";

@Component({
  selector: 'think-it-up-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {
  openCategory$ = this._game.openCategory$;
  openLetter$ = this._game.openLetter$;
  categoryCardsCount$ = this._game.categoryCardsCount$;

  questionIcon = '/assets/think-it-up/images/question-mark.svg';
  lettersIcon = '/assets/think-it-up/images/abc-letters.svg';

  constructor(private _game: GameService, private _board: BoardService) { }

  public openCategoryCard(): void {
    if (this.categoryCardsCount$.value === 0) {
      this._board.openEndGameModal();
      return;
    }

    this._game.openCategoryCards();
  }

  public openLetterCard(): void {
    this._game.openLetterCards();
  }

  public openBigCard(): void {
    if (this.openCategory$.value.text === '') {
      return;
    }
    this._board.openBigCardModal();
  }
}
