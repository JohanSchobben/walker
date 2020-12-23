import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { DatabaseService } from 'src/app/database.service';
import { Profile } from '../model/profile.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileDatabaseService {

  constructor(private readonly databaseService: DatabaseService) { }

  getProfile(): Observable<Profile> {
    return this.databaseService.read('profile')
      .pipe(
        map(([profile]) => Profile.fromObject(profile))
      );
  }

  updateProfile(profile: Profile): Observable<void> {
    return this.databaseService.deleteAll('profile')
      .pipe(
        switchMap(_ => this.databaseService.update("profile", profile.toObject()))
      )
  }
}
