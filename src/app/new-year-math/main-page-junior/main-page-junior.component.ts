import { Component } from '@angular/core';

@Component({
  selector: 'new-year-math-main-page-junior',
  templateUrl: './main-page-junior.component.html',
  styleUrls: ['./main-page-junior.component.scss']
})
export class MainPageJuniorNewYearMathComponent {

  wreathAll = '/assets/new-year-math/images/wreath-all.png';
  snowMan = '/assets/new-year-math/images/snow-man.png';
  skysmart = '/assets/new-year-math/images/skysmart.png';
  tree = '/assets/new-year-math/images/tree-junior.png';
  presents = '/assets/new-year-math/images/presents-junior.png';
  condition = '/assets/new-year-math/images/condition.png';
  highlight = '/assets/new-year-math/images/highlight.png';
  snowflake = '/assets/new-year-math/images/snowflake.png';

  constructor() { }

  public goToLink() {
    window.open('https://group.skyeng.ru/booking?platform=math', "_blank");
  }
}
