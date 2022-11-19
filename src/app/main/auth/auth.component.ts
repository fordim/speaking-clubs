import { Component } from '@angular/core';
import { AuthService } from "../services/auth.service";
import { NgForm } from "@angular/forms";
import { ERROR_CODE } from "../constants/consts";
import { HomeComponent } from "../home/home.component";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {

  alLayDown = '/assets/main/images/al-lay-down.png';

  modal$ = this.home.modal$;

  constructor(private _auth: AuthService, private home: HomeComponent) { }

  public logIn(form: NgForm): void {
    if (form.valid === false) {
      return;
    }

    const logInRequest = this._auth.logIn(form.value.login, form.value.password);

    if (logInRequest.code === ERROR_CODE) {
      this.home.showModal(logInRequest.message, logInRequest.type, true);
      return;
    }

    this.home.showModal(logInRequest.message, logInRequest.type);
  }
}
