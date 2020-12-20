import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SprintRoutingModule } from './sprint-routing.module';
import { SprintComponent } from './sprint.component';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { SprintPointComponent } from './sprint-point/sprint-point.component';
import { CreateSprintComponent } from './create-sprint/create-sprint.component';
import { SprintFormComponent } from './sprint-form/sprint-form.component';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { SprintStatsComponent } from './sprint-stats/sprint-stats.component';
import { SharedModule } from '../shared/shared.module';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    SprintComponent,
    SprintPointComponent,
    CreateSprintComponent,
    SprintFormComponent,
    SprintStatsComponent
  ],
  imports: [
    CommonModule,
    SprintRoutingModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    SharedModule,
    MatIconModule
  ]
})
export class SprintModule { }
