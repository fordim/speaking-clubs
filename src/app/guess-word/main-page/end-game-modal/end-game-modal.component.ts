import { Component, OnInit } from '@angular/core';
import { GameService } from "../../services/game.service";
import { WIN_TEXT } from "../../constants/consts";
import { DEFAULT_CONFETTI_SETTINGS, playConfetti } from "../../../shared/play-confetti";
import { delay } from "rxjs";

@Component({
  selector: 'guess-word-end-game-modal',
  templateUrl: './end-game-modal.component.html',
  styleUrls: ['./end-game-modal.component.scss']
})
export class EndGameModalComponent implements OnInit {

  closeIcon = '/assets/guess-word/images/popup-close.svg';
  alWin = '/assets/guess-word/images/al-win.png';
  winText = WIN_TEXT;

  constructor(private _game: GameService) { }

  ngOnInit(): void {
    playConfetti({
      ...DEFAULT_CONFETTI_SETTINGS,
      origin: {
        y: 0.5,
        x: 0.5,
      },
    })
      .pipe(delay(1000))
      .subscribe(() => {});
  }

  public closeModal(): void {
    this._game.deactivateEndGameModal();
  }
}
