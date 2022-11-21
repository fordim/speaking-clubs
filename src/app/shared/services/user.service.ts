import { Injectable } from '@angular/core';
import { User, UserFoLocalStorage } from "../../main/constants/interface";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  activeUser$ = new BehaviorSubject<User | null>(null);
  isLogInSuccess$ = new BehaviorSubject<boolean>(false);

  constructor() {
    this.activeUser$.next(this.getActiveUser());
    this.isLogInSuccess$.next(!!this.getActiveUser());
  }

  public activateUser(): void {
    this.activeUser$.next(this.getActiveUser());
  }

  public logInSuccess(): void {
    this.isLogInSuccess$.next(true);
  }

  public logoutUser(): void {
    this.removeActiveUserFromLocalStorage();
    this.activeUser$.next(null);
    this.isLogInSuccess$.next(false);
  }

  public getActiveUser(): User | null {
    let activeUser = window.localStorage.getItem('activeUser') ?? '';
    if (activeUser === '') {
      return null;
    }

    return JSON.parse(activeUser);
  }

  public setActiveUserToLocalStorage(user: UserFoLocalStorage): void {
    window.localStorage.setItem('activeUser', JSON.stringify(user));
  }

  public removeActiveUserFromLocalStorage(): void {
    window.localStorage.removeItem('activeUser');
  }

  public isActiveUserValidForGame(): boolean {
    const activeUser = this.activeUser$.value;

    if (activeUser === null || activeUser.login !== '1_speaking.club.junior@skyeng.ru' && activeUser.login !== 'admin') {
      return false;
    }

    //TODO - блокировать по ролям
    return true;
  }
}
