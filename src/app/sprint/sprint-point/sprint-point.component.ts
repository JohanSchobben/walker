import { Component, OnInit, Input } from '@angular/core';
import { Walk } from '../model/walk.model';

@Component({
  selector: 'wlk-sprint-point',
  templateUrl: './sprint-point.component.html',
  styleUrls: ['./sprint-point.component.scss']
})
export class SprintPointComponent {
  @Input() walk: Walk;
}
