import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'child-two',
  templateUrl: './child-two.component.html',
  styleUrls: ['./child-two.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildTwoComponent {
  @Input()
  someNumber$?: Observable<number>;
}
