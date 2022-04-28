import { Component } from '@angular/core';

@Component({
  selector: 'change-detection-experiments2-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  someNumber = 0;
  click(): void {
    this.someNumber++;
  }
}
