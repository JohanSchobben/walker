import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[wlkNoContextMenu]'
})
export class NoContextMenuDirective {

  @HostListener('contextmenu', ['$event'])
  private onContextMenu(event: Event): void {
    event.preventDefault();
  }

}
