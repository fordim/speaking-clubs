import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { EventType, Modal } from "../constants/interface";
import {
  EVENTS,
  MODAL_INFO_19,
  MODAL_INFO_20,
  MODAL_INFO_21,
  MODAL_INFO_22,
  MODAL_INFO_23,
  MODAL_INFO_24,
  MODAL_INFO_25,
  MODAL_INFO_26,
  MODAL_INFO_27,
  MODAL_INFO_28,
  MODAL_INFO_29,
  MODAL_INFO_30,
  MODAL_INFO_31,
  ModalType,
} from "../constants/consts";

@Injectable({
  providedIn: 'root'
})
export class MainService {

  public errorModal$ = new BehaviorSubject<Modal>({ status: false, type: ModalType.errorEmail });
  public prizeModal$ = new BehaviorSubject<Modal>({
    status: false,
    type: ModalType.generalPrize,
    modalInfo: MODAL_INFO_19
  });
  public events$ = new BehaviorSubject<EventType[]>([]);

  public event19$ = new BehaviorSubject<EventType>({ status: false, number: 19 });
  public event20$ = new BehaviorSubject<EventType>({ status: false, number: 20 });
  public event21$ = new BehaviorSubject<EventType>({ status: false, number: 21 });
  public event22$ = new BehaviorSubject<EventType>({ status: false, number: 22 });
  public event23$ = new BehaviorSubject<EventType>({ status: false, number: 23 });
  public event24$ = new BehaviorSubject<EventType>({ status: false, number: 24 });
  public event25$ = new BehaviorSubject<EventType>({ status: false, number: 25 });
  public event26$ = new BehaviorSubject<EventType>({ status: false, number: 26 });
  public event27$ = new BehaviorSubject<EventType>({ status: false, number: 27 });
  public event28$ = new BehaviorSubject<EventType>({ status: false, number: 28 });
  public event29$ = new BehaviorSubject<EventType>({ status: false, number: 29 });
  public event30$ = new BehaviorSubject<EventType>({ status: false, number: 30 });
  public event31$ = new BehaviorSubject<EventType>({ status: false, number: 31 });

  constructor() {
    this.initiateMainService();
  }

  public openErrorModal(type: ModalType): void {
    this.errorModal$.next({ status: true, type: type });
  }

  public closeErrorModal(): void {
    this.errorModal$.next({ status: false, type: ModalType.default });
  }

  public closePrizeModal(): void {
    this.prizeModal$.next({ status: false, type: ModalType.default });
  }

  public activateCode(codeValue: string): void {
    const code = EVENTS[codeValue];
    if (!code) {
      this.openErrorModal(ModalType.errorCode);
      return;
    }

    let isCodeAlreadyActivated = false;

    const updateEvents = this.events$.value.map( value => {
      if (value.number === code) {
        isCodeAlreadyActivated = value.status;
        return { status: true, number: code }
      }

      return value;
    })

    if (isCodeAlreadyActivated) {
      return;
    }

    this.events$.next(updateEvents);
    this.updateEventStatus(true, code);

    this.openPrizeModal(code);
  }

  private initiateMainService(): void {
    this.events$.next([
      { status: false, number: 19 },
      { status: false, number: 20 },
      { status: false, number: 21 },
      { status: false, number: 22 },
      { status: false, number: 23 },
      { status: false, number: 24 },
      { status: false, number: 25 },
      { status: false, number: 26 },
      { status: false, number: 27 },
      { status: false, number: 28 },
      { status: false, number: 29 },
      { status: false, number: 30 },
      { status: false, number: 31 },
    ]);

    this.events$.value.map( it => this.updateEventStatus(it.status, it.number));
  }

  private updateEventStatus(status: boolean, code: number): void
  {
    switch (code) {
      case 19:
        this.event19$.next({ status: status, number: code });
        break;
      case 20:
        this.event20$.next({ status: status, number: code });
        break;
      case 21:
        this.event21$.next({ status: status, number: code });
        break;
      case 22:
        this.event22$.next({ status: status, number: code });
        break;
      case 23:
        this.event23$.next({ status: status, number: code });
        break;
      case 24:
        this.event24$.next({ status: status, number: code });
        break;
      case 25:
        this.event25$.next({ status: status, number: code });
        break;
      case 26:
        this.event26$.next({ status: status, number: code });
        break;
      case 27:
        this.event27$.next({ status: status, number: code });
        break;
      case 28:
        this.event28$.next({ status: status, number: code });
        break;
      case 29:
        this.event29$.next({ status: status, number: code });
        break;
      case 30:
        this.event30$.next({ status: status, number: code });
        break;
      case 31:
        this.event31$.next({ status: status, number: code });
        break;
    }
  }

  public openPrizeModal(number: number): void {
    const type = ModalType.generalPrize;

    switch (number) {
      case 19:
        this.prizeModal$.next({ status: true, type: type, modalInfo: MODAL_INFO_19 });
        break;
      case 20:
        this.prizeModal$.next({ status: true, type: type, modalInfo: MODAL_INFO_20 });
        break;
      case 21:
        this.prizeModal$.next({ status: true, type: type, modalInfo: MODAL_INFO_21 });
        break;
      case 22:
        this.prizeModal$.next({ status: true, type: type, modalInfo: MODAL_INFO_22 });
        break;
      case 23:
        this.prizeModal$.next({ status: true, type: type, modalInfo: MODAL_INFO_23 });
        break;
      case 24:
        this.prizeModal$.next({ status: true, type: type, modalInfo: MODAL_INFO_24 });
        break;
      case 25:
        this.prizeModal$.next({ status: true, type: type, modalInfo: MODAL_INFO_25 });
        break;
      case 26:
        this.prizeModal$.next({ status: true, type: type, modalInfo: MODAL_INFO_26 });
        break;
      case 27:
        this.prizeModal$.next({ status: true, type: type, modalInfo: MODAL_INFO_27 });
        break;
      case 28:
        this.prizeModal$.next({ status: true, type: type, modalInfo: MODAL_INFO_28 });
        break;
      case 29:
        this.prizeModal$.next({ status: true, type: type, modalInfo: MODAL_INFO_29 });
        break;
      case 30:
        this.prizeModal$.next({ status: true, type: type, modalInfo: MODAL_INFO_30 });
        break;
      case 31:
        this.prizeModal$.next({ status: true, type: type, modalInfo: MODAL_INFO_31 });
        break;
    }
  }
}
