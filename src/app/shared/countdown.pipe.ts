import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countdown'
})
export class CountdownPipe implements PipeTransform {

  transform(value: Date): string {
    const now = new Date();
    const endDate = new Date(value);
    endDate.setHours(23, 59, 59, 99)

    const seconds = (value.getTime() - now.getTime()) / 1000;
    let timeUnit: string;
    let timeSize: number;
    if(seconds > 86_400) {
      timeUnit = 'dagen';
      timeSize = Math.round(seconds / 86_400);
    } else if (seconds > 3600) {
      timeUnit = 'uur';
      timeSize = Math.round(seconds / 3600);
    } else {
      timeUnit = 'minuten';
      timeSize = Math.round(seconds / 60);
    }
    return `${timeSize} ${timeUnit}`
  }

}
