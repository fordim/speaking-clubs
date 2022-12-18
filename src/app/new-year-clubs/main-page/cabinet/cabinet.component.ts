import { Component } from '@angular/core';
import { MainService } from "../../services/main.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: 'new-year-clubs-cabinet',
  templateUrl: './cabinet.component.html',
  styleUrls: ['./cabinet.component.scss']
})
export class CabinetComponent {

  skysmartIcon = '/assets/new-year-clubs/images/skysmart.png';
  houseIcon = '/assets/new-year-clubs/images/house.png';

  errorModal$ = this._main.errorModal$;
  event20$ = this._main.event20$
  event21$ = this._main.event21$
  event22$ = this._main.event22$
  event23$ = this._main.event23$
  event24$ = this._main.event24$
  event25$ = this._main.event25$
  event26$ = this._main.event26$
  event27$ = this._main.event27$
  event28$ = this._main.event28$
  event29$ = this._main.event29$
  event30$ = this._main.event30$
  event31$ = this._main.event31$

  constructor(private _main: MainService) {
  }

  public goToLink() {
    window.open('https://group.skyeng.ru/booking?platform=math', "_blank");
  }

  public activateCode(form: NgForm): void {
    if (form.valid === false) {
      return;
    }

    this._main.activateCode(form.value.code);
  }

  public openEventModal(status: boolean, number: number): void {
    if (!status) {
      return;
    }

    this._main.openPrizeModal(number);
  }
}
