import { Component, OnInit } from '@angular/core';
import { take, of, interval } from 'rxjs';
import { mergeMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-merge-map',
  templateUrl: './merge-map.component.html',
  styleUrls: ['./merge-map.component.css'],
})
export class MergeMapComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    const letters = of('a', 'b');
    const result = letters.pipe(
      mergeMap((x) =>
        interval(1000)
          .pipe(take(2))
          .pipe(map((i) => x + i))
      )
    );
    result.subscribe((x) => console.log(x));
  }
}
