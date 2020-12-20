import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateSessionComponent } from './create-session/create-session.component';

import { SessionComponent } from './session.component';

const routes: Routes = [
  { path: '', component: SessionComponent },
  { path: 'new', component: CreateSessionComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SessionRoutingModule { }
