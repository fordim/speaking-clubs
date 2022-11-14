import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { AuthService } from "../services/auth.service";
import { UserService } from "../../shared/services/user.service";
import { CONTINUE, ERROR_CODE, OK } from "../constants/consts";
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public modal$ = new BehaviorSubject<boolean>(false);
  public contentTextEvent$ = new BehaviorSubject<string>('');
  public buttonTextEvent$ = new BehaviorSubject<string>('');
  public isLogInSuccess$ = this._user.activeUser$;

  public name: string = '';
  public login: string = '';
  public password: string = '';

  constructor(private _auth: AuthService, private _user: UserService) { }

  ngOnInit(): void {
    this.isLogInSuccess$.next(this._user.getActiveUser());
  }

  public closeModal() {
    this.modal$.next(false);

    if (this.isLogInSuccess$.value){
      this._user.activateUser();
      this._user.setActiveUserName();
    }
  }

  public logIn(form: NgForm): void {
    if (form.valid === false) {
      return;
    }

    const logInRequest = this._auth.logIn(form.value.login, form.value.password);

    if (logInRequest.code === ERROR_CODE) {
      this.showModal(logInRequest.message, true);
      return;
    }

    this.showModal(logInRequest.message);
  }

  public showModal( textEvent: string, error: boolean = false ): void {
    this.modal$.next(true);
    this.contentTextEvent$.next(textEvent);
    this.buttonTextEvent$.next(CONTINUE);

    if (error) {
      this.buttonTextEvent$.next(OK);
    } else {
      this.isLogInSuccess$.next(true);
    }
  }
}
