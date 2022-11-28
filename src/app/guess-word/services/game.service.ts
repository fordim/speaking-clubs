import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Al, Letter, Level} from "../constants/interface";
import {
  AlType,
  HI_TEXT,
  LETTERS,
  LetterType,
  LevelName,
  PANIC_TEXT,
  SAD_TEXT,
  THINKING_TEXT,
  UFO_TEXT
} from "../constants/consts";
import {
  ANIMALS,
  CategoriesType,
  CITY_PLACES,
  CLOTHES,
  FACE_AND_BODY,
  FOOD,
  FRUITS,
  HOBBY,
  NATURE,
  RANDOM,
  SCHOOL,
  SPORTS,
  VEGETABLES
} from "../constants/categories-const";

const CATEGORIES = {
  [CategoriesType.animals]: ANIMALS,
  [CategoriesType.nature]: NATURE,
  [CategoriesType.food]: FOOD,
  [CategoriesType.cityPlaces]: CITY_PLACES,
  [CategoriesType.hobby]: HOBBY,
  [CategoriesType.school]: SCHOOL,
  [CategoriesType.clothes]: CLOTHES,
  [CategoriesType.faceAndBody]: FACE_AND_BODY,
  [CategoriesType.sports]: SPORTS,
  [CategoriesType.fruits]: FRUITS,
  [CategoriesType.vegetables]: VEGETABLES,
  [CategoriesType.random]: RANDOM,
};

@Injectable({
  providedIn: 'root'
})
export class GameService {

  public chooseCategoryPage$ = new BehaviorSubject<boolean>(false);
  public levelModal$ = new BehaviorSubject<boolean>(false);
  public endGameModal$ = new BehaviorSubject<boolean>(false);

  public letters$ = new BehaviorSubject<Letter[]>([]);
  public word$ = new BehaviorSubject<Letter[]>([]);
  public words$ = new BehaviorSubject<string[]>([]);
  public category$ = new BehaviorSubject<CategoriesType>(CategoriesType.animals);
  public level$ = new BehaviorSubject<Level>({ level: 1, name: LevelName.easy });
  public endGame$ = new BehaviorSubject<boolean>(false);

  public hearts$ = new BehaviorSubject<number[]>([]);
  public al$ = new BehaviorSubject<Al>({ heart: 7, type: AlType.hi, text: HI_TEXT });

  constructor() {
    this.newGame();
  }

  public newGame(): void {
    this.word$.next(this.getNewWord());
    this.letters$.next(this.getLettersNewWord());
    this.al$.next({ heart: 7, type: AlType.hi, text: HI_TEXT });
    this.hearts$.next(Array(this.al$.value.heart));
    this.endGame$.next(false);
  }

  public newCategory(categoryName: string): void {
    this.generateNewWords(categoryName);
    this.newGame();
  }

  public activateChooseCategory(): void {
    this.chooseCategoryPage$.next(true);
  }

  public deactivateChooseCategory(): void {
    this.chooseCategoryPage$.next(false);
  }

  public activateLevelModal(): void {
    this.levelModal$.next(true);
  }

  public deactivateLevelModal(): void {
    this.levelModal$.next(false);
  }

  public activateEndGameModal(): void {
    this.endGameModal$.next(true);
  }

  public deactivateEndGameModal(): void {
    this.endGameModal$.next(false);
  }

  public changeLevel(newLevel: number): void {
    const actualLevel = this.level$.value;
    if (actualLevel.level === newLevel) {
      return;
    }

    switch (newLevel) {
      case 1:
        this.level$.next({ level: 1, name: LevelName.easy })
        break;
      case 2:
        this.level$.next({ level: 2, name: LevelName.medium })
        break;
      case 3:
        this.level$.next({ level: 3, name: LevelName.difficult })
        break;
    }

    this.setNewWords(this.category$.value);
    this.newGame();
    console.log(this.words$.value);
  }

  public chooseLetter(letter: string): void {
    if (this.al$.value.heart === 0 || this.endGame$.value || this.word$.value.length === 0) {
      return;
    }

    let isRightLetter = false;
    const changeWord = this.word$.value.map( value => {
      if (value.letter === letter) {
        isRightLetter = true;
        return { letter: letter, type: LetterType.right }
      }

      return value;
    });

    const changeLetters = this.letters$.value.map( value => {
      if (value.letter === letter) {
        return { letter: letter, type: isRightLetter ? LetterType.right : LetterType.wrong}
      }

      return value;
    })

    this.word$.next(changeWord);
    this.letters$.next(changeLetters);

    if (!isRightLetter) {
      this.loseOneHeart();
    }

    this.checkLoseCondition();
    this.checkWinCondition();
  }

