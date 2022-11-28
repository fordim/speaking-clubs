import { Component, OnInit } from '@angular/core';
import { BoardService } from "../services/board.service";
import { FADE_IN_BIG_CARD_ANIMATION, FADE_IN_MODAL_ANIMATION } from "./animations";
import { UserService } from "../../shared/services/user.service";
import { Router } from "@angular/router";

@Component({
  selector: 'think-it-up-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  animations: [FADE_IN_BIG_CARD_ANIMATION, FADE_IN_MODAL_ANIMATION],
})
export class MainPageThinkItUpComponent implements OnInit{
  newGameModal$ = this._board.newGameModal$;
  addPlayerModal$ = this._board.addPlayerModal$;
  hasGeneralModal$ = this._board.hasGeneralModal$;
  endGameModal$ = this._board.endGameModal$;
  bigCardModal$ = this._board.bigCardModal$;
  activeUser$ = this._user.activeUser$;

  constructor(private _board: BoardService, private _user: UserService, private router: Router) { }

  ngOnInit(): void {
    if (!this._user.isActiveUserValidForGame()) {
      this.router.navigate(['']);
    }
  }
}
