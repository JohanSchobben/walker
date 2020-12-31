import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(value: number): string {
    if(value < 60) {
      return Math.round(value).toString();
    } else if (value < 3600) {
      return `${Math.floor(value / 60)}:${Math.round(value) % 60}`;
    }
    return `${Math.floor(value / 3600)}:${value % 3600}:${value % 60}`;
  }

}
