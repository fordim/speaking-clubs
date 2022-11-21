import { Component } from '@angular/core';
import { NgForm } from "@angular/forms";
import {
  ERROR,
  MESSAGE_GOOD_JOB,
  MESSAGE_SOMETHING_IS_WRONG,
  SUCCESS,
} from "../constants/consts";
import { HomeComponent } from "../home/home.component";
import { UserApiService } from "../../shared/services/user-api.service";
import { UserFoLocalStorage, UserLogInRequest } from "../constants/interface";
import { UserService } from "../../shared/services/user.service";
import {HttpStatusCode} from "@angular/common/http";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {

  alLayDown = '/assets/main/images/al-lay-down.png';

  modal$ = this.home.modal$;

  constructor(private home: HomeComponent, private _userApi: UserApiService, private _user: UserService) { }

  public logIn(form: NgForm): void {
    if (form.valid === false) {
      return;
    }

    const user$ = this._userApi.logIn({login: form.value.login, password: form.value.password} as UserLogInRequest);

    user$.subscribe( user => {
        if (user === null) {
          this.home.showModal({
            type: ERROR,
            code: HttpStatusCode.InternalServerError,
            message: MESSAGE_SOMETHING_IS_WRONG,
          });
          return;
        }

        this._user.setActiveUserToLocalStorage(
          {
            id: user.id,
            login: user.login,
            name: user.name,
            role: user.role
          } as UserFoLocalStorage
        );

        this.home.showModal({
          type: SUCCESS,
          code: HttpStatusCode.Ok,
          message: MESSAGE_GOOD_JOB,
        });
    });
  }
}
