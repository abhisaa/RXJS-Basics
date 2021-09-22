import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { fromEvent, Observable, Subject } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  map,
  switchMap,
  tap,
} from 'rxjs/operators';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css'],
})
export class ApiComponent implements OnInit {
  searchString: string;
  results$ = new Observable();
  searchSubject = new Subject<string>();

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.results$ = this.searchSubject.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      tap((x) => console.log('inside do: ', x)),
      switchMap((x) => this.queryApi(this.searchString))
    );
    // .pipe(distinctUntilChanged())
    // .pipe(tap((x) => console.log('inside do: ', x)))
    // .pipe(switchMap((x) => this.queryApi(this.searchString)));
  }

  inputChanged(data) {
    this.searchSubject.next(data);
  }

  queryApi(searchString) {
    console.log('Query API is : ', searchString);
    return this.http
      .get(`https://www.reddit.com/r/aww/search.json?q=${searchString}`)
      .pipe(map((x) => x['data']['children']));
  }
}
