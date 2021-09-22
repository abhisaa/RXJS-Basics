import { Component, OnInit } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-debounce-search',
  templateUrl: './debounce-search.component.html',
  styleUrls: ['./debounce-search.component.css'],
})
export class DebounceSearchComponent implements OnInit {
  inputField: string;
  searchSubject = new Subject<string>();

  constructor() {}

  ngOnInit() {
    this.searchSubject
      .pipe(debounceTime(200))
      .subscribe((x) => console.log('this is the value: ', x));
  }

  inputChange(data) {
    // console.log('this is paylaod: ', data);
    this.searchSubject.next(data);
  }
}
