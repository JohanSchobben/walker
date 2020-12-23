import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { observable } from 'rxjs';
import { Profile } from './model/profile.model';
import { ProfileService } from './service/profile.service';

@Component({
  selector: 'wlk-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  form: FormGroup;
  profile: Profile;

  constructor(
    private readonly profileService: ProfileService,
    private readonly snackbar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.profileService.getProfile()
      .subscribe(profile => {
        this.form = new FormGroup({
          firstName: new FormControl(profile?.firstName),
          middleName: new FormControl(profile?.middleName),
          lastName: new FormControl(profile?.lastName),
          birthDay: new FormControl(profile?.birthDay)
        });

        this.profile = profile;
      });
  }

  onProfileSubmit(){
    this.profile = Profile.fromObject({
      ...this.form.value,
      theme: this.profile?.theme
    });

    this.profileService.saveProfile(this.profile)
      .subscribe(_ => {
        this.snackbar.open('Profiel is opgeslagen')
      })
  }

  onThemToggle(value: boolean){
    this.profile.theme = value ? 'dark': 'light';

  }

}
