import { Observable } from "rxjs";

export const liveCount = <T>() => (source: Observable<T>): Observable<number>  => {
    let count = 1;
    return new Observable(subscriber => {
      source.subscribe(source => {
        subscriber.next(count++)
      })
    })

}
