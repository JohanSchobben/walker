import { Component, Input, OnInit } from '@angular/core';
import { Sprint } from '../model/sprint.model';

@Component({
  selector: 'wlk-goal-overview',
  templateUrl: './goal-overview.component.html',
  styleUrls: ['./goal-overview.component.scss']
})
export class GoalOverviewComponent {
  @Input() sprint: Sprint;
}
