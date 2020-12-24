import { Observable } from "rxjs";

export const liveCount = <T>() => (source: Observable<T>): Observable<number>  => {
    let count = 1;
    return new Observable(subscriber => {
      source.subscribe(source => {
        subscriber.next(count++)
      })
    })

}

export const isSameDay = (dateA: Date, dateB: Date) =>
  dateA.getDate() === dateB.getDate() &&
  dateA.getMonth() === dateB.getMonth() &&
  dateA.getFullYear() === dateB.getFullYear();
