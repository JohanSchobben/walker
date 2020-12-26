import { Marshallable } from "src/app/utils/marshallable.interface";

export class Goal implements Marshallable {
  private _times: number;
  private _minutes: number;

  public static fromObject(goalObject: GoalObject): Goal {
    const goal = new Goal();
    goal.times = goalObject.times;
    goal.minutes = goalObject.minutes;
    return goal;
  }

  public get times(): number {
    return this._times;
  }

  public set times(value: number) {
    this._times = value;
  }

  public get minutes(): number {
    return this._minutes;
  }

  public set minutes(value: number) {
    this._minutes = value;
  }

  public toObject(): GoalObject {
    return {
      times: this._times,
      minutes: this._minutes,
    }
  }
}

export type GoalObject = {
  times: number,
  minutes: number,
}
