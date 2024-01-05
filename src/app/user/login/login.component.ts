import { Component } from '@angular/core';
import { LoginService } from "../../shared/services/login.service";
import { Router } from "@angular/router";
import { Login } from "../../shared/models/login.model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = 'apppeltaart@gmail.com';
  password: string = 'appeltaart';

  constructor(
    private loginService: LoginService,
    private router: Router,
  ) { }

  public login() {
    const login: Login = {
      email: this.username,
      password: this.password
    }

    this.loginService.login(login).subscribe(
      (response) => {
        if (response) {
          console.log(response);
        }
      }
    );
  }

  public logout () {
    this.loginService.logout();
  }
}
