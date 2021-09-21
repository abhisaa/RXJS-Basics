import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CreateObservableComponent } from './observable-examples/create-observable/create-observable.component';
import { CreateSubjectComponent } from './observable-examples/create-subject/create-subject.component';
import { CreateBehaviourSubjectComponent } from './observable-examples/create-behaviour-subject/create-behaviour-subject.component';
import { CreateReplaySubjectComponent } from './observable-examples/create-replay-subject/create-replay-subject.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    CreateObservableComponent,
    CreateSubjectComponent,
    CreateBehaviourSubjectComponent,
    CreateReplaySubjectComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
