import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-create-behaviour-subject',
  templateUrl: './create-behaviour-subject.component.html',
  styleUrls: ['./create-behaviour-subject.component.css'],
})
export class CreateBehaviourSubjectComponent implements OnInit {
  subject$;

  constructor() {}

  ngOnInit() {
    this.subject$ = new BehaviorSubject(67);
    this.subject$.subscribe((x) => console.log('this is first: ', x));
    this.subject$.next(12);
    this.subject$.next(24);

    //this.subject$.unsubscribe();
    this.subject$.subscribe((x) => console.log('this is second: ', x));
    this.subject$.next(36);

    /*
      ********the above code will print below********

      this is first:  67
      this is first:  12
      this is first:  24
      this is second:  24
      this is first:  36
      this is second:  36

      
      *******************

      the console log statement which prints "this is second:  24", with the value 24 is because the first value which was provided to the behaviorSubject was 24 just before the second time subscription. As it holds the most recent value for any new subscribers
    */
  }

  ngOnDestroy() {
    this.subject$.unsubscribe();
  }
}
