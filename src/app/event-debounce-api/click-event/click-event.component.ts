import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-click-event',
  templateUrl: './click-event.component.html',
  styleUrls: ['./click-event.component.css'],
})
export class ClickEventComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    const clicks = fromEvent(document, 'click');
    clicks.subscribe((x) => console.log(x));
  }
}
