import { Component } from '@angular/core';
import { UserService } from "../../shared/services/user.service";
import { MainService } from "../services/main.service";

@Component({
  selector: 'new-year-clubs-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageNewYearClubsComponent {

  highlight = '/assets/new-year-clubs/images/highlight.png';

  public isLogInSuccess$ = this._user.isLogInSuccess$;
  public errorModal$ = this._main.errorModal$;
  public prizeModal$ = this._main.prizeModal$;

  constructor(private _user: UserService, private _main: MainService) {
    if (!this._user.isActiveUserValidForNewYearClubs()) {
      this._user.logoutUser();
    }
  }
}
