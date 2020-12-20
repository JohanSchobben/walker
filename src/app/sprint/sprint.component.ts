import { Component, OnInit } from '@angular/core';
import { SprintService } from './services/sprint.service';
import { Router } from '@angular/router';
import { Sprint } from './model/sprint.model';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CreateSprintComponent } from './create-sprint/create-sprint.component';

@Component({
  selector: 'wlk-sprint',
  templateUrl: './sprint.component.html',
  styleUrls: ['./sprint.component.scss']
})
export class SprintComponent implements OnInit {
  sprint: Sprint;
  dialogRef: MatDialogRef<CreateSprintComponent>;

  constructor(
      private readonly sprintService: SprintService,
      private readonly router: Router,
      private readonly dialog: MatDialog
    ) { }

  ngOnInit(): void {
    this.sprintService
      .getCurrentSprint()
      .subscribe(sprint => {
        if (!sprint) {
          this.dialogRef = this.dialog.open(CreateSprintComponent, {disableClose: true});
          this.registerDialogClose();
        }
        this.sprint = sprint;
      });
  }

  registerDialogClose(): void {
    this.dialogRef.afterClosed()
      .subscribe((result: boolean) => {
        if (result) {
          this.createSprint();
        } else {
          this.router.navigate(['..']);
        }
      });
  }

  private createSprint(): void {
    this.sprintService.createSprint()
      .subscribe(sprint => {
        this.sprint = sprint;
      })
  }

}
