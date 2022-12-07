import { Component } from '@angular/core';
import { GameService } from "../../services/game.service";

@Component({
  selector: 'guess-word-performance',
  templateUrl: './performance.component.html',
  styleUrls: ['./performance.component.scss']
})
export class PerformanceComponent {

  heartIcon = '/assets/guess-word/images/heart.png';
  alHiIcon = '/assets/guess-word/images/al-hi.png';
  alSadIcon = '/assets/guess-word/images/al-sad.png';
  alThinkingIcon = '/assets/guess-word/images/al-thinking.png';
  alPanicIcon = '/assets/guess-word/images/al-panic.png';
  ufoIcon = '/assets/guess-word/images/ufo.png';
  alNiceIcon = '/assets/guess-word/images/al-nice.png';
  triangleIcon = '/assets/guess-word/images/triangle.png';

  hearts$ = this._game.hearts$;
  al$ = this._game.al$;

  constructor(private _game: GameService) { }
}
