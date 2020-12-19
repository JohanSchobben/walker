import { Walk } from "./walk.model"

export class Sprint {
  private _id: number;
  private _startDate: Date;
  private _amountOfWeeks: number;
  private _walks: Walk[];

  constructor(){
    this._walks = []
    this._amountOfWeeks = 2;
  }

  public static fromObject(obj: SprintObject): Sprint {
    const sprint = new Sprint();
    sprint.id = obj.id;
    sprint.startDate = new Date(obj.startDate);
    obj.walks.forEach(walk => {
      const w = new Walk(walk.startTime);
      w.duration = walk.duration;
      sprint.addWalk(w);
    });
    return sprint;
  }

  public get id(): number {
    return this._id;
  }

  public set id(value: number) {
    this._id = value;
  }

  public get amountOfWeeks(): number {
    return this._amountOfWeeks;
  }

  public set amountOfWeeks(value: number) {
    this._amountOfWeeks = value;
  }

  public get startDate(): Date {
    return this._startDate;
  }

  public set startDate(value: Date) {
    this._startDate = value;
  }

  public get endDate() : Date {
    const amountOfDays = this._amountOfWeeks * 7;
    const date = new Date(this._startDate);
    date.setDate(date.getDate() + amountOfDays);
    return date;
  }

  public get walks(): Walk[] {
    return this._walks;
  }

  public addWalk(walk: Walk): void {
    this._walks.push(walk);
  }

  public toObject(){
    return {
      id: this._id,
      startDate: this._startDate,
      walks: this._walks.map(w => w.toObject())
    };
  }
}


export type SprintObject = {
  id: number;
  startDate: Date;
  walks: {startTime: Date, duration: number}[]
}