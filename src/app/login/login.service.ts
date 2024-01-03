import {Injectable} from '@angular/core';
import {LoginRequest} from "../shared/models/login.request";
import {User} from "../shared/models/user.model";
import {ApiService} from "../shared/api.service";
import {Router} from "@angular/router";
import {AccountService} from "./account/account.service";
import {UserAuth} from "../shared/models/user-auth.model";
import {AuthService} from "../shared/auth.service";
import {RegisterRequest} from "../shared/models/register-request.model";
// import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public errorMessage!: string;
  public userIsLoggedIn: boolean = false;
  public loginComplete: boolean = false;
  public welcomeString: string = "";
  delay = (ms: number) => new Promise(res => setTimeout(res, ms));

  constructor(private apiService: ApiService,
              public router: Router, public authService: AuthService,
              public accountService: AccountService) { }

  async loginUser(loginRequest: LoginRequest){
    if (!this.userIsLoggedIn){
      // this.http.post<UserAuth>(this.apiService.apiUrl+'shopUser/login',loginRequest)
      //   .subscribe(shopUserAuth => {
      //       this.authService.authenticatedUser = shopUserAuth;
      //       this.userIsLoggedIn = true;
      //     },error => {
      //       this.errorMessage = error;
      //     }
      //   );
      while (!this.userIsLoggedIn){
        await this.delay(10);
      }
      await this.accountService.getShopUserViewByEmail(this.authService.authenticatedUser.shopUserEmail);
      this.authService.authenticatedUserView =  this.accountService.accountViewUser;
      this.loginComplete = true;
      this.makeWelcomeString();
      this.errorMessage = "";
    }
  }

  makeWelcomeString() {
    if (this.userIsLoggedIn) {
        let UserFirstName = this.authService.authenticatedUserView.UserEmail;
        this.welcomeString = "Welkom User " + UserFirstName;
    }
  }

  logOutShopUser() {
    this.userIsLoggedIn = false;
    this.makeWelcomeString();
    this.errorMessage = "";
    this.loginGuestUser();
    this.loginComplete = false;
  }

  async registrationUser(registrationRequest: RegisterRequest) {
    let newShopUserSaved = false;
    if (!this.userIsLoggedIn) {
      // this.http.post<UserAuth>(this.apiService.apiUrl + 'shopUser/register', registrationRequest)
      //   .subscribe(shopUserAuth => {
      //     this.authService.authenticatedUser = shopUserAuth;
      //     this.userIsLoggedIn = true;
      //     newShopUserSaved = true;
      //     // registrated user is always a customer
      //     this.loginComplete = true;
      //   }, error => {
      //     this.errorMessage = error;
      //   }
      // );
      while (!newShopUserSaved){
        await this.delay(100);
      }
      await this.accountService.getShopUserViewByEmail(registrationRequest.shopUser.UserEmail);
      this.makeWelcomeString();
    }



    this.userIsLoggedIn = true;
    await this.router.navigate(['/', 'account']);
  }

  async loginGuestUser() {

    let newUserSaved = false;
    let guestEmail: string = "guest@ebiknl.nl";
    let guestPass: string = "123456";
    let user: User = new User(123,
      btoa(guestEmail), btoa(guestPass),
      [1990]);
    let userAuth: UserAuth = new UserAuth("",user.UserEmail);
    let loginRequest = new LoginRequest(btoa(guestEmail), btoa(guestPass), userAuth);
    // this.http.post<UserAuth>(this.apiService.apiUrl+'shopUser/login',loginRequest)
    //   .subscribe(shopUserAuth => {
    //       newUserSaved = true;
    //       this.authService.authenticatedUser = shopUserAuth;
    //       this.authService.authReceived = true;
    //     },error => {
    //       this.errorMessage = error;
    //     }
    //   );
    while (!newUserSaved){
      await this.delay(100);
    }
  }
}
