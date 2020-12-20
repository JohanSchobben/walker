import { Injectable } from '@angular/core';
import { SprintDatabaseService } from './sprint-database.service';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Sprint } from '../model/sprint.model';

@Injectable({
  providedIn: 'root'
})
export class SprintService {

  constructor(private readonly sprintDatbaseService: SprintDatabaseService) { }

  getCurrentSprint(): Observable<Sprint>{
    return this.sprintDatbaseService
      .getSprints()
      .pipe(
        map((sprints: Sprint[]) => sprints.find(s => {
          const now = Date.now();
          return s.startDate.getTime() < now && s.endDate.getTime() > now;
        })),
        take(1)
      );
  }

  createSprint(): void {
    const sprint = new Sprint();
    sprint.startDate = new Date();
    this.sprintDatbaseService.createSprint(sprint).subscribe();
  }
}
