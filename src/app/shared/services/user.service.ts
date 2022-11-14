import { Injectable } from '@angular/core';
import { User } from "../../main/constants/interface";
import { BehaviorSubject}  from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[] = [
    {
      name: 'Admin',
      login: 'admin',
      password: 'admin',
    },
    {
      name: 'Teacher',
      login: 'speaking-clubs-teacher@skyeng.ru',
      password: '54321',
    },
  ];

  activeUser$ = new BehaviorSubject<boolean>(false);
  activeUserName$ = new BehaviorSubject<string | null>('');

  constructor() {
    this.activeUser$.next(this.getActiveUser());
    this.activeUserName$.next(this.getActiveUserName());
  }

  public activateUser(): void {
    this.activeUser$.next(true);
  }

  public logoutUser(): void {
    this.activeUser$.next(false);
  }

  public getActiveUser(): boolean {
    let activeUser = window.localStorage.getItem('activeUser') ?? '';
    return activeUser !== '';
  }

  public getActiveUserName(): string {
    let activeUser = window.localStorage.getItem('activeUser') ?? '';
    if (activeUser === '') {
      return '';
    }

    let activeUserObject = JSON.parse(activeUser);
    return activeUserObject.name
  }

  public setActiveUserName(): void {
    let activeUser = window.localStorage.getItem('activeUser') ?? '';
    if (activeUser !== '') {
      let activeUserObject = JSON.parse(activeUser);
      this.activeUserName$.next(activeUserObject.name)
    }
  }

  public setActiveUserToLocalStorage(user: User): void {
    window.localStorage.setItem('activeUser', JSON.stringify(user));
  }

  public removeActiveUserFromLocalStorage(): void {
    window.localStorage.removeItem('activeUser');
  }

  public isActiveUserValid(): boolean {
    let activeUser = window.localStorage.getItem('activeUser') ?? '';
    if (activeUser === '') {
      return false;
    }

    //TODO - блокировать все страницы, а не только игру
    return !!this.users.filter(user => user.login === 'speaking-clubs-teacher@skyeng.ru').shift();
  }
}
