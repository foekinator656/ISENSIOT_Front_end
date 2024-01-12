import { Component } from '@angular/core';
import { LoginService } from "../../services/login.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

  constructor(
      private loginService: LoginService,
      private router: Router,
  ) { }

  protected loginAndOut(): void {
    if (this.loginService.isLoggedIn()) {
      this.loginService.logout();
    }

    this.router.navigate(['']);
  }

  public get isUserLoggedIn(): boolean {
    return this.loginService.isLoggedIn();
  }
}
