import { Component, OnInit } from '@angular/core';
import { UserService } from "../../shared/services/user.service";
import { Router } from "@angular/router";
import { GameService } from "../services/game.service";
import { FADE_IN_MODAL_ANIMATION } from "./animations";

@Component({
  selector: 'guess-word-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  animations: [FADE_IN_MODAL_ANIMATION],
})
export class MainPageGuessWordComponent implements OnInit {

  activeUser$ = this._user.activeUser$;
  chooseCategoryPage$ = this._game.chooseCategoryPage$;
  levelModal$ = this._game.levelModal$;
  endGameModal$ = this._game.endGameModal$;

  constructor(private _user: UserService, private router: Router, private _game: GameService) { }

  ngOnInit(): void {
    if (!this._user.isActiveUserValidForGame()) {
      this.router.navigate(['']);
    }

    this._game.activateChooseCategory(true);
    this._game.deactivateEndGameModal();
    this._game.deactivateLevelModal();
  }

}
