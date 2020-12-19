import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SprintRoutingModule } from './sprint-routing.module';
import { SprintComponent } from './sprint.component';
import { MatCardModule } from '@angular/material/card';
import { SprintPointComponent } from './sprint-point/sprint-point.component';
import { CreateSprintComponent } from './create-sprint/create-sprint.component';
import { SprintFormComponent } from './sprint-form/sprint-form.component';

@NgModule({
  declarations: [SprintComponent, SprintPointComponent, CreateSprintComponent, SprintFormComponent],
  imports: [
    CommonModule,
    SprintRoutingModule,
    MatCardModule
  ]
})
export class SprintModule { }
