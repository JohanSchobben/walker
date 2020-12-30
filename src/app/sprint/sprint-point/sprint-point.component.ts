import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Sprint } from '../model/sprint.model';
import { SprintDayOverviewComponent } from '../sprint-day-overview/sprint-day-overview.component';

@Component({
  selector: 'wlk-sprint-point',
  templateUrl: './sprint-point.component.html',
  styleUrls: ['./sprint-point.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SprintPointComponent implements OnInit {
  @Input() sprint: Sprint;
  firstWeek: number[];
  secondWeek: number[];

  constructor(private readonly dialog: MatDialog){}

  ngOnInit(): void {
    this.firstWeek = Array(7).fill(0).map((x,i)=>i);
    this.secondWeek = Array(7).fill(0).map((x,i)=> i + 7);
  }

  getSprintDay(day: number): void {
    this.dialog.open(SprintDayOverviewComponent, {data: {sprint: this.sprint, day: day}})
  }
}
