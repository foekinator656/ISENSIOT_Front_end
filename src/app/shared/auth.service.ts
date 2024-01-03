import { Injectable } from '@angular/core';
import {User} from "./models/user.model";
import {UserAuth} from "./models/user-auth.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // this is the user that is currently logged in
  authenticatedUser! : UserAuth;
  authenticatedUserView! : User;
  authReceived: boolean = false;
  constructor() { }
}
