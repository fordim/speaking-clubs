import { Component, OnInit } from '@angular/core';
import { MainService } from "../../services/main.service";
import { DEFAULT_CONFETTI_SETTINGS, playConfetti } from "../../../shared/play-confetti";
import { delay } from "rxjs";

@Component({
  selector: 'new-year-clubs-prize-modal',
  templateUrl: './prize-modal.component.html',
  styleUrls: ['./prize-modal.component.scss']
})
export class PrizeModalComponent implements OnInit {

  closeIcon = '/assets/new-year-clubs/images/popup-close.svg';
  elfIcon = '/assets/new-year-clubs/images/elf.png';
  img23Icon = '/assets/new-year-clubs/images/img23.png';
  img24Icon = '/assets/new-year-clubs/images/img24.png';
  img25Icon = '/assets/new-year-clubs/images/img25.png';
  img27Icon = '/assets/new-year-clubs/images/img27.png';
  img28Icon = '/assets/new-year-clubs/images/img28.png';
  img30Icon = '/assets/new-year-clubs/images/img30.png';

  prizeModal$ = this._main.prizeModal$;

  constructor(private _main: MainService) { }

  ngOnInit(): void {
    playConfetti({
      ...DEFAULT_CONFETTI_SETTINGS,
      origin: {
        y: 0.5,
        x: 0.5,
      },
    })
      .pipe(delay(1000))
      .subscribe(() => {});
  }

  closeModal(): void {
    this._main.closePrizeModal();
  }

  openLink(): void {
    window.open(this.prizeModal$.value.modalInfo?.link, "_blank");
  }
}
