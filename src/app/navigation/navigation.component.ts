import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { OnlineService } from '../browser/online.service';

@Component({
  selector: 'wlk-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  offline$: Observable<boolean>

  constructor(private readonly onlineService: OnlineService) {}

  ngOnInit(){
    this.offline$ = this.onlineService.getOnlineState()
      .pipe(
        map(v => !v)
      )
  }
}
