import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Sprint } from '../model/sprint.model';

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

  ngOnInit(): void {
    this.firstWeek = Array(7).fill(0).map((x,i)=>i);
    this.secondWeek = Array(7).fill(0).map((x,i)=> i + 7);
  }
}
