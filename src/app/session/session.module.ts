import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SessionRoutingModule } from './session-routing.module';
import { SessionComponent } from './session.component';
import { CreateSessionComponent } from './create-session/create-session.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [SessionComponent, CreateSessionComponent],
  imports: [
    CommonModule,
    SessionRoutingModule,
    SharedModule
  ]
})
export class SessionModule { }
