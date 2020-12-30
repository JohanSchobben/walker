import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'percentage'
})
export class PercentagePipe implements PipeTransform {
  transform(value: number): string {
    const clampedValue = Math.max(0, Math.min(value, 100))
    return `${Math.round(clampedValue)}%`;
  }
}
