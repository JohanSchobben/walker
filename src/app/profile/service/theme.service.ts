import { Injectable } from '@angular/core';
import { Theme } from '../model/type.model';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  public setTheme(theme: Theme): void {
    document.body.className = theme;
  }
}
