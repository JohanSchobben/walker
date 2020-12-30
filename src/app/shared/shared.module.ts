import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DurationIndicatorPipe } from './duration-indicator.pipe';
import { TimePipe } from './time.pipe';
import { DurationPipe } from './duration.pipe';
import { CounterComponent } from './counter/counter.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NoContextMenuDirective } from './no-context-menu.directive';
import { CountdownPipe } from './countdown.pipe';
import { PercentagePipe } from './percentage.pipe';



@NgModule({
  declarations: [
    DurationIndicatorPipe,
    TimePipe,
    DurationPipe,
    CounterComponent,
    NoContextMenuDirective,
    CountdownPipe,
    PercentagePipe,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    DurationIndicatorPipe,
    TimePipe,
    DurationPipe,
    CounterComponent,
    CountdownPipe,
    PercentagePipe,
  ]
})
export class SharedModule { }
