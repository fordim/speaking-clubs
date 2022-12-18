import { Component } from '@angular/core';
import { NgForm } from "@angular/forms";
import { MainService } from "../../services/main.service";
import { ModalType } from "../../constants/consts";

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

  constructor(private _main: MainService) { }

  public logIn(form: NgForm): void {
    if (form.valid === false) {
      return;
    }

    this._main.openErrorModal(ModalType.errorEmail);
  }

  public goToLink() {
    window.open('https://group.skyeng.ru/booking?platform=math', "_blank");
  }
}
