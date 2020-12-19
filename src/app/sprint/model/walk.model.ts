export class Walk {
  private _duration: number;

  constructor(
    private _startTime: Date,
  ){}

  public get startTime(): Date {
    return this._startTime;
  }

  public set startTime(value: Date) {
    this._startTime = value;
  }

  public get duration(): number {
    return this._duration;
  }

  public set duration(value: number) {
    this._duration = value;
  }

  public get endTime(): Date {
    const date = new Date(this._startTime);
    date.setSeconds(date.getSeconds() + this._duration);
    return date;
  }

  public toObject(){
    return {
      startTime: this._startTime,
      duration: this._duration
    }
  }

}
