import { Component } from '@angular/core';
import { UserService } from "../../shared/services/user.service";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {

  activeUser$ = this._user.activeUser$;

  alUser = '/assets/main/images/al-user.png';
  triangle = '/assets/main/images/triangle.png';

  constructor(private _user: UserService) {}

  public logout() {
    this._user.logoutUser();
  }
}