  private checkLoseCondition(): void {
    if (this.al$.value.heart !== 0) {
      console.log('here');
      return;
    }

    const endWord = this.word$.value.map( letter => {
      if (letter.type === LetterType.default) {
        return { letter: letter.letter, type: LetterType.wrong}
      }

      return letter;
    })

    console.log(endWord);

    this.word$.next(endWord);
  }

  private checkWinCondition(): void {
    const wrongLetters = this.word$.value.filter( letter => letter.type !== LetterType.right);

    if (wrongLetters.length === 0) {
      this.activateEndGameModal();
      this.endGame$.next(true);
    }
  }

  private loseOneHeart(): void {
    const hearts = this.al$.value.heart - 1;
    this.hearts$.next(Array(hearts));

    switch (hearts) {
      case 6:
      case 5:
      case 4:
        this.al$.next({ heart: hearts, type: AlType.sad, text: SAD_TEXT });
        break;
      case 3:
      case 2:
        this.al$.next({ heart: hearts, type: AlType.thinking, text: THINKING_TEXT });
        break;
      case 1:
        this.al$.next({ heart: hearts, type: AlType.panic, text: PANIC_TEXT });
        break;
      case 0:
        this.al$.next({ heart: hearts, type: AlType.ufo, text: UFO_TEXT });
        break;
    }
  }

  private getLettersNewWord(): Letter[] {
    return LETTERS.slice(0).map( letter => {
        return { letter: letter, type: LetterType.default } as Letter;
      }
    )
  }

  private generateNewWords(categoryName: string): void {
    switch (categoryName) {
      case CategoriesType.animals: {
        this.setNewWords(CategoriesType.animals)
        this.category$.next(CategoriesType.animals)
        break;
      }
      case CategoriesType.nature: {
        this.setNewWords(CategoriesType.nature);
        this.category$.next(CategoriesType.nature)
        break;
      }
      case CategoriesType.food: {
        this.setNewWords(CategoriesType.food);
        this.category$.next(CategoriesType.food)
        break;
      }
      case CategoriesType.cityPlaces: {
        this.setNewWords(CategoriesType.cityPlaces);
        this.category$.next(CategoriesType.cityPlaces)
        break;
      }
      case CategoriesType.hobby: {
        this.setNewWords(CategoriesType.hobby);
        this.category$.next(CategoriesType.hobby)
        break;
      }
      case CategoriesType.school: {
        this.setNewWords(CategoriesType.school);
        this.category$.next(CategoriesType.school)
        break;
      }
      case CategoriesType.clothes: {
        this.setNewWords(CategoriesType.clothes);
        this.category$.next(CategoriesType.clothes)
        break;
      }
      case CategoriesType.sports: {
        this.setNewWords(CategoriesType.sports);
        this.category$.next(CategoriesType.sports)
        break;
      }
      case CategoriesType.fruits: {
        this.setNewWords(CategoriesType.fruits);
        this.category$.next(CategoriesType.fruits)
        break;
      }
      case CategoriesType.vegetables: {
        this.setNewWords(CategoriesType.vegetables);
        this.category$.next(CategoriesType.vegetables)
        break;
      }
      case CategoriesType.random: {
        this.setNewWords(CategoriesType.random);
        this.category$.next(CategoriesType.random)
        break;
      }
    }
  }

  private setNewWords(type: CategoriesType): void {
    const level = this.level$.value;
    let words: string[] = [];

    CATEGORIES[type].filter(data => {
      if (data.level === level.level) {
        words = data.words.split(',');
      }
    });

    this.words$.next(words.slice(0).sort(() => Math.random() - 0.5));
  }

  private getNewWord(): Letter[] {
    const word = this.words$.value.pop();
    const arrayWord = word ? word.split('') : [];

    return arrayWord.map( letter => {
        return { letter: letter, type: letter === ' ' ? LetterType.right : LetterType.default } as Letter;
      }
    )
  }
}
