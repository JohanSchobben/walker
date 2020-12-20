import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DurationIndicatorPipe } from './duration-indicator.pipe';
import { TimePipe } from './time.pipe';



@NgModule({
  declarations: [
    DurationIndicatorPipe,
    TimePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DurationIndicatorPipe,
    TimePipe
  ]
})
export class SharedModule { }
