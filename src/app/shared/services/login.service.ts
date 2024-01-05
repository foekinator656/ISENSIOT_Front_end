import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { BehaviorSubject, map, Observable, tap } from "rxjs";
import { User } from "../models/user.model";
import Cookies from "js-cookie";
import { Login } from "../models/login.model";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loginInformation: BehaviorSubject<User | undefined> =
    new BehaviorSubject<User | undefined>(undefined);
  public loggedInUser: Partial<User> = {};

  constructor(
    private readonly httpClient: HttpClient,
    private router: Router
  ) {}

  private handleAuthentication(auth: string): void {
    Cookies.set('token', auth, { expires: 1, path: '/', secure: true });
    // localStorage.setItem('userId', JSON.stringify(auth.user.id));
    // this.loginInformation.next(auth.user);
  }

  public login(login: Login): Observable<string> {
    return this.httpClient
      .post<string>('/api/v1/auth/login', login)
      .pipe(
        tap((auth: string): void => {
          this.handleAuthentication(auth);
          // this.loggedInUser = auth.user;
        }),
        map((loginInfo: string): string => loginInfo)
      );
  }

  public logout(): void {
    this.loginInformation.next(undefined);
    localStorage.removeItem('userId');
    Cookies.remove('token');
    void this.router.navigate(['']);
  }
}
