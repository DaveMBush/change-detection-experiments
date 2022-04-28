import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'change-detection-experiments2-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  someNumberSubject = new Subject<number>();
  someNumber$ = this.someNumberSubject.asObservable();
  someNumber = 0;
  onInit() {
    // This initializes the first value
    // but it is too late to render.  For
    // our purposes, we don't care.
    this.someNumberSubject.next(0);
  }
  click(): void {
    this.someNumber++;
    this.someNumberSubject.next(this.someNumber);
  }
}
