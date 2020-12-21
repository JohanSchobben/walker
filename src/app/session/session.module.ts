import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SessionRoutingModule } from './session-routing.module';
import { SessionComponent } from './session.component';
import { CreateSessionComponent } from './create-session/create-session.component';
import { SharedModule } from '../shared/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [SessionComponent, CreateSessionComponent],
  imports: [
    CommonModule,
    SessionRoutingModule,
    SharedModule,
    MatButtonModule,
    MatDialogModule
  ]
})
export class SessionModule { }
