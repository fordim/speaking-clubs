import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { Al, Letter, Level } from "../constants/interface";
import {
  AlType,
  GOOD_JOB_TEXT,
  HI_TEXT,
  LETTERS,
  LetterType,
  LevelName,
  PANIC_TEXT,
  SAD_TEXT,
  THINKING_TEXT_THREE_HEARTS,
  THINKING_TEXT_TWO_HEARTS,
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

  public category$ = new BehaviorSubject<CategoriesType>(CategoriesType.animals);
  public level$ = new BehaviorSubject<Level>({ level: 1, name: LevelName.easy });
  public al$ = new BehaviorSubject<Al>({ heart: 7, type: AlType.hi, text: HI_TEXT });
  public letters$ = new BehaviorSubject<Letter[]>([]);
  public word$ = new BehaviorSubject<Letter[]>([]);
  public words$ = new BehaviorSubject<string[]>([]);

  public hearts$ = new BehaviorSubject<number[]>([]);
  public endGame$ = new BehaviorSubject<boolean>(false);

  constructor() {
    this.initiateGameService();
  }

  public newGame(): void {
    this.updateWordLS(this.getNewWord());
    this.updateLettersLS(this.getLettersNewWord());
    this.updateAl({ heart: 7, type: AlType.hi, text: HI_TEXT });
    this.hearts$.next(Array(this.al$.value.heart));
    this.endGame$.next(false);
  }

  public newCategory(categoryName: string): void {
    this.generateNewWords(categoryName);
    this.newGame();
  }

  public activateChooseCategory(reloadPage: boolean = false): void {
    if (!reloadPage) {
      this.chooseCategoryPage$.next(true);
    }

    if (reloadPage && this.checkLoseCondition() || this.checkWinCondition()) {
      this.chooseCategoryPage$.next(true);
      return;
    }
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
        this.updateLevelLS({ level: 1, name: LevelName.easy })
        break;
      case 2:
        this.updateLevelLS({ level: 2, name: LevelName.medium })
        break;
      case 3:
        this.updateLevelLS({ level: 3, name: LevelName.difficult })
        break;
    }

    this.setNewWordsAndUpdateCategory(this.category$.value);
    this.newGame();
  }

  public chooseLetter(letter: string, type: string): void {
    if (
      this.al$.value.heart === 0 ||
      this.endGame$.value ||
      this.word$.value.length === 0 ||
      type !== LetterType.default
    ) {
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

    this.updateWordLS(changeWord);
    this.updateLettersLS(changeLetters)

    if (!isRightLetter) {
      this.loseOneHeart();
    } else {
      this.updateAl({ heart: this.al$.value.heart, type: AlType.nice, text: GOOD_JOB_TEXT });
    }

    if (this.checkLoseCondition()) {
      const endWord = this.word$.value.map( letter => {
        if (letter.type === LetterType.default) {
          return { letter: letter.letter, type: LetterType.wrong}
        }

        return letter;
      })

      this.updateWordLS(endWord);
    }

    if (this.checkWinCondition()) {
      this.activateEndGameModal();
      this.endGame$.next(true)
    }
  }

  private checkLoseCondition(): boolean {
    return this.al$.value.heart === 0;
  }

  private checkWinCondition(): boolean {
    const wrongLetters = this.word$.value.filter( letter => letter.type !== LetterType.right);

    return wrongLetters.length === 0;
  }

  private loseOneHeart(): void {
    const hearts = this.al$.value.heart - 1;
    this.hearts$.next(Array(hearts));

    switch (hearts) {
      case 6:
      case 5:
      case 4:
        this.updateAl({ heart: hearts, type: AlType.sad, text: SAD_TEXT });
        break;
      case 3:
        this.updateAl({ heart: hearts, type: AlType.thinking, text: THINKING_TEXT_THREE_HEARTS });
        break;
      case 2:
        this.updateAl({ heart: hearts, type: AlType.thinking, text: THINKING_TEXT_TWO_HEARTS });
        break;
      case 1:
        this.updateAl({ heart: hearts, type: AlType.panic, text: PANIC_TEXT });
        break;
      case 0:
        this.updateAl({ heart: hearts, type: AlType.ufo, text: UFO_TEXT });
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
        this.setNewWordsAndUpdateCategory(CategoriesType.animals);
        break;
      }
      case CategoriesType.nature: {
        this.setNewWordsAndUpdateCategory(CategoriesType.nature);
        break;
      }
      case CategoriesType.food: {
        this.setNewWordsAndUpdateCategory(CategoriesType.food);
        break;
      }
      case CategoriesType.cityPlaces: {
        this.setNewWordsAndUpdateCategory(CategoriesType.cityPlaces);
        break;
      }
      case CategoriesType.hobby: {
        this.setNewWordsAndUpdateCategory(CategoriesType.hobby);
        break;
      }
      case CategoriesType.school: {
        this.setNewWordsAndUpdateCategory(CategoriesType.school);
        break;
      }
      case CategoriesType.clothes: {
        this.setNewWordsAndUpdateCategory(CategoriesType.clothes);
        break;
      }
      case CategoriesType.faceAndBody: {
        this.setNewWordsAndUpdateCategory(CategoriesType.faceAndBody);
        break;
      }
      case CategoriesType.sports: {
        this.setNewWordsAndUpdateCategory(CategoriesType.sports);
        break;
      }
      case CategoriesType.fruits: {
        this.setNewWordsAndUpdateCategory(CategoriesType.fruits);
        break;
      }
      case CategoriesType.vegetables: {
        this.setNewWordsAndUpdateCategory(CategoriesType.vegetables);
        break;
      }
      case CategoriesType.random: {
        this.setNewWordsAndUpdateCategory(CategoriesType.random);
        break;
      }
    }
  }

  private setNewWordsAndUpdateCategory(type: CategoriesType): void {
    const level = this.level$.value;
    let words: string[] = [];

    CATEGORIES[type].filter(data => {
      if (data.level === level.level) {
        words = data.words.split(',');
      }
    });

    this.updateWordsLS(words.slice(0).sort(() => Math.random() - 0.5));
    this.updateCategory(type);
  }

  private getNewWord(): Letter[] {
    const word = this.words$.value.pop();
    const arrayWord = word ? word.split('') : [];

    return arrayWord.map( letter => {
        return { letter: letter, type: letter === ' ' ? LetterType.right : LetterType.default } as Letter;
      }
    )
  }

  private updateLevelLS(level: Level): void {
    this.level$.next(level);
    window.localStorage.setItem('guessWordLevel', JSON.stringify(level));
  }

  private updateCategory(category: CategoriesType): void {
    this.category$.next(category);
    window.localStorage.setItem('guessWordCategory', JSON.stringify(category));
  }

  private updateAl(al: Al): void {
    this.al$.next(al);
    window.localStorage.setItem('guessWordAl', JSON.stringify(al));
  }

  private updateLettersLS(letters: Letter[]): void {
    this.letters$.next(letters);
    window.localStorage.setItem('guessWordLetters', JSON.stringify(letters));
  }

  private updateWordLS(word: Letter[]): void {
    this.word$.next(word);
    window.localStorage.setItem('guessWordWord', JSON.stringify(word));
  }

  private updateWordsLS(words: string[]): void {
    this.words$.next(words);
    window.localStorage.setItem('guessWordWords', JSON.stringify(words));
  }

  private initiateGameService(): void {
    const levelStore = window.localStorage.getItem('guessWordLevel') ?? null;
    levelStore === null
      ? this.level$.next({ level: 1, name: LevelName.easy })
      : this.level$.next(JSON.parse(levelStore) as Level);

    const categoryStore = window.localStorage.getItem('guessWordCategory') ?? null;
    categoryStore === null
      ? this.category$.next(CategoriesType.animals)
      : this.category$.next(JSON.parse(categoryStore) as CategoriesType);

    const AlStore = window.localStorage.getItem('guessWordAl') ?? null;
    AlStore === null
      ? this.al$.next({ heart: 7, type: AlType.hi, text: HI_TEXT })
      : this.al$.next(JSON.parse(AlStore) as Al);

    const letterStore = window.localStorage.getItem('guessWordLetters') ?? null;
    letterStore === null
      ? this.letters$.next([])
      : this.letters$.next(JSON.parse(letterStore) as Letter[])

    const wordStore = window.localStorage.getItem('guessWordWord') ?? null;
    wordStore === null
      ? this.word$.next([])
      : this.word$.next(JSON.parse(wordStore) as Letter[])

    const wordsStore = window.localStorage.getItem('guessWordWords') ?? null;
    wordsStore === null
      ? this.words$.next([])
      : this.words$.next(JSON.parse(wordsStore) as string[])

    if (this.checkWinCondition()) {
      this.endGame$.next(true)
    }

    this.hearts$.next(Array(this.al$.value.heart));
    this.endGame$.next(false);
  }
}
