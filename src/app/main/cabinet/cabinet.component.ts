import { Component } from '@angular/core';
import { HomeComponent } from "../home/home.component";

@Component({
  selector: 'app-cabinet',
  templateUrl: './cabinet.component.html',
  styleUrls: ['./cabinet.component.scss']
})
export class CabinetComponent {

  alGames = '/assets/main/images/al-games.png';

  modal$ = this.home.modal$;

  constructor(private home: HomeComponent) { }
}
