import { Component, OnInit } from '@angular/core';
import { take, of, interval } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.css'],
})
export class SwitchMapComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    const letters = of('a', 'b');
    const result = letters.pipe(
      switchMap((x) =>
        interval(1000)
          .pipe(take(2))
          .pipe(map((i) => x + i))
      )
    );
    result.subscribe((x) => console.log(x));
  }
}
