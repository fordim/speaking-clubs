import { Component, OnInit } from '@angular/core';
import { GameService } from "../../services/game.service";

@Component({
  selector: 'guess-word-level-modal',
  templateUrl: './level-modal.component.html',
  styleUrls: ['./level-modal.component.scss']
})
export class LevelModalComponent implements OnInit{

  closeIcon = '/assets/guess-word/images/popup-close.svg';
  starIcon = '/assets/guess-word/images/star.svg';

  level$ = this._game.level$;
  actualLevelNumber: number = 1;

  constructor(private _game: GameService) {}

  ngOnInit(): void {
    this.actualLevelNumber = this.level$.value.level;
  }

  public closeModal(): void {
    this._game.deactivateLevelModal();
  }

  public changeLevel(newLevel: number): void {
    this.actualLevelNumber = newLevel;
    this._game.changeLevel(newLevel);
  }
}
