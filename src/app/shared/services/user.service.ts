import { Injectable } from '@angular/core';
import { User, UserFoLocalStorage } from "../../main/constants/interface";
import { BehaviorSubject } from "rxjs";
import { RoleType } from "../constants/consts";

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
    return !(activeUser === null || activeUser.role !== RoleType.teacher && activeUser.role !== RoleType.admin);
  }

  public isActiveUserValidForNewYearClubs(): boolean {
    const activeUser = this.activeUser$.value;
    return !(activeUser === null || activeUser.role !== RoleType.user && activeUser.role !== RoleType.admin);
  }
}
