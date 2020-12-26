import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DurationIndicatorPipe } from './duration-indicator.pipe';
import { TimePipe } from './time.pipe';
import { DurationPipe } from './duration.pipe';
import { CounterComponent } from './counter/counter.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NoContextMenuDirective } from './no-context-menu.directive';



@NgModule({
  declarations: [
    DurationIndicatorPipe,
    TimePipe,
    DurationPipe,
    CounterComponent,
    NoContextMenuDirective,
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
  ]
})
export class SharedModule { }
