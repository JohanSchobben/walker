import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { ProfileService } from '../profile/service/profile.service';
import { ThemeService } from '../profile/service/theme.service';

@Injectable({
  providedIn: 'root'
})
export class AppInitService {

  constructor(
    private readonly profileService: ProfileService,
    private readonly themeService: ThemeService
  ) { }

  public init(): Promise<void> {
    return this.profileService.getProfile()
      .pipe(
        tap(profile => this.themeService.setTheme(profile.theme)),
        map(_ => undefined)
      ).toPromise()

  }
}
