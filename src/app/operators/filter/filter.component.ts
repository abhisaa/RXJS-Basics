import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit {
  arrayTest = from([1, 2, 3, 4, 5]);

  constructor() {}

  ngOnInit() {
    this.arrayTest
      .pipe(map((x) => x * 2))
      .pipe(filter((x) => x % 4 == 0))
      .subscribe((data) => console.log(data));
  }
}
