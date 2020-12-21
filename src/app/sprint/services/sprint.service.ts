import { Injectable } from '@angular/core';
import { SprintDatabaseService } from './sprint-database.service';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Sprint } from '../model/sprint.model';
import { Walk } from '../model/walk.model';

@Injectable({
  providedIn: 'root'
})
export class SprintService {

  constructor(private readonly sprintDatbaseService: SprintDatabaseService) { }

  public getCurrentSprint(): Observable<Sprint>{
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

  public createSprint(): Observable<Sprint> {
    const sprint = new Sprint();
    sprint.startDate = new Date();
    return this.sprintDatbaseService.createSprint(sprint);
  }

  public updateSprint(sprint: Sprint): void {
    
  }
}
