import { Component, OnInit } from '@angular/core';
import { MainService } from "../../services/main.service";
import {
  ModalType,
  WRONG_CODE_TEXT_PART1,
  WRONG_CODE_TEXT_PART2,
  WRONG_EMAIL_TEXT_PART1,
  WRONG_EMAIL_TEXT_PART2
} from "../../constants/consts";

@Component({
  selector: 'new-year-clubs-error-modal',
  templateUrl: './error-modal.component.html',
  styleUrls: ['./error-modal.component.scss']
})
export class ErrorModalComponent implements OnInit {

  clausErrorIcon = '/assets/new-year-clubs/images/claus-error.png';
  closeIcon = '/assets/new-year-clubs/images/popup-close.svg';

  textPart1 = '';
  textPart2 = '';

  constructor(private _main: MainService) { }

  ngOnInit(): void {
    if (this._main.errorModal$.value.type === ModalType.errorEmail) {
      this.textPart1 = WRONG_EMAIL_TEXT_PART1;
      this.textPart2 = WRONG_EMAIL_TEXT_PART2;
    }

    if (this._main.errorModal$.value.type === ModalType.errorCode) {
      this.textPart1 = WRONG_CODE_TEXT_PART1;
      this.textPart2 = WRONG_CODE_TEXT_PART2;
    }
  }

  closeModal(): void {
    this._main.closeErrorModal();
  }
}
