import { Component, Inject, Input, OnInit, Optional } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Sprint } from '../model/sprint.model';

@Component({
  selector: 'wlk-sprint-day-overview',
  templateUrl: './sprint-day-overview.component.html',
  styleUrls: ['./sprint-day-overview.component.scss']
})
export class SprintDayOverviewComponent implements OnInit {

  sprint: Sprint;
  day: number;

  constructor(@Optional() @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.day = this.data.day;
    this.sprint = this.data.sprint;
  }

}
