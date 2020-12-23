import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  renderer: Renderer2;

  constructor(rendererFactory: RendererFactory2){
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  public setTheme(theme: string): void {
    const oldStlyes = document.head.querySelector("[rel=stylesheet]");
    this.renderer.setAttribute(oldStlyes, 'href', `/${theme}.css`)
  }
}
