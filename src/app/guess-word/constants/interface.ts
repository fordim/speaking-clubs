import {AlType, LetterType} from "./consts";

export interface Letter {
  letter: string,
  type: LetterType,
}

export interface Level {
  level: number,
  name: string,
}

export interface Al {
  heart: number,
  type: AlType,
  text: string,
}

export interface Category {
  level: number,
  words: string,
}
