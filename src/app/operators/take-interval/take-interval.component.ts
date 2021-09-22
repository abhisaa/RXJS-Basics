import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-take-interval',
  templateUrl: './take-interval.component.html',
  styleUrls: ['./take-interval.component.css'],
})
export class TakeIntervalComponent implements OnInit {
  observable$;
  takeValues$;

  constructor() {}

  ngOnInit() {
    this.observable$ = interval(1000);
    this.takeValues$ = this.observable$.pipe(take(5));
    this.takeValues$.subscribe((x) => console.log(x));
  }

  ngOnDestroy() {
    this.takeValues$.unsubscribe();
  }
}
