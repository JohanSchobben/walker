import { Component, Inject, Input, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Sprint } from '../model/sprint.model';
import { Walk } from '../model/walk.model';

@Component({
  selector: 'wlk-sprint-day-overview',
  templateUrl: './sprint-day-overview.component.html',
  styleUrls: ['./sprint-day-overview.component.scss']
})
export class SprintDayOverviewComponent implements OnInit {

  sprint: Sprint;
  day: number;
  modalDate: Date;
  walks: Walk[];

  constructor(
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
    private readonly dialogRef: MatDialogRef<SprintDayOverviewComponent>
  ) { }

  ngOnInit(): void {
    this.day = this.data.day;
    this.sprint = this.data.sprint;
    this.modalDate = new Date(this.data.sprint.startDate);
    this.modalDate.setDate(this.modalDate.getDate() + this.day);
    this.walks = this.sprint.getSprintByDay(this.day);
  }

  public close(): void {
    this.dialogRef.close();
  }

}
