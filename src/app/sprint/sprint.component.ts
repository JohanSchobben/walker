import { Component, OnInit } from '@angular/core';
import { SprintService } from './services/sprint.service';
import { Router } from "@angular/router";
import { Sprint } from "./model/sprint.model";

@Component({
  selector: 'wlk-sprint',
  templateUrl: './sprint.component.html',
  styleUrls: ['./sprint.component.scss']
})
export class SprintComponent implements OnInit {
  sprint: Sprint;

  constructor(
      private readonly sprintService: SprintService,
      private readonly router: Router
    ) { }

  ngOnInit(): void {
    this.sprintService
      .getCurrentSprint()
      .subscribe(sprint => {
        if(!!sprint) {
          this.router.navigate(["new"]);
          return;
        }

        this.sprint = sprint;

      })
  }

}
