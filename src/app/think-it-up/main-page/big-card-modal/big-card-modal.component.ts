import { Component } from '@angular/core';
import { BoardService } from "../../services/board.service";
import { GameService } from "../../services/game.service";

@Component({
  selector: 'think-it-up-big-card-modal',
  templateUrl: './big-card-modal.component.html',
  styleUrls: ['./big-card-modal.component.scss']
})
export class BigCardModalComponent {

  openCategory$ = this._game.openCategory$;

  closeIcon = '/assets/think-it-up/images/popup-close.svg';

  constructor(private _board: BoardService, private _game: GameService) {
  }

  closeModal(): void {
    this._board.closeBigCardModal();
  }
}
