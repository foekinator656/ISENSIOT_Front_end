export class User {
  public UserID: number;
  public UserEmail: string;
  public password: string;
  public locations: number[];


  constructor(
              UserID: number,
              UserEmail: string,
              password: string,
              locations: number[]){
    this.UserID = UserID;
    this.UserEmail = UserEmail;
    this.password = password;
    this.locations = locations;
  }
}
