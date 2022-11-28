import { Component } from '@angular/core';
import { GameService } from "../../services/game.service";
import { CategoriesType } from "../../constants/categories-const";

@Component({
  selector: 'guess-word-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {

  categories = Object.values(CategoriesType);

  constructor(private _game: GameService) {
  }

  public chooseCategory(categoryName: string): void {
    this._game.newCategory(categoryName)
    this._game.deactivateChooseCategory();
  }
}
