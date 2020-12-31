import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'durationIndicator'
})
export class DurationIndicatorPipe implements PipeTransform {

  transform(value: number): string {
    if (value < 60) {
      return 'seconde';
    }
    if (value < 60 * 60) {
      return 'minuten';
    }
    return 'uur';
  }
}
