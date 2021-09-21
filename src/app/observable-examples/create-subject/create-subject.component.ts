import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-create-subject',
  templateUrl: './create-subject.component.html',
  styleUrls: ['./create-subject.component.css'],
})
export class CreateSubjectComponent implements OnInit {
  subject$;

  constructor() {}

  ngOnInit() {
    this.subject$ = new Subject();
    this.subject$.subscribe((x) => console.log('this is first: ', x));
    this.subject$.next(12);
    this.subject$.next(24);

    // while using the Subject, as soon as the task is complete, rather than
    // calling the complete method, call the unsubscribe method
    // in complete method's case, if a developer subscribe to the Subject later
    // nothing will happen and no notificaion will be sent
    // but in case of the unsubscribe method, an error will be generated in the console

    //this.subject$.complete();
    this.subject$.unsubscribe();
    // this.subject$.subscribe((x) => console.log('this is second: ', x));
    // this.subject$.next(36);
  }

  ngOnDestroy() {
    this.subject$.unsubscribe();
  }
}
