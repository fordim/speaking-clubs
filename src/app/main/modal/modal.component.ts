import { Component, Input } from '@angular/core';
import { HomeComponent } from "../home/home.component";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() type: string | null = '';
  @Input() contentText: string | null = '';
  @Input() buttonText: string | null = '';

  alThinking = '/assets/main/images/al-thinking.png';
  alNice = '/assets/main/images/al-nice.png';

  constructor(private homeComponent: HomeComponent) { }

  submit(): void {
    this.homeComponent.closeModal();
  }
}
