import { Component, OnInit } from '@angular/core';
import { combineLatest, interval, BehaviorSubject, NEVER, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Walk } from 'src/app/sprint/model/walk.model';
import { liveCount } from 'src/app/utils/utils';
import { CreateSesionState } from './create-session.state';

@Component({
  selector: 'wlk-create-session',
  templateUrl: './create-session.component.html',
  styleUrls: ['./create-session.component.scss']
})
export class CreateSessionComponent {

  timer$ = interval(1000);
  pause$ = new BehaviorSubject<boolean>(true);

  startTime: Date;
  stopTime: Date;

  createSessionState = CreateSesionState;
  state = CreateSesionState.Idle;

  stopWatch$ = combineLatest([this.timer$, this.pause$])
    .pipe(
      switchMap(([time, pause]) => {
        return pause ? NEVER : of(time)
      }),
      liveCount()
    );

  constructor() {

  }

  pause(): void {
    this.state = CreateSesionState.Pause;
    this.pause$.next(true);
    this.stopTime = new Date();
  }

  resume(): void {
    this.state = CreateSesionState.Walking;
    this.pause$.next(false);
    this.stopTime = null;
  }

  start() {
    this.resume();
    this.startTime = new Date();
  }

  stop(){
    this.state = CreateSesionState.Stop;
    if(!this.stopTime) {
      this.stopTime = new Date();
    }

    const walk = new Walk(this.startTime);
    walk.duration = (this.stopTime.getTime() - this.startTime.getTime()) / 1000;
    console.log("duration is ", walk.duration)
  }

}
