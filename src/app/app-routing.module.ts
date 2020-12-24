import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'sprint', loadChildren: () => import('./sprint/sprint.module').then(m => m.SprintModule) },
  { path: 'session', loadChildren: () => import('./session/session.module').then(m => m.SessionModule) },
  { path: 'profiel', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
