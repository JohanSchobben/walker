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
import { FormsModule } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { GoalOverviewComponent } from './goal-overview/goal-overview.component';
import { SprintDayOverviewComponent } from './sprint-day-overview/sprint-day-overview.component';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    SprintComponent,
    SprintPointComponent,
    CreateSprintComponent,
    SprintFormComponent,
    SprintStatsComponent,
    GoalOverviewComponent,
    SprintDayOverviewComponent
  ],
  imports: [
    CommonModule,
    SprintRoutingModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    SharedModule,
    MatIconModule,
    FormsModule,
    MatCheckboxModule,
    MatListModule
  ]
})
export class SprintModule { }
