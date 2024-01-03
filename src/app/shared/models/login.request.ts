import {UserAuth} from "./user-auth.model";

export class LoginRequest {
  public email: string;
  public password: string;
  public checkShopUserAuth!: UserAuth;
  constructor(email: string, password: string,checkShopUserAuth: UserAuth) {
    this.email = email;
    this.password = password;
    this.checkShopUserAuth = checkShopUserAuth;
  }
}
