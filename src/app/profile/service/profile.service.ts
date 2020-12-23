import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { Profile } from '../model/profile.model'
import { ProfileDatabaseService } from './profile-database.service';
import { ThemeService } from './theme.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(
    private readonly profileDatabaseService: ProfileDatabaseService,
    private readonly themeService: ThemeService
  ) { }

  public getProfile(): Observable<Profile> {
    return this.profileDatabaseService.getProfile();
  }

  public saveProfile(profile: Profile): Observable<void> {
    return this.profileDatabaseService.updateProfile(profile);
  }

  public setTheme(theme: string): Observable<void> {
    return this.getProfile()
      .pipe(
        map(profile => {
          profile.theme = theme;
          return profile;
        }),
        tap(profile => {
          this.themeService.setTheme(profile.theme)
        }),
        switchMap(profile => {
          return this.saveProfile(profile)
        }),
      )
  }
}
