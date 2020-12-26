import { Injectable } from '@angular/core';
import { merge, Observable, Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OnlineService {

  constructor() { }

  getOnlineState(): Observable<boolean> {
    const online$ = new Observable((subscriber: Subscriber<boolean>) => {
      const listener = () => {
        subscriber.next(true);
      }
      window.addEventListener('online', listener);
      return () => window.removeEventListener('online', listener);
    });
    const offline$ = new Observable((subscriber: Subscriber<boolean>) => {
      const listener = () => {
        subscriber.next(false);
      }

      window.addEventListener('offline', listener);
      return () => window.removeEventListener('offline', listener);
    });


    return merge(offline$, online$);

  }
}
