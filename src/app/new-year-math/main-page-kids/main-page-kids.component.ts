import { Component } from '@angular/core';

@Component({
  selector: 'new-year-math-main-page-kids',
  templateUrl: './main-page-kids.component.html',
  styleUrls: ['./main-page-kids.component.scss']
})
export class MainPageKidsNewYearMathComponent {

  wreathAll = '/assets/new-year-math/images/wreath-all.png';
  snowMan = '/assets/new-year-math/images/snow-man.png';
  skysmart = '/assets/new-year-math/images/skysmart.png';
  tree = '/assets/new-year-math/images/tree-kids.png';
  presents = '/assets/new-year-math/images/presents-kids.png';
  condition = '/assets/new-year-math/images/condition.png';
  highlight = '/assets/new-year-math/images/highlight.png';
  snowflake = '/assets/new-year-math/images/snowflake.png';

  constructor() { }

  public goToLink() {
    window.open('https://group.skyeng.ru/booking?platform=math', "_blank");
  }
}
