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


@NgModule({
  declarations: [SprintComponent, SprintPointComponent, CreateSprintComponent, SprintFormComponent],
  imports: [
    CommonModule,
    SprintRoutingModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class SprintModule { }
