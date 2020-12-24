import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DurationIndicatorPipe } from './duration-indicator.pipe';
import { TimePipe } from './time.pipe';
import { DurationPipe } from './duration.pipe';



@NgModule({
  declarations: [
    DurationIndicatorPipe,
    TimePipe,
    DurationPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DurationIndicatorPipe,
    TimePipe,
    DurationPipe
  ]
})
export class SharedModule { }
