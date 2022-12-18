import { ModalType, PhotoType } from "./consts";

export interface Modal {
  status: boolean,
  type: ModalType,
  modalInfo?: ModalInfo
}

export interface EventType {
  status: boolean,
  number: number
}

export interface ModalInfo {
  photoType: PhotoType,
  title: string,
  text: string,
  link: string
}
