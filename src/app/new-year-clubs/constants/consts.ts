import { ModalInfo } from "./interface";

export const CodesType = {
  nineteen: 'aaaaa',
  twenty: 'bbbbb',
  twentyOne: 'ccccc',
  twentyTwo: 'ddddd',
  twentyThree: 'eeeee',
  twentyFour: 'fffff',
  twentyFive: 'ggggg',
  twentySix: 'hhhhh',
  twentySeven: 'iiiii',
  twentyEight: 'jjjjj',
  twentyNine: 'kkkkk',
  thirty: 'lllll',
  thirtyOne: 'm56iJ',
};

export const EVENTS = {
  [CodesType.nineteen]: 19,
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
  img21 = 'img21',
  img23 = 'img23',
  img24 = 'img24',
  img25 = 'img25',
  img27 = 'img27',
  img28 = 'img28',
  img30 = 'img30',
}

export const WRONG_EMAIL_TEXT_PART1 = "Хм...такой почты я не нахожу.";
export const WRONG_EMAIL_TEXT_PART2 = "Ты уверен, что правильно ввёл?";
export const WRONG_CODE_TEXT_PART1 = "Хм...такой код я не нахожу.";
export const WRONG_CODE_TEXT_PART2 = "Ты уверен, что правильно ввёл?";

export const MODAL_INFO_19: ModalInfo = {
  photoType: PhotoType.elf,
  title: "“+ 1 неделя подписки Plus”",
  text: "Забирай подарок по",
  link: ""
};

export const MODAL_INFO_20: ModalInfo = {
  photoType: PhotoType.elf,
  title: "“Все материалы курсов Speak in-pairs”",
  text: "Забирай подарок по",
  link: ""
};

export const MODAL_INFO_21: ModalInfo = {
  photoType: PhotoType.img21,
  title: "“Список мест для путишествий по миру и в России”",
  text: "Забирай подарок от Алии по",
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
  link: ""
};

export const MODAL_INFO_24: ModalInfo = {
  photoType: PhotoType.img24,
  title: "“Рецепт новогоднего угощения”",
  text: "Забирай подарок от Юлии по",
  link: ""
};

export const MODAL_INFO_25: ModalInfo = {
  photoType: PhotoType.img25,
  title: "“Набор стикеров в Telegram”",
  text: "Забирай подарок от Нарека по",
  link: ""
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
  link: ""
};

export const MODAL_INFO_28: ModalInfo = {
  photoType: PhotoType.img28,
  title: "“Мастер-класс по упаковке подарков”",
  text: "Забирай подарок от Анастасии по",
  link: ""
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
  link: ""
};

export const MODAL_INFO_31: ModalInfo = {
  photoType: PhotoType.elf,
  title: "TO DO",
  text: "TO DO",
  link: ""
};
