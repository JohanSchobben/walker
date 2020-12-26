import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Goal } from '../model/goal.model';

@Component({
  selector: 'wlk-create-sprint',
  templateUrl: './create-sprint.component.html',
  styleUrls: ['./create-sprint.component.scss']
})
export class CreateSprintComponent {
  times = 0;
  minutes = 0;
  noGoal = false;

  constructor(private readonly dialogRef: MatDialogRef<CreateSprintComponent>) { }

  start(): void {
    if(!this.noGoal) {
      const goal = new Goal();
      goal.minutes = this.minutes;
      goal.times = this.times;
      this.dialogRef.close(goal);
    } else {
      this.dialogRef.close(true);
    }
  }

  cancel(): void {
    this.dialogRef.close(false);
  }

}
