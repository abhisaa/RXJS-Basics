import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CreateObservableComponent } from './observable-examples/create-observable/create-observable.component';
import { CreateSubjectComponent } from './observable-examples/create-subject/create-subject.component';
import { CreateBehaviourSubjectComponent } from './observable-examples/create-behaviour-subject/create-behaviour-subject.component';
import { CreateReplaySubjectComponent } from './observable-examples/create-replay-subject/create-replay-subject.component';
import { TakeIntervalComponent } from './operators/take-interval/take-interval.component';
import { MapComponent } from './operators/map/map.component';
import { FilterComponent } from './operators/filter/filter.component';
import { MergeMapComponent } from './operators/merge-map/merge-map.component';
import { SwitchMapComponent } from './operators/switch-map/switch-map.component';
import { ClickEventComponent } from './event-debounce-api/click-event/click-event.component';
import { DebounceSearchComponent } from './event-debounce-api/debounce-search/debounce-search.component';
import { ApiComponent } from './event-debounce-api/api/api.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, CommonModule],
  declarations: [
    AppComponent,
    HelloComponent,
    CreateObservableComponent,
    CreateSubjectComponent,
    CreateBehaviourSubjectComponent,
    CreateReplaySubjectComponent,
    TakeIntervalComponent,
    MapComponent,
    FilterComponent,
    MergeMapComponent,
    SwitchMapComponent,
    ClickEventComponent,
    DebounceSearchComponent,
    ApiComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
