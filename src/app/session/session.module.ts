import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SessionRoutingModule } from './session-routing.module';
import { SessionComponent } from './session.component';
import { CreateSessionComponent } from './create-session/create-session.component';


@NgModule({
  declarations: [SessionComponent, CreateSessionComponent],
  imports: [
    CommonModule,
    SessionRoutingModule
  ]
})
export class SessionModule { }
