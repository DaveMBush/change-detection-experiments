import { Component, ChangeDetectionStrategy, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildOneComponent {
  @Input()
  someNumber = 0;
}
