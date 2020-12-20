import { Component, OnInit, Input } from '@angular/core';
import { Sprint } from '../model/sprint.model';

@Component({
  selector: 'wlk-sprint-stats',
  templateUrl: './sprint-stats.component.html',
  styleUrls: ['./sprint-stats.component.scss']
})
export class SprintStatsComponent implements OnInit {

  @Input() sprint: Sprint;

  constructor() { }

  ngOnInit(): void {
  }

}
