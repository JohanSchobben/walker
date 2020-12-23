export class Profile {
  private _firstName: string;
  private _middleName: string;
  private _lastName: string;
  private _birthDay: Date;
  private _theme: string;

  static fromObject(obj: ProfileObject): Profile {
    const profile = new Profile();
    profile.firstName = obj?.firstName;
    profile.middleName = obj?.middleName;
    profile.lastName = obj?.lastName;
    profile.birthDay = obj?.birthDay;
    profile.theme = obj?.theme;

    return profile;
  }

  public get firstName(): string {
    return this._firstName;
  }
  public set firstName(value: string) {
    this._firstName = value;
  }

  public get middleName(): string {
    return this._middleName;
  }
  public set middleName(value: string) {
    this._middleName = value;
  }

  public get lastName(): string {
    return this._lastName;
  }
  public set lastName(value: string) {
    this._lastName = value;
  }

  public get birthDay(): Date {
    return this._birthDay;
  }
  public set birthDay(value: Date) {
    this._birthDay = value;
  }

  public get theme(): string {
    return this._theme;
  }

  public set theme(value: string) {
    this._theme = value;
  }

  public toObject(): ProfileObject {
    return {
      firstName: this._firstName,
      middleName: this._middleName,
      lastName: this._lastName,
      birthDay: this._birthDay,
      theme: this._theme
    }
  }

}


type ProfileObject = {
  firstName: string;
  middleName: string;
  lastName: string;
  birthDay: Date;
  theme: string;
}
