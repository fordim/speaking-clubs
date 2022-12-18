import { Component } from '@angular/core';
import { NgForm } from "@angular/forms";
import { MainService } from "../../services/main.service";
import { ModalType } from "../../constants/consts";
import { UserFoLocalStorage } from "../../../main/constants/interface";
import { UserService } from "../../../shared/services/user.service";
import { UserApiService } from "../../../shared/services/user-api.service";
import { RoleType } from "../../../shared/constants/consts";

@Component({
  selector: 'new-year-clubs-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {

  clausHappyIcon = '/assets/new-year-clubs/images/claus-happy.png';
  skysmartIcon = '/assets/new-year-clubs/images/skysmart.png';
  winterIcon = '/assets/new-year-clubs/images/winter.png';
  bigCloudIcon = '/assets/new-year-clubs/images/big-cloud.png';
  smallCloudIcon = '/assets/new-year-clubs/images/small-cloud.png';

  errorModal$ = this._main.errorModal$;

  constructor(private _main: MainService, private _userApi: UserApiService, private _user: UserService) { }

  public logIn(form: NgForm): void {
    if (form.valid === false) {
      return;
    }

    const login = form.value.login;
    if (login.indexOf('@') === -1) {
      this._main.openErrorModal(ModalType.errorEmail);
      return;
    }

    const user$ = this._userApi.logInWithoutPassword(login);

    user$.subscribe( user => {
      if (user !== null) {
        if (user.role === RoleType.teacher) {
          this._main.openErrorModal(ModalType.errorEmail);
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

        this._user.logInSuccess();
        this._user.activateUser();
        this._main.initiateMainService();
      }
    });
  }

  public goToLink() {
    window.open('https://group.skyeng.ru/booking?platform=math', "_blank");
  }
}
