import { EventType, ModalInfo } from "./interface";

export const CodesType = {
  twenty: 'A825f',
  twentyOne: 'd901S',
  twentyTwo: 'N754A',
  twentyThree: 'W843E',
  twentyFour: 'L710Y',
  twentyFive: 'Y593V',
  twentySix: 'V100D',
  twentySeven: 'S934B',
  twentyEight: 'F5802',
  twentyNine: 'b097B',
  thirty: 'W3357',
  thirtyOne: 'Y4139',
};

export const EVENTS = {
  [CodesType.twenty]: 20,
  [CodesType.twentyOne]: 21,
  [CodesType.twentyTwo]: 22,
  [CodesType.twentyThree]: 23,
  [CodesType.twentyFour]: 24,
  [CodesType.twentyFive]: 25,
  [CodesType.twentySix]: 26,
  [CodesType.twentySeven]: 27,
  [CodesType.twentyEight]: 28,
  [CodesType.twentyNine]: 29,
  [CodesType.thirty]: 30,
  [CodesType.thirtyOne]: 31,
}

export enum ModalType {
  errorCode = 'errorCode',
  errorEmail = 'errorEmail',
  generalPrize = 'generalPrize',
  default = 'default',
}

export enum PhotoType {
  elf = 'elf',
  img23 = 'img23',
  img24 = 'img24',
  img25 = 'img25',
  img27 = 'img27',
  img28 = 'img28',
  img30 = 'img30',
}

export const EVENTS_START: EventType[] = [
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
];

export const WRONG_EMAIL_TEXT_PART1 = "Хм...такой почты я не нахожу.";
export const WRONG_EMAIL_TEXT_PART2 = "Ты уверен, что правильно ввёл?";
export const WRONG_CODE_TEXT_PART1 = "Хм...такой код я не нахожу.";
export const WRONG_CODE_TEXT_PART2 = "Ты уверен, что правильно ввёл?";

export const MODAL_INFO_20: ModalInfo = {
  photoType: PhotoType.elf,
  title: "“Все материалы курсов Speak in-pairs”",
  text: "Забирай подарок по",
  link: "https://coda.io/@artem-naumenko/knowledge-base-sc-skysmart"
};

export const MODAL_INFO_21: ModalInfo = {
  photoType: PhotoType.elf,
  title: "“+ 1 неделя подписки Plus”",
  text: "Забирай подарок по",
  link: ""
};

export const MODAL_INFO_22: ModalInfo = {
  photoType: PhotoType.elf,
  title: "“Набор виртуальных фонов для zoom”",
  text: "Забирай подарок по",
  link: ""
};

export const MODAL_INFO_23: ModalInfo = {
  photoType: PhotoType.img23,
  title: "“Подборка новогодних фильмов/мультфильнов на английском”",
  text: "Забирай подарок от Айгюль по",
  link: "https://drive.google.com/file/d/1xL8Mq05X6AzaxDuixvQ0p-l-w0IdOZWV/view?usp=sharing"
};

export const MODAL_INFO_24: ModalInfo = {
  photoType: PhotoType.img24,
  title: "“Рецепт новогоднего угощения”",
  text: "Забирай подарок от Юлии по",
  link: "https://drive.google.com/file/d/1lUmpPdUMgh9vWitRlY7inqF4fyvHeZpM/view?usp=sharing"
};

export const MODAL_INFO_25: ModalInfo = {
  photoType: PhotoType.img25,
  title: "“Набор стикеров в Telegram”",
  text: "Забирай подарок от Нарека по",
  link: "https://t.me/addstickers/SCLegend"
};

export const MODAL_INFO_26: ModalInfo = {
  photoType: PhotoType.elf,
  title: "“Дарим 2 урока в любом бонусном продукте”",
  text: "Забирай подарок по",
  link: ""
};

export const MODAL_INFO_27: ModalInfo = {
  photoType: PhotoType.img27,
  title: "“Чек-лист развлечений на новогодние каникулы”",
  text: "Забирай подарок от Бека по",
  link: "https://drive.google.com/file/d/1HzTY93_6byaJq1QfxvLKF0wmGiO-VVz-/view?usp=sharing"
};

export const MODAL_INFO_28: ModalInfo = {
  photoType: PhotoType.img28,
  title: "“Мастер-класс по упаковке подарков”",
  text: "Забирай подарок от Анастасии по",
  link: "https://www.youtube.com/watch?v=rBuv8FQOK9c"
};

export const MODAL_INFO_29: ModalInfo = {
  photoType: PhotoType.elf,
  title: "“Календарь Srysmart на 2023 год”",
  text: "Забирай подарок по",
  link: ""
};

export const MODAL_INFO_30: ModalInfo = {
  photoType: PhotoType.img30,
  title: "“Список книг для прочтения в оригинале”",
  text: "Забирай подарок от Анастасии по",
  link: "https://drive.google.com/file/d/1_cLnsfSpmAUMtMMhRzUMEXPsS-kk8Q-Q/view?usp=sharing"
};

export const MODAL_INFO_31: ModalInfo = {
  photoType: PhotoType.elf,
  title: "“Новогоднее поздравление от ведущих клубов”",
  text: "Забирай подарок по",
  link: ""
};
