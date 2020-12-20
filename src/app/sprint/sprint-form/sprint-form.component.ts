import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wlk-sprint-form',
  templateUrl: './sprint-form.component.html',
  styleUrls: ['./sprint-form.component.scss']
})
export class SprintFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void{
    console.log('submit');
  }

}
