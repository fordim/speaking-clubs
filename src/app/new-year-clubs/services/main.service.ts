import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { EventType, Modal } from "../constants/interface";
import {
  EVENTS,
  EVENTS_START,
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
import {NewYearClubsApiService} from "./new-year-clubs-api.service";
import {UserService} from "../../shared/services/user.service";

@Injectable({
  providedIn: 'root'
})
export class MainService {

  public errorModal$ = new BehaviorSubject<Modal>({ status: false, type: ModalType.errorEmail });
  public prizeModal$ = new BehaviorSubject<Modal>({
    status: false,
    type: ModalType.generalPrize,
    modalInfo: MODAL_INFO_20
  });
  public events$ = new BehaviorSubject<EventType[]>([]);

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

  constructor(private _api: NewYearClubsApiService, private _user: UserService) {
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

    const activatedEvents = updateEvents.map(event => event.status ? event.number.toString() : null).filter(it => it);
    const login = this._user.activeUser$.value?.login;
    if (login) {
      this._api.updateEvents({ email: login, events: activatedEvents.join(',')}).subscribe();
    }

    this.events$.next(updateEvents);
    this.updateEventStatus(true, code);
    this.openPrizeModal(code);
  }

  public initiateMainService(): void {
    const login = this._user.activeUser$.value?.login;
    if (login) {
      this._api.getEvents(login).pipe().subscribe(data => {
        if (data !== null) {
          const activeEvents = data?.events.split(',');

          const events = EVENTS_START.map(event => {
            if (activeEvents.includes(event.number.toString())) {
              return { status: true, number: event.number }
            }

            return event;
          })

          this.events$.next(events);
          this.events$.value.map( it => this.updateEventStatus(it.status, it.number));
        }
      });
    }
  }

  private updateEventStatus(status: boolean, code: number): void
  {
    switch (code) {
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
