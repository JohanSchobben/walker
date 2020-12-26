import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'wlk-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  form: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      times: new FormControl(10),
      meters: new FormControl(),
      time: new FormControl()
    });
  }

  onSubmit(): void {
    console.log(this.form.value);
  }
}
