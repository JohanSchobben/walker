import { Component, OnInit } from '@angular/core';
import { combineLatest, interval, BehaviorSubject, NEVER, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { liveCount } from 'src/app/utils/utils';

@Component({
  selector: 'wlk-create-session',
  templateUrl: './create-session.component.html',
  styleUrls: ['./create-session.component.scss']
})
export class CreateSessionComponent {

  timer$ = interval(1000);
  pause$ = new BehaviorSubject<boolean>(true);

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
    this.pause$.next(true);
  }

  resume(): void {
    this.pause$.next(false);
  }

}
