import { Injectable } from '@angular/core';
import {Modal, User, UserFoLocalStorage} from "../constants/interface";
import {
  ERROR,
  ERROR_CODE, MESSAGE_GOOD_JOB,
  MESSAGE_SOMETHING_IS_WRONG,
  SUCCESS,
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
      return { type: ERROR, code: ERROR_CODE, message: MESSAGE_SOMETHING_IS_WRONG };
    }

    if (!AuthService.validatePassword(password, user)) {
      return { type: ERROR, code: ERROR_CODE, message: MESSAGE_SOMETHING_IS_WRONG };
    }

    this._user.setActiveUserToLocalStorage(
      {
        id: user.id,
        login: user.login,
        name: user.name,
        role: user.role
      } as UserFoLocalStorage
    );
    return { type: SUCCESS, code: SUCCESS_CODE, message: MESSAGE_GOOD_JOB };
  }

  private static validatePassword(password: string, user: any): boolean {
    return user.password == password ?? false;
  }

  public logout(): void {
    this._user.logoutUser();
    this._user.removeActiveUserFromLocalStorage();
  }
}
