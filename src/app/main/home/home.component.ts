import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { UserService } from "../../shared/services/user.service";
import { CONTINUE, OK } from "../constants/consts";
import { UserApiService } from "../../shared/services/user-api.service";
import { Modal } from "../constants/interface";
import { HttpStatusCode } from "@angular/common/http";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public modal$ = new BehaviorSubject<boolean>(false);
  public modalType$ = new BehaviorSubject<string>('');
  public contentTextEvent$ = new BehaviorSubject<string>('');
  public buttonTextEvent$ = new BehaviorSubject<string>('');
  public isLogInSuccess$ = this._user.isLogInSuccess$;

  constructor(private _user: UserService, private _userApi: UserApiService) { }

  ngOnInit(): void {
    if (!this._user.isActiveUserValidForGame()) {
      this._user.logoutUser();
    }
  }

  public closeModal() {
    this.modal$.next(false);

    if (this.isLogInSuccess$.value){
      this._user.activateUser();
    }
  }

  public showModal( modal: Modal ): void {
    if (modal.code === HttpStatusCode.InternalServerError) {
      this.buttonTextEvent$.next(OK);
    } else {
      this.buttonTextEvent$.next(CONTINUE);
      this._user.logInSuccess();
    }

    this.contentTextEvent$.next(modal.message);
    this.modalType$.next(modal.type);
    this.modal$.next(true);
  }
}
