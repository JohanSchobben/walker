import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { DatabaseService } from 'src/app/database.service';
import { Sprint, SprintObject } from '../model/sprint.model';

@Injectable({
  providedIn: 'root'
})
export class SprintDatabaseService {

  constructor(private readonly databaseService: DatabaseService) { }

  public getSprints(): Observable<Sprint[]>{
    return this.databaseService.read('sprints')
      .pipe(
        map((obj: SprintObject[]) => obj.map((so: SprintObject) => Sprint.fromObject(so)))
      );
  }

  public createSprint(sprint: Sprint): Observable<Sprint> {
    return this.databaseService.create('sprints', sprint.toObject())
      .pipe(
        map((id: number) =>{
          sprint.id = id;
          return sprint;
        })
      );
  }
}
