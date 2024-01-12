import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { map, Observable, tap } from "rxjs";
import Cookies from "js-cookie";
import { Login } from "../models/login.model";
import { AuthResponseDTO } from "../models/dto/auth-response.dto";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private readonly http: HttpClient,
    private router: Router
  ) {}

  private handleAuthentication(auth: string): void {
    Cookies.set('token', auth, { expires: 1, path: '/', secure: true });
  }

  public login(login: Login): Observable<string> {
    return this.http.post<AuthResponseDTO>('/api/v1/auth/login', login).pipe(
        tap((auth: AuthResponseDTO): void => {
          this.handleAuthentication(auth.token);
        }),
        map((loginInfo: AuthResponseDTO): string => loginInfo.token)
      );
  }

  public logout(): void {
    Cookies.remove('token');
    void this.router.navigate(['']);
  }

  public getToken(): string | undefined {
    return Cookies.get('token');
  }

  public isLoggedIn(): boolean {
    return !!this.getToken();
  }
}
