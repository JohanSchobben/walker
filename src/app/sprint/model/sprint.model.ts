import { Walk } from './walk.model';
import { isSameDay } from '../../utils/utils';
import { Marshallable } from 'src/app/utils/marshallable.interface';
import { Goal, GoalObject } from './goal.model';

export class Sprint implements Marshallable {
  private _id: string;
  private _startDate: Date;
  private _weeks: number;
  private _walks: Walk[];
  private _goal: Goal;

  constructor(){
    this._walks = [];
    this._weeks = 2;
  }

  public static fromObject(obj: SprintObject): Sprint {
    const sprint = new Sprint();
    sprint.id = obj.id;
    sprint.startDate = new Date(obj.startDate);
    sprint.weeks = obj.weeks;
    obj.walks.forEach(walk => {
      const w = new Walk(walk.startTime);
      w.duration = walk.duration;
      sprint.addWalk(w);
    });

    sprint.goal = Goal.fromObject(obj.goal);
    return sprint;
  }

  public get id(): string {
    return this._id;
  }

  public set id(value: string) {
    this._id = value;
  }

  public get weeks(): number {
    return this._weeks;
  }

  public set weeks(value: number) {
    this._weeks = value;
  }

  public get startDate(): Date {
    return this._startDate;
  }

  public set startDate(value: Date) {
    this._startDate = value;
  }

  public get endDate(): Date {
    const amountOfDays = this._weeks * 7;
    const date = new Date(this._startDate);
    date.setDate(date.getDate() + amountOfDays);
    return date;
  }

  public get walks(): Walk[] {
    return this._walks;
  }

  public set goal(goal: Goal) {
    this._goal = goal;
  }

  public addWalk(walk: Walk): void {
    this._walks.push(walk);
  }

  public get duration(): number {
    return this._walks.map(w => w.duration)
      .reduce((prev, curr) => prev + curr, 0);
  }

  public get goal(): Goal {
    return this._goal;
  }

  public get goalAchieved(): boolean {
    const timesWalked = this.walks.length;
    const minutesWalked = this.walks.reduce((previous: number, current: Walk) => previous + current.duration, 0);

    return timesWalked >= this._goal.times && minutesWalked >= this._goal.minutes;
  }

  public getSprintByDay(dayIndex: number): Walk[] {
    const date = new Date(this.startDate);
    date.setDate(date.getDate() + dayIndex);
    return this.walks.filter(walk => isSameDay(date, walk.startTime));
  }

  public toObject(): SprintObject {
    return {
      id: this._id,
      startDate: this._startDate,
      weeks: this._weeks,
      walks: this._walks.map(w => w.toObject()),
      goal: this._goal?.toObject()
    };
  }
}


export type SprintObject = {
  id: string;
  startDate: Date;
  weeks: number;
  walks: {startTime: Date, duration: number}[]
  goal: GoalObject;
};
