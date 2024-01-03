import {User} from "./user.model";

export class UserAuth {
  public jwt: string;
  public shopUserEmail: string;

  constructor(jwt: string, shopUserEmail: string) {
    this.jwt = jwt;
    this.shopUserEmail = shopUserEmail;
  }
}
