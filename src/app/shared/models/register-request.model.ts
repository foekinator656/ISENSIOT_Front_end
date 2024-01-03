import {User} from "./user.model";
import {UserAuth} from "./user-auth.model";

export class RegisterRequest{
  public shopUser!: User;
  public shopUserAuth!: UserAuth;


  constructor(shopUser: User, shopUserAuth: UserAuth) {
    this.shopUser = shopUser;
    this.shopUserAuth = shopUserAuth;
  }
}
