import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Themeset } from '../model/themeset.model';
import { Theme } from '../model/type.model';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  public readonly themes : Themeset = {
    light: {
      primary: "#2196f3",
      secondary: ""
    },
    dark: {
      primary: "",
      secondary: ""
    }
  }

  constructor(private readonly meta: Meta){}

  public setTheme(theme: Theme): void {
    document.body.className = theme + '-theme';
    this.meta.updateTag({name: 'theme_color', content: this.themes[theme].primary});
  }
}
