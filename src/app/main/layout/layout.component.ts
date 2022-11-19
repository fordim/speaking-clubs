import { Component } from '@angular/core';
import { UserService } from "../../shared/services/user.service";
import { AuthService } from "../services/auth.service";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {

  activeUser$ = this._user.activeUser$;
  activeUserName$ = this._user.activeUserName$;

  alUser = '/assets/main/images/al-user.png';
  triangle = '/assets/main/images/triangle.png';

  constructor(private _user: UserService, private _auth: AuthService) {
  }

  public logout() {
    this._auth.logout();
  }
}
