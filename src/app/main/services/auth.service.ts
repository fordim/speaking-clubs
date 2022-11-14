import { Injectable } from '@angular/core';
import { Modal, User } from "../constants/interface";
import {
  ERROR_CODE,
  MESSAGE_LOG_IN_SUCCESS,
  MESSAGE_USER_NOT_FOUND,
  MESSAGE_WRONG_PASSWORD,
  SUCCESS_CODE
} from "../constants/consts";
import { UserService } from "../../shared/services/user.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  users: User[] = this._user.users;

  constructor(private _user: UserService) { }

  public logIn(login: string, password: string): Modal {
    const user = this.users.filter(user => user.login === login).shift();

    if (!user) {
      return { code: ERROR_CODE, message: MESSAGE_USER_NOT_FOUND };
    }

    if (!AuthService.validatePassword(password, user)) {
      return { code: ERROR_CODE, message: MESSAGE_WRONG_PASSWORD };
    }

    this._user.setActiveUserToLocalStorage(user);
    return { code: SUCCESS_CODE, message: MESSAGE_LOG_IN_SUCCESS };
  }

  private static validatePassword(password: string, user: any): boolean {
    return user.password == password ?? false;
  }

  public logout(): void {
    this._user.logoutUser();
    this._user.removeActiveUserFromLocalStorage();
  }
}
