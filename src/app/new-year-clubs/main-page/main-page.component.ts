import { Component } from '@angular/core';
import { UserService } from "../../shared/services/user.service";
import { MainService } from "../services/main.service";
import {MODAL_INFO_19, MODAL_INFO_21, ModalType} from "../constants/consts";

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
    //TODO
    // this.isLogInSuccess$.next(true);
    // this.prizeModal$.next({ status: true, type: ModalType.generalPrize, modalInfo: MODAL_INFO_21 })
  }
}
