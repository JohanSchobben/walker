import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DurationIndicatorPipe } from './duration-indicator.pipe';



@NgModule({
  declarations: [DurationIndicatorPipe],
  imports: [
    CommonModule
  ],
  exports: [DurationIndicatorPipe]
})
export class SharedModule { }
