import { Component, OnInit } from '@angular/core';
import { from, interval } from 'rxjs';
import { take, map } from 'rxjs/operators';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  mapTest = from([1, 2, 3, 4, 5]);

  constructor() {}

  ngOnInit() {
    this.mapTest
      .pipe(take(5))
      .pipe(map((x) => x * 10))
      .subscribe((x) => console.log(x));
  }
}
