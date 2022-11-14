import { Component, Input } from '@angular/core';
import { HomeComponent } from "../home/home.component";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() contentText: string | null = '';
  @Input() buttonText: string | null = '';

  constructor(private homeComponent: HomeComponent) { }

  submit(): void {
    this.homeComponent.closeModal();
  }
}
