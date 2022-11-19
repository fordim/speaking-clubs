import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { AuthService } from "../services/auth.service";
import { UserService } from "../../shared/services/user.service";
import { CONTINUE, OK } from "../constants/consts";
import { UserApiService } from "../../shared/services/user-api.service";

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
  public isLogInSuccess$ = this._user.activeUser$;

  constructor(private _auth: AuthService, private _user: UserService, private _userApi: UserApiService) { }

  ngOnInit(): void {
    this.isLogInSuccess$.next(this._user.getActiveUser());

    //TODO test api
    this._userApi.get();
  }

  public closeModal() {
    this.modal$.next(false);

    if (this.isLogInSuccess$.value){
      this._user.activateUser();
      this._user.setActiveUserName();
    }
  }

  public showModal( textEvent: string, type: string, error: boolean = false ): void {
    this.modal$.next(true);
    this.contentTextEvent$.next(textEvent);
    this.modalType$.next(type);

    if (error) {
      this.buttonTextEvent$.next(OK);
    } else {
      this.buttonTextEvent$.next(CONTINUE);
      this.isLogInSuccess$.next(true);
    }
  }
}
