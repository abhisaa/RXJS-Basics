import { Component, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-create-replay-subject',
  templateUrl: './create-replay-subject.component.html',
  styleUrls: ['./create-replay-subject.component.css'],
})
export class CreateReplaySubjectComponent implements OnInit {
  subject$;

  constructor() {}

  ngOnInit() {
    //this takes all the values starting from the first next till the last

    this.subject$ = new ReplaySubject();
    this.subject$.subscribe((x) => console.log('this is first: ', x));
    this.subject$.next(12);
    this.subject$.next(24);

    //this.subject$.unsubscribe();
    this.subject$.subscribe((x) => console.log('this is second: ', x));
    this.subject$.next(36);
  }
}
